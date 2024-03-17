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

export async function addNewChar(newDraftChar: Character) {
  const oldChars = await getGhibliCharacters()

  let isUnique = false
  let randomId = ''

  // ensuring ID is random and unique
  while (!isUnique) {
    // logic copy pasted to generate random ID between 2 and 9 char long
    randomId = Math.random().toString(36).substring(2, 10)
    const randomIdExists = oldChars.some((char) => char.id === randomId)
    if (!randomIdExists) {
      isUnique = true
    }
  }

  const newChar = { ...newDraftChar, id: randomId }
  const newChars = [...oldChars, newChar]
  // turn array of newChars into JSON data
  const stringChars = JSON.stringify(newChars)
  // overwrite JSON file with new JSON data
  fs.writeFile(Path.join(__dirname, '../storage/data.json'), stringChars)
}
