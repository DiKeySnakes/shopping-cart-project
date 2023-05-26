import Acoustic_Orsa_Dreadnought_Vertical from '../assets/images/Acoustic_Orsa_Dreadnought_Vertical.png';
import Acoustic_Orsa_Dreadnought_CE_Vertical from '../assets/images/Acoustic_Orsa_Dreadnought_CE_Vertical.png';
import Acoustic_Orsa_GA_Vertical from '../assets/images/Acoustic_Orsa_GA_Vertical.png';
import Acoustic_Orsa_Grand_Auditorium_CE_Vertical from '../assets/images/Acoustic_Orsa_Grand_Auditorium_CE_Vertical.png';
import Acoustic_Elfdalia_II_Dreadnought_Natural_Ceder_Vertical from '../assets/images/Acoustic_Elfdalia_II_Dreadnought_Natural_Ceder_Vertical.png';
import Acoustic_Elfdalia_II_Dreadnought_CE_Natural_Ceder_Vertical from '../assets/images/Acoustic_Elfdalia_II_Dreadnought_CE_Natural_Ceder_Vertical.png';
import Acoustic_Elfdalia_II_Grand_Auditorium_Natural_Ceder_Vertical from '../assets/images/Acoustic_Elfdalia_II_Grand_Auditorium_Natural_Ceder_Vertical.png';
import Acoustic_Elfdalia_II_Grand_Auditorium_CE_Natural_Ceder_Vertical from '../assets/images/Acoustic_Elfdalia_II_Grand_Auditorium_CE_Natural_Ceder_Vertical.png';
import Acoustic_Mora_II_Concert_Vertical from '../assets/images/Acoustic_Mora_II_Concert_Vertical.png';
import Acoustic_Mora_II_Concert_CE_Vertical from '../assets/images/Acoustic_Mora_II_Concert_CE_Vertical.png';
import Acoustic_Mora_II_Dreadnought_Vertical from '../assets/images/Acoustic_Mora_II_Dreadnought_Vertical.png';
import Acoustic_Mora_II_Dreadnought_CE_Vertical from '../assets/images/Acoustic_Mora_II_Dreadnought_CE_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_Black_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_Black_Gloss_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_Natural_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_Natural_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_Lefthand_Black_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_Lefthand_Black_Gloss_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_CE_Black_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_CE_Black_Gloss_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_CE_Tobacco_Sunburst_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_CE_Tobacco_Sunburst_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_CE_Natural_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_CE_Natural_Vertical.png';
import Acoustic_Siljan_II_Dreadnought_CE_White_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Dreadnought_CE_White_Gloss_Vertical.png';
import Acoustic_Siljan_II_Grand_Auditorium_Vertical from '../assets/images/Acoustic_Siljan_II_Grand_Auditorium_Vertical.png';
import Acoustic_Siljan_II_Grand_Auditorium_CE_Black_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Grand_Auditorium_CE_Black_Gloss_Vertical.png';
import Acoustic_Siljan_II_Grand_Auditorium_CE_Tobacco_Sunburst_Vertical from '../assets/images/Acoustic_Siljan_II_Grand_Auditorium_CE_Tobacco_Sunburst_Vertical.png';
import Acoustic_Siljan_II_Grand_Auditorium_CE_Natural_Vertical from '../assets/images/Acoustic_Siljan_II_Grand_Auditorium_CE_Natural_Vertical.png';
import Acoustic_Siljan_II_Grand_Auditorium_CE_White_Gloss_Vertical from '../assets/images/Acoustic_Siljan_II_Grand_Auditorium_CE_White_Gloss_Vertical.png';
import Acoustic_Siljan_II_GA_12_String_Vertical from '../assets/images/Acoustic_Siljan_II_GA_12_String_Vertical.png';
import Acoustic_Seafarer_II_Parlor_E_Vertical from '../assets/images/Acoustic_Seafarer_II_Parlor_E_Vertical.png';

import { nanoid } from '@reduxjs/toolkit';

const productsListAcousticGuitars = [
  {
    src: Acoustic_Orsa_Dreadnought_Vertical,
    brand: 'Hagstrom',
    name: 'Orsa Dreadnought',
    color: 'Natural',
    info: '/MoreInfoOrsaDreadnought',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Orsa_Dreadnought_CE_Vertical,
    brand: 'Hagstrom',
    name: 'Orsa Dreadnought CE',
    color: 'Natural',
    info: '/MoreInfoOrsaDreadnoughtCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Orsa_GA_Vertical,
    brand: 'Hagstrom',
    name: 'Orsa Grand Auditorium',
    color: 'Natural',
    info: '/MoreInfoOrsaGrandAuditorium',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Orsa_Grand_Auditorium_CE_Vertical,
    brand: 'Hagstrom',
    name: 'Orsa Grand Auditorium CE',
    color: 'Natural',
    info: '/MoreInfoOrsaGrandAuditoriumCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Elfdalia_II_Dreadnought_Natural_Ceder_Vertical,
    brand: 'Hagstrom',
    name: 'Elfdalia II Dreadnought',
    color: 'Natural Ceder',
    info: '/MoreInfoElfdaliaIIDreadnought',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Elfdalia_II_Dreadnought_CE_Natural_Ceder_Vertical,
    brand: 'Hagstrom',
    name: 'Elfdalia II Dreadnought CE',
    color: 'Natural Ceder',
    info: '/MoreInfoElfdaliaIIDreadnoughtCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Elfdalia_II_Grand_Auditorium_Natural_Ceder_Vertical,
    brand: 'Hagstrom',
    name: 'Elfdalia II Grand Auditorium',
    color: 'Natural Ceder',
    info: '/MoreInfoElfdaliaIIGrandAuditorium',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Elfdalia_II_Grand_Auditorium_CE_Natural_Ceder_Vertical,
    brand: 'Hagstrom',
    name: 'Elfdalia II Grand Auditorium CE',
    color: 'Natural Ceder',
    info: '/MoreInfoElfdaliaIIGrandAuditoriumCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Mora_II_Concert_Vertical,
    brand: 'Hagstrom',
    name: 'Mora II Concert',
    color: 'Natural Mahogany',
    info: '/MoreInfoMoraIIConcert',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Mora_II_Concert_CE_Vertical,
    brand: 'Hagstrom',
    name: 'Mora II Concert CE',
    color: 'Natural Mahogany',
    info: '/MoreInfoMoraIIConcertCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Mora_II_Dreadnought_Vertical,
    brand: 'Hagstrom',
    name: 'Mora II Dreadnought',
    color: 'Natural Mahogany',
    info: '/MoreInfoMoraIIDreadnought',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Mora_II_Dreadnought_CE_Vertical,
    brand: 'Hagstrom',
    name: 'Mora II Dreadnought CE',
    color: 'Natural Mahogany',
    info: '/MoreInfoMoraIIDreadnoughtCE',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_Black_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought',
    color: 'Black Gloss',
    info: '/MoreInfoSiljanIIDreadnought',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_Natural_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought',
    color: 'Natural',
    info: '/MoreInfoSiljanIIDreadnought',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_Lefthand_Black_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought Lefthand',
    color: 'Black Gloss',
    info: '/MoreInfoSiljanIIDreadnought',
    price: '1250',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_CE_Black_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought CE',
    color: 'Black Gloss',
    info: '/MoreInfoSiljanIIDreadnoughtCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_CE_Tobacco_Sunburst_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought CE',
    color: 'Tobacco Sunburst',
    info: '/MoreInfoSiljanIIDreadnoughtCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_CE_Natural_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought CE',
    color: 'Natural',
    info: '/MoreInfoSiljanIIDreadnoughtCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Dreadnought_CE_White_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Dreadnought CE',
    color: 'White Gloss',
    info: '/MoreInfoSiljanIIDreadnoughtCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Grand_Auditorium_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium',
    color: 'Natural',
    info: '/MoreInfoSiljanIIGrandAuditorium',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Grand_Auditorium_CE_Black_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium CE',
    color: 'Black Gloss',
    info: '/MoreInfoSiljanIIGrandAuditoriumCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Grand_Auditorium_CE_Tobacco_Sunburst_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium CE',
    color: 'Tobacco Sunburst',
    info: '/MoreInfoSiljanIIGrandAuditoriumCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Grand_Auditorium_CE_Natural_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium CE',
    color: 'Natural',
    info: '/MoreInfoSiljanIIGrandAuditoriumCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_Grand_Auditorium_CE_White_Gloss_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium CE',
    color: 'White Gloss',
    info: '/MoreInfoSiljanIIGrandAuditoriumCE',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Siljan_II_GA_12_String_Vertical,
    brand: 'Hagstrom',
    name: 'Siljan II Grand Auditorium 12 String',
    color: 'Natural',
    info: '/MoreInfoSiljanIIGrandAuditorium12String',
    price: '1300',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Acoustic_Seafarer_II_Parlor_E_Vertical,
    brand: 'Hagstrom',
    name: 'Seafarer II Parlor E',
    color: 'Tobacco Sunburst',
    info: '/MoreInfoSeafarerIIParlorE',
    price: '1350',
    quantity: 1,
    id: nanoid(),
  },
];

export default productsListAcousticGuitars;
