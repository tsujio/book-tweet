const HASH_TAG = 'よむよむ会'
const SERVICE_URL = 'https://yomuyomukai.tsujio.org'

export function getTweetText(book) {
  return `"${book.title || ''}",` +
         ` ${(book.author || '')},` +
         ` ${book.publisherName || ''},` +
         ` ${parseSalesDate(book.salesDate).slice(0, 2).filter(v => v).join('/') || ''}` +
         ` ${book.itemUrl || ''}` +
         `\n#${HASH_TAG} ${SERVICE_URL}`
}

export function parseSalesDate(salesDate) {
  let m = salesDate.match(/\s*(\d+)\D+(\d+)\D+(\d+)/)
  if (m) {
    return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])]
  }
  m = salesDate.match(/\s*(\d+)\D+(\d+)/)
  if (m) {
    return [parseInt(m[1]), parseInt(m[2]), null]
  }
  m = salesDate.match(/\s*(\d+)/)
  if (m) {
    return [parseInt(m[1]), null, null]
  }
  return [null, null, null]
}
