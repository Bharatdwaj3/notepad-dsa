import {Ctype} from './types'

const Navbar = ({name, type}:Ctype) => {
  return (
    <>
     <div className='h-96 w-screen absolute inset-x-0 top-96 bg-orange-900'>
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>
    </>
  )
}

export default Navbar