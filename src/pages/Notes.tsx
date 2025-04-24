import { Navbar,SidePanel,Footer } from '../components';


const About = () => {
  return (
    <>
      <div className="relative  h-[3500px] w-screen bg-sky-100">
        <Navbar/>
        <div className="absolute top-[590px] h-[2500px] w-[1520px] bg-sky-300">



          <SidePanel/>
        

        </div>
        <div className='absolute bottom-0 inset-x-0'>
          <Footer />
        </div>
      </div>
      
    </>
  )
}

export default About