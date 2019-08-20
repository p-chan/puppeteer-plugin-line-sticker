const puppeteer = require('puppeteer')
const LINEStickerPlugin = require('../dist')

;(async () => {
  const browser = await puppeteer.launch()

  const result = await LINEStickerPlugin.default(browser, 15080)

  console.log(result)

  await browser.close()
})()
