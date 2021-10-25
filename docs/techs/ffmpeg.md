---
title: ffmpeg
date: 2020-05-21 18:28:02
tags:
  - video
  - audio
  - tool
categories:
  - tool
---

ffmpeg 是用于记录，转换和流式传输音频和视频的跨平台解决方案，

## ffmpeg 下载和安装

选择对应的版本进行安装：[download](https://ffmpeg.org/download.html)。

**window: 在命令行中添加 `ffmpeg` 命令**

右键【此电脑】>【属性】>【高级】>【环境变量】。选择 'Path'，添加 `D:\ffmpeg\bin`

![win10_env_Pah](https://img.jogiter.cn/blog/win10_env_Pah.png)

```
ffmpeg -version
```

## ffmpeg参数中文详细解释

window 执行 `./bin/ffmpeg -h`

```
-L                  show license
-version            show version
-buildconf          show build configuration
-formats            show available formats
-muxers             show available muxers
-demuxers           show available demuxers
-devices            show available devices
-codecs             show available codecs
-decoders           show available decoders
-encoders           show available encoders
-bsfs               show available bit stream filters
-protocols          show available protocols
-filters            show available filters
-pix_fmts           show available pixel formats
-layouts            show standard channel layouts
-sample_fmts        show available audio sample formats
-colors             show available color names
-sources device     list sources of the input device
-sinks device       list sinks of the output device
-hwaccels           show available HW acceleration methods

Global options (affect whole program instead of just one file:
-loglevel loglevel  set logging level
-v loglevel         set logging level
-report             generate a report
-max_alloc bytes    set maximum size of a single allocated block
-y                  overwrite output files
-n                  never overwrite output files
-ignore_unknown     Ignore unknown stream types
-filter_threads     number of non-complex filter threads
-filter_complex_threads  number of threads for -filter_complex
-stats              print progress report during encoding
-max_error_rate maximum error rate  ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
-bits_per_raw_sample number  set the number of bits per raw sample
-vol volume         change audio volume (256=normal)

Per-file main options:
-f fmt              force format
-c codec            codec name
-codec codec        codec name
-pre preset         preset name
-map_metadata outfile[,metadata]:infile[,metadata]  set metadata information of outfile from infile
-t duration         record or transcode "duration" seconds of audio/video
-to time_stop       record or transcode stop time
-fs limit_size      set the limit file size in bytes
-ss time_off        set the start time offset
-sseof time_off     set the start time offset relative to EOF
-seek_timestamp     enable/disable seeking by timestamp with -ss
-timestamp time     set the recording timestamp ('now' to set the current time)
-metadata string=string  add metadata
-program title=string:st=number...  add program with specified streams
-target type        specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")
-apad               audio pad
-frames number      set the number of frames to output
-filter filter_graph  set stream filtergraph
-filter_script filename  read stream filtergraph description from a file
-reinit_filter      reinit filtergraph on input parameter changes
-discard            discard
-disposition        disposition

Video options:
-vframes number     set the number of video frames to output
-r rate             set frame rate (Hz value, fraction or abbreviation)
-s size             set frame size (WxH or abbreviation)
-aspect aspect      set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
-bits_per_raw_sample number  set the number of bits per raw sample
-vn                 disable video
-vcodec codec       force video codec ('copy' to copy stream)
-timecode hh:mm:ss[:;.]ff  set initial TimeCode value.
-pass n             select the pass number (1 to 3)
-vf filter_graph    set video filters
-ab bitrate         audio bitrate (please use -b:a)
-b bitrate          video bitrate (please use -b:v)
-dn                 disable data

Audio options:
-aframes number     set the number of audio frames to output
-aq quality         set audio quality (codec-specific)
-ar rate            set audio sampling rate (in Hz)
-ac channels        set number of audio channels
-an                 disable audio
-acodec codec       force audio codec ('copy' to copy stream)
-vol volume         change audio volume (256=normal)
-af filter_graph    set audio filters

Subtitle options:
-s size             set frame size (WxH or abbreviation)
-sn                 disable subtitle
-scodec codec       force subtitle codec ('copy' to copy stream)
-stag fourcc/tag    force subtitle tag/fourcc
-fix_sub_duration   fix subtitles duration
-canvas_size size   set canvas size (WxH or abbreviation)
-spre preset        set the subtitle options to the indicated preset
```

中文参考可参考 [ffmpeg参数中文详细解释](https://blog.csdn.net/leixiaohua1020/article/details/12751349)

## ffmpeg 常用命令总结

```
# 视频格式转换
ffmpeg -i input.mp4 output.ts

# 视频剪切
ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4

# 视频切片
ffmpeg -re -i ./videos/tennis.mp4 -c copy -f segment -segment_format mp4 segment_%d.mp4

# 抓取视频的一些帧，存为图片。'-r' 表示每一秒几帧 '-q:v' 表示存储 jpeg 的图像质量，一般 2 是高质量。
ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg


# 提取音频
# '-vn':不处理视频
ffmpeg -i input.mp4 -vn -acodec copy output.mp3

# '-ss':从第15秒开始 '-t':截取10秒的音频
ffmpeg -ss 00:00:15 -t 00:00:10 -i input.mp4 -vn output.mp3

# '-acodec copy': 不对音频重新编码
ffmpeg -ss 00:00:15 -t 00:00:10 -i ./videos/tennis.mp4 -vn -acodec copy output.aac

# '-f mp3': 强制转换成 mp3 格式
ffmpeg -ss 00:00:15 -t 00:00:10 -i ./videos/tennis.mp4 -vn -f mp3 output.mp3
```

## ffmpeg filter过滤器

```
# show available filters
ffmpeg -filters
```

>[ffmpeg filter过滤器 基础实例及全面解析](https://blog.csdn.net/newchenxf/article/details/51364105)

**将输入的1920x1080缩小到960x540输出**

```
ffmpeg -i input.mp4 -vf scale=960:540 output.mp4
```

**为视频添加logo**

```
# 左上角
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay output.mp4
# 右上角
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=W-w output.mp4
# 左下角
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=0:H-h output.mp4
# 右下角
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=W-w:H-h output.mp4
```

**去掉视频的logo**

用 ffmpeg 的 [delogo](https://ffmpeg.org/ffmpeg-filters.html#delogo) 过滤器。

>语法：-vf delogo=x:y:w:h[:t[:show]]

+ x:y 离左上角的坐标。
+ w:h logo 的宽和高。
+ t: 矩形边缘的厚度，默认值 4。
+ show：若设置为1有一个绿色的矩形，默认值0。

```
ffmpeg -i input.mp4 -vf delogo=0:0:220:90:100:1 output.mp4
```

**旋转视频**

```
ffmpeg -i input.mp4 -vf transpose=1 output.mp4
```

**添加字幕**

```
ffmpeg -i input.mp4 -vf subtitles=en.vtt vvt.mp4
ffmpeg -i input.mp4 -vf subtitles=en.srt srt.mp4
```

## 阅读链接

+ [ffmpeg document](https://ffmpeg.org/documentation.html)
+ [雷霄骅：FFMPEG视音频编解码零基础学习方法](https://blog.csdn.net/leixiaohua1020/article/details/15811977)
+ [ffmpeg常用命令总结](https://blog.csdn.net/langzijing/article/details/85256846)
+ [使用 MediaSource 搭建流式播放器](https://zhuanlan.zhihu.com/p/26374202)
