import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import Nav from './Nav'
import List from './List.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="container">
        <h1>Ghibli File System</h1>
        <Nav />
        <List />
        <Outlet />
      </div>
    </>
  )
}

export default App
