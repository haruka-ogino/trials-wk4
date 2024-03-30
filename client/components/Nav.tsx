import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <Link to="/characters">
        <p>Characters</p>
      </Link>
      <Link to="/add-new-character">
        <p>Add A New Character</p>
      </Link>
    </div>
  )
}

export default Nav
