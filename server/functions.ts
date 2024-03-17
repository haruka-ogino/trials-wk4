import * as fs from 'node:fs/promises'
import url from 'node:url'
import Path from 'node:path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export async function getGhibliCharacters() {
  const json = await fs.readFile(
    Path.join(__dirname, '../storage/data.json'),
    'utf-8'
  )
  // convert JSON data to JS
  const data = JSON.parse(json)
  return data
}
