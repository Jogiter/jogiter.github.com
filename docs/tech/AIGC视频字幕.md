---
title: AIGC视频字幕
tags:
  - video
  - audio
  - tool
---

# {{ $frontmatter.title }}

[[toc]]

最近 AI 赛道在程序员圈中异常火爆，由于很多最新的资料都在国外，因此萌生了搬运视频的想法，将信息同步到朋友圈，让大家第一时间了解 AI 的内容。

整个过程的思路如下：

1. 下载无字幕的视频文件
2. 获取音频文件（从视频提取音频）
3. 音频转字幕
4. 字幕翻译（如果需要双语字幕，则需要做特殊处理）
5. 翻译字幕添加到视频（如果源视频已有字幕，则需要将字幕先移除，然后再重新添加字幕）

整个流程涉及到的工具如下：

- [ffmpeg](./ffmpeg.md)
- [@google-cloud/translate](https://www.npmjs.com/package/@google-cloud/translate)
- [azure-ai/speech-sdk](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-sdk)

## Step1：下载无字幕的视频文件

<video width="100%" height="auto" controls>
  <source src="/videos/ai-for-good.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

## Step2：获取音频文件

ffmpeg 是用于记录，转换和流式传输音频和视频的跨平台解决方案。想在 nodejs 中使用可以参考 [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg)。

```sh
ffmpeg -i ai-for-good.mp4 -vn -acodec pcm_s16le -ar 44100 -ac 2 ai-for-good.wav
```

## Step3：音频转字幕

![azure-stt-captioning](/azure-stt-captioning.jpg)

> 更多内容可以参考[文档](https://speech.microsoft.com/portal/captioning)

由于 azure-ai/speech-sdk JavaScript 版本的生成的字幕不太符合要求，因此此时使用了 python 版本的 sdk，sdk 源码见 [Github](https://github.com/Azure-Samples/cognitive-services-speech-sdk/tree/master/scenarios/python/console/captioning)。

```sh
# 安装 python3 的依赖
pip3 install

# 运行脚本，将 .wav 音频文件转换成 .srt 字幕文件
# 参考上图设置参数 --profanity mask --offline --maxLineLength 60 --lines 1 --phrases "PMM;Cosmos DB;NoSQL"
python3 captioning/captioning.py --input ai-for-good.wav --output ai-for-good.srt --srt --profanity mask --key YOUR_KEY --region YOUR_REGION --offline --maxLineLength 60 --lines 1 --phrases "PMM;Cosmos DB;NoSQL"
```

## Step4：字幕翻译

翻译使用的是 Google 的 api。

```js
const { Translate } = require('@google-cloud/translate').v2
const fs = require('fs')

async function main() {
  // Instantiates a client
  const translate = new Translate({
    key: 'YOUR_KEY',
  })

  // 读取.srt文件内容
  const englishSrtContent = fs.readFileSync('./ai-for-good.srt', 'utf8')

  async function translateText(text) {
    // 翻译成中文（简体）
    const [translation] = await translate.translate(text, 'zh-CN')
    return translation
  }

  // 翻译英文.srt文件内容成中文（简体）
  const translatedSrtContent = await translateText(englishSrtContent)

  // 写入翻译后的内容到新的.srt文件
  fs.writeFileSync('ai-for-good-zh.srt', translatedSrtContent, 'utf8')
  console.log('translate done')
}

main()
```

### LANGUAGES

```py
LANGUAGES = {
    'af': 'afrikaans',
    'sq': 'albanian',
    'am': 'amharic',
    'ar': 'arabic',
    'hy': 'armenian',
    'az': 'azerbaijani',
    'eu': 'basque',
    'be': 'belarusian',
    'bn': 'bengali',
    'bs': 'bosnian',
    'bg': 'bulgarian',
    'ca': 'catalan',
    'ceb': 'cebuano',
    'ny': 'chichewa',
    'zh-cn': 'chinese (simplified)',
    'zh-tw': 'chinese (traditional)',
    'co': 'corsican',
    'hr': 'croatian',
    'cs': 'czech',
    'da': 'danish',
    'nl': 'dutch',
    'en': 'english',
    'eo': 'esperanto',
    'et': 'estonian',
    'tl': 'filipino',
    'fi': 'finnish',
    'fr': 'french',
    'fy': 'frisian',
    'gl': 'galician',
    'ka': 'georgian',
    'de': 'german',
    'el': 'greek',
    'gu': 'gujarati',
    'ht': 'haitian creole',
    'ha': 'hausa',
    'haw': 'hawaiian',
    'iw': 'hebrew',
    'he': 'hebrew',
    'hi': 'hindi',
    'hmn': 'hmong',
    'hu': 'hungarian',
    'is': 'icelandic',
    'ig': 'igbo',
    'id': 'indonesian',
    'ga': 'irish',
    'it': 'italian',
    'ja': 'japanese',
    'jw': 'javanese',
    'kn': 'kannada',
    'kk': 'kazakh',
    'km': 'khmer',
    'ko': 'korean',
    'ku': 'kurdish (kurmanji)',
    'ky': 'kyrgyz',
    'lo': 'lao',
    'la': 'latin',
    'lv': 'latvian',
    'lt': 'lithuanian',
    'lb': 'luxembourgish',
    'mk': 'macedonian',
    'mg': 'malagasy',
    'ms': 'malay',
    'ml': 'malayalam',
    'mt': 'maltese',
    'mi': 'maori',
    'mr': 'marathi',
    'mn': 'mongolian',
    'my': 'myanmar (burmese)',
    'ne': 'nepali',
    'no': 'norwegian',
    'or': 'odia',
    'ps': 'pashto',
    'fa': 'persian',
    'pl': 'polish',
    'pt': 'portuguese',
    'pa': 'punjabi',
    'ro': 'romanian',
    'ru': 'russian',
    'sm': 'samoan',
    'gd': 'scots gaelic',
    'sr': 'serbian',
    'st': 'sesotho',
    'sn': 'shona',
    'sd': 'sindhi',
    'si': 'sinhala',
    'sk': 'slovak',
    'sl': 'slovenian',
    'so': 'somali',
    'es': 'spanish',
    'su': 'sundanese',
    'sw': 'swahili',
    'sv': 'swedish',
    'tg': 'tajik',
    'ta': 'tamil',
    'te': 'telugu',
    'th': 'thai',
    'tr': 'turkish',
    'uk': 'ukrainian',
    'ur': 'urdu',
    'ug': 'uyghur',
    'uz': 'uzbek',
    'vi': 'vietnamese',
    'cy': 'welsh',
    'xh': 'xhosa',
    'yi': 'yiddish',
    'yo': 'yoruba',
    'zu': 'zulu',
}
```

## Step5：翻译字幕添加到视频

将中文字幕文件添加到视频中。

```sh
ffmpeg -i ai-for-good.mp4 -vf subtitles=ai-for-good-zh.srt ai-for-good.srt.zh.mp4
```

## 结果展示

<video width="100%" height="auto" controls>
  <source src="/videos/ai-for-good.srt.zh.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

## 总结分析

- 此方法会将字幕编码到视频文件中，后续无法使用 ffmpeg 将字幕移除。
- 建议将视频文件和音频文件分开存储，使用 html [video](https://www.w3schools.com/tags/tag_track.asp) 的能力 `track` 来嵌套字幕和视频。

### 示例

```sh
# convert srt to vtt
ffmpeg -i ai-for-good.srt ai-for-good.vtt
ffmpeg -i ai-for-good-zh.srt ai-for-good-zh.vtt
```

<video width="100%" height="auto" controls>
  <source src="/videos/ai-for-good.mp4" type="video/mp4">
  <track src="/videos/ai-for-good.vtt" kind="subtitles" srclang="en" default>
	<track src="/videos/ai-for-good-zh.vtt" kind="subtitles" srclang="zh">
  您的浏览器不支持视频标签。
</video>
