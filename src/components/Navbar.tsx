import {Ctype} from './types'

const Navbar = ({name, type}:Ctype) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>{type}</h3>
    </>
  )
}

export default Navbar