import { Header,Navbar,Hero,Footer } from '../components';
import {Dtype} from './types';

const Home = ({name,type}:Dtype) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>{type}</h3>

        <Header name="Header" type="PageSection"/>     
        <Navbar name="Navabr" type="PageSection"/>
        <Hero name="Hero" type="PageSection"/>
        <Footer name="Footer" type="PageSection"/> 
    </>
  )
}

export default Home