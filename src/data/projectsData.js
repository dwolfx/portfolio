import ecosystem from '../assets/projects/ecosystem.png';
import b2b from '../assets/projects/b2b_portal.png';
import globo from '../assets/projects/globo_tools.png';
import vivo from '../assets/projects/vivo.png';
import { vivoPayTags, vivoPayDescription } from './vivoPayData';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const projectsPtBr = [
  {
    title: 'Vivo',
    description: vivoPayDescription,
    tags: vivoPayTags,
    image: vivo,
    link: '/pt-br/cases/vivo-pay',
  },
  { title: 'Rede Globo',             description: LOREM, tags: ['Mídia', 'Ferramentas'],  image: globo,     wip: true },
  { title: 'SportingBet (Entain)',   description: LOREM, tags: ['Betting', 'UI/UX'],       image: globo,     wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Dados'],        image: ecosystem, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Varejo', 'UX'],           image: b2b,       wip: true },
  { title: 'Porto Seguro (Sciensa)', description: LOREM, tags: ['Seguros', 'B2B'],         image: ecosystem, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RH'],              image: b2b,       wip: true },
];

export const projectsEn = [
  {
    title: 'Vivo',
    description: 'Consolidation of financial services in the Vivo ecosystem, focused on simplifying complex journeys and ensuring real value delivery to customers.',
    tags: ['Fintech', 'Credit Card', 'B2C', 'Mobile', 'App'],
    image: vivo,
    link: '/en/cases/vivo-pay',
  },
  { title: 'Rede Globo',             description: LOREM, tags: ['Media', 'Tools'],      image: globo,     wip: true },
  { title: 'SportingBet (Entain)',   description: LOREM, tags: ['Betting', 'UI/UX'],    image: globo,     wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Data'],      image: ecosystem, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],        image: b2b,       wip: true },
  { title: 'Porto Seguro (Sciensa)', description: LOREM, tags: ['Insurance', 'B2B'],    image: ecosystem, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'HR'],           image: b2b,       wip: true },
];

export const projectsEs = [
  {
    title: 'Vivo',
    description: 'Consolidación de servicios financieros en el ecosistema Vivo, enfocada en simplificar jornadas complejas y garantizar la entrega de valor real a los clientes.',
    tags: ['Fintech', 'Tarjeta de crédito', 'B2C', 'Mobile', 'App'],
    image: vivo,
    link: '/es/cases/vivo-pay',
  },
  { title: 'Rede Globo',             description: LOREM, tags: ['Medios', 'Herramientas'], image: globo,     wip: true },
  { title: 'SportingBet (Entain)',   description: LOREM, tags: ['Apuestas', 'UI/UX'],      image: globo,     wip: true },
  { title: 'TradersClub',           description: LOREM, tags: ['Fintech', 'Datos'],        image: ecosystem, wip: true },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],           image: b2b,       wip: true },
  { title: 'Porto Seguro (Sciensa)', description: LOREM, tags: ['Seguros', 'B2B'],         image: ecosystem, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RRHH'],            image: b2b,       wip: true },
];
