import {Ctype} from './types'

const Hero = ({name,type}:Ctype) => {
  return (
    <>
       <div className='p-16 h-[1100px] w-screen absolute inset-x-0 top-115 bg-green-300'>
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>
    </>
  )
}

export default Hero