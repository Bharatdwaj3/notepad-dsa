
import {Home, Notes, Community} from './pages/index'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
          <Route path='/Notes' element={<Notes/>}/>
          <Route path='/community' element={<Community/>}/>  
          <Route/>  
        </Routes>
      </Router>   
    </>
  )
}

export default App
