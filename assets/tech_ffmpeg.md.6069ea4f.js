import{_ as o,z as a,A as e,I as n,B as r,W as i,D as s}from"./plugin-vue_export-helper.71bb0c0b.js";const _='{"title":"ffmpeg","description":"","frontmatter":{"title":"ffmpeg","tags":["video","audio","tool"],"categories":["tool"]},"headers":[{"level":2,"title":"ffmpeg \u4E0B\u8F7D\u548C\u5B89\u88C5","slug":"ffmpeg-\u4E0B\u8F7D\u548C\u5B89\u88C5"},{"level":2,"title":"ffmpeg \u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA","slug":"ffmpeg-\u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA"},{"level":2,"title":"ffmpeg \u5E38\u7528\u547D\u4EE4\u603B\u7ED3","slug":"ffmpeg-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3"},{"level":2,"title":"ffmpeg filter \u8FC7\u6EE4\u5668","slug":"ffmpeg-filter-\u8FC7\u6EE4\u5668"},{"level":2,"title":"\u9605\u8BFB\u94FE\u63A5","slug":"\u9605\u8BFB\u94FE\u63A5"}],"relativePath":"tech/ffmpeg.md","lastUpdated":1701670426297}',l={},p={id:"frontmatter-title",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(`<p><div class="table-of-contents"><ul><li><a href="#ffmpeg-\u4E0B\u8F7D\u548C\u5B89\u88C5">ffmpeg \u4E0B\u8F7D\u548C\u5B89\u88C5</a></li><li><a href="#ffmpeg-\u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA">ffmpeg \u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA</a></li><li><a href="#ffmpeg-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3">ffmpeg \u5E38\u7528\u547D\u4EE4\u603B\u7ED3</a></li><li><a href="#ffmpeg-filter-\u8FC7\u6EE4\u5668">ffmpeg filter \u8FC7\u6EE4\u5668</a></li><li><a href="#\u9605\u8BFB\u94FE\u63A5">\u9605\u8BFB\u94FE\u63A5</a></li></ul></div></p><p>ffmpeg \u662F\u7528\u4E8E\u8BB0\u5F55\uFF0C\u8F6C\u6362\u548C\u6D41\u5F0F\u4F20\u8F93\u97F3\u9891\u548C\u89C6\u9891\u7684\u8DE8\u5E73\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C</p><h2 id="ffmpeg-\u4E0B\u8F7D\u548C\u5B89\u88C5" tabindex="-1">ffmpeg \u4E0B\u8F7D\u548C\u5B89\u88C5 <a class="header-anchor" href="#ffmpeg-\u4E0B\u8F7D\u548C\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u5BF9\u5E94\u7684\u7248\u672C\u8FDB\u884C\u5B89\u88C5\uFF1A<a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer">download</a>\u3002</p><p><strong>window: \u5728\u547D\u4EE4\u884C\u4E2D\u6DFB\u52A0 <code>ffmpeg</code> \u547D\u4EE4</strong></p><p>\u53F3\u952E\u3010\u6B64\u7535\u8111\u3011&gt;\u3010\u5C5E\u6027\u3011&gt;\u3010\u9AD8\u7EA7\u3011&gt;\u3010\u73AF\u5883\u53D8\u91CF\u3011\u3002\u9009\u62E9 &#39;Path&#39;\uFF0C\u6DFB\u52A0 <code>D:\\ffmpeg\\bin</code></p><p><img src="https://img.cdn.jogiter.cn/public/blog/win10_env_Pah.png" alt="win10_env_Pah"></p><div class="language-"><pre><code>ffmpeg -version
</code></pre></div><h2 id="ffmpeg-\u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA" tabindex="-1">ffmpeg \u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA <a class="header-anchor" href="#ffmpeg-\u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA" aria-hidden="true">#</a></h2><p>window \u6267\u884C <code>./bin/ffmpeg -h</code></p><div class="language-"><pre><code>-L                  show license
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
-t duration         record or transcode &quot;duration&quot; seconds of audio/video
-to time_stop       record or transcode stop time
-fs limit_size      set the limit file size in bytes
-ss time_off        set the start time offset
-sseof time_off     set the start time offset relative to EOF
-seek_timestamp     enable/disable seeking by timestamp with -ss
-timestamp time     set the recording timestamp (&#39;now&#39; to set the current time)
-metadata string=string  add metadata
-program title=string:st=number...  add program with specified streams
-target type        specify target file type (&quot;vcd&quot;, &quot;svcd&quot;, &quot;dvd&quot;, &quot;dv&quot; or &quot;dv50&quot; with optional prefixes &quot;pal-&quot;, &quot;ntsc-&quot; or &quot;film-&quot;)
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
-vcodec codec       force video codec (&#39;copy&#39; to copy stream)
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
-acodec codec       force audio codec (&#39;copy&#39; to copy stream)
-vol volume         change audio volume (256=normal)
-af filter_graph    set audio filters

Subtitle options:
-s size             set frame size (WxH or abbreviation)
-sn                 disable subtitle
-scodec codec       force subtitle codec (&#39;copy&#39; to copy stream)
-stag fourcc/tag    force subtitle tag/fourcc
-fix_sub_duration   fix subtitles duration
-canvas_size size   set canvas size (WxH or abbreviation)
-spre preset        set the subtitle options to the indicated preset
</code></pre></div><p>\u4E2D\u6587\u53C2\u8003\u53EF\u53C2\u8003 <a href="https://blog.csdn.net/leixiaohua1020/article/details/12751349" target="_blank" rel="noopener noreferrer">ffmpeg \u53C2\u6570\u4E2D\u6587\u8BE6\u7EC6\u89E3\u91CA</a></p><h2 id="ffmpeg-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3" tabindex="-1">ffmpeg \u5E38\u7528\u547D\u4EE4\u603B\u7ED3 <a class="header-anchor" href="#ffmpeg-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3" aria-hidden="true">#</a></h2><div class="language-"><pre><code># \u89C6\u9891\u683C\u5F0F\u8F6C\u6362
ffmpeg -i input.mp4 output.ts

# \u89C6\u9891\u526A\u5207
ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4

# \u89C6\u9891\u5207\u7247
ffmpeg -re -i ./videos/tennis.mp4 -c copy -f segment -segment_format mp4 segment_%d.mp4

# \u6293\u53D6\u89C6\u9891\u7684\u4E00\u4E9B\u5E27\uFF0C\u5B58\u4E3A\u56FE\u7247\u3002&#39;-r&#39; \u8868\u793A\u6BCF\u4E00\u79D2\u51E0\u5E27 &#39;-q:v&#39; \u8868\u793A\u5B58\u50A8 jpeg \u7684\u56FE\u50CF\u8D28\u91CF\uFF0C\u4E00\u822C 2 \u662F\u9AD8\u8D28\u91CF\u3002
ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg


# \u63D0\u53D6\u97F3\u9891
# &#39;-vn&#39;:\u4E0D\u5904\u7406\u89C6\u9891
ffmpeg -i input.mp4 -vn -acodec copy output.mp3

# &#39;-ss&#39;:\u4ECE\u7B2C15\u79D2\u5F00\u59CB &#39;-t&#39;:\u622A\u53D610\u79D2\u7684\u97F3\u9891
ffmpeg -ss 00:00:15 -t 00:00:10 -i input.mp4 -vn output.mp3

# &#39;-acodec copy&#39;: \u4E0D\u5BF9\u97F3\u9891\u91CD\u65B0\u7F16\u7801
ffmpeg -ss 00:00:15 -t 00:00:10 -i ./videos/tennis.mp4 -vn -acodec copy output.aac

# &#39;-f mp3&#39;: \u5F3A\u5236\u8F6C\u6362\u6210 mp3 \u683C\u5F0F
ffmpeg -ss 00:00:15 -t 00:00:10 -i ./videos/tennis.mp4 -vn -f mp3 output.mp3
</code></pre></div><h2 id="ffmpeg-filter-\u8FC7\u6EE4\u5668" tabindex="-1">ffmpeg filter \u8FC7\u6EE4\u5668 <a class="header-anchor" href="#ffmpeg-filter-\u8FC7\u6EE4\u5668" aria-hidden="true">#</a></h2><div class="language-"><pre><code># show available filters
ffmpeg -filters
</code></pre></div><blockquote><p><a href="https://blog.csdn.net/newchenxf/article/details/51364105" target="_blank" rel="noopener noreferrer">ffmpeg filter \u8FC7\u6EE4\u5668 \u57FA\u7840\u5B9E\u4F8B\u53CA\u5168\u9762\u89E3\u6790</a></p></blockquote><p><strong>\u5C06\u8F93\u5165\u7684 1920x1080 \u7F29\u5C0F\u5230 960x540 \u8F93\u51FA</strong></p><div class="language-"><pre><code>ffmpeg -i input.mp4 -vf scale=960:540 output.mp4
</code></pre></div><p><strong>\u4E3A\u89C6\u9891\u6DFB\u52A0 logo</strong></p><div class="language-"><pre><code># \u5DE6\u4E0A\u89D2
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay output.mp4
# \u53F3\u4E0A\u89D2
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=W-w output.mp4
# \u5DE6\u4E0B\u89D2
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=0:H-h output.mp4
# \u53F3\u4E0B\u89D2
ffmpeg -i input.mp4 -i logo.png -filter_complex overlay=W-w:H-h output.mp4
</code></pre></div><p><strong>\u53BB\u6389\u89C6\u9891\u7684 logo</strong></p><p>\u7528 ffmpeg \u7684 <a href="https://ffmpeg.org/ffmpeg-filters.html#delogo" target="_blank" rel="noopener noreferrer">delogo</a> \u8FC7\u6EE4\u5668\u3002</p><blockquote><p>\u8BED\u6CD5\uFF1A-vf delogo=x:y:w:h[:t[:show]]</p></blockquote><ul><li>x:y \u79BB\u5DE6\u4E0A\u89D2\u7684\u5750\u6807\u3002</li><li>w:h logo \u7684\u5BBD\u548C\u9AD8\u3002</li><li>t: \u77E9\u5F62\u8FB9\u7F18\u7684\u539A\u5EA6\uFF0C\u9ED8\u8BA4\u503C 4\u3002</li><li>show\uFF1A\u82E5\u8BBE\u7F6E\u4E3A 1 \u6709\u4E00\u4E2A\u7EFF\u8272\u7684\u77E9\u5F62\uFF0C\u9ED8\u8BA4\u503C 0\u3002</li></ul><div class="language-"><pre><code>ffmpeg -i input.mp4 -vf delogo=0:0:220:90:100:1 output.mp4
</code></pre></div><p><strong>\u65CB\u8F6C\u89C6\u9891</strong></p><div class="language-"><pre><code>ffmpeg -i input.mp4 -vf transpose=1 output.mp4
</code></pre></div><p><strong>\u6DFB\u52A0\u5B57\u5E55</strong></p><div class="language-"><pre><code>ffmpeg -i input.mp4 -vf subtitles=en.vtt vvt.mp4
ffmpeg -i input.mp4 -vf subtitles=en.srt srt.mp4
</code></pre></div><h2 id="\u9605\u8BFB\u94FE\u63A5" tabindex="-1">\u9605\u8BFB\u94FE\u63A5 <a class="header-anchor" href="#\u9605\u8BFB\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://ffmpeg.org/documentation.html" target="_blank" rel="noopener noreferrer">ffmpeg document</a></li><li><a href="https://blog.csdn.net/leixiaohua1020/article/details/15811977" target="_blank" rel="noopener noreferrer">\u96F7\u9704\u9A85\uFF1AFFMPEG \u89C6\u97F3\u9891\u7F16\u89E3\u7801\u96F6\u57FA\u7840\u5B66\u4E60\u65B9\u6CD5</a></li><li><a href="https://blog.csdn.net/langzijing/article/details/85256846" target="_blank" rel="noopener noreferrer">ffmpeg \u5E38\u7528\u547D\u4EE4\u603B\u7ED3</a></li><li><a href="https://zhuanlan.zhihu.com/p/26374202" target="_blank" rel="noopener noreferrer">\u4F7F\u7528 MediaSource \u642D\u5EFA\u6D41\u5F0F\u64AD\u653E\u5668</a></li></ul>`,32);function m(t,c,u,g,h,v){return s(),a("div",null,[e("h1",p,[n(r(t.$frontmatter.title)+" ",1),f]),d])}var w=o(l,[["render",m]]);export{_ as __pageData,w as default};
