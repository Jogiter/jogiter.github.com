---
title: Nodejs 权威指南
tags:
 - book
 - nodejs
---

# {{ $frontmatter.title }}

[[toc]]

为了实现高性能，Nodejs 中采用了如下两种机制：

+ 非阻塞性 I/O
+ 事件环

>更多详细内容阅读[深入剖析Nodejs的异步IO](https://www.cnblogs.com/liuchuanfeng/p/6703993.html)

## 高并发

在 Web 应用程序中，一个主要的瓶颈是服务器所支持的最大同时连接用户量。Java、PhP 或 ASP.Net 等服务器语言中，每一个客户端连接会创建一个新的线程，每个线程需要耗费大约 2M 的内存，理论上，具有 8G 内存的服务器可以同时连接的最大用户数是 4000 个左右。Nodejs 修改了客户端到服务器的连接方法：它并不为每个客户端请求创建一个新线程，而是为每一个客户端连接触发一个在 Nodejs 内部进行处理的事件。因此可以同时处理多达几万个用户的客户端连接。

## Nodejs 中的模块

Nodejs 中，不在 V8 引擎中的，不需要引用任何模块就可以直接使用的这些类、函数和对象如下：

|类、函数及对象名|描述|
|:----|:----|
|Buffer 类|用于为二进制数据的存储提供一个缓存区|
|setTimeout 函数|用于在指定时间到达时执行的一个指定函数|
|clearTimeout 函数|用于取消在 setTimeout 函数内指定的函数的执行|
|setInterval 函数|用于指定每隔多少时间执行一个指定函数|
|clearInterval 函数|用于取消在 setInterval 函数内指定的函数的执行|
|require 函数|用于加载模块|
|module 对象|用于访问模块的信息|
|process 对象|用于访问进程的信息|

**exports 与 module.exports 的区别**

`exports` 是 `module.exports` 的引用。`require` 引用的只是 `module.exports` 这个对象。

```js
var module = {
    exports:{
        name:"我是module的exports属性"
    }
};
var exports = module.exports;  //exports是对module.exports的引用，也就是exports现在指向的内存地址和module.exports指向的内存地址是一样的

console.log(module.exports);    //  { name: '我是module的exports属性' }
console.log(exports);   //  { name: '我是module的exports属性' }


exports.name = "我想改一下名字";


console.log(module.exports);    //  { name: '我想改一下名字' }
console.log(exports);   //  { name: '我想改一下名字' }
//看到没，引用的结果就是a和b都操作同一内存地址下的数据


//这个时候我在某个文件定义了一个想导出的模块
var Circle = {
    name:"我是一个圆",
    func:function(x){
        return x*x*3.14;
    }
};

exports = Circle;  //   看清楚了，Circle这个Object在内存中指向了新的地址，所以exports也指向了这个新的地址，和原来的地址没有半毛钱关系了

console.log(module.exports);    //  { name: '我想改一下名字' }
console.log(exports);   // { name: '我是一个圆', func: [Function] }
```

详细解释参见[Node.js模块里exports与module.exports的区别?](https://www.zhihu.com/question/26621212)

**从 node_modules 目录加载模块**

在完整路径的文件 `/home/demo/project/app.js` 中执行下面的函数。指定文件名，而不指定路径

```js
require('bar.js')
```

Nodejs 的搜索路径如下：

+ /home/demo/project/node_modules/bar.js
+ /home/demo/node_modules/bar.js
+ /home/node_modules/bar.js
+ /node_modules/bar.js
+ $NODE_PATH/bar.js (从系统的环境变量指定的目录中寻找)

## EventEmiter 类

在 Nodejs 中，所有可能触发事件的对象都是一个继承了 EventEmitter 类的子类的实例对象。

EventEmiter 类的各个方法

|方法名与参数|描述|
|:---|:---|
|addListener(event, listener)|对指定事件绑定事件处理函数|
|on(event, listener)|addListener 的别名|
|once(event, listener)|对指定事件绑定只执行一次的事件处理函数|
|removeListener(event, listener)|对指定事件解除事件处理函数|
|removeAllListener([event])|对指定事件解除所有事件处理函数|
|emit(event, [arg1], [arg2], [...])|手动触发指定事件|
|setMaxListener(n)|指定事件处理函数的最大数量|
|listeners(event)|获取指定事件的所有事件处理函数|

## 使用 openssl 创建 CA

```
# 创建私钥
openssl genrsa -out private.pem 1024
# 创建证书签名请求
openssl req -new -key private.pem -out certrequest.crs
# 获取证书  x509 表示证书服务国际电信联盟制定的数字证书标准
openssl x509 -req -in certrequest.crs -signkey private.pem -out certificate.pem
# 创建 pfx 文件（用来存储和传输用户或服务器私钥、公钥和证书而制定的格式）
openssl pkcs12 -export -in certificate.pem -inkey private.pem -out certificate.pfx
```

## crypto

`OpenSSL` 类库是一个经过严格测试的可靠的加密和解密算法的实现工具。在 `Nodejs` 中， `OpenSSL` 类库被封装在 `crypto` 模块中。

+ Cipher 类：用于加密数据
+ Decipher 类：用于解密数据
+ Sign 类：用于生成签名
+ Verify 类：用于验证签名

## process

**进程对象的属性**

+ execPath: `node.exe` 所在的绝对路径
+ version: Nodejs 的版本号
+ versions: Nodejs 及其依赖的版本号
+ platform: 运行 Nodejs 的平台。例如 `darwin`、`freebsd`、`linux`、`sunos`、`win32`。
+ argv：包含了运行 Nodejs 应用程序时的所有命令行参数的数组。`node app.js one two` 的 argv 内容为：['node', 'app.js', 'one', '', 'two']
+ env: 包含了运行 Nodejs 应用程序的操作系统的环境信息。
+ pid：当前进程的 PID。
+ arch：运行应用程序的处理器架构。例如 `arm`、`ia32`、`x64`。
+ memoryUsage()：获取进程的内存使用量
+ nextTick(callback): 用于将一个函数推迟到代码中的下一个同步方法执行完毕时或异步方法的回调函数开始执行时调用。
+ chdir(directory)：修改应用程序中使用的当前工作目录
+ cwd()：返回当前目录
+ exit([code])：退出进程。默认值为 `0`，表示正常退出。
+ kill(pid, [signal])：向一个进程发送信号。默认值为 `SIGTERM`，表示中止改进程。
+ uptime()：返回应用程序当前的运行时间。
+ hrtime()：主要用于测试一段代码的运行时间，时间精度可以精确到毫秒。

**nextTick 方法**

使用场景1：指定一个函数在一个同步方法执行完毕时立即调用。

```js
const fs = require('fs')
const finish = () => console.log('文件读取完毕。')

process.nextTick(finish)
console.log(fs.readFileSync('./package.json').toString())
/**
 * {
 *   "name": "demo",
 *   "version": "0.0.0"
 * }
 * 文件读取完毕。
 * /
```

使用场景2：指定两个耗时的操作同步进行。

```js
const fs = require('fs')
const file = './crash.mp3'

function foo() {
  function beginAnotherTask() {
    const rs = fs.createReadStream(file)
    rs.on('data', data => console.log(`读取到${data.length}字节`))
  }
  process.nextTick(beginAnotherTask)
//   beginAnotherTask()
// 不使用 nextTick 运行的结果也一样
}

const rs = fs.createReadStream(file)
rs.on('data', data => console.log(`从 ${file} 中读取到${data.length}字节`))
foo()
/**
 * 从 crash.mp3 中读取到65536字节
 * 读取到65536字节
 * 从 crash.mp3 中读取到65536字节
 * 读取到65536字节
 * 从 crash.mp3 中读取到65536字节
 * 读取到65536字节
 * 从 crash.mp3 中读取到65536字节
 */
```

### child_process

在主进程运行之后，可以通过 `child_process` 模块开启多个子进程。在多个子进程之间可以共享内存空间。可以通过子进程之间的互相通信来交换信息，多个子进程之间也可以通过共享端口的方式将请求分配给多个子进程来执行。

**spawn**：开启一个运行某个命令的子进程

>child_process.spawn(command, [args], [options])

options:

+ cwd；指定子进程的当前工作目录。
+ stdio：一个字符串或者一个存放了[标准输入文件描述符、标准输出文件描述符、标准错误输出文件描述符]三个元素的数组。用于设置子进程的标准输入/输出。
+ env：子进程指定环境变量的对象。不指定时没有可以使用的环境变量，而不是使用 process.env 中的环境变量。
+ detached：布尔值。如果为 `true`，当父进程不存在时，子进程也可以独立存在。默认为 `false`。

**示例：允许父进程首先退出**

```js
// app.js
const fs = require('fs')
const { spawn } = require('child_process')

const out = fs.openSync('./msg.txt', 'w')
const sp = spawn('node', ['write.js'], {
  detached: true,
  stdio: ['ignore', out, 'ignore']
})

sp.unref()

// write.js
for(let i = 0; i <= 1e6; i++) {
  process.stdout.write(i.toString() + '\r\n')
}
```

会发现应用程序退出了，但是 `msg.txt` 文件尺寸仍在不断增大。

**fork**：开启一个专用于运行 Nodejs 中某个模块文件的子进程。

>child_process.fork(modulePath, [args], [options])

options:

+ cwd；指定子进程的当前工作目录。
+ env：子进程指定环境变量的对象。不指定时没有可以使用的环境变量，而不是使用 process.env 中的环境变量。
+ encoding：指定标准输出及标准错误输出数据的编码格式。
+ silent：默认为 `false`：表示子进程与父进程共享标准输入/输出。

**在多个子进程中运行 http 服务器**

```js
// server.js
const cluster = require('cluster')
const http = require('http')

if (cluster.isMaster) {
  cluster.fork()
  cluster.fork()
} else {
  http.createServer((req, res) => {
    if (req.url !== './favicon.ico') {
      let sum = 0
      for (let i = 0; i < 5e5; i++) {
        sum += i
      }
      res.writeHead(200)
      res.
      res.write(`客户端请求在子进程${cluster.worker.id}中被处理`)
      res.end(`sum=${sum}`)
    }
  }).listen(1337)
}

// client.js
const http = require('http')
const options = {
  hostname: 'localhost',
  port: 1337,
  path: '/',
  method: 'GET'
}

for (let i = 0; i < 10; i++) {
  let req = http.request(options, res => {
    res.on('data', chunk => {
      console.log(`响应内容：${chunk}`)
    })
  })
  req.end()
}
```

最终的运行结果:

```js
响应内容：客户端请求在子进程1中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程2中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程2中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程1中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程2中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程1中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程2中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程1中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程2中被处理
响应内容：sum=124999750000
响应内容：客户端请求在子进程1中被处理
响应内容：sum=124999750000
```
