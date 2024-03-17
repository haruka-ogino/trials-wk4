import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import ghibli from './routes/ghibli'

const server = express()

server.use(express.json())

server.use('/api/v1/ghibli', ghibli)

export default server
