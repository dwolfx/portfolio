import vivo from '../assets/projects/vivo.png';
import sportingbet from '../assets/projects/sportingbet.png';
import bradescoImg from '../assets/projects/bradesco.png';
import tradersImg from '../assets/projects/traders.png';
import wipPlaceholder from '../assets/projects/wip-placeholder.png';
import { vivoPayTags, vivoPayDescription } from './vivoPayData';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const projectsPtBr = [
  {
    title: 'SportingBet (Entain)',
    description: 'Liderei a tropicalização e o design de KYC para garantir a primeira licença oficial de operação de apostas no Brasil.',
    tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
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
  {
    title: 'Bradesco',
    description: 'Otimização do fluxo de financiamento automotivo através de pesquisa de campo e redução de fricção.',
    tags: ['Fintech', 'B2B', 'Research'],
    image: bradescoImg,
    link: '/pt-br/cases/bradesco',
  },
  {
    title: 'TradersClub',
    description: 'Da fundação da unidade de negócios B2B à automação das Lâminas de Investimento para gestoras de fundos.',
    tags: ['Fintech', 'B2B', 'Investimentos', 'Research'],
    image: tradersImg,
    link: '/pt-br/cases/traders-club',
  },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Varejo', 'UX'],           image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Mídia', 'Ferramentas'],  image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RH'],              image: wipPlaceholder, wip: true },
];

export const projectsEn = [
  {
    title: 'SportingBet (Entain)',
    description: 'Led the tropicalization and KYC design to secure the first official betting operating license in Brazil.',
    tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
    image: sportingbet,
    link: '/en/cases/sportingbet',
  },
  {
    title: 'Vivo',
    description: 'Consolidation of financial services in the Vivo ecosystem, focused on simplifying complex journeys and ensuring real value delivery to customers.',
    tags: ['Fintech', 'B2C', 'Credit Card', 'Research', 'App'],
    image: vivo,
    link: '/en/cases/vivo-pay',
  },
  {
    title: 'Bradesco',
    description: 'Optimizing the automotive financing flow through field research and friction reduction.',
    tags: ['Fintech', 'B2B', 'Research'],
    image: bradescoImg,
    link: '/en/cases/bradesco',
  },
  {
    title: 'TradersClub',
    description: 'From founding the B2B business unit to automating Investment Factsheets for fund managers.',
    tags: ['Fintech', 'B2B', 'Investments', 'Research'],
    image: tradersImg,
    link: '/en/cases/traders-club',
  },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],        image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Media', 'Tools'],      image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'HR'],           image: wipPlaceholder, wip: true },
];

export const projectsEs = [
  {
    title: 'SportingBet (Entain)',
    description: 'Lideré la tropicalización y el diseño de KYC para asegurar la primera licencia oficial de operación de apuestas en Brasil.',
    tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
    image: sportingbet,
    link: '/es/cases/sportingbet',
  },
  {
    title: 'Vivo',
    description: 'Consolidación de servicios financieros en el ecosistema Vivo, enfocada en simplificar jornadas complejas y garantizar la entrega de valor real a los clientes.',
    tags: ['Fintech', 'B2C', 'Tarjeta de Crédito', 'Research', 'App'],
    image: vivo,
    link: '/es/cases/vivo-pay',
  },
  {
    title: 'Bradesco',
    description: 'Optimización del flujo de financiamiento automotriz a través de investigación de campo y reducción de fricción.',
    tags: ['Fintech', 'B2B', 'Research'],
    image: bradescoImg,
    link: '/es/cases/bradesco',
  },
  {
    title: 'TradersClub',
    description: 'De la fundación de la unidad de negocios B2B a la automatización de Factsheets de Inversión para gestoras de fondos.',
    tags: ['Fintech', 'B2B', 'Inversiones', 'Research'],
    image: tradersImg,
    link: '/es/cases/traders-club',
  },
  { title: 'Gen (General Shopping)', description: LOREM, tags: ['Retail', 'UX'],           image: wipPlaceholder, wip: true },
  { title: 'Rede Globo',             description: LOREM, tags: ['Medios', 'Herramientas'], image: wipPlaceholder, wip: true },
  { title: 'CV-Fácil',              description: LOREM, tags: ['SaaS', 'RRHH'],            image: wipPlaceholder, wip: true },
];
