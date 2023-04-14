import { nanoid } from '@reduxjs/toolkit';
import Pat_Smear from '../assets/images/Pat_Smear.jpg';
import Justin_York from '../assets/images/Justin_York.jpg';
import Dweezil_Zappa from '../assets/images/Dweezil_Zappa.jpg';
import Ginger_Wildheart from '../assets/images/Ginger_Wildheart.jpg';
import Todd_Kerns from '../assets/images/Todd_Kerns_by_Tomi_Vesaharju.jpg';
import Tezz_Roberts from '../assets/images/Tezz_Roberts.jpg';
import Enrico_Santacatterina from '../assets/images/Enrico_Santacatterina_Hagstrom_Fantomen.jpg';
import WISBORG from '../assets/images/WISBORG_Foto_Hagstrom_final.jpg';

const artistsList = [
  {
    src: Pat_Smear,
    alt: 'Pat Smear',
    name: 'Pat Smear',
    description: 'Foo Fighters, Nirvana, The Germs',
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
    src: Dweezil_Zappa,
    alt: 'Dweezil Zappa',
    name: 'Dweezil Zappa',
    description: 'Zappa plays Zappa, Solo Career',
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
    src: Todd_Kerns,
    alt: 'Todd Kerns',
    name: 'Todd Kerns',
    description:
      'Slash, Age of Electric, Static In Stereo, Sin City Sinners, Michael Monroe',
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
    src: Enrico_Santacatterina,
    alt: 'Enrico Santacatterina',
    name: 'Enrico Santacatterina',
    description: 'Independent Artist',
    id: nanoid(),
  },
  {
    src: WISBORG,
    alt: 'Wisborg',
    name: 'Wisborg',
    description: 'Konstantin Michaely, Nikolas Eckstein',
    id: nanoid(),
  },
];

export default artistsList;
