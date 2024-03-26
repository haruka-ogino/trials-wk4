import express from 'express'
import { addNewChar, getCharacterById, getGhibliCharacters } from '../functions'

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

router.get('/:id', async (req, res) => {
  const charId = req.params.id
  const char = await getCharacterById(charId)
  if (char) {
    res.status(200).json(char)
  } else {
    res.sendStatus(500)
  }
})

router.post('/add-char', async (req, res) => {
  try {
    const newChar = req.body
    await addNewChar(newChar)
    res.status(200).send('New Character Added')
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
export default router
