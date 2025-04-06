import { Header,Navbar,Hero,Footer } from '../components';


const About = () => {
  return (
    <>
      <div className="relative m-0 h-[4000px] w-screen bg-amber-500">
        <Header/>     
        <Navbar/>
        <Hero />
        <Footer/> 
      </div>
    </>
  )
}

export default About