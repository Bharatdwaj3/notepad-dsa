
import {Home, Content, About} from './pages/index'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
          <Route path='/content' element={<Content/>}/>
          <Route path='/about' element={<About/>}/>  
          <Route/>  
        </Routes>
      </Router>   
    </>
  )
}

export default App
