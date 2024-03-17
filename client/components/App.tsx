import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="container">
        <h1>Ghibli File System</h1>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
