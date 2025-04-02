import {Ctype} from './types'

const Hero = ({name,type}:Ctype) => {
  return (
    <>
        <h1>{name}</h1>
        <h3>{type}</h3>
    </>
  )
}

export default Hero