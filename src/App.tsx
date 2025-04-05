
import {Home, Content, About} from './pages/index'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
          <Route path='/content' element={<Content name="ContentPage" type="Page"/>  }/>
          <Route path='/about' element={<About name="AboutPage" type="Page"/>}/>  
          <Route/>  
        </Routes>
      </Router>   
    </>
  )
}

export default App
