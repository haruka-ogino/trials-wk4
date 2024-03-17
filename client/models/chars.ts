export interface NewCharacter {
  name: string
  movie: string[]
  imgUrl: string
}

export interface Character extends NewCharacter {
  id: string
}
