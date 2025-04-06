import {Ctype} from './types'

const Hero = ({name,type}:Ctype) => {
  return (
    <>
       <div className='p-16 h-[1900px] w-screen absolute top-115 bg-green-300'>
          <h1>{name}</h1>
          <h3>{type}</h3>
            <div className='mt-32 p-8 h-96 w-[1360px] rounded-xl bg-amber-200'>

            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-6 p-8 h-[800px] w-[1360px] '>
                <div className='p-8 bg-amber-300 rounded-2xl'>AGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>BGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>CGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>DGrid</div>
            </div>
        </div>
    </>
  )
}

export default Hero