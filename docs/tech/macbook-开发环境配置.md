---
title: macbook 开发环境配置
date: 2020-07-29 19:01:30
tags:
---

# Mac 电脑初始化

+ [Mac 终端 oh-my-zsh 配置](https://www.jianshu.com/p/64344229778a)
  + [theme: pure](https://github.com/sindresorhus/pure)
+ [vscode](https://code.visualstudio.com/docs/?dv=osx)
  + [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) 自动同步 vscode 的插件等设置。



## Homebrew替代镜像源

```
# 进入 homebrew 根目录
cd "$(brew --repo)"
# 替换 brew 远程库
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
# 替换 home-brew 远程库
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
# 更新 brew
brew update
```

#### 国内源

+ 中科大: [https://mirrors.ustc.edu.cn/brew.git](https://links.jianshu.com/go?to=https%3A%2F%2Fmirrors.ustc.edu.cn%2Fbrew.git)
+ 清华大学: [https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/](https://links.jianshu.com/go?to=https%3A%2F%2Fmirrors.tuna.tsinghua.edu.cn%2Fhelp%2Fhomebrew%2F)

## 管理多个 SSH Key

### 生成并添加第一个ssh key

第一次使用ssh生成key，默认会在用户~（根目录）下生成 id_rsa, id_rsa.pub 2个文件；所以需要添加多个ssh key时也会生成对应的私钥和公钥。

```bash
$ ssh-keygen -t rsa -C "youremail@yourcompany.com"
```

在Git Bash中执行这条命令一路回车，会在 ~/.ssh/ 目录下生成 id_rsa 和 id_rsa.pub 两个文件，用文本编辑器将 id_rsa_pub 中的内容复制一下粘贴到github(gitlab)上。

### 生成并添加第二个ssh key

```bash
$ ssh-keygen -t rsa -C "youremail@gmail.com"
```

注意不要一路回车，要给这个文件起一个名字， 比如叫 id_rsa_github, 所以相应的也会生成一个 id_rsa_github.pub 文件。

![img](https://images0.cnblogs.com/blog/282019/201409/091222268402433)

目录结构如下：
![img](https://images0.cnblogs.com/blog/282019/201409/091222046992263)

## 添加私钥

```bash
$ ssh-add ~/.ssh/id_rsa
$ ssh-add ~/.ssh/id_rsa_github
```

如果执行ssh-add时提示"Could not open a connection to your authentication agent"，可以现执行命令：

```bash
$ ssh-agent bash
```

然后再运行ssh-add命令。

```bash
# 可以通过 ssh-add -l 来确私钥列表
$ ssh-add -l

# 可以通过 ssh-add -D 来清空私钥列表
$ ssh-add -D
```

## 修改配置文件

在 ~/.ssh 目录下新建一个config文件

```bash
touch config
```

添加内容：

```bash
# gitlab
Host gitlab.com
    HostName gitlab.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa

# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_github
```

## 测试

```bash
$ ssh -T git@github.com
```

输出
Hi user! You've successfully authenticated, but GitHub does not provide shell access. 就表示成功的连上github了

## NPM 镜像的坑

```
npm i -g nrm
nrm use taobao

npm config set disturl https://npm.taobao.org/mirrors/node/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set puppeteer_download_host https://npm.taobao.org/mirrors/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set sentrycli_cdnurl https://npm.taobao.org/mirrors/sentry-cli/
npm config set sqlite3_binary_site https://npm.taobao.org/mirrors/sqlite3/
npm config set python_mirror https://npm.taobao.org/mirrors/python/
```
