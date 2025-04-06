import { Header,Navbar,Hero,Footer } from '../components';


const Home = () => {
  return (
    <>
      <div className="relative m-0 h-[4000px] w-screen bg-amber-500">
       
        <Header/>     
        <Navbar/>
        <Hero/>
        <Footer name="Footer" type="PageSection"/> 

      </div>
      
        
        
    </>
  )
}

export default Home