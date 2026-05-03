import vivo from '../assets/projects/vivo.png';
import sportingbet from '../assets/projects/sportingbet.png';
import wipPlaceholder from '../assets/projects/wip-placeholder.png';
import { vivoPayTags, vivoPayDescription } from './vivoPayData';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const projectsPtBr = [
  {
    title: 'SportingBet (Entain)',
    description: 'Liderei a tropicalização e o design de KYC para garantir a primeira licença oficial de operação de apostas no Brasil.',
    tags: ['Betting', 'Regulamentação', 'KYC', 'UI/UX', 'Mobile'],
    image: sportingbet,
    link: '/pt-br/cases/sportingbet',
  },
  {
    title: 'Vivo',
    description: vivoPayDescription,
    tags: vivoPayTags,
    image: vivo,
    link: '/pt-br/cases/vivo-pay',
  },
  { title: 'Bradesco',              description: LOREM, tags: ['Fintech', 'Banking'],      image: wipPlaceholder, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Varejo', 'UX'],           image: wipPlaceholder, wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Dados'],        image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Mídia', 'Ferramentas'],  image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RH'],              image: wipPlaceholder, wip: true },
];

export const projectsEn = [
  {
    title: 'SportingBet (Entain)',
    description: 'Led the tropicalization and KYC design to secure the first official betting operating license in Brazil.',
    tags: ['Betting', 'Regulation', 'KYC', 'UI/UX', 'Mobile'],
    image: sportingbet,
    link: '/en/cases/sportingbet',
  },
  {
    title: 'Vivo',
    description: 'Consolidation of financial services in the Vivo ecosystem, focused on simplifying complex journeys and ensuring real value delivery to customers.',
    tags: ['Fintech', 'Credit Card', 'B2C', 'Mobile', 'App', 'UI/UX'],
    image: vivo,
    link: '/en/cases/vivo-pay',
  },
  { title: 'Bradesco',              description: LOREM, tags: ['Fintech', 'Banking'],    image: wipPlaceholder, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],        image: wipPlaceholder, wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Data'],      image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Media', 'Tools'],      image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'HR'],           image: wipPlaceholder, wip: true },
];

export const projectsEs = [
  {
    title: 'SportingBet (Entain)',
    description: 'Lideré la tropicalización y el diseño de KYC para asegurar la primera licencia oficial de operación de apuestas en Brasil.',
    tags: ['Betting', 'Regulación', 'KYC', 'UI/UX', 'Mobile'],
    image: sportingbet,
    link: '/es/cases/sportingbet',
  },
  {
    title: 'Vivo',
    description: 'Consolidación de servicios financieros en el ecosistema Vivo, enfocada en simplificar jornadas complejas y garantizar la entrega de valor real a los clientes.',
    tags: ['Fintech', 'Tarjeta de crédito', 'B2C', 'Mobile', 'App', 'UI/UX'],
    image: vivo,
    link: '/es/cases/vivo-pay',
  },
  { title: 'Bradesco',              description: LOREM, tags: ['Fintech', 'Banking'],      image: wipPlaceholder, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],           image: wipPlaceholder, wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Datos'],        image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Medios', 'Herramientas'], image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RRHH'],            image: wipPlaceholder, wip: true },
];
