# puppeteer-plugin-line-sticker

> A Puppeteer plugin to get the LINE Sticker

## Getting Started

```sh
$ npm i puppeteer-plugin-line-sticker
```

```example/index.js
const puppeteer = require('puppeteer')
const LINEStickerPlugin = require('puppeteer-plugin-line-sticker')

;(async () => {
  const browser = await puppeteer.launch()

  const result = await LINEStickerPlugin.default(browser, 15080)

  console.log(result)

  /**
   * { title: '天気の子',
   * description: '新海誠監督による映画「天気の子」のスタンプが登場！あの名シーンがそのままスタンプに！帆高や陽菜をはじめとした個性豊かなキャラクターたちと一緒にトークを楽しもう！',
   * author: '東宝',
   * price: '￥240',
   * creditBackRate: '1%',
   * images: 
   * [ 'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715078/android/sticker.png',
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715079/android/sticker.png',
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715080/android/sticker.png',
   *   .
   *   .
   *   .
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715117/android/sticker.png' ],
   * copyright: '© 2019 WYFP' }
   */

  await browser.close()
})()
```
