import request from 'superagent'
import { Character, NewCharacter } from '../models/chars'

export async function getChars() {
  try {
    const res = await request.get('/api/v1/ghibli')
    return res.body as Character[]
  } catch (error) {
    console.error(error)
  }
}

export async function getCharById(id: string) {
  try {
    const res = await request.get(`/api/v1/ghibli/${id}`)
    return res.body as Character
  } catch (error) {
    console.error(error)
  }
}

export async function addChar(newChar: NewCharacter) {
  try {
    const res = await request.post(`/api/v1/ghibli//add-char`).send(newChar)
    return res.body as NewCharacter
  } catch (error) {
    console.error(error)
  }
}

// export async function editChat(id: string) {
//   try {
//     const res = await request
//       .patch(`https://ghibli-api.devacademy.nz/ghibli`)
//     return res.body as NewCharacter
//   } catch (error) {
//     console.error(error)
//   }
// }
