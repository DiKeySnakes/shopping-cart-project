import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts';
import Heritage from './components/Heritage';
import ElectricGuitars from './components/ElectricGuitars';
import Basses from './components/Basses';
import AcousticGuitars from './components/AcousticGuitars';
import MoreInfo from './components/MoreInfo';
import MoreInfoPatSmear from './components/MoreInfoPatSmear';
import MoreInfoImpalaCopperburst from './components/MoreInfoImpalaCopperburst';
import MoreInfoRetroScapeImpala from './components/MoreInfoRetroScapeImpala';
import MoreInfoViking from './components/MoreInfoViking';
import MoreInfoVikingGoldTop from './components/MoreInfoVikingGoldTop';
import MoreInfoSuperVikingTransBrown from './components/MoreInfoSuperVikingTransBrown';
import MoreInfoFantomenCustom from './components/MoreInfoFantomenCustom';
import MoreInfoFantomen from './components/MoreInfoFantomen';
import MoreInfoSwede from './components/MoreInfoSwede';
import MoreInfoSuperSwede from './components/MoreInfoSuperSwede';
import MoreInfoAlvar from './components/MoreInfoAlvar';
import MoreInfoUltraMax from './components/MoreInfoUltraMax';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Cart from './features/cart/Cart';
import Artists from './components/Artists';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <SecondaryHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Heritage' element={<Heritage />} />
        <Route path='/Artists' element={<Artists />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/ElectricGuitars' element={<ElectricGuitars />} />
        <Route path='/Basses' element={<Basses />} />
        <Route path='/AcousticGuitars' element={<AcousticGuitars />} />
        <Route path='/MoreInfo' element={<MoreInfo />} />
        <Route path='/MoreInfoPatSmear' element={<MoreInfoPatSmear />} />
        <Route
          path='/MoreInfoImpalaCopperburst'
          element={<MoreInfoImpalaCopperburst />}
        />
        <Route
          path='/MoreInfoRetroScapeImpala'
          element={<MoreInfoRetroScapeImpala />}
        />
        <Route path='/MoreInfoViking' element={<MoreInfoViking />} />
        <Route
          path='/MoreInfoVikingGoldTop'
          element={<MoreInfoVikingGoldTop />}
        />
        <Route
          path='/MoreInfoSuperVikingTransBrown'
          element={<MoreInfoSuperVikingTransBrown />}
        />
        <Route
          path='/MoreInfoFantomenCustom'
          element={<MoreInfoFantomenCustom />}
        />
        <Route path='/MoreInfoFantomen' element={<MoreInfoFantomen />} />
        <Route path='/MoreInfoSwede' element={<MoreInfoSwede />} />
        <Route path='/MoreInfoSuperSwede' element={<MoreInfoSuperSwede />} />
        <Route path='/MoreInfoAlvar' element={<MoreInfoAlvar />} />
        <Route path='/MoreInfoUltraMax' element={<MoreInfoUltraMax />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
