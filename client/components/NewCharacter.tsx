import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { addChar } from '../api/charApi'
import { useState } from 'react'

export default function NewCharacter() {
  const queryClient = useQueryClient()

  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [movie, setMovie] = useState<string[]>([])

  const newCharAddition = useMutation({
    mutationFn: addChar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
      setName('')
      setImage('')
      setMovie([])
    },
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    newCharAddition.mutate({
      name: name,
      movie: movie,
      imgUrl: image,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Character Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Name"
        />
        <label htmlFor="movies">Films and shows character is seen on:</label>
        <input
          onChange={(e) => setMovie(e.target.value.split(','))}
          type="text"
          name="movies"
          id="movies"
          value={movie.join(',')}
          placeholder="Movies separated by ','"
        />
        <label htmlFor="image">Image Link:</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          id="image"
          value={image}
          placeholder="Img URL"
        />
        <button type="submit">Add Character</button>
      </form>
    </>
  )
}
