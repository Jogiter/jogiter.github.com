---
title: git 教程
tags:
  - git
categories:
  - tool
---

# {{ $frontmatter.title }}

[[toc]]

## 起步

### 关于版本控制

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

**本地版本控制系统**（通过复制的方式来保存不同版本，或许会改名加上备份时间以示区别）

优点：操作简单
缺点：特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。

**集中化的版本控制系统**（单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。）

优点：每个人都可以在一定程度上看到项目中的其他人正在做些什么。 而管理员也可以轻松掌控每个开发者的权限，并且管理一个 CVCS 要远比在各个客户端上维护本地数据库来得轻松容易。
缺点：中央服务器的单点故障。 如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。

**分布式版本控制系统**（客户端把代码仓库完整地镜像下来。）

优点：任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。
缺点：有一定的学习成本

### git 简史

Linux 内核开源项目有着为数众广的参与者。 绝大多数的 Linux 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（1991－2002 年间）。 到 2002 年，整个项目组开始启用一个专有的分布式版本控制系统 BitKeeper 来管理和维护代码。

到了 2005 年，开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了 Linux 内核社区免费使用 BitKeeper 的权力。 这就迫使 Linux 开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 他们对新的系统制订了若干目标：

- 速度
- 简单的设计
- 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
- 完全分布式
- 有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）

自诞生于 2005 年以来，Git 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。 它的速度飞快，极其适合管理大项目，有着令人难以置信的非线性分支管理系统

### 命令行

Git 有多种使用方式。 你可以使用原生的命令行模式，也可以使用 GUI 模式，这些 GUI 软件也能提供多种功能。 在本书中，我们将使用命令行模式。 这是因为首先，**只有在命令行模式下你才能执行 Git 的 所有 命令**，而大多数的 GUI 软件只实现了 Git 所有功能的一个子集以降低操作难度。 如果你学会了在命令行下如何操作，那么你在操作 GUI 软件时应该也不会遇到什么困难，但是，反之则不成立。 此外，由于每个人的想法与侧重点不同，不同的人常常会安装不同的 GUI 软件，但 所有 人一定会有命令行工具。。

### 安装 git

- [下载 git OSX 版](http://git-scm.com/download/mac)
- [下载 git Windows 版](http://git-for-windows.github.io/)
- [下载 git Linux 版](http://book.git-scm.com/2_installing_git.html)

### 工作区，暂存区，本地仓库，远程仓库

![git work flow](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png)

## 常见命令

### 创建新仓库

github 创建新项目时的 Quick setup：

1.创建一个新的仓库

```
echo "# Hello World" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:userName/repo.git
git push -u origin master
```

2.把本地仓库推送到远程仓库

```
git remote add origin git@github.com:userName/repo.git
git push -u origin master # -u, --set-upstream    set upstream for git pull/status
```

### 配置.gitconfig

Git 的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

```
# 显示当前的Git配置
git config --list

# 编辑Git配置文件
git config -e [--global]

# 设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

修改全局配置

```
vim ~/.gitconfig # 打开`.gitconfig`

# 修改 .gitconfig 文件
[alias]
	c = commit -am
	fpush = push --force
	s = status
	sclone = clone --depth=1
	amend = commit --amend --all
	undocommit = reset HEAD~
	hreset = reset --hard
	co = checkout
	df = diff --color --color-words --abbrev
	lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --

	# Show the diff between the latest commit and the current state
	d = !"git diff-index --quiet HEAD -- || clear; git --no-pager diff --patch-with-stat"

	reup = rebase-update # depot_tools specific
	git = !exec git
```

> 更多配置参考 [.gitconfig](https://github.com/paulirish/dotfiles/blob/master/.gitconfig)

### 配置 ssh-key

```
# 设置提交代码时的用户信息
git config --global user.name "[name]"
git config --global user.email "[email address]"

# 生成 ssh-key
ssh-keygen -t rsa -C "email address"
# 按3个回车，密码为空
# 查看ssh密钥
cd ~/.ssh && ll
# id_rsa  id_rsa.pub  known_hosts
```

用编辑器打开`id_rsa.pub`，将其复制到 github / gitlab 中

```
# 测试 ssh-key 是否添加成功
ssh git@github.com
# Hi xxx! You've successfully authenticated
```

### 配置.gitignore

前端项目常见配置

```
.DS_Store
Desktop.ini
._*
Thumbs.db
*.log
node_modules/
bower_components/
.deploy*/
```

> 更多配置参考 [.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) & [gitalias](https://github.com/GitAlias/gitalias/blob/main/gitalias.txt)

### 创建特性分支

```
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all

# 删除本地分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git push origin :[branch-name]
$ git branch -dr [remote/branch]
```

### 特性分支开发

```
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 带交互的添加/撤回操作
$ git add -i  # --interactive     interactive picking

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]

# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 撤销

```
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

### 查看信息

```
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 只看某一个人的提交记录
git log --author=username

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 每一条提交记录只占一行的输出
$ git log --pretty --oneline

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

### tags

```
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

### Liscense

开源许可证是一种法律许可。通过它，版权拥有人明确允许，用户可以免费地使用、修改、共享版权软件。

版权法默认禁止共享，也就是说，没有许可证的软件，就等同于保留版权，虽然开源了，用户只能看看源码，不能用，一用就会侵犯版权。所以软件开源的话，必须明确地授予用户开源许可证。

目前，国际公认的开源许可证共有[80 多种](https://opensource.org/licenses/alphabetical)。最常见的是[GPL](http://www.gnu.org/licenses/gpl.html)、[BSD](http://en.wikipedia.org/wiki/BSD_licenses)、[MIT](http://en.wikipedia.org/wiki/MIT_License)、[Mozilla](http://www.mozilla.org/MPL/)、[Apache](http://www.apache.org/licenses/LICENSE-2.0)和[LGPL](http://www.gnu.org/copyleft/lesser.html)

> 更多内容请阅读[阮一峰的网络日志-开源许可证教程](http://www.ruanyifeng.com/blog/2017/10/open-source-license-tutorial.html)

### git-flow

**什么是 git-flow？**

一旦安装安装 git-flow，你将会拥有一些扩展命令。这些命令会在一个预定义的顺序下自动执行多个操作。是的，这就是我们的工作流程！

git-flow 并不是要替代 Git，它仅仅是非常聪明有效地把标准的 Git 命令用脚本组合了起来。

**安装**

| platform         | command                                                                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| macOS            | `$ brew install git-flow-avh`                                                                                                                 |
| Macports         | `$ port install git-flow-avh`                                                                                                                 |
| Linux            | `$ apt-get install git-flow`                                                                                                                  |
| Windows (Cygwin) | `$ wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash` |

```
# git version 2.14.2 ~ 2.16.1 之间的版本
git update

# git version 大于 2.16.1(2)
git update-git-for-windows
```

**git-flow-commands**

![git-flow-commands](https://img.cdn.jogiter.cn/public/blog/git-flow-commands.png)

## 阅读链接

- [廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [Git book 中文版本](http://gitbook.liuhui998.com/index.html)
- [Git book 官方中文版](http://git-scm.com/book/zh/v2)
- [git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [git-flow](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)
- [git-flow 备忘清单](https://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)
