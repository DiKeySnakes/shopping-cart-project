import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
