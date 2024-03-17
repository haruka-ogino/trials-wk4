import express from 'express'
import { Character } from '../../client/models/chars'
import { getGhibliCharacters } from '../functions'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await getGhibliCharacters()
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
export default router
