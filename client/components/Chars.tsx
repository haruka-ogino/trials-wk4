import { useQuery } from '@tanstack/react-query'
import { getChars } from '../api/charApi'
import { Link } from 'react-router-dom'

function Chars() {
  const {
    data: chars,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: getChars,
  })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Error</p>
  console.log(chars)
  if (chars) {
    return (
      <>
        <h1>This is the Char page</h1>
        <ul>
          {chars.map((char) => (
            <li key={char.id}>
              <Link to={`/characters/${char.id}`}>{char.name}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Chars
