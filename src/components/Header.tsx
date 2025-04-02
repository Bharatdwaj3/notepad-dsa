import {Ctype} from './types'

const Header = ({name,type}:Ctype) => {
  return (
    <>
        <h1>{name}</h1>
        <h3>{type}</h3>
    </>
  )
}

export default Header