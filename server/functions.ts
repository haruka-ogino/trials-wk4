import * as fs from 'node:fs/promises'
import url from 'node:url'
import Path from 'node:path'
import { Character } from '../client/models/chars'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

export async function getGhibliCharacters(): Promise<Character[]> {
  const json = await fs.readFile(
    Path.join(__dirname, '../storage/data.json'),
    'utf-8'
  )
  // convert JSON data to JS
  const data = JSON.parse(json)
  return data as Character[]
}

export async function getCharacterById(id: string): Promise<Character> {
  const allChar = await getGhibliCharacters()
  // convert JSON data to JS
  const char = allChar.find((item) => item.id === id)
  return char as Character
}
