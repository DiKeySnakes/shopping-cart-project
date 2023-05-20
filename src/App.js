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
import MoreInfoRetroScapeHIII from './components/MoreInfoRetroScapeHIII';
import MoreInfoViking from './components/MoreInfoViking';
import MoreInfoViking67 from './components/MoreInfoViking67';
import MoreInfoVikingGoldTop from './components/MoreInfoVikingGoldTop';
import MoreInfoSuperVikingTransBrown from './components/MoreInfoSuperVikingTransBrown';
import MoreInfoFantomenCustom from './components/MoreInfoFantomenCustom';
import MoreInfoFantomen from './components/MoreInfoFantomen';
import MoreInfoSwede from './components/MoreInfoSwede';
import MoreInfoSuperSwede from './components/MoreInfoSuperSwede';
import MoreInfoAlvar from './components/MoreInfoAlvar';
import MoreInfoUltraMax from './components/MoreInfoUltraMax';
import MoreInfoSuperViking from './components/MoreInfoSuperViking';
import MoreInfoUltraSwede from './components/MoreInfoUltraSwede';
import MoreInfoUltraSwedeESN from './components/MoreInfoUltraSwedeESN';
import MoreInfoVikingDeluxeBaritone from './components/MoreInfoVikingDeluxeBaritone';
import MoreInfoVikingDeluxe12 from './components/MoreInfoVikingDeluxe12';
import MoreInfoTremarVikingDeluxe from './components/MoreInfoTremarVikingDeluxe';
import MoreInfoHJ500 from './components/MoreInfoHJ500';
import MoreInfoTremarHJ500 from './components/MoreInfoTremarHJ500';
import MoreInfoHJ800 from './components/MoreInfoHJ800';
import MoreInfoHL550 from './components/MoreInfoHL550';
import MoreInfoSuperSwedeBass from './components/MoreInfoSuperSwedeBass';
import MoreInfoSwedeBass from './components/MoreInfoSwedeBass';
import MoreInfoVikingBass from './components/MoreInfoVikingBass';
import MoreInfoH8IIBass from './components/MoreInfoH8IIBass';
import MoreInfoOrsaDreadnought from './components/MoreInfoOrsaDreadnought';
import MoreInfoOrsaDreadnoughtCE from './components/MoreInfoOrsaDreadnoughtCE';
import MoreInfoOrsaGrandAuditorium from './components/MoreInfoOrsaGrandAuditorium';
import MoreInfoOrsaGrandAuditoriumCE from './components/MoreInfoOrsaGrandAuditoriumCE';
import MoreInfoElfdaliaIIDreadnought from './components/MoreInfoElfdaliaIIDreadnought';
import MoreInfoElfdaliaIIDreadnoughtCE from './components/MoreInfoElfdaliaIIDreadnoughtCE';
import MoreInfoElfdaliaIIGrandAuditorium from './components/MoreInfoElfdaliaIIGrandAuditorium';
import MoreInfoElfdaliaIIGrandAuditoriumCE from './components/MoreInfoElfdaliaIIGrandAuditoriumCE';
import MoreInfoMoraIIConcert from './components/MoreInfoMoraIIConcert';
import MoreInfoMoraIIConcertCE from './components/MoreInfoMoraIIConcertCE';
import MoreInfoMoraIIDreadnought from './components/MoreInfoMoraIIDreadnought';
import MoreInfoMoraIIDreadnoughtCE from './components/MoreInfoMoraIIDreadnoughtCE';
import MoreInfoSiljanIIDreadnought from './components/MoreInfoSiljanIIDreadnought';
import MoreInfoSiljanIIDreadnoughtCE from './components/MoreInfoSiljanIIDreadnoughtCE';
import MoreInfoSiljanIIGrandAuditorium from './components/MoreInfoSiljanIIGrandAuditorium';
import MoreInfoSiljanIIGrandAuditoriumCE from './components/MoreInfoSiljanIIGrandAuditoriumCE';
import MoreInfoSiljanIIGrandAuditorium12String from './components/MoreInfoSiljanIIGrandAuditorium12String';
import MoreInfoSeafarerIIParlorE from './components/MoreInfoSeafarerIIParlorE';
import NotFound from './components/NotFound';
import NewsP01 from './components/NewsP01';
import NewsP02 from './components/NewsP02';
import NewsP03 from './components/NewsP03';
import NewsRefs01 from './components/NewsRefs01';
import NewsRefs02 from './components/NewsRefs02';
import NewsRefs03 from './components/NewsRefs03';
import NewsRefs04 from './components/NewsRefs04';
import InternationalDistributors from './components/InternationalDistributors';
import OwnersCare from './components/OwnersCare';
import OwnersCareRefs01 from './components/OwnersCareRefs01';
import OwnersCareRefs02 from './components/OwnersCareRefs02';
import OwnersCareRefs03 from './components/OwnersCareRefs03';
import OwnersCareRefs04 from './components/OwnersCareRefs04';
import OwnersCareRefs05 from './components/OwnersCareRefs05';
import InstrumentArchive from './components/InstrumentArchive';
import MoreInfoSuperSwedeLTD from './components/MoreInfoSuperSwedeLTD';
import MoreInfoNorthernSuperSwede from './components/MoreInfoNorthernSuperSwede';
import MoreInfoNorthernSwede from './components/MoreInfoNorthernSwede';
import MoreInfoVikingDeluxe from './components/MoreInfoVikingDeluxe';
import MoreInfoThreeKings from './components/MoreInfoThreeKings';
import MoreInfoVikingDeluxeCustomLimited2016 from './components/MoreInfoVikingDeluxeCustomLimited2016';
import MoreInfoNorthernSuperSwedeBass from './components/MoreInfoNorthernSuperSwedeBass';
import MoreInfoHB8 from './components/MoreInfoHB8';
import Footer from './components/Footer';
import Cart from './features/cart/Cart';
import Artists from './components/Artists';
import { Route, Routes } from 'react-router-dom';
import ScrollToTopHelper from './components/ScrollToTopHelper';
import NavFooter from './components/NavFooter';
import Credits from './components/Credits';

function App() {
  return (
    <div className='App'>
      <Header />
      <SecondaryHeader />
      <ScrollToTopHelper>
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
          <Route
            path='/MoreInfoRetroScapeHIII'
            element={<MoreInfoRetroScapeHIII />}
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
          <Route
            path='/MoreInfoUltraSwedeESN'
            element={<MoreInfoUltraSwedeESN />}
          />
          <Route path='/MoreInfoUltraSwede' element={<MoreInfoUltraSwede />} />
          <Route
            path='/MoreInfoSuperViking'
            element={<MoreInfoSuperViking />}
          />
          <Route path='/MoreInfoViking67' element={<MoreInfoViking67 />} />
          <Route
            path='/MoreInfoVikingDeluxeBaritone'
            element={<MoreInfoVikingDeluxeBaritone />}
          />
          <Route
            path='/MoreInfoVikingDeluxe12'
            element={<MoreInfoVikingDeluxe12 />}
          />
          <Route
            path='/MoreInfoTremarVikingDeluxe'
            element={<MoreInfoTremarVikingDeluxe />}
          />
          <Route path='/MoreInfoHJ500' element={<MoreInfoHJ500 />} />
          <Route
            path='/MoreInfoTremarHJ500'
            element={<MoreInfoTremarHJ500 />}
          />
          <Route path='/MoreInfoHJ800' element={<MoreInfoHJ800 />} />
          <Route path='/MoreInfoHL550' element={<MoreInfoHL550 />} />
          <Route
            path='/MoreInfoSuperSwedeBass'
            element={<MoreInfoSuperSwedeBass />}
          />
          <Route path='/MoreInfoSwedeBass' element={<MoreInfoSwedeBass />} />
          <Route path='/MoreInfoVikingBass' element={<MoreInfoVikingBass />} />
          <Route path='/MoreInfoH8IIBass' element={<MoreInfoH8IIBass />} />
          <Route
            path='/MoreInfoOrsaDreadnought'
            element={<MoreInfoOrsaDreadnought />}
          />
          <Route
            path='/MoreInfoOrsaDreadnoughtCE'
            element={<MoreInfoOrsaDreadnoughtCE />}
          />
          <Route
            path='/MoreInfoOrsaGrandAuditorium'
            element={<MoreInfoOrsaGrandAuditorium />}
          />
          <Route
            path='/MoreInfoOrsaGrandAuditoriumCE'
            element={<MoreInfoOrsaGrandAuditoriumCE />}
          />
          <Route
            path='/MoreInfoElfdaliaIIDreadnought'
            element={<MoreInfoElfdaliaIIDreadnought />}
          />
          <Route
            path='/MoreInfoElfdaliaIIDreadnoughtCE'
            element={<MoreInfoElfdaliaIIDreadnoughtCE />}
          />
          <Route
            path='/MoreInfoElfdaliaIIGrandAuditorium'
            element={<MoreInfoElfdaliaIIGrandAuditorium />}
          />
          <Route
            path='/MoreInfoElfdaliaIIGrandAuditoriumCE'
            element={<MoreInfoElfdaliaIIGrandAuditoriumCE />}
          />
          <Route
            path='/MoreInfoMoraIIConcert'
            element={<MoreInfoMoraIIConcert />}
          />
          <Route
            path='/MoreInfoMoraIIConcertCE'
            element={<MoreInfoMoraIIConcertCE />}
          />
          <Route
            path='/MoreInfoMoraIIDreadnought'
            element={<MoreInfoMoraIIDreadnought />}
          />
          <Route
            path='/MoreInfoMoraIIDreadnoughtCE'
            element={<MoreInfoMoraIIDreadnoughtCE />}
          />
          <Route
            path='/MoreInfoSiljanIIDreadnought'
            element={<MoreInfoSiljanIIDreadnought />}
          />
          <Route
            path='/MoreInfoSiljanIIDreadnoughtCE'
            element={<MoreInfoSiljanIIDreadnoughtCE />}
          />
          <Route
            path='/MoreInfoSiljanIIGrandAuditorium'
            element={<MoreInfoSiljanIIGrandAuditorium />}
          />
          <Route
            path='/MoreInfoSiljanIIGrandAuditoriumCE'
            element={<MoreInfoSiljanIIGrandAuditoriumCE />}
          />
          <Route
            path='/MoreInfoSiljanIIGrandAuditorium12String'
            element={<MoreInfoSiljanIIGrandAuditorium12String />}
          />
          <Route
            path='/MoreInfoSeafarerIIParlorE'
            element={<MoreInfoSeafarerIIParlorE />}
          />
          <Route path='*' element={<NotFound />} />
          <Route path='/NewsP01' element={<NewsP01 />} />
          <Route path='/NewsP02' element={<NewsP02 />} />
          <Route path='/NewsP03' element={<NewsP03 />} />
          <Route path='/NewsRefs01' element={<NewsRefs01 />} />
          <Route path='/NewsRefs02' element={<NewsRefs02 />} />
          <Route path='/NewsRefs03' element={<NewsRefs03 />} />
          <Route path='/NewsRefs04' element={<NewsRefs04 />} />
          <Route
            path='/InternationalDistributors'
            element={<InternationalDistributors />}
          />
          <Route path='/OwnersCare' element={<OwnersCare />} />
          <Route path='/OwnersCareRefs01' element={<OwnersCareRefs01 />} />
          <Route path='/OwnersCareRefs02' element={<OwnersCareRefs02 />} />
          <Route path='/OwnersCareRefs03' element={<OwnersCareRefs03 />} />
          <Route path='/OwnersCareRefs04' element={<OwnersCareRefs04 />} />
          <Route path='/OwnersCareRefs05' element={<OwnersCareRefs05 />} />
          <Route path='/InstrumentArchive' element={<InstrumentArchive />} />
          <Route
            path='/MoreInfoSuperSwedeLTD'
            element={<MoreInfoSuperSwedeLTD />}
          />
          <Route
            path='/MoreInfoNorthernSuperSwede'
            element={<MoreInfoNorthernSuperSwede />}
          />
          <Route
            path='/MoreInfoNorthernSwede'
            element={<MoreInfoNorthernSwede />}
          />
          <Route
            path='/MoreInfoVikingDeluxe'
            element={<MoreInfoVikingDeluxe />}
          />
          <Route path='/MoreInfoThreeKings' element={<MoreInfoThreeKings />} />
          <Route
            path='/MoreInfoVikingDeluxeCustomLimited2016'
            element={<MoreInfoVikingDeluxeCustomLimited2016 />}
          />
          <Route
            path='/MoreInfoNorthernSuperSwedeBass'
            element={<MoreInfoNorthernSuperSwedeBass />}
          />
          <Route path='/MoreInfoHB8' element={<MoreInfoHB8 />} />
        </Routes>
      </ScrollToTopHelper>
      <NavFooter />
      <Credits />
      <Footer />
    </div>
  );
}

export default App;
