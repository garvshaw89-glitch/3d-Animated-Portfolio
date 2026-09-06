import { ProjectItem, ServiceItem, SkillItem, SpecializedDomain } from '../types';
import stockTradingImg from '../assets/images/stock_trading_terminal_1788685213853.jpg';
import financialDashboardImg from '../assets/images/financial_portfolio_dashboard_1788685234765.jpg';
import apiBackendImg from '../assets/images/api_backend_development_1788685793691.jpg';
import frontendDashboardImg from '../assets/images/connected_frontend_dashboard_1788685810432.jpg';
import apiDev3dScreenImg from '../assets/images/api_dev_3d_screen_1788685983207.jpg';
import apiFlow3dScreenImg from '../assets/images/api_flow_3d_screen_1788686000917.jpg';
import salaryosDashboardImg from '../assets/images/salaryos_dashboard_1788686403086.jpg';
import salaryosAnalyticsImg from '../assets/images/salaryos_analytics_1788686420582.jpg';
import salaryosCommandCenterImg from '../assets/images/salaryos_command_center_1788686685851.jpg';
import typingTestMainImg from '../assets/images/typing_test_main_1788686855877.jpg';
import typingTestHeatmapImg from '../assets/images/typing_test_heatmap_1788686875692.jpg';
import typingTestHistoryImg from '../assets/images/typing_test_history_1788686890882.jpg';
import stockmentorLearningPathImg from '../assets/images/stockmentor_learning_path_1788686981081.jpg';
import microskillArcadeDashboardImg from '../assets/images/microskill_arcade_dashboard_1788687163167.jpg';

export const MARQUEE_IMAGES = [
  stockTradingImg,
  typingTestMainImg,
  stockmentorLearningPathImg,
  microskillArcadeDashboardImg,
  apiDev3dScreenImg,
  salaryosDashboardImg,
  apiBackendImg,
  typingTestHeatmapImg,
  'api-dev-3d-screen',
  apiFlow3dScreenImg,
  financialDashboardImg,
  apiDev3dScreenImg,
  apiBackendImg,
  frontendDashboardImg,
  salaryosAnalyticsImg,
  typingTestHistoryImg,
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  stockTradingImg,
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  frontendDashboardImg,
  apiFlow3dScreenImg,
  apiBackendImg,
  financialDashboardImg,
];

export const SKILLS: SkillItem[] = [
  {
    id: 'ai-development',
    number: '01',
    title: 'AI Development',
    description:
      'Building intelligent solutions using machine learning and deep learning. From chatbots to predictive models, I create AI systems that drive business value and enhance user experiences.',
    tags: ['Machine Learning', 'Deep Learning', 'LLMs', 'Neural Networks', 'Predictive Modeling'],
  },
  {
    id: 'ai-for-business',
    number: '02',
    title: 'AI For Business',
    description:
      'Empowering enterprises with custom AI integrations, intelligent workflow automation, RAG knowledge bases, and autonomous agents designed to reduce operational costs and accelerate business ROI.',
    tags: ['Autonomous Agents', 'RAG Pipelines', 'Workflow Automation', 'Enterprise AI', 'ROI Optimization'],
  },
  {
    id: 'cloud-computing',
    number: '03',
    title: 'Cloud Computing',
    description:
      'Architecting resilient multi-cloud environments, serverless computing pipelines, container orchestration with Docker/Kubernetes, and automated CI/CD infrastructures on AWS and GCP.',
    tags: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless', 'Terraform', 'CI/CD'],
  },
  {
    id: 'api-development',
    number: '04',
    title: 'API Development',
    description:
      'Engineering high-throughput REST and GraphQL microservices, real-time WebSockets, secure OAuth authentication, OpenAPI specifications, and event-driven data streaming.',
    tags: ['RESTful APIs', 'GraphQL', 'WebSockets', 'OAuth 2.0', 'Microservices', 'FastAPI'],
  },
  {
    id: 'financial-markets',
    number: '05',
    title: 'Financial Markets',
    description:
      'Deep domain analysis of market microstructure, order books, equity and derivatives trading mechanics, risk metrics (VaR, Sharpe ratio), and algorithmic execution patterns.',
    tags: ['Market Microstructure', 'Equities & Derivatives', 'Order Book Dynamics', 'Risk Analytics', 'Algorithmic Trading'],
  },
  {
    id: 'capital-market-analysis',
    number: '06',
    title: 'Capital Market Analysis',
    description:
      'Rigorous quantitative valuation, discounted cash flow (DCF) modeling, macroeconomic factor analysis, portfolio asset allocation strategies, and corporate financial benchmarking.',
    tags: ['Financial Modeling', 'DCF Valuation', 'Factor Analysis', 'Portfolio Theory', 'Financial Statement Analysis'],
  },
  {
    id: 'c-programming',
    number: '07',
    title: 'C',
    description:
      'Building ultra-low-latency computational routines, manual memory management structures, cache-conscious algorithms, socket-level networking, and high-performance systems engineering.',
    tags: ['Low-Latency Systems', 'Memory Management', 'Pointers & Data Structures', 'POSIX Sockets', 'Optimization'],
  },
  {
    id: 'python-development',
    number: '08',
    title: 'Python',
    description:
      'Leveraging Python for enterprise AI/ML development, PyTorch neural networks, Pandas & NumPy quantitative analytics, asynchronous FastAPI microservices, and data pipeline automation.',
    tags: ['PyTorch', 'Pandas & NumPy', 'FastAPI', 'AsyncIO', 'Data Pipelines', 'AI/ML Engineering'],
  },
];

export const SERVICES = SKILLS;

export const SPECIALIZED_DOMAINS: SpecializedDomain[] = [];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'stockmentor',
    number: '01',
    title: 'StockMentor',
    category: 'AI Learning Platform',
    description: 'Interactive financial education platform powered by AI and Socratic method',
    type: 'Personal Project',
    tags: ['AI Agent', 'Socratic Learning', 'FinTech', 'Cloud API'],
    col1TopImage: stockTradingImg,
    col1BottomImage: stockmentorLearningPathImg,
    col2Image: financialDashboardImg,
    githubUrl: 'https://github.com/garvshaw89-glitch/StockMentor',
    liveUrl: 'https://stock-mentortutor.vercel.app/',
  },
  {
    id: 'microskill',
    number: '02',
    title: 'MicroSkill',
    category: 'EdTech Platform',
    description: 'Science-backed micro-learning platform with spaced repetition algorithms',
    type: 'Personal Project',
    tags: ['EdTech', 'Spaced Repetition', 'React', 'Cloud Services'],
    col1TopImage: apiBackendImg,
    col1BottomImage: microskillArcadeDashboardImg,
    col2Image: frontendDashboardImg,
    githubUrl: 'https://github.com/garvshaw89-glitch/MicroSkill-Version-1.0',
    liveUrl: 'https://microskillversion-10.vercel.app/',
  },
  {
    id: 'typing-speed-check',
    number: '03',
    title: 'Typing Speed Check',
    category: 'Performance Utility',
    description:
      'Interactive real-time typing speed test calculating live words per minute (WPM), accuracy percentages, character keystroke precision, and dynamic error analysis.',
    type: 'Personal Project',
    tags: ['Typing Speed', 'JavaScript', 'WPM Engine', 'Real-Time Metrics', 'Vercel'],
    col1TopImage: typingTestMainImg,
    col1BottomImage: typingTestHistoryImg,
    col2Image: typingTestHeatmapImg,
    githubUrl: 'https://github.com/garvshaw89-glitch/Typing-Speed-Checker-',
    liveUrl: 'https://typing-speed-checker-liard.vercel.app/',
  },
  {
    id: 'salaryos',
    number: '04',
    title: 'SalaryOS',
    category: 'Personal Finance & Planning',
    description:
      'SalaryOS is a modern personal finance and salary planning platform designed to help users understand their income, manage monthly expenses, build savings goals, track recurring payments, and make smarter purchasing decisions. Get Paid. Plan Smart. Spend With Confidence.',
    type: 'Personal Project',
    tags: ['Salary Planning', 'FinTech', 'Budget Intelligence', 'Next.js', 'Vercel'],
    col1TopImage: salaryosDashboardImg,
    col1BottomImage: salaryosCommandCenterImg,
    col2Image: salaryosAnalyticsImg,
    githubUrl: 'https://github.com/garvshaw89-glitch/Salary-OS',
    liveUrl: 'https://salaryos-one.vercel.app/',
  },
];

export const ABOUT_3D_ASSETS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3D: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group3D: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const HERO_PORTRAIT =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/garvshaw89-glitch', label: 'github.com/garvshaw89-glitch' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/garv-shaw-08a33237b', label: 'linkedin.com/in/garv-shaw' },
  { name: 'Instagram', url: 'https://instagram.com/garvshaw', label: '@garvshaw' },
  { name: 'Email', url: 'mailto:garvshawinfo@gmail.com', label: 'garvshawinfo@gmail.com' },
];
