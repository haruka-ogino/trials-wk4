import request from 'supertest'
import { test, expect, it, vi, describe } from 'vitest'
import router from '../routes/ghibli'
import server from '../server.ts'
import * as fs from 'node:fs/promises'

vi.mock('node:fs/promises')

const testData = [
  {
    id: '1',
    name: 'Totoro',
    movie: ['My Neighbor Totoro'],
    imgUrl: 'https://www.ghibli.jp/gallery/totoro030.jpg',
  },
  {
    id: '2',
    name: 'Chihiro Ogino',
    movie: ['Spirited Away'],
    imgUrl: 'https://www.ghibli.jp/gallery/chihiro019.jpg',
  },
]

describe('Listing all the characters', () => {
  it('lists the characters', async () => {
    vi.mocked(fs.readFile).mockImplementation(async () =>
      JSON.stringify(testData, null, 2)
    )
    // real data
    const res = await request(server).get('/api/v1/ghibli')
    expect(res.statusCode).toBe(200)
    // mock
    expect(res.body).toStrictEqual([
      {
        id: '1',
        name: 'Totoro',
        movie: ['My Neighbor Totoro'],
        imgUrl: 'https://www.ghibli.jp/gallery/totoro030.jpg',
      },
      {
        id: '2',
        name: 'Chihiro Ogino',
        movie: ['Spirited Away'],
        imgUrl: 'https://www.ghibli.jp/gallery/chihiro019.jpg',
      },
    ])
  })
})

// test('/ to return no face ', async () => {
//   //arrange
//   // const expected = 'No Face'

//   //act
//   const res = await request(server).get('/api/v1/ghibli')
//   //assert
//   expect(res.statusCode).toBe(200)
// })
