import './App.css'
import Page1 from './Pages/Page1'
import { Route,Routes } from 'react-router-dom'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Page1/>} />
            <Route path='/Page1' element={<Page1/>} />

      <Route path='/Page2' element={<Page2/>} />
      <Route path='/Page3' element={<Page3/>} />
    </Routes>
    </>
  )
}

export default App
