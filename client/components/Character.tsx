import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCharById } from '../api/charApi'
import { useEffect, useState } from 'react'

export default function Character() {
  const { id } = useParams()

  // const idString = id?.toString()

  const {
    data: char,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharById(id),
  })
  // console.log(char)

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 1000)
  // }, [])

  if (isLoading) return <p>Loading...</p>

  if (isError || !char) {
    return <p>Sorry, the character with ID {id} was not found.</p>
  }

  if (char) {
    return (
      <>
        <h1>{char.name}</h1>
        <img src={char.imgUrl} alt={char.name} />
        <h2>As seen on:</h2>
        <ul>
          {char.movie?.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </>
      // <div>
      //   <h1>{char.name}</h1>
      // </div>
    )
  }
}
