import Swede_Crimson_Flame_Vertical from '../assets/images/Swede_Crimson_Flame_Vertical.png';
import Swede_Mandarin_Burst_Vertical from '../assets/images/Swede_Mandarin_Burst_Vertical.png';
import Swede_Dark_Storm_Vertical from '../assets/images/Swede_Dark_Storm_Vertical.png';
import Swede_Gold_Vertical from '../assets/images/Swede_Gold_Vertical.png';
import TakamineEF381SC from '../assets/images/Dreadnought_Takamine_EF381SC_Twelve_String_Acoustic_Guitar.png';
import ESPLTDEC200QM from '../assets/images/ESP_LTD_EC_200QM.png';
import ESPLTDEC1000BassGuitar from '../assets/images/ESP_LTD_EC_1000_Bass_guitar.png';
import FenderJaguar from '../assets/images/Fender_Jaguar.png';
import FenderJazzBass from '../assets/images/Fender_Jazz_Bass.png';
import FenderSquierMustang from '../assets/images/Fender_Squier_Mustang.png';
import FenderPrecisionBass from '../assets/images/Fender_Precision_Bass.png';
import FenderStratocasterAmericanDeluxe from '../assets/images/Fender_Stratocaster_American_Deluxe_Series.png';
import FenderStratocasterFingerboard from '../assets/images/Fender_Stratocaster_Fingerboard.png';
import FenderTelecaster from '../assets/images/Fender_Telecaster_Electric_guitar.png';
import GibsonBBKing from '../assets/images/Gibson_B_B_King.png';
import FenderTelecasterRed from '../assets/images/Fender_Telecaster_Red.png';
import GibsonES345 from '../assets/images/Gibson_ES_345_Electric_guitar.png';
import GibsonLesPaulStandard from '../assets/images/Gibson_Les_Paul_Standard.png';
import GibsonLesPaulStudioSunburst from '../assets/images/Gibson_Les_Paul_Studio_Sunburst_Electric_guitar.png';
import GibsonSGStandard from '../assets/images/Gibson_SG_Standard_electric_guitar.png';
import GretschG5622TCBElectromatic from '../assets/images/Gretsch_G5622T_CB_Electromatic.png';
import IbanezAcousticDreadnought from '../assets/images/Ibanez_Acoustic_Dreadnought.png';
import IbanezFRM150PaulGilbertSignature from '../assets/images/Ibanez_FRM150_Paul_Gilbert_Signature.png';
import IbanezAcoustic from '../assets/images/Ibanez_Acoustic_guitar.png';
import IbanezGSR205Bass from '../assets/images/Ibanez_GSR205_Bass_guitar.png';
import IbanezRGSevenString from '../assets/images/Ibanez_RG_Seven_String_guitar.png';
import IbanezRGRed from '../assets/images/Ibanez_RG_Red.png';
import JacksonDK2M from '../assets/images/Jackson_DK2M.png';
import JacksonFlyingVBlack from '../assets/images/Jackson_Flying_V_Black.png';
import JacksonGuitarsV from '../assets/images/Jackson_Guitars_V.png';
import ReverendPeteAndersonSignature from '../assets/images/Reverend_Pete_Anderson_Signature_Electric_Guitar.png';
import SchecterC1Hellraiser from '../assets/images/Schecter_C_1_Hellraiser.png';
import { nanoid } from '@reduxjs/toolkit';

const productsList = [
  {
    src: Swede_Crimson_Flame_Vertical,
    name: 'Swede Crimson Flame',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Swede_Mandarin_Burst_Vertical,
    name: 'Swede Mandarin Burst',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Swede_Dark_Storm_Vertical,
    name: 'Swede Dark Storm',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: Swede_Gold_Vertical,
    name: 'Swede Gold',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: TakamineEF381SC,
    name: 'Takamine EF381SC Twelve String Acoustic Guitar',
    price: '800',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: ESPLTDEC200QM,
    name: 'ESP LTD EC 200QM',
    price: '1200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: ESPLTDEC1000BassGuitar,
    name: 'ESP LTD EC 1000 Bass Guitar',
    price: '1200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderJaguar,
    name: 'Fender Jaguar',
    price: '1100',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderJazzBass,
    name: 'Fender Jazz Bass',
    price: '1300',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderSquierMustang,
    name: 'Fender Squier Mustang',
    price: '700',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderPrecisionBass,
    name: 'Fender Precision Bass',
    price: '1200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderStratocasterAmericanDeluxe,
    name: 'Fender Stratocaster American Deluxe',
    price: '1500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderStratocasterFingerboard,
    name: 'Fender Stratocaster Fingerboard',
    price: '1600',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderTelecaster,
    name: 'Fender Telecaster',
    price: '1200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GibsonBBKing,
    name: 'Gibson B. B. King',
    price: '3200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: FenderTelecasterRed,
    name: 'Fender Telecaster Red',
    price: '1200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GibsonES345,
    name: 'Gibson ES-345',
    price: '2800',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GibsonLesPaulStandard,
    name: 'Gibson Les Paul Standard',
    price: '2500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GibsonLesPaulStudioSunburst,
    name: 'Gibson Les Paul Studio Sunburst',
    price: '2300',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GibsonSGStandard,
    name: 'Gibson SG Standard',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: GretschG5622TCBElectromatic,
    name: 'Gretsch G5622T CB Electromatic',
    price: '3300',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezAcousticDreadnought,
    name: 'Ibanez Acoustic Dreadnought',
    price: '900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezFRM150PaulGilbertSignature,
    name: 'Ibanez FRM150 Paul Gilbert Signature',
    price: '2500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezAcoustic,
    name: 'Ibanez Acoustic',
    price: '1000',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezGSR205Bass,
    name: 'Ibanez GSR205 Bass',
    price: '2500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezRGSevenString,
    name: 'Ibanez RG Seven String Black',
    price: '2900',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: IbanezRGRed,
    name: 'IbanezRGRed',
    price: '2700',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: JacksonDK2M,
    name: 'Jackson DK2M',
    price: '2200',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: JacksonFlyingVBlack,
    name: 'Jackson Flying V Black',
    price: '2800',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: JacksonGuitarsV,
    name: 'Jackson Flying V White',
    price: '2800',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: ReverendPeteAndersonSignature,
    name: 'Reverend Pete Anderson Signature',
    price: '4500',
    quantity: 1,
    id: nanoid(),
  },
  {
    src: SchecterC1Hellraiser,
    name: 'Schecter C1 Hellraiser',
    price: '3500',
    quantity: 1,
    id: nanoid(),
  },
];

export default productsList;
