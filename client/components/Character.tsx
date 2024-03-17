import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCharById } from '../api/charApi'

export default function Character() {
  const { id } = useParams()

  // const idString = id?.toString()

  const {
    data: char,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: () => getCharById(id),
  })

  if (isLoading) return <p>Loading...</p>

  if (isError || !char) {
    return <p>Sorry, the character with ID {id} was not found.</p>
  }

  return (
    <>
      <h1>{char.name}</h1>
    </>
  )
}
