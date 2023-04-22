import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts';
import Heritage from './components/Heritage';
import MoreInfo from './components/MoreInfo';
import MoreInfoSwede from './components/MoreInfoSwede';
import MoreInfoSuperSwede from './components/MoreInfoSuperSwede';
import MoreInfoAlvar from './components/MoreInfoAlvar';
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
        <Route path='/MoreInfo' element={<MoreInfo />} />
        <Route path='/MoreInfoSwede' element={<MoreInfoSwede />} />
        <Route path='/MoreInfoSuperSwede' element={<MoreInfoSuperSwede />} />
        <Route path='/MoreInfoAlvar' element={<MoreInfoAlvar />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
