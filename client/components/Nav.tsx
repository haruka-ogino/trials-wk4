import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="container">
      <p>Navigation</p>
      <Link to="/characters">Characters</Link>
    </div>
  )
}

export default Nav
