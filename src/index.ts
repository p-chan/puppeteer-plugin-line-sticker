import puppeteer from 'puppeteer'

export default async (browser: puppeteer.Browser, id: number) => {
  const page = await browser.newPage()

  await page.goto(`https://store.line.me/stickershop/product/${id}/ja`, {
    waitUntil: 'domcontentloaded'
  })

  const images = await page.$$eval('.FnPreview', images => {
    return images.map(image => {
      const style = image.getAttribute('style')!

      return style
        .replace('background-image:url(', '')
        .replace(';compress=true);', '')
    })
  })

  await page.close()

  return images
}
