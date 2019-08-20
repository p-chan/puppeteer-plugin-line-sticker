import puppeteer from 'puppeteer'

export default async (browser: puppeteer.Browser, id: number) => {
  const page = await browser.newPage()

  await page.goto(`https://store.line.me/stickershop/product/${id}/ja`, {
    waitUntil: 'domcontentloaded'
  })

  const title = await page.$eval(
    '.mdCMN38Item01Ttl',
    element => element.textContent
  )

  const author = await page.$eval(
    '.mdCMN38Item01Author',
    element => element.textContent
  )

  const description = await page.$eval(
    '.mdCMN38Item01Txt',
    element => element.textContent
  )

  const price = await page.$eval(
    '.mdCMN38Item01Price',
    element => element.textContent
  )

  const creditBackRate = await page.$eval(
    '.mdCMN38Item01CashNum .mdCMN38Ins',
    element => element.textContent!.replace('還元', '')
  )

  const images = await page.$$eval('.FnPreview', images => {
    return images.map(image => {
      const style = image.getAttribute('style')!

      return style
        .replace('background-image:url(', '')
        .replace(';compress=true);', '')
    })
  })

  const copyright = await page.$eval(
    '.mdCMN09Copy',
    element => element.textContent
  )

  await page.close()

  return {
    title: title,
    description: description,
    author: author,
    price: price,
    creditBackRate: creditBackRate,
    images: images,
    copyright: copyright
  }
}
