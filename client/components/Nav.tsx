import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="container">
      <p>Navigation</p>
      <Link to="/characters">Characters</Link>
      <Link to="/add-new-character">Add A New Character</Link>
    </div>
  )
}

export default Nav
