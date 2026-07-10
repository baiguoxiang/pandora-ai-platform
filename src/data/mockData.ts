export interface AIModel {
  id: string;
  name: string;
  category: 'text' | 'image' | 'video' | 'audio';
  description: string;
  price: number;
  usageCount: number;
  status: 'available' | 'maintenance';
  provider: string;
  image: string;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  images?: string[];
}

export interface UserSegment {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
  cta: string;
  color: string;
  image: string;
}

export const aiModels: AIModel[] = [
  {
    id: '1',
    name: 'GPT-4o',
    category: 'text',
    description: 'OpenAI最新一代大语言模型，支持多模态理解',
    price: 0.02,
    usageCount: 1258000,
    status: 'available',
    provider: 'OpenAI',
    image: 'images/platform-1.jpg',
  },
  {
    id: '2',
    name: 'Claude 3.5 Sonnet',
    category: 'text',
    description: 'Anthropic推出的高性能AI模型，超长上下文支持',
    price: 0.015,
    usageCount: 892000,
    status: 'available',
    provider: 'Anthropic',
    image: 'images/platform-1.jpg',
  },
  {
    id: '3',
    name: 'Stable Diffusion XL',
    category: 'image',
    description: '开源图像生成模型，支持高质量图像创作',
    price: 0.005,
    usageCount: 2345000,
    status: 'available',
    provider: 'Stability AI',
    image: 'images/platform-1.jpg',
  },
  {
    id: '4',
    name: 'DALL-E 3',
    category: 'image',
    description: 'OpenAI图像生成模型，创意无限',
    price: 0.01,
    usageCount: 1567000,
    status: 'available',
    provider: 'OpenAI',
    image: 'images/platform-1.jpg',
  },
  {
    id: '5',
    name: 'Sora',
    category: 'video',
    description: 'OpenAI视频生成模型，文本到视频的革命性突破',
    price: 0.5,
    usageCount: 342000,
    status: 'available',
    provider: 'OpenAI',
    image: 'images/platform-1.jpg',
  },
  {
    id: '6',
    name: 'Runway ML',
    category: 'video',
    description: '专业级AI视频编辑和生成平台',
    price: 0.3,
    usageCount: 567000,
    status: 'available',
    provider: 'Runway',
    image: 'images/platform-1.jpg',
  },
  {
    id: '7',
    name: 'ElevenLabs',
    category: 'audio',
    description: '顶级AI语音合成，支持多语言和情感表达',
    price: 0.01,
    usageCount: 987000,
    status: 'available',
    provider: 'ElevenLabs',
    image: 'images/platform-1.jpg',
  },
  {
    id: '8',
    name: 'Whisper',
    category: 'audio',
    description: 'OpenAI语音识别模型，支持99种语言',
    price: 0.002,
    usageCount: 3456000,
    status: 'available',
    provider: 'OpenAI',
    image: 'images/platform-1.jpg',
  },
];

export const platforms: Platform[] = [
  {
    id: '1',
    name: 'AI Token超市',
    description: '聚合全球所有AI大模型、图片、视频、音乐顶级模型，一个账户即可使用全球模型',
    icon: 'ShoppingCart',
    color: 'from-blue-500 to-cyan-400',
    image: 'images/platform-1.jpg',
    images: [
      'images/platform-1.jpg',
      'images/platform-1.jpg',
    ],
  },
  {
    id: '2',
    name: 'AI短剧漫剧制作',
    description: '从剧本生成到视频合成，一键完成AI短剧漫剧制作，分发全球',
    icon: 'Film',
    color: 'from-purple-500 to-pink-400',
    image: 'images/platform-2.jpg',
    images: [
      'images/platform-2.jpg',
      'images/platform-2.jpg',
      'images/platform-2.jpg',
    ],
  },
  {
    id: '3',
    name: 'AI工具平台',
    description: '提供AI写作、翻译、编程等多种工具，提升工作效率',
    icon: 'Wrench',
    color: 'from-green-500 to-emerald-400',
    image: 'images/platform-3.jpg',
    images: [
      'images/platform-3.jpg',
      'images/platform-3.jpg',
      'images/platform-3.jpg',
    ],
  },
  {
    id: '4',
    name: 'AI电商平台',
    description: 'AI赋能跨境电商，选品带货，一人卖向全球',
    icon: 'Store',
    color: 'from-orange-500 to-amber-400',
    image: 'images/platform-4.jpg',
    images: [
      'images/platform-4.jpg',
      'images/platform-4.jpg',
      'images/platform-4.jpg',
    ],
  },
  {
    id: '5',
    name: 'AI数字员工',
    description: '7x24小时数字人直播，智能客服，自动化运营',
    icon: 'Users',
    color: 'from-red-500 to-rose-400',
    image: 'images/platform-5.jpg',
    images: [
      'images/platform-5.jpg',
      'images/platform-5.jpg',
      'images/platform-5.jpg',
    ],
  },
  {
    id: '6',
    name: 'OPC商机协作',
    description: '链接全球商机，承接AI订单，实现技能变现',
    icon: 'Globe',
    color: 'from-indigo-500 to-violet-400',
    image: 'images/platform-6.jpg',
    images: [
      'images/platform-6.jpg',
      'images/platform-6.jpg',
      'images/platform-6.jpg',
    ],
  },
];

export const userSegments: UserSegment[] = [
  {
    id: '1',
    title: '个人用户',
    subtitle: '用AI重构你的业务',
    icon: 'User',
    features: [
      'AI + 跨境电商：选品带货，一人卖向全球',
      'AI + 短剧漫剧：制作发行，内容出海分账',
      'AI + 运营服务：技能变现，代运营订单不断',
    ],
    cta: '立即创业',
    color: 'from-blue-600 to-blue-400',
    image: 'images/segment-1.jpg',
  },
  {
    id: '2',
    title: '企业用户',
    subtitle: '让AI成为你的全球增长合伙人',
    icon: 'Building',
    features: [
      '业务升级：为企业注入AI基因，让效率倍增',
      '降本增效：AI军团实现降本增效，极致优化成本',
      '市场破局：AI营销+全球供应链，助您货通全球',
    ],
    cta: '企业服务',
    color: 'from-purple-600 to-purple-400',
    image: 'images/segment-2.jpg',
  },
  {
    id: '3',
    title: '政府/园区',
    subtitle: '共建AI，激活区域经济新质生产力',
    icon: 'Landmark',
    features: [
      '产业赋能：AI赋能当地产业，重塑地方经济',
      '链接全球：AI帮助当地企业出海，扩展全球',
      '激活生态：汇聚AI创业者，构建AI人才产业生态圈',
    ],
    cta: '合作洽谈',
    color: 'from-green-600 to-green-400',
    image: 'images/segment-3.jpg',
  },
];

export const contentTemplates = [
  { id: '1', name: '短剧剧本生成', description: '输入主题，一键生成完整剧本', category: 'script', image: 'images/template-1.jpg' },
  { id: '2', name: 'AI图片生成', description: '文字描述生成高质量图片', category: 'image', image: 'images/template-2.jpg' },
  { id: '3', name: 'AI视频创作', description: '文本转视频，快速生成创意视频', category: 'video', image: 'images/template-3.jpg' },
  { id: '4', name: 'AI配音服务', description: '多语种AI配音，情感丰富', category: 'audio', image: 'images/template-4.jpg' },
  { id: '5', name: '漫剧制作', description: '漫画风格视频创作', category: 'comic', image: 'images/template-5.jpg' },
  { id: '6', name: '字幕翻译', description: '多语种字幕自动生成和翻译', category: 'subtitle', image: 'images/template-6.jpg' },
];

export const ecommerceFeatures = [
  { id: '1', name: '数字人直播', description: '30秒克隆形象，24小时不间断直播带货', image: 'images/platform-5.jpg' },
  { id: '2', name: '商品素材生成', description: 'AI生成商品图片、视频、文案', image: 'images/platform-4.jpg' },
  { id: '3', name: '智能选品', description: 'AI分析市场趋势，推荐热销商品', image: 'images/platform-4.jpg' },
  { id: '4', name: '全球分发', description: '一键分发至全球社媒与电商平台', image: 'images/platform-6.jpg' },
];

export const recentOrders = [
  { id: 'ORD001', model: 'GPT-4o', amount: 100, status: 'completed', date: '2024-01-15' },
  { id: 'ORD002', model: 'Stable Diffusion XL', amount: 50, status: 'completed', date: '2024-01-14' },
  { id: 'ORD003', model: 'Sora', amount: 500, status: 'pending', date: '2024-01-13' },
];

export const heroImages = [
  'images/platform-1.jpg',
  'images/platform-1.jpg',
  'images/platform-1.jpg',
];
