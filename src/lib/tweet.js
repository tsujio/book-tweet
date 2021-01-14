const HASH_TAG = 'よむよむ会'
const SERVICE_URL = 'https://yomuyomukai.tsujio.org'

export function getTweetText(book) {
  return `"${book.volumeInfo.title || ''}",` +
         ` ${(book.volumeInfo.authors || []).join(', ')},` +
         ` ${book.volumeInfo.publisher || ''},` +
         ` ${book.volumeInfo.publishedDate || ''}` +
         ` ${book.volumeInfo.canonicalVolumeLink || ''}` +
         `\n#${HASH_TAG} ${SERVICE_URL}`
}