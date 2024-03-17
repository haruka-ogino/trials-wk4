import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import List from './components/List'
import Chars from './components/Chars'
import Character from './components/Character'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<List />} />
    <Route path="characters" element={<Chars />} />
    <Route path="characters/:id" element={<Character />} />
  </Route>
)
