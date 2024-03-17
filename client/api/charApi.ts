import request from 'superagent'
import { Character } from '../models/chars'

export async function getChars() {
  try {
    const res = await request.get('https://ghibli-api.devacademy.nz/ghibli')
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
