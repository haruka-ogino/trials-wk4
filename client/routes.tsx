import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import List from './components/List'
import Char from './components/Char'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<List />} />
    <Route path="characters" element={<Char />} />
  </Route>
)
