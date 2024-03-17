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
    const res = await request.get(
      `https://ghibli-api.devacademy.nz/ghibli/${id}`
    )
    return res.body as Character
  } catch (error) {
    console.error(error)
  }
}

export async function addChar(newChar: NewCharacter) {
  try {
    const res = await request
      .post(`https://ghibli-api.devacademy.nz/ghibli`)
      .send(newChar)
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
