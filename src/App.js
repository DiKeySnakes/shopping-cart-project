import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts';
import MoreInfo from './components/MoreInfo';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Cart from './features/cart/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/MoreInfo' element={<MoreInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
