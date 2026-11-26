import vivo from '../assets/projects/vivo.png';
import sportingbet from '../assets/projects/sportingbet.png';
import bradescoImg from '../assets/projects/bradesco.png';
import tradersImg from '../assets/projects/traders.png';
import wipPlaceholder from '../assets/projects/wip-placeholder.png';
import consagradoImg from '../assets/projects/consagrado.jpg';
import vocalisImg from '../assets/projects/vocalis.png';
import amazinImg from '../assets/projects/amazin.svg';
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

export const personalProjectsPtBr = [
  {
    title: 'CONSAgrado (consagrado.app)',
    description: 'Ecossistema SaaS multi-app para bares e restaurantes: comanda digital no celular, divisão na mesa, garçom e painel B2B em tempo real.',
    tags: ['Product Design', 'React 19', 'Supabase', 'SaaS'],
    image: consagradoImg,
    link: '/pt-br/cases/consagrado',
  },
  {
    title: 'Vocalis',
    description: 'Assistente de ditado por voz inteligente para Windows com transcrição local (faster-whisper), filtro acústico e refinamento via IA.',
    tags: ['Desktop AI', 'Python / Qt', 'Audio UX', 'Em breve'],
    image: vocalisImg,
    link: '/pt-br/cases/vocalis',
  },
  {
    title: 'Amazin Trages a Rigor',
    description: 'Sistema web sob medida que substituiu legado em MS Access: locação por CPF, 12 medidas de alfaiataria e impressão dupla oficial.',
    tags: ['Next.js 15', 'TypeScript', 'Design de Balcão', 'Full-stack'],
    image: amazinImg,
    link: '/pt-br/cases/amazin-trajes',
  },
];

export const personalProjectsEn = [
  {
    title: 'CONSAgrado (consagrado.app)',
    description: 'Multi-app SaaS ecosystem for bars and restaurants: mobile digital tabs, table bill splitting, staff app, and real-time B2B admin.',
    tags: ['Product Design', 'React 19', 'Supabase', 'SaaS'],
    image: consagradoImg,
    link: '/en/cases/consagrado',
  },
  {
    title: 'Vocalis',
    description: 'Privacy-first voice dictation assistant for Windows with local faster-whisper transcription, acoustic filtering, and AI polishing.',
    tags: ['Desktop AI', 'Python / Qt', 'Audio UX', 'Coming soon'],
    image: vocalisImg,
    link: '/en/cases/vocalis',
  },
  {
    title: 'Amazin Trages a Rigor',
    description: 'Custom web platform replacing legacy MS Access: instant CPF lookup, 12 tailoring measurements, and dual legal/slip printing.',
    tags: ['Next.js 15', 'TypeScript', 'Counter UX', 'Full-stack'],
    image: amazinImg,
    link: '/en/cases/amazin-trajes',
  },
];

export const personalProjectsEs = [
  {
    title: 'CONSAgrado (consagrado.app)',
    description: 'Ecosistema SaaS multi-app para bares y restaurantes: comanda digital en el celular, división en mesa y operación en tiempo real.',
    tags: ['Product Design', 'React 19', 'Supabase', 'SaaS'],
    image: consagradoImg,
    link: '/es/cases/consagrado',
  },
  {
    title: 'Vocalis',
    description: 'Asistente de dictado por voz para Windows con transcripción local (faster-whisper), filtro acústico y refinamiento con IA.',
    tags: ['Desktop IA', 'Python / Qt', 'Audio UX', 'Próximamente'],
    image: vocalisImg,
    link: '/es/cases/vocalis',
  },
  {
    title: 'Amazin Trages a Rigor',
    description: 'Sistema web a medida que reemplazó legado en MS Access: alquiler por documento, 12 medidas de sastrería e impresión doble oficial.',
    tags: ['Next.js 15', 'TypeScript', 'UX de Mostrador', 'Full-stack'],
    image: amazinImg,
    link: '/es/cases/amazin-trajes',
  },
];
