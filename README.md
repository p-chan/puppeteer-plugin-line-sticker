# puppeteer-plugin-line-sticker-url

> A Puppeteer plugin to get the LINE Sticker URL

## Getting Started

```sh
$ npm i puppeteer-plugin-line-sticker-url
```

```example/index.js
const puppeteer = require('puppeteer')
const LINEStickerURLPlugin = require('puppeteer-plugin-line-sticker-url')

;(async () => {
  const browser = await puppeteer.launch()

  const result = await LINEStickerURLPlugin.default(browser, 15080)

  console.log(result)

  /**
   * [ 'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715078/android/sticker.png',
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715079/android/sticker.png',
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715080/android/sticker.png',
   *   .
   *   .
   *   .
   *   'https://stickershop.line-scdn.net/stickershop/v1/sticker/220715117/android/sticker.png' ]
   */

  await browser.close()
})()
```
