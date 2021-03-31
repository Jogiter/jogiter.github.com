---
title: 【译】CentOS 8 服务器初始化设置
date: 2021-03-31 11:13:00
tags:
  - deployment
---

# 【译】CentOS 8 服务器初始化设置

首次创建新的 CentOS 8服务器时，您应在基本设置的早期阶段执行一些配置步骤。这将提高服务器的安全性和可用性，并为后续操作奠定坚实的基础。

## 步骤1-以root身份登录

要登录服务器，您需要知道服务器的公共IP地址。您还需要密码。

如果尚未连接到服务器，请立即使用以下命令以root用户身份登录（用服务器的公共IP地址替换命令中的 `your_server_ip`）：

>$ ssh root@`your_server_ip`

**关于root**

在 `root` 用户在 `Linux` 环境中管理用户，具有非常广阔的特权。由于 `root` 帐户具有更高的特权，因此不建议您定期使用它。这是因为 `root` 帐户固有的部分能力是即使在偶然的情况下也可以进行具有破坏性的更改的功能。

因此，下一步是建立一个替代用户帐户，以减少对日常工作的影响范围。必要时，该帐户仍将能够获得更多的特权。

## 步骤2-创建新用户

以 `root` 用户身份登录后，您可以创建一个新的用户帐户，从现在开始我们将使用该帐户登录。

本示例创建一个名为 `sammy` 的新用户，但您应将其替换为您喜欢的任何用户名：

>$ adduser `sammy`

接下来，为 `sammy` 用户设置一个强密码：

>$ passwd `sammy`

系统将提示您输入两次密码。这样做之后，您的用户就可以使用了，但是首先我们将赋予该用户其他使用 `sudo` 命令的特权。这将使我们能够在必要时以 `root` 用户身份运行命令。

## 步骤3-授予管理权限

现在，我们有了一个具有常规帐户特权的新用户帐户。但是，有时我们可能需要执行管理任务。

为了避免注销普通用户并以 `root` 帐户重新登录，我们可以为普通帐户设置所谓的“超级用户”或 `root` 特权。这将使我们的普通用户可以通过 `sudo` 在每个命令前加上单词来以管理特权运行命令。

要将这些特权添加到新用户，我们需要将新用户添加到 `wheel` 组。默认情况下，在CentOS 8上，允许属于 `wheel` 组的用户使用该sudo命令。

以 `root` 身份运行此命令，将您的新用户添加到 `wheel` 组（用新的用户名替换突出显示的单词）：

>$ usermod -aG wheel `sammy`
 
现在，以普通用户身份登录后，您可以 `sudo` 在命令之前键入以超级用户权限执行操作。

## 步骤4 —设置基本防火墙

防火墙为您的服务器提供了基本的安全性。这些应用程序负责拒绝到服务器上每个端口的流量，但您明确批准的端口 `/` 服务除外。CentOS 有一项称为 `firewalld` 执行此功能的服务。名为的工具 `firewall-cmd` 用于配置 `firewalld` 防火墙策略。

首次安装firewalld：

>$ dnf install firewalld -y

默认 `firewalld` 配置允许 `ssh` 连接，因此我们可以立即打开防火墙：

>$ systemctl start firewalld

检查服务的状态以确保其已启动：

>$ systemctl status firewalld

```sh
Output
● firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2020-02-06 16:39:40 UTC; 3s ago
     Docs: man:firewalld(1)
 Main PID: 13180 (firewalld)
    Tasks: 2 (limit: 5059)
   Memory: 22.4M
   CGroup: /system.slice/firewalld.service
           └─13180 /usr/libexec/platform-python -s /usr/sbin/firewalld --nofork --nopid
```

请注意，它都是 `active` 和 `enabled`，这意味着如果重新引导服务器，它将默认启动。

现在该服务已启动并正在运行，我们可以使用该 `firewall-cmd` 实用工具来获取和设置防火墙的策略信息。

首先，让我们列出已经允许的服务：

>$ firewall-cmd --permanent --list-all

```sh
Output
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0 eth1
  sources:
  services: cockpit dhcpv6-client ssh
  ports:
  protocols:
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

要查看可以按名称启用的其他服务，请键入：

>$ firewall-cmd --get-services

要添加应允许的服务，请使用 `--add-service` 标志：

>$ firewall-cmd --permanent --add-service=http

这将添加 `http` 服务，并允许传入 `TCP` 流量到 `port 80`。重新加载防火墙后，配置将更新：

>$ firewall-cmd --reload
 
请记住，您将必须为以后可能配置的任何其他服务显式打开防火墙（带有服务或端口）。

## 步骤5 —为普通用户启用外部访问

现在我们有了一个常规的非 `root` 用户来日常使用，我们需要确保可以使用它来SSH进入我们的服务器。

>注意：在确认您可以登录并sudo与新用户一起使用之前，建议您保持root身份登录。这样，如果遇到问题，您可以进行故障排除并以root身份进行任何必要的更改。如果您正在使用DigitalOcean Droplet，并且根SSH连接遇到问题，则可以使用DigitalOcean Console登录到Droplet。

为新用户配置 `SSH` 访问的过程取决于服务器的根帐户是使用密码还是 `SSH` 密钥进行身份验证。

**如果 `root` 帐户使用密码身份验证**

如果您使用 `password` 登录到 `root` 帐户，那么将为SSH启用密码身份验证。您可以通过打开新的终端会话并使用带有新用户名的SSH SSH到您的新用户帐户：

>$ ssh `sammy`@`your_server_ip`
 
输入普通用户的密码后，您将登录。请记住，如果您需要运行具有管理特权的命令，请sudo像下面这样键入：

>$ sudo command_to_run

sudo首次使用每个会话时（此后定期），系统将提示您输入常规用户密码。

为了增强服务器的安全性，**强烈建议您设置SSH密钥，而不要使用密码身份验证**。遵循我们[在CentOS 8上设置 SSH 密钥]的指南，以了解如何配置基于密钥的身份验证。

**如果根帐户使用SSH密钥身份验证**

如果您使用 `SSH` 密钥登录到根帐户，则将禁用 `SSH` 的密码身份验证。您需要将公共密钥的副本添加到新用户的文件中才能成功登录。`~/.ssh/authorized_keys`

由于您的公钥已经在服务器上根帐户的 `~/.ssh/authorized_keys` 文件中，因此我们可以将该文件和目录结构复制到我们的新用户帐户中。

复制具有正确所有权和权限的文件的最简单方法是使用 `rsync` 命令。这将复制 `root` 用户的 `.ssh` 目录，保留权限，并修改文件所有者，所有操作都在一个命令中。确保更改以下命令中突出显示的部分，以匹配普通用户的名称：

>注意：该rsync命令将以尾斜杠结尾的源和目标与不以尾斜杠结尾的源和目标区别对待。在rsync下面使用时，请确保源目录（`~/.ssh`）不包含斜杠（请检查以确保您未使用~/.ssh/）。

如果你不小心一个斜线添加到命令，`rsync`将复制的内容中的根帐户的 `~/.ssh` 目录到 `sudo` 用户的主目录，而不是复制整个 `~/.ssh` 目录结构。这些文件将位于错误的位置，并且 `SSH` 将无法找到和使用它们。

>$ rsync --archive --chown=sammy:sammy ~/.ssh /home/sammy
 
现在，回到本地计算机上的新终端，与您的非root用户打开新的SSH会话：

>$ ssh `sammy`@`your_server_ip`
 
您应该不使用密码登录到新用户帐户。请记住，如果您需要运行具有管理特权的命令，请在命令 `sudo` 之前输入，如下所示：

>$ sudo command_to_run

`sudo` 首次使用每个会话时（此后定期），系统将提示您输入常规用户密码。

## 结论

至此，您已经为服务器奠定了坚实的基础。您现在可以在服务器上安装所需的任何软件。

>原文链接: [https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-8)