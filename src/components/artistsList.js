import { nanoid } from '@reduxjs/toolkit';
import WISBORG from '../assets/images/WISBORG_Foto_Hagstrom_final.jpg';
import Aaron_North from '../assets/images/Aaron_North.jpg';
import Alejandra_Deheza from '../assets/images/Alejandra_Deheza.jpg';
import Alex_Howard from '../assets/images/Alex_Howard_Hoodie_Allen_Sleeping_With_Sirens_Conditions.jpg';
import Andreas_Klemens from '../assets/images/Andreas_Klemens_TSY_2012.jpg';
import Andy_Monaghan from '../assets/images/Andy_Monaghan_Frightened_Rabbit_Credit_Emer_Tumilty.jpg';
import Andrzej_Nowak from '../assets/images/Andrzej_Nowak.jpg';
import Antti_Seroff from '../assets/images/Antti_Seroff.jpg';
import Arne_Wiese_MotorradKaffee from '../assets/images/Arne_Wiese_MotorradKaffee.jpg';
import Beto_Grammatico from '../assets/images/Beto_Grammatico_Salta_La_Blanca.jpg';
import Big_Country from '../assets/images/Big_Country.jpg';
import Bones_Discharge from '../assets/images/Bones_Discharge.jpg';
import Charlie_Bedford from '../assets/images/Charlie_Bedford.jpg';
import Chris_Catalyst from '../assets/images/Chris_Catalyst_Eureka_Machines.jpg';
import CJ_Wildhearts from '../assets/images/CJ_Wildhearts.jpg';
import Claes_Olofsson from '../assets/images/Claes_Olofsson.jpg';
import Colo_Miretti from '../assets/images/Colo_Miretti.jpg';
import Dariusz_Malejonek from '../assets/images/Dariusz_Malejonek.jpg';
import Dweezil_Zappa from '../assets/images/Dweezil_Zappa.jpg';
import Eddie_Reyes from '../assets/images/Eddie_Reyes_Taking_Back_Sunday.jpg';
import Enrico_Santacatterina from '../assets/images/Enrico_Santacatterina_Hagstrom_Fantomen.jpg';
import Fernando_Vecchio from '../assets/images/Fernando_Vecchio.jpg';
import Ghost from '../assets/images/Ghost.jpg';
import Ginger_Wildheart from '../assets/images/Ginger_Wildheart.jpg';
import Gregory_Hinde from '../assets/images/Gregory_Hinde.jpg';
import Ivan_Gomez_Singh from '../assets/images/Ivan_Gomez_Singh.jpg';
import Jacob_Widen from '../assets/images/Jacob_Widen_Gabriel_Grahn4.jpg';
import John_Hassel from '../assets/images/John_Hassel_The_Libertines.jpg';
import Jorge_Escobedo from '../assets/images/Jorge_Escobedo_Sober.jpg';
import JT_Woodruff from '../assets/images/JT_Woodruff_Hawthorn_Heights.jpg';
import Julia_Marcell from '../assets/images/Julia_Marcell.jpg';
import Justin_York from '../assets/images/Justin_York.jpg';
import Jyri_Vahvanen from '../assets/images/Jyri_Vahvanen.jpg';
import Magnum from '../assets/images/Magnum_Amplifier_May_2011.jpg';
import Mando_Diao from '../assets/images/Mando_Diao.jpg';
import Marek_Yan_Kisielinski from '../assets/images/Marek_Yan_Kisielinski.jpg';
import Mathias_Faerm from '../assets/images/Mathias_Faerm_FrankyLee2.jpg';
import Matthias_Reim from '../assets/images/Matthias_Reim.jpg';
import Michel_Rivard from '../assets/images/Michel_Rivard.jpg';
import Micko_Larkin from '../assets/images/Micko_Larkin_Courtney_Love.jpg';
import Niklas_Sandin from '../assets/images/Niklas_Sandin.jpg';
import Pat_Smear from '../assets/images/Pat_Smear.jpg';
import Paul_Astick from '../assets/images/Paul_Astick_GilesSmith_HawkEyes.jpg';
import Pernilla_Andersson from '../assets/images/Pernilla_Andersson.jpg';
import Rich_Jones from '../assets/images/Rich_Jones_Ginger_Wildheart_Band.jpg';
import Rob_Stephens from '../assets/images/Rob_Stephens_Hawk_Eyes.jpg';
import Robbie_Davidson from '../assets/images/Robbie_Davidson_The_Exploited.jpg';
import Rodrigo_Gonzalez from '../assets/images/Rodrigo_Gonzalez.jpg';
import Sel_Belamier from '../assets/images/Sel_Belamier_Amplifier.jpg';
import Steve_Durose from '../assets/images/Steve_Durose_Amplifier.jpg';
import Taylor_York from '../assets/images/Taylor_York_Paramore.jpg';
import Tezz_Roberts from '../assets/images/Tezz_Roberts.jpg';
import Thom_Edward from '../assets/images/Thom_Edward_God_Damn_Credit_Daniel_Quesada.jpg';
import Thomas_Wallin from '../assets/images/Thomas_Wallin_Takida.jpg';
import Todd_Kerns from '../assets/images/Todd_Kerns_by_Tomi_Vesaharju.jpg';
import Toni_Mena from '../assets/images/Toni_Mena.jpg';
import Will_Sergeant from '../assets/images/Will_Sergeant_Echo_And_The_Bunnymen.jpg';

const artistsList = [
  {
    src: WISBORG,
    alt: 'Wisborg',
    name: 'Wisborg',
    description: 'Konstantin Michaely, Nikolas Eckstein',
    id: nanoid(),
  },
  {
    src: Aaron_North,
    alt: 'Aaron North',
    name: 'Aaron North',
    description:
      'Jubilee, The Icarus Line, Nine Inch Nails, Queens of the Stone Age, Buddyhead',
    id: nanoid(),
  },
  {
    src: Alejandra_Deheza,
    alt: 'Alejandra Deheza',
    name: 'Alejandra Deheza',
    description: 'School of Seven Bells',
    id: nanoid(),
  },
  {
    src: Alex_Howard,
    alt: 'Alex Howard',
    name: 'Alex Howard',
    description: 'Hoodie Allen, Sleeping With Sirens, Conditions',
    id: nanoid(),
  },
  {
    src: Andreas_Klemens,
    alt: 'Andreas Klemens',
    name: 'Andreas Klemens',
    description: 'The Satellite Year',
    id: nanoid(),
  },
  {
    src: Andy_Monaghan,
    alt: 'Andy Monaghan',
    name: 'Andy Monaghan',
    description: 'Frightened Rabbit',
    id: nanoid(),
  },
  {
    src: Andrzej_Nowak,
    alt: 'Andrzej Nowak',
    name: 'Andrzej Nowak',
    description: 'TSA, Złe Psy',
    id: nanoid(),
  },
  {
    src: Antti_Seroff,
    alt: 'Antti Seroff',
    name: 'Antti Seroff',
    description: 'Profane Omen',
    id: nanoid(),
  },
  {
    src: Arne_Wiese_MotorradKaffee,
    alt: 'Arne Wiese',
    name: 'Arne Wiese',
    description: 'Motorradkaffee, Viper Sniper',
    id: nanoid(),
  },
  {
    src: Beto_Grammatico,
    alt: 'Beto Grammatico',
    name: 'Beto Grammatico',
    description: 'Salta La Blanca',
    id: nanoid(),
  },
  {
    src: Big_Country,
    alt: 'Big Country',
    name: 'Big Country',
    description: 'Bruce Watson, Jamie Watson & Derek Forbes',
    id: nanoid(),
  },
  {
    src: Bones_Discharge,
    alt: 'Bones',
    name: 'Bones',
    description: 'Discharge',
    id: nanoid(),
  },
  {
    src: Charlie_Bedford,
    alt: 'Charlie Bedford',
    name: 'Charlie Bedford',
    description: '',
    id: nanoid(),
  },
  {
    src: Chris_Catalyst,
    alt: 'Chris Catalyst',
    name: 'Chris Catalyst',
    description: 'Eureka Machines, Sisters of Mercy',
    id: nanoid(),
  },
  {
    src: CJ_Wildhearts,
    alt: 'CJ',
    name: 'CJ',
    description: 'The Wildhearts',
    id: nanoid(),
  },
  {
    src: Claes_Olofsson,
    alt: 'Claes Olofsson',
    name: 'Claes Olofsson',
    description: 'Session player, User of a Common Name, The Mahatmas',
    id: nanoid(),
  },
  {
    src: Colo_Miretti,
    alt: 'Colo Miretti',
    name: 'Colo Miretti',
    description: '',
    id: nanoid(),
  },
  {
    src: Dariusz_Malejonek,
    alt: 'Dariusz Malejonek',
    name: 'Dariusz Malejonek',
    description:
      'Kultura, Izrael, Moskwa, Armia, Houk, 2Tm2,3, Arka Noego & Maleo Reggae Rockers',
    id: nanoid(),
  },
  {
    src: Dweezil_Zappa,
    alt: 'Dweezil Zappa',
    name: 'Dweezil Zappa',
    description: 'Zappa plays Zappa, Solo Career',
    id: nanoid(),
  },
  {
    src: Eddie_Reyes,
    alt: 'Eddie Reyes',
    name: 'Eddie Reyes',
    description: 'Taking Back Sunday',
    id: nanoid(),
  },
  {
    src: Enrico_Santacatterina,
    alt: 'Enrico Santacatterina',
    name: 'Enrico Santacatterina',
    description: 'Independent Artist',
    id: nanoid(),
  },
  {
    src: Fernando_Vecchio,
    alt: 'Fernando Vecchio',
    name: 'Fernando Vecchio',
    description: 'Las Pastillas del Abuelo',
    id: nanoid(),
  },
  {
    src: Ghost,
    alt: 'Ghost',
    name: 'Ghost',
    description: 'The Nameless Ghouls',
    id: nanoid(),
  },
  {
    src: Ginger_Wildheart,
    alt: 'Ginger Wildheart',
    name: 'Ginger Wildheart',
    description: 'The Wildhearts, Ginger Wildheart Band',
    id: nanoid(),
  },
  {
    src: Gregory_Hinde,
    alt: 'Gregory Hinde',
    name: 'Gregory Hinde',
    description: 'Producer, Composer',
    id: nanoid(),
  },
  {
    src: Ivan_Gomez_Singh,
    alt: 'Ivan Gomez Singh',
    name: 'Ivan Gomez Singh',
    description: '',
    id: nanoid(),
  },
  {
    src: Jacob_Widen,
    alt: 'Jacob Widen',
    name: 'Jacob Widén',
    description: 'Neverstore',
    id: nanoid(),
  },
  {
    src: John_Hassel,
    alt: 'John Hassel',
    name: 'John Hassel',
    description: 'The Libertines',
    id: nanoid(),
  },
  {
    src: Jorge_Escobedo,
    alt: 'Jorge Escobedo',
    name: 'Jorge Escobedo',
    description: 'Sober',
    id: nanoid(),
  },
  {
    src: JT_Woodruff,
    alt: 'JT Woodruff',
    name: 'JT Woodruff',
    description: 'Hawthorn Heights',
    id: nanoid(),
  },
  {
    src: Julia_Marcell,
    alt: 'Julia Marcell',
    name: 'Julia Marcell',
    description: '',
    id: nanoid(),
  },
  {
    src: Justin_York,
    alt: 'Justin York',
    name: 'Justin York',
    description: 'Touring Guitarist - Paramore',
    id: nanoid(),
  },
  {
    src: Jyri_Vahvanen,
    alt: 'Jyri Vahvanen',
    name: 'Jyri Vahvanen',
    description: 'Battlelore, Church of Void',
    id: nanoid(),
  },
  {
    src: Magnum,
    alt: 'Magnum',
    name: 'Magnum',
    description: 'Amplifier',
    id: nanoid(),
  },
  {
    src: Mando_Diao,
    alt: 'Mando Diao',
    name: 'Mando Diao',
    description: '',
    id: nanoid(),
  },
  {
    src: Marek_Yan_Kisielinski,
    alt: 'Marek Yan Kisielinski',
    name: 'Marek Yan Kisielinski',
    description: 'Producer, Composer',
    id: nanoid(),
  },
  {
    src: Mathias_Faerm,
    alt: 'Mathias Faerm',
    name: 'Mathias Färm',
    description: 'Franky Lee, Millencollin',
    id: nanoid(),
  },
  {
    src: Matthias_Reim,
    alt: 'Matthias Reim',
    name: 'Matthias Reim',
    description: '',
    id: nanoid(),
  },
  {
    src: Michel_Rivard,
    alt: 'Michel Rivard',
    name: 'Michel Rivard',
    description: '',
    id: nanoid(),
  },
  {
    src: Micko_Larkin,
    alt: 'Micko Larkin',
    name: 'Micko Larkin',
    description: 'Courtney Love',
    id: nanoid(),
  },
  {
    src: Niklas_Sandin,
    alt: 'Niklas Sandin',
    name: 'Niklas Sandin',
    description: 'Katatonia',
    id: nanoid(),
  },
  {
    src: Pat_Smear,
    alt: 'Pat Smear',
    name: 'Pat Smear',
    description: 'Foo Fighters, Nirvana, The Germs',
    id: nanoid(),
  },
  {
    src: Paul_Astick,
    alt: 'Paul Astick',
    name: 'Paul Astick',
    description: 'Hawk Eyes',
    id: nanoid(),
  },
  {
    src: Pernilla_Andersson,
    alt: 'Pernilla Andersson',
    name: 'Pernilla Andersson',
    description: 'The Pernilla Andersson Band',
    id: nanoid(),
  },
  {
    src: Rich_Jones,
    alt: 'Rich Jones',
    name: 'Rich Jones',
    description: 'The Ginger Wildheart Band, Michael Monroe',
    id: nanoid(),
  },
  {
    src: Rob_Stephens,
    alt: 'Rob Stephens',
    name: 'Rob Stephens',
    description: 'Hawk Eyes',
    id: nanoid(),
  },
  {
    src: Robbie_Davidson,
    alt: 'Robbie Davidson',
    name: 'Robbie Davidson',
    description: 'The Exploited',
    id: nanoid(),
  },
  {
    src: Rodrigo_Gonzalez,
    alt: 'Rodrigo Gonzalez',
    name: 'Rodrigo González',
    description: 'Die Ärzte, ¡Más Shake!',
    id: nanoid(),
  },
  {
    src: Sel_Belamier,
    alt: 'Sel Belamier',
    name: 'Sel Belamier',
    description: 'Amplifier',
    id: nanoid(),
  },
  {
    src: Steve_Durose,
    alt: 'Steve Durose',
    name: 'Steve Durose',
    description: 'Amplifier',
    id: nanoid(),
  },
  {
    src: Taylor_York,
    alt: 'Taylor York',
    name: 'Taylor York',
    description: 'Paramore',
    id: nanoid(),
  },
  {
    src: Tezz_Roberts,
    alt: 'Tezz Roberts',
    name: 'Tezz Roberts',
    description: 'Discharge',
    id: nanoid(),
  },
  {
    src: Thom_Edward,
    alt: 'Thom Edward',
    name: 'Thom Edward',
    description: 'God Damn',
    id: nanoid(),
  },
  {
    src: Thomas_Wallin,
    alt: 'Thomas Wallin',
    name: 'Thomas Wallin',
    description: 'tAKiDA',
    id: nanoid(),
  },
  {
    src: Todd_Kerns,
    alt: 'Todd Kerns',
    name: 'Todd Kerns',
    description:
      'Slash, Age of Electric, Static In Stereo, Sin City Sinners, Michael Monroe',
    id: nanoid(),
  },
  {
    src: Toni_Mena,
    alt: 'Toni Mena',
    name: 'Toni Mena',
    description: '',
    id: nanoid(),
  },
  {
    src: Will_Sergeant,
    alt: 'Will Sergeant',
    name: 'Will Sergeant',
    description: 'Echo & the Bunnymen',
    id: nanoid(),
  },
];

export default artistsList;
