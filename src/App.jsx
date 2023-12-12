import Header from '@/Components/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/Routes/Routes'
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
     <RoutesIndex />
    </BrowserRouter>
    </>
  )
}

export default App
