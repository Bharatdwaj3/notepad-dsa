import { Header,Navbar,Hero,Footer } from '../components';
//import {Dtype} from './types';

const Home = () => {
  return (
    <>
      <div className="relative m-0 h-[1900px] w-screen bg-amber-500">
       
        <Header name="Header" type="PageSection"/>     
        <Navbar/>
        <Hero name="Hero" type="PageSection"/>
        <Footer name="Footer" type="PageSection"/> 

      </div>
      
        
        
    </>
  )
}

export default Home