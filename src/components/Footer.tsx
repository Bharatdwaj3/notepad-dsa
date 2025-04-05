import {Ctype} from './types'

const Footer = ({name, type}:Ctype) => {
  return (
    <>
        <div className='p-16 h-96 w-screen bg-red-300 absolute inset-x-0 bottom-0'>
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>
    </>
  )
}

export default Footer