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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20chatbot%20interface%20with%20blue%20glow%20technology%20background&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=advanced%20AI%20neural%20network%20visualization%20with%20purple%20hues&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20generated%20artistic%20image%20creation%20process%20with%20colorful%20palette&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20AI%20image%20generation%20workspace%20with%20fantasy%20elements&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20video%20production%20studio%20with%20film%20reels%20and%20neon%20lights&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20editing%20software%20interface%20with%20AI%20tools&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20voice%20synthesis%20audio%20waveform%20visualization%20with%20rainbow%20colors&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=speech%20recognition%20AI%20interface%20with%20microphone%20and%20sound%20waves&image_size=landscape_16_9',
  },
];

export const platforms: Platform[] = [
  {
    id: '1',
    name: 'AI Token超市',
    description: '聚合全球所有AI大模型、图片、视频、音乐顶级模型，一个账户即可使用全球模型',
    icon: 'ShoppingCart',
    color: 'from-blue-500 to-cyan-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20supermarket%20with%20digital%20tokens%20and%20futuristic%20interface&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20supermarket%20with%20digital%20tokens&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20AI%20dashboard%20interface&image_size=landscape_16_9',
    ],
  },
  {
    id: '2',
    name: 'AI短剧漫剧制作',
    description: '从剧本生成到视频合成，一键完成AI短剧漫剧制作，分发全球',
    icon: 'Film',
    color: 'from-purple-500 to-pink-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20animation%20video%20production%20studio%20with%20digital%20art%20creation&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20animation%20video%20production%20studio&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anime%20style%20digital%20art%20creation&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20generated%20short%20drama%20scene&image_size=landscape_16_9',
    ],
  },
  {
    id: '3',
    name: 'AI工具平台',
    description: '提供AI写作、翻译、编程等多种工具，提升工作效率',
    icon: 'Wrench',
    color: 'from-green-500 to-emerald-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20productivity%20tools%20workspace%20with%20coding%20and%20writing%20assistants&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20productivity%20tools%20workspace&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20code%20editor%20with%20AI%20assistant&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20translation%20and%20writing%20interface&image_size=landscape_16_9',
    ],
  },
  {
    id: '4',
    name: 'AI电商平台',
    description: 'AI赋能跨境电商，选品带货，一人卖向全球',
    icon: 'Store',
    color: 'from-orange-500 to-amber-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20e-commerce%20platform%20with%20global%20shopping%20and%20digital%20storefront&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20e-commerce%20platform%20dashboard&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=online%20shopping%20storefront%20with%20AI%20recommendations&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cross%20border%20ecommerce%20global%20distribution&image_size=landscape_16_9',
    ],
  },
  {
    id: '5',
    name: 'AI数字员工',
    description: '7x24小时数字人直播，智能客服，自动化运营',
    icon: 'Users',
    color: 'from-red-500 to-rose-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20digital%20human%20avatar%20live%20streaming%20with%20customer%20service%20bot&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20digital%20human%20avatar%20live%20streaming&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20customer%20service%20AI%20bot&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automated%20AI%20operations%20dashboard&image_size=landscape_16_9',
    ],
  },
  {
    id: '6',
    name: 'OPC商机协作',
    description: '链接全球商机，承接AI订单，实现技能变现',
    icon: 'Globe',
    color: 'from-indigo-500 to-violet-400',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20business%20opportunity%20collaboration%20platform%20with%20AI%20network&image_size=landscape_16_9',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20business%20opportunity%20network&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20project%20collaboration%20platform&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20networking%20business%20connections&image_size=landscape_16_9',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=individual%20entrepreneur%20working%20from%20home%20with%20AI%20tools%20and%20laptop&image_size=portrait_4_3',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20enterprise%20office%20with%20AI%20dashboard%20and%20team%20collaboration&image_size=portrait_4_3',
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
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20city%20government%20building%20with%20digital%20AI%20infrastructure&image_size=portrait_4_3',
  },
];

export const contentTemplates = [
  { id: '1', name: '短剧剧本生成', description: '输入主题，一键生成完整剧本', category: 'script', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20script%20writing%20tool%20with%20storyboard%20and%20characters&image_size=square' },
  { id: '2', name: 'AI图片生成', description: '文字描述生成高质量图片', category: 'image', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20image%20generator%20interface%20with%20creative%20artwork&image_size=square' },
  { id: '3', name: 'AI视频创作', description: '文本转视频，快速生成创意视频', category: 'video', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20video%20creation%20studio%20with%20timeline%20and%20effects&image_size=square' },
  { id: '4', name: 'AI配音服务', description: '多语种AI配音，情感丰富', category: 'audio', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20voice%20over%20recording%20studio%20with%20microphones&image_size=square' },
  { id: '5', name: '漫剧制作', description: '漫画风格视频创作', category: 'comic', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20comic%20and%20manga%20creation%20with%20characters%20and%20panels&image_size=square' },
  { id: '6', name: '字幕翻译', description: '多语种字幕自动生成和翻译', category: 'subtitle', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20subtitle%20translation%20tool%20with%20multiple%20languages&image_size=square' },
];

export const ecommerceFeatures = [
  { id: '1', name: '数字人直播', description: '30秒克隆形象，24小时不间断直播带货', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20human%20live%20streaming%20shopping%20broadcast&image_size=square' },
  { id: '2', name: '商品素材生成', description: 'AI生成商品图片、视频、文案', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20product%20image%20generation%20for%20e-commerce&image_size=square' },
  { id: '3', name: '智能选品', description: 'AI分析市场趋势，推荐热销商品', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20market%20analysis%20dashboard%20with%20charts%20and%20products&image_size=square' },
  { id: '4', name: '全球分发', description: '一键分发至全球社媒与电商平台', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20social%20media%20distribution%20network%20with%20platform%20icons&image_size=square' },
];

export const recentOrders = [
  { id: 'ORD001', model: 'GPT-4o', amount: 100, status: 'completed', date: '2024-01-15' },
  { id: 'ORD002', model: 'Stable Diffusion XL', amount: 50, status: 'completed', date: '2024-01-14' },
  { id: 'ORD003', model: 'Sora', amount: 500, status: 'pending', date: '2024-01-13' },
];

export const heroImages = [
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20technology%20abstract%20background%20with%20neon%20lights%20and%20data%20streams&image_size=landscape_16_9',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20AI%20network%20connecting%20people%20and%20businesses%20worldwide&image_size=landscape_16_9',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=innovation%20AI%20workspace%20with%20holographic%20displays%20and%20creative%20energy&image_size=landscape_16_9',
];
