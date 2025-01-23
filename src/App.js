import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Membership from './components/Membership';
import MoveSlider from './components/MoveSlider';
import WhyJoin from './components/WhyJoin';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header/>
      <Banner/>
      <MoveSlider/>
      <WhyJoin/>
      <FAQ/>
      <Membership/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
};

export default App;