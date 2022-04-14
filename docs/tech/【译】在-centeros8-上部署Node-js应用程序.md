---
title: 【译】：在 centeros8 上部署Node.js应用程序
tags:
  - deploment
---

# {{ $frontmatter.title }}

[[toc]]

## install Git

```sh
# 使用DNF程序包管理工具来更新您的本地程序包索引
$ sudo dnf update -y

# 安装 Git
$ sudo dnf install git -y

# 减产是否安装成功
$ git --version
# 输出
# git version 2.18.2
```

## install Nodejs

**使用 dnf 安装**

```sh
$ sudo dnf module list nodejs
# Output
#   Name                     Stream                   Profiles                                                Summary
#   nodejs                   10 [d]                   common [d], development, minimal, s2i                   Javascript runtime
#   nodejs                   12                       common, development, minimal, s2i
# [d] 表示是默认是 Nodejs 10。

# 如果您想安装 Node.js 12，请立即切换模块流
$ sudo dnf module enable nodejs:12

# 安装 nodejs
$ sudo dnf install nodejs

# 检查安装是否成功
$ node --version
# Output
# v12.13.1
```

**使用 nvm 安装**

```sh
# 访问 nvm 官方链接安装最新版
# https://github.com/nvm-sh/nvm#install--update-script
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# 获取.bash_profile文件
$ source ~/.bash_profile

# NVM哪些版本的Node可用
$ nvm list-remote
# ...
# v12.13.0   (LTS: Erbium)
# v12.13.1   (LTS: Erbium)
# v12.14.0   (LTS: Erbium)
# ...

# 安装指定版本的 nodejs
$ nvm install v13.6.0

# 检查安装是否成功
$ node --version
# Output
# v13.6.0
```

## install Nginx

1. 安装 Nginx

```sh
# Install
$ sudo dnf install nginx
# enable
$ sudo systemctl enable nginx
# start
$ sudo systemctl start nginx
```

2. 调整防火墙规则

```sh
# 永久启用端口80上的HTTP连接
$ sudo firewall-cmd --permanent --add-service=http

# 验证是否正确添加了http防火墙服务
$ sudo firewall-cmd --permanent --list-all
# Output
# public
#   target: default
#   icmp-block-inversion: no
#   interfaces:
#   sources:
#   services: cockpit dhcpv6-client http ssh
#   ports:
#   protocols:
#   masquerade: no
#   forward-ports:
#   source-ports:
#   icmp-blocks:
#   rich rules:

# 重启防火墙服务
$ sudo firewall-cmd --reload
```

3. 检查 Web 服务器

```sh
# 查询服务器的公共IP地址
$ ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
# 172.18.4.110
# fe80::216:3eff:fe14:85b2

# 查看域名是否访问
$ curl -4 icanhazip.com
```

4. 管理 Nginx 流程

```sh
# 停止服务
$ sudo systemctl stop nginx
# 启用服务
$ sudo systemctl start nginx
# 重启服务
$ sudo systemctl restart nginx
# 重新加载配置更改
$ sudo systemctl reload nginx
# 默认情况下，Nginx配置为在服务器启动时自动启动。如果这不是您想要的，则可以通过键入以下内容来禁用此行为
$ sudo systemctl disable nginx
# 要重新启用服务，并使Nginx再次在启动时启动
$ sudo systemctl enable nginx
```

> Nginx 开启 gzip & cache-control 等等配置请参考官方文档

## Installing and Using PM2

```sh
# install PM2:
$ sudo npm install pm2@latest -g

#  run your application, hello.js, in the background
$ pm2 start hello.js
# Output
# ┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────────────┬──────────┐
# │ App name │ id │ mode │ pid   │ status │ restart │ uptime │ memory      │ watching │
# ├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────────────┼──────────┤
# │ hello    │ 0  │ fork │ 30099 │ online │ 0       │ 0s     │ 14.227 MB   │ disabled │
# └──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────────────┴──────────┘

# startup子命令生成并配置启动脚本，以在服务器启动时启动PM2及其托管进程
$ sudo pm2 startup systemd
# Output
# [PM2] Generating system init script in /etc/systemd/system/pm2.service
# [PM2] Making script booting at startup...
# [PM2] -systemd- Using the command:
      # su root -c "pm2 dump && pm2 kill" && su root -c "systemctl daemon-reload && systemctl enable pm2 && systemctl start pm2"
# [PM2] Dumping processes
# [PM2] Stopping PM2...
# [PM2] All processes have been stopped and deleted
# [PM2] PM2 stopped
# [PM2] Done.

# 为了确保PM2知道要在启动时启动的应用程序，我们需要保存当前进程列表。要保存列表
$ pm2 save
# Output
# [PM2] Saving current process list...
# [PM2] Successfully saved in /home/deployer/.pm2/dump.pm2

$ pm2 stop example
$ pm2 restart example
# 查看所有应用程序
$ pm2 list
$ pm2 info example
# 显示应用程序状态，CPU和内存使用情况
$ pm2 monit
```

## 参考链接

- [https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8)
- [https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8)
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7)
