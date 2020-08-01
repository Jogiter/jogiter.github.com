---
title: webrtc
date: 2020-07-29 18:56:44
tags:
---

# Media

## WebRTC 简介

**WebRTC** (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。

### UDP(User Data Protocol)

1、UDP是一个非连接的协议，传输数据之前源端和终端不建立连接， 当它想传送时就简单地去抓取来自应用程序的数据，并尽可能快地把它扔到网络上。 在发送端，UDP传送数据的速度仅仅是受应用程序生成数据的速度、 计算机的能力和传输带宽的限制； 在接收端，UDP把每个消息段放在队列中，应用程序每次从队列中读一个消息段。

2、 由于传输数据不建立连接，因此也就不需要维护连接状态，包括收发状态等， 因此一台服务机可同时向多个客户机传输相同的消息。

3、UDP信息包的标题很短，只有8个字节，相对于TCP的20个字节信息包的额外开销很小。

4、吞吐量不受拥挤控制算法的调节，只受应用软件生成数据的速率、传输带宽、 源端和终端主机性能的限制。

5、UDP使用尽最大努力交付，即不保证可靠交付， 因此主机不需要维持复杂的链接状态表（这里面有许多参数）。

6、UDP是面向报文的。发送方的UDP对应用程序交下来的报文， 在添加首部后就向下交付给IP层。既不拆分，也不合并，而是保留这些报文的边界， 因此，应用程序需要选择合适的报文大小。

>参考[TCP和UDP的区别](https://zhuanlan.zhihu.com/p/24860273)

### SDP(Session Description Protocol)

描述会话的协议。主要用于两个会话实体之间的媒体协商。

什么叫会话呢，比如一次网络电话、一次电话会议、一次视频聊天，这些都可以称之为一次会话。

那为什么要去发这个描述文本呢，主要是为了解决参与会话的各成员之间能力不对等的问题，如果参加本次通话的成员都支持高质量的通话，但是我们没有去进行协议，为了兼容性，使用的都是普通质量的通话格式，这样就很浪费资源了。所以SDP的作用还是很有必要的。

**SDP协议结构**

SDP 是浏览器提供的基于字符串的二进制数据对象。这种字符串的形式是一些列的键值对，由换行符分隔：

><key>=<value>\n

- `key` 是一个单字符，用来表明值的类型
- `value` 是有结构的一组文本
- 不同的键值对由换行符分隔

SDP 涵盖了一个指定用户的描述、时间配置和对媒体的限制。

SDP的 文本信息包括：

- 会话名称和意图
- 会话持续时间
- 构成会话的媒体
- 有关接收媒体的信息

**会话名称和意图描述**

Session description

```js
v= (protocol version)
o= (owner/creator and session identifier).
s= (session name)
i=* (session information)
u=* (URI of description)
e=* (email address)
p=* (phone number)
c=* (connection information - notrequired if included in all media)
b=* (bandwidth information)
z=* (time zone adjustments)
k=* (encryption key)
a=* (zero or more session attributelines)
```

Time description

```sh
t= (time the session is active)
r=* (zero or more repeat times)
```

Media description

```js
m= (media name and transport address)
i=* (media title)
c=* (connection information - optionalif included at session-level)
b=* (bandwidth information)
k=* (encryption key)
a=* (zero or more media attributelines)
```

对于媒体级描述而言只有m=是必须的。

**各个字段的描述**

```js
//sdp版本号，一直为0,rfc4566规定
v=0
// o=<username> <sessionid> <version> <network type> <address type> <address>
o=- 7017624586836067756 2 IN IP4 127.0.0.1
// s=<sessionname>
s=-
/**
 * t=<start time>  <stop time>
 * 两个值分别是会话的起始时间和结束时间，这里都是0代表没有限制
 */
t=0 0

c=IN IP4 0.0.0.0
// c=<networktype> <address type> <connection address>

/**
 * m=<media><port> <transport> <fmt list>
 * 一个会话描述包括几个媒体描述。一个媒体描述以”m=”开始到下一个”m=”结束。
 * <media>：表示媒体类型。有"audio", "video","application"（例白板信息）, "data"（不向用户显示的数据） 和"control"（描述额外的控制通道）。
 * <fmt list>：媒体格式。对于音频和视频就是在RTP Audio/Video Profile定义的负载类型(payload type)
 */
m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 126

/**
 * a=rtpmap:<payload type><encoding name>/<clock rate>[/<encodingparameters>]
 * encodingparameters 默认缺省值为 1
 */
a=rtpmap:103 ISAC/16000
```

>参考[SDP协议](https://www.jianshu.com/p/94b118b8fd97)

**SDP 例子**

```js
v=0
//sdp版本号，一直为0,rfc4566规定
o=- 7017624586836067756 2 IN IP4 127.0.0.1
// o=<username> <sess-id> <sess-version> <nettype> <addrtype> <unicast-address>
//username如何没有使用-代替，7017624586836067756是整个会话的编号，2代表会话版本，如果在会话
//过程中有改变编码之类的操作，重新生成sdp时,sess-id不变，sess-version加1
s=-
//会话名，没有的话使用-代替
t=0 0
//两个值分别是会话的起始时间和结束时间，这里都是0代表没有限制
a=group:BUNDLE audio video data
//需要共用一个传输通道传输的媒体，如果没有这一行，音视频，数据就会分别单独用一个udp端口来发送
a=msid-semantic: WMS h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C
//WMS是WebRTC Media Stream简称，这一行定义了本客户端支持同时传输多个流，一个流可以包括多个track,
//一般定义了这个，后面a=ssrc这一行就会有msid,mslabel等属性
m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 126
//m=audio说明本会话包含音频，9代表音频使用端口9来传输，但是在webrtc中一现在一般不使用，如果设置为0，代表不
//传输音频,UDP/TLS/RTP/SAVPF是表示用户来传输音频支持的协议，udp，tls,rtp代表使用udp来传输rtp包，并使用tls加密
//SAVPF代表使用srtcp的反馈机制来控制通信过程,后台111 103 104 9 0 8 106 105 13 126表示本会话音频支持的编码，后台几行会有详细补充说明
c=IN IP4 0.0.0.0
//这一行表示你要用来接收或者发送音频使用的IP地址，webrtc使用ice传输，不使用这个地址
a=rtcp:9 IN IP4 0.0.0.0
//用来传输rtcp地地址和端口，webrtc中不使用
a=ice-ufrag:khLS
a=ice-pwd:cxLzteJaJBou3DspNaPsJhlQ
//以上两行是ice协商过程中的安全验证信息
a=fingerprint:sha-256 FA:14:42:3B:C7:97:1B:E8:AE:0C2:71:03:05:05:16:8F:B9:C7:98:E9:60:43:4B:5B:2C:28:EE:5C:8F3:17
//以上这行是dtls协商过程中需要的认证信息
a=setup:actpass
//以上这行代表本客户端在dtls协商过程中，可以做客户端也可以做服务端，参考rfc4145 rfc4572
a=mid:audio
//在前面BUNDLE这一行中用到的媒体标识
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
//上一行指出我要在rtp头部中加入音量信息，参考 rfc6464
a=sendrecv
//上一行指出我是双向通信，另外几种类型是recvonly,sendonly,inactive
a=rtcp-mux
//上一行指出rtp,rtcp包使用同一个端口来传输
//下面几行都是对m=audio这一行的媒体编码补充说明，指出了编码采用的编号，采样率，声道等
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
//以上这行说明opus编码支持使用rtcp来控制拥塞，参考https://tools.ietf.org/html/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=fmtp:111 minptime=10;useinbandfec=1
//对opus编码可选的补充说明,minptime代表最小打包时长是10ms，useinbandfec=1代表使用opus编码内置fec特性
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:126 telephone-event/8000
a=ssrc:18509423 cname:sTjtznXLCNH7nbRw
//cname用来标识一个数据源，ssrc当发生冲突时可能会发生变化，但是cname不会发生变化，也会出现在rtcp包中SDEC中，
//用于音视频同步
a=ssrc:18509423 msid:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C 15598a91-caf9-4fff-a28f-3082310b2b7a
//以上这一行定义了ssrc和WebRTC中的MediaStream,AudioTrack之间的关系，msid后面第一个属性是stream-d,第二个是track-id
a=ssrc:18509423 mslabel:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C
a=ssrc:18509423 label:15598a91-caf9-4fff-a28f-3082310b2b7a
m=video 9 UDP/TLS/RTP/SAVPF 100 101 107 116 117 96 97 99 98
//参考上面m=audio,含义类似
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:khLS
a=ice-pwd:cxLzteJaJBou3DspNaPsJhlQ
a=fingerprint:sha-256 FA:14:42:3B:C7:97:1B:E8:AE:0C2:71:03:05:05:16:8F:B9:C7:98:E9:60:43:4B:5B:2C:28:EE:5C:8F3:17
a=setup:actpass
a=mid:video
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-hol ... de-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=sendrecv
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:100 VP8/90000
a=rtcp-fb:100 ccm fir
//ccm是codec control using RTCP feedback message简称，意思是支持使用rtcp反馈机制来实现编码控制，fir是Full Intra Request
//简称，意思是接收方通知发送方发送幅完全帧过来
a=rtcp-fb:100 nack
//支持丢包重传，参考rfc4585
a=rtcp-fb:100 nack pli
//支持关键帧丢包重传,参考rfc4585
a=rtcp-fb:100 goog-remb
//支持使用rtcp包来控制发送方的码流
a=rtcp-fb:100 transport-cc
//参考上面opus
a=rtpmap:101 VP9/90000
a=rtcp-fb:101 ccm fir
a=rtcp-fb:101 nack
a=rtcp-fb:101 nack pli
a=rtcp-fb:101 goog-remb
a=rtcp-fb:101 transport-cc
a=rtpmap:107 H264/90000
a=rtcp-fb:107 ccm fir
a=rtcp-fb:107 nack
a=rtcp-fb:107 nack pli
a=rtcp-fb:107 goog-remb
a=rtcp-fb:107 transport-cc
a=fmtp:107 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
//h264编码可选的附加说明
a=rtpmap:116 red/90000
//fec冗余编码，一般如果sdp中有这一行的话，rtp头部负载类型就是116，否则就是各编码原生负责类型
a=rtpmap:117 ulpfec/90000
//支持ULP FEC，参考rfc5109
a=rtpmap:96 rtx/90000
a=fmtp:96 apt=100
//以上两行是VP8编码的重传包rtp类型
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=101
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=107
a=rtpmap:98 rtx/90000
a=fmtp:98 apt=116
a=ssrc-group:FID 3463951252 1461041037
//在webrtc中，重传包和正常包ssrc是不同的，上一行中前一个是正常rtp包的ssrc,后一个是重传包的ssrc
a=ssrc:3463951252 cname:sTjtznXLCNH7nbRw
a=ssrc:3463951252 msid:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C ead4b4e9-b650-4ed5-86f8-6f5f5806346d
a=ssrc:3463951252 mslabel:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C
a=ssrc:3463951252 label:ead4b4e9-b650-4ed5-86f8-6f5f5806346d
a=ssrc:1461041037 cname:sTjtznXLCNH7nbRw
a=ssrc:1461041037 msid:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C ead4b4e9-b650-4ed5-86f8-6f5f5806346d
a=ssrc:1461041037 mslabel:h1aZ20mbQB0GSsq0YxLfJmiYWE9CBfGch97C
a=ssrc:1461041037 label:ead4b4e9-b650-4ed5-86f8-6f5f5806346d
m=application 9 DTLS/SCTP 5000
c=IN IP4 0.0.0.0
a=ice-ufrag:khLS
a=ice-pwd:cxLzteJaJBou3DspNaPsJhlQ
a=fingerprint:sha-256 FA:14:42:3B:C7:97:1B:E8:AE:0C2:71:03:05:05:16:8F:B9:C7:98:E9:60:43:4B:5B:2C:28:EE:5C:8F3:17
a=setup:actpass
a=mid:data
a=sctpmap:5000 webrtc-datachannel 1024
```

>参考[SDP协议详细总结](https://www.jianshu.com/p/3dbdd10a4038)

### WebRTC 中的 SDP 连接流程

查看 sdp 交换 [demo](https://webrtc.github.io/samples/src/content/peerconnection/constraints/)

1. 在创建 PeerConnectionA 后，就会去创建一个 offerSDP，并设置为 localSDP。通过 signaling 发送 PeerB。
2. peerB 收到 peerA 的SDP 后，把收到的 SDP 设置为 RemoteSDP。
3. 在设置完成后，PeerB 再生成 AnswerSDP，设置为 localSDP，通过 signaling 通道发送给 PeerA。
4. PeerA 收到后AnswerSDP 后，设置为 RemoteSDP

```ts
// https://github.com/webrtc/samples/blob/gh-pages/src/content/peerconnection/constraints/js/main.js#L144-L190
localPeerConnection = new RTCPeerConnection(null);
remotePeerConnection = new RTCPeerConnection(null);
localStream.getTracks().forEach(track => localPeerConnection.addTrack(track, localStream));
console.log('localPeerConnection creating offer');
localPeerConnection.onnegotiationeeded = () => console.log('Negotiation needed - localPeerConnection');
remotePeerConnection.onnegotiationeeded = () => console.log('Negotiation needed - remotePeerConnection');
localPeerConnection.onicecandidate = e => {
  console.log('Candidate localPeerConnection');
  remotePeerConnection
      .addIceCandidate(e.candidate)
      .then(onAddIceCandidateSuccess, onAddIceCandidateError);
};
remotePeerConnection.onicecandidate = e => {
  console.log('Candidate remotePeerConnection');
  localPeerConnection
      .addIceCandidate(e.candidate)
      .then(onAddIceCandidateSuccess, onAddIceCandidateError);
};
remotePeerConnection.ontrack = e => {
  if (remoteVideo.srcObject !== e.streams[0]) {
    console.log('remotePeerConnection got stream');
    remoteVideo.srcObject = e.streams[0];
  }
};
localPeerConnection.createOffer().then(
    desc => {
      console.log('localPeerConnection offering');
      localPeerConnection.setLocalDescription(desc);
      remotePeerConnection.setRemoteDescription(desc);
      remotePeerConnection.createAnswer().then(
          desc2 => {
            console.log('remotePeerConnection answering');
            remotePeerConnection.setLocalDescription(desc2);
            localPeerConnection.setRemoteDescription(desc2);
          },
          err => console.log(err)
      );
    },
    err => console.log(err)
);
```

>查看更多 [webrtc samples](https://github.com/webrtc/samples)

## 阅读链接

+ MDN
  + [Navigator.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia)
  + [WebRTC](https://developer.mozilla.org/en-US/docs/Glossary/WebRTC)
+ Github
  + [search: webrtc](https://github.com/search?p=2&q=webrtc&type=Repositories)
  + [WebRTC/samples](https://github.com/webrtc/samples) WebRTC Web demos and samples
  + [[WebRTC-Experiment](https://github.com/muaz-khan/WebRTC-Experiment)](https://github.com/muaz-khan/WebRTC-Experiment) WebRTC, WebRTC and WebRTC. Everything here is all about WebRTC!!
  + [peerjs](https://github.com/peers/peerjs) Simple peer-to-peer with WebRTC
  + [webrtc-sdk](https://github.com/stephenlb/webrtc-sdk) WebRTC Simple Calling API + Mobile SDK - A simplified approach to RTCPeerConnection for mobile and web video calling apps.
+ Blog
  + [JS纯前端实现audio音频剪裁剪切复制播放与上传](https://www.zhangxinxu.com/wordpress/2020/07/js-audio-clip-copy-upload/#comments)