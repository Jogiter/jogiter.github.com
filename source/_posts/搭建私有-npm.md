---
title: 搭建私有 npm
date: 2019-06-17 17:44:26
tags:
---

# 搭建私有 npm

目前有以下两种推荐方案：

## 使用 `verdaccio`

[verdaccio](https://github.com/verdaccio/verdaccio): A lightweight private npm proxy registry

### Install

在服务器上全局安装 `verdaccio`

```sh
$ npm install -g verdaccio
$ verdaccio
warn --- config file - /home/.config/verdaccio/config.yaml 
warn --- http address - http://localhost:4873/ - verdaccio/3.0.0
```

### Nginx setting

为了不和其他的 `ginx`配置冲突，我们将 `verdaccio` 的默认端口指向服务器的子目录 `/verdaccio/` 下

```sh
server {
  listen       80;
  server_name  concierge11.klook.io;
  
  location ~ ^/verdaccio/(.*)$ {
    proxy_pass http://127.0.0.1:4873/$1;
    proxy_set_header Host            $host:$server_port;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

同时我们还需要修改 `verdaccio` 的配置文件 `~/.config/verdaccio/config.yaml`，更多[配置参考]([https://verdaccio.org/docs/en/configuration](https://verdaccio.org/docs/en/configuration))

```config
url_prefix:  /verdaccio/
```

- `~/.config/verdaccio/storage` ：储存发布和缓存的包，会缓存下载的包
- `~/.config/verdaccio/htpasswd` ：储存注册用户的账号名和密码

### Keeping verdaccio running forever

You can use node package called ['forever'](https://github.com/nodejitsu/forever) to keep `verdaccio` running all the time.

First install `forever` globally:

```bash
$ npm install -g forever
```

Make sure you've run `verdaccio` at least once to generate the config file and write down the created admin user. You can then use the following command to start `verdaccio`:

```bash
$ forever start `which verdaccio`
```

You can check the documentation for more information on how to use forever.

#### Surviving server restarts

You can use `crontab` and `forever` together to start `verdaccio` after a server reboot. When you're logged in as the `verdaccio` user do the following:

```bash
$ crontab -e
```

This might ask you to choose an editor. Pick your favorite and proceed. Add the following entry to the file:

    @reboot /usr/bin/forever start /usr/lib/node_modules/verdaccio/bin/verdaccio

The locations may vary depending on your server setup. If you want to know where your files are you can use the 'which' command:

```bash
$ which forever
$ which verdaccio
```

### 本地配置 registry

推荐安装 [nrm]([https://github.com/Pana/nrm](https://github.com/Pana/nrm)) 来管理 registry

```bash
$ npm install -g nrm
$ nrm add knpm http://concierge11.klook.io/verdaccio/
$ nrm use knpm
```

### 发布和安装私有包

```bash
$ npm publish @klook/util
$ npm install @vue/cli
```

* * *

## 使用 `cnpmjs.org`

[cnpmjs.org](https://github.com/cnpm/cnpmjs.org): Private npm registry and web for Enterprise, base on [koa](http://koajs.com/), MySQL and [Simple Store Service](https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide).

### Dependencies

- Node >= 6.11.3
- MySQL >= 0.5.0, include `mysqld` and `mysql` cli
- ~~[Simple File Store Service, like qiniu, aliyun-oss, tfs, upyun]([https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide](https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide))~~

### Install

1. Get the Code

```source-shell
# clone from github
$ git clone git://github.com/cnpm/cnpmjs.org.git $HOME/cnpmjs.org
$ cd $HOME/cnpmjs.org
```

Install `cnpmjs.org` and `cnpm` from npm

```sh
$ npm install -g --build-from-source cnpmjs.org cnpm sqlite3
```

If you're in China, maybe you should use China mirror

```source-shell
$ npm install -g --build-from-source \
  --registry=https://registry.npm.taobao.org \
  --disturl=https://npm.taobao.org/mirrors/node \
  cnpmjs.org cnpm sqlite3
```

2. `mysql` 数据库操作：

a. 创建数据库 `klook-npm`：

```sql
create database klook-npm
```

b. 创建表：[Get all the sqls here](https://github.com/cnpm/cnpmjs.org/blob/master/docs/db.sql)

> [mysql 8.0 创建 table 时报错:【MYSQL】MYSQL报错解决方法： Warning: (3719, "'utf8' is currently an alias for the character set UTF8MB3, but will be an alias for UTF8M B4 in a future release."](http://www.ifepoland.com/lilip/p/10109557.html)

[点击下载修复版 SQL]\(<https://img.jogiter.cn//tech/db%28mysql8.0%29.sql>

3. Edit Your Own Config File

```sh
$ cd $HOME/cnpmjs.org
$ vim config/index.js
```

```js
module.exports = {
  debug: false,
  enableCluster: true, // enable cluster mode
  enablePrivate: true, // enable private mode, only admin can publish, other use just can sync package from source npm
  database: {
      db: 'klook-npm',
      username: 'root',
      password: 'sees7&chanting',

      // the sql dialect of the database
      // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
      dialect: 'mysql',

      // custom host; default: 127.0.0.1
      host: 'l-testing-contains-main-56.cbw4mscvt9bw.ap-southeast-1.rds.amazonaws.com',

      // custom port; default: 3306
      port: 3306,

      ssl: {
          ca: path.join(dataDir, 'certs/mysql-test.pem')
      },

      // use pooling in order to reduce db connection overload and to increase speed
      // currently only for mysql and postgresql (since v1.5.0)
      pool: {
        maxConnections: 10,
        minConnections: 0,
        maxIdleTime: 30000
      },

      dialectOptions: {
        trace: true,
      },

      // the storage engine for 'sqlite'
      // default store into ~/.cnpmjs.org/data.sqlite
      storage: path.join(dataDir, 'data.sqlite'),

      logging: !!process.env.SQL_DEBUG,
  },
  admins: {
    admin: 'admin@cnpmjs.org',
  },
  // registry scopes, if don't set, means do not support scopes
  scopes: [ '@knpm', '@knpmtest', '@knpm-test' ],
  // 'none': 永不同步，只管理私有用户上传的包，其它源包会直接从源站获取
  // 'exist': 定时同步已经存在于数据库的包
  // 'all': 定时同步所有源站的
  syncModel: 'none'// 'none', 'all', 'exist'
};
```

注意这里的 `mysql` 的连接使用测试环境的 `mysql`，采用 `ssl` 的方式进行连接，因此还需要添加 `ssl` 配置。

> 详细配置参考[配置字段参考](https://medoc.000webhostapp.com/2018/04/19/npm%E7%A7%81%E5%BA%93%E6%90%AD%E5%BB%BA-cnpm-js/)

4. 添加 `ssl` 文件，同时将 `key` 内容拷贝到 `~/.cnpmjs.org/certs/mysql-test.pem` 文件。具体的 `key` 请咨询测试同事。

```sh
$ cd ~/.cnpmjs.org/
$ mkdir certs
$ touch mysql-test.pem
```

- `~/.cnpmjs.org/nfs` ：默认储存发布和缓存的包，可设置不缓存下载的包。具体请参考配置参考。

5. 开启服务

```sh
$ cd ~/cnpmjs.org/
$ npm run start
```

`registry`：<http://localhost:7001>
`web`：<http://localhost:7002>

配置 `Nginx`

```sh
$ cd /etc/nginx/
$ vim nginx.conf
```

`Nginx` 设置

    server {
      listen       80;
      server_name  concierge11.klook.io;
      
      location ~ ^/knpm/(.*)$ {
        proxy_pass http://127.0.0.1:7001/$1;
        proxy_set_header Host            $host:$server_port;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
      }
      location / {
        proxy_pass http://127.0.0.1:7002/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host  $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
      }
    }

6. 本地环境设置 `registry`

```sh
$ cnpm set registry http://concierge11.klook.io/knpm/
```

发布和安装包

```sh
$ cnpm login
$ cnpm publish
$ cnpm install
```

7. 个性化配置 `npm` ，详细请阅读项目源码~

```sh
$ cd ~/cnpmjs.org/
```

## difference

- verdaccio
  - 安装简单，不需要数据库支持
  - 设置 `registry` 后通过 `npm` 来进行包管理
  - 可配置性低；服务器会储存所有的包，包括发布的私语包和下载的包
  - 定制化页面需要修改全局安装的源码
- cnpmjs.org
  - 安装复杂，需要安装 `mysql`
  - 设置 `registry` 后通过 `cnpm` 来进行包管理
  - 高度可配置；支持服务器只存储发布的私有包
  - 定制化页面需要修改部署安装的源码

## Readings

- [verdaccio 安装](https://verdaccio.org/docs/en/installation)
- [Deploy a private npm registry in 5 minutes](https://github.com/cnpm/cnpmjs.org/wiki/Deploy-a-private-npm-registry-in-5-minutes)
- [在5分钟内搭建企业内部私有npm仓库](https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md)
