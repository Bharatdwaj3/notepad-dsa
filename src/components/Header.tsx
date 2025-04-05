import {Ctype} from './types'

const Header = ({name,type}:Ctype) => {
  return (
    <>
        <div className='h-96 w-screen bg-blue-300 p-16'>
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>
    </>
  )
}

export default Header