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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_1.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_2.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_3.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_4.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_5.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_6.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_7.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_8.png',
  },
];

export const platforms: Platform[] = [
  {
    id: '1',
    name: '全球AI Token超市平台',
    description: '聚合全球所有AI大模型，AI图片，AI视频，AI音乐顶级模型，一个账户就可以使用全球模型，支持API，比官方价格更优惠。',
    icon: 'ShoppingCart',
    color: 'from-blue-500 to-cyan-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/manylang/zh/Group%20101.png',
  },
  {
    id: '2',
    name: '全球AI短剧漫剧制作',
    description: '从剧本生成到视频合成，一键完成AI短剧漫剧制作，分发全球，中国文化出海',
    icon: 'Film',
    color: 'from-purple-500 to-pink-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_2.png',
  },
  {
    id: '3',
    name: '全球AI工具平台',
    description: '提供AI写作、翻译、编程等多种工具，提升工作效率',
    icon: 'Wrench',
    color: 'from-green-500 to-emerald-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_3.png',
  },
  {
    id: '4',
    name: '全球AI电商平台',
    description: 'AI赋能跨境电商，选品带货，一人卖向全球，降低成本24h不间断多语言',
    icon: 'Store',
    color: 'from-orange-500 to-amber-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_4.png',
  },
  {
    id: '5',
    name: '全球AI数字员工平台',
    description: '7x24小时数字人直播，智能客服，自动化运营，创建AI达人，批量做短视频和直播',
    icon: 'Users',
    color: 'from-red-500 to-rose-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_5.png',
  },
  {
    id: '6',
    name: '全球AI-OPC商机协作平台',
    description: '链接全球商机，承接AI订单，实现技能变现，帮助创业者快速实现变现',
    icon: 'Globe',
    color: 'from-indigo-500 to-violet-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_6.png',
  },
];

export const userSegments: UserSegment[] = [
  {
    id: '1',
    title: '个人用户',
    subtitle: '个人创业者想用AI赚钱?',
    icon: 'User',
    features: [
      'AI + 跨境电商：选品带货，一人卖向全球',
      'AI + 短剧漫剧：制作发行，内容出海分账',
      'AI + 运营服务：技能变现，代运营订单不断',
    ],
    cta: '立即创业',
    color: 'from-blue-600 to-blue-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/gryh.png',
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
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/qyyh.png',
  },
  {
    id: '3',
    title: '政府/园区/产业',
    subtitle: '共建AI，激活区域经济新质生产力',
    icon: 'Landmark',
    features: [
      '产业赋能：AI赋能当地产业，重塑地方经济',
      '链接全球：AI帮助当地企业出海，扩展全球',
      '激活生态：汇聚AI创业者，构建AI人才产业生态圈',
    ],
    cta: '合作洽谈',
    color: 'from-green-600 to-green-400',
    image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/zfyq.png',
  },
];

export const contentTemplates = [
  { id: '1', name: '短剧剧本生成', description: '输入主题，一键生成完整剧本', category: 'script', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_1.png' },
  { id: '2', name: 'AI图片生成', description: '文字描述生成高质量图片', category: 'image', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_2.png' },
  { id: '3', name: 'AI视频创作', description: '文本转视频，快速生成创意视频', category: 'video', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_3.png' },
  { id: '4', name: 'AI音频创作', description: '多语种AI配音，情感丰富', category: 'audio', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_4.png' },
  { id: '5', name: '漫剧制作', description: '漫画风格视频创作', category: 'comic', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_1.png' },
  { id: '6', name: '字幕翻译', description: '多语种字幕自动生成和翻译', category: 'subtitle', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_6.png' },
];

export const ecommerceFeatures = [
  { id: '1', name: '数字人直播', description: '30秒克隆形象，24小时不间断直播带货', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_4.png' },
  { id: '2', name: '商品素材生成', description: 'AI生成商品图片、视频、文案', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/yy_1.png' },
  { id: '3', name: '智能选品', description: 'AI分析市场趋势，推荐热销商品', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/yy_2.png' },
  { id: '4', name: '全球分发', description: '一键分发至全球社媒与电商平台', image: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_4.png' },
];

export const recentOrders = [
  { id: 'ORD001', model: 'GPT-4o', amount: 100, status: 'completed', date: '2024-01-15' },
  { id: 'ORD002', model: 'Stable Diffusion XL', amount: 50, status: 'completed', date: '2024-01-14' },
  { id: 'ORD003', model: 'Sora', amount: 500, status: 'pending', date: '2024-01-13' },
];

export const heroImages = [
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_1.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_2.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_3.png',
];

export const modelCarouselImages = [
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_1.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_2.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_3.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_4.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_5.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_6.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_7.png',
  'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/mx_8.png',
];

export const advantages = [
  {
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xm_1.png',
    title: '全球部署',
    desc: '多区域节点，低延迟高可用',
  },
  {
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xm_2.png',
    title: '一站式集成',
    desc: '五大AI平台，一次接入全能力',
  },
  {
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xm_3.png',
    title: '开放生态',
    desc: '支持开发者、伙伴、商家共创',
  },
  {
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xm_4.png',
    title: '企业级安全',
    desc: '合规保障，数据隐私可控',
  },
];

export const systemLayers = [
  {
    id: '1',
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/hj.png',
    numberIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xl_1.png',
    title: '汇聚全球token',
    subtitle: '全球AI token平台 - AI资源层',
    description: '聚合全球1000+顶尖AI大模型、AI图片、AI视频、AI音乐顶级模型，一个账户统一调用全球模型，支持API、比官方价格更优惠。',
    features: [
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_1.png', name: 'AI图片生成' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_2.png', name: 'AI视频创作' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_3.png', name: 'AI音频创作' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_4.png', name: '文本大模型' },
    ],
    cta: '一个账户 · 全球1000+模型 · 更优价格',
    arrowIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/hj_0.png',
  },
  {
    id: '2',
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/ss.png',
    numberIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xl_2.png',
    title: '输送token',
    subtitle: '全球AI系统 - 基础系统层',
    description: '六大系统将AI能力封装为开箱即用的垂直系统，稳定"输送"到业务场景。',
    features: [
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_1.png', name: '全球AI短剧漫剧制作系统' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_2.png', name: '全球AI电商系统' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_3.png', name: '全球AI短视频系统' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_4.png', name: '全球AI数字员工系统' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_5.png', name: '全球AI数字人直播系统' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_6.png', name: '全球AI同声翻译系统' },
    ],
    cta: '完整基建 · 开箱即用 · 快速上线',
    arrowIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/ss_0.png',
  },
  {
    id: '3',
    icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/homepage/yy.png',
    numberIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/carousel/xl_3.png',
    title: '应用token',
    subtitle: '全球AI-OPC创业 - 商业落地层',
    description: '两大商业落地场景，帮助创业者快速实现变现，打造全球化的AI商业模式。',
    features: [
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/yy_1.png', name: '全球AI电商创业', desc: '做AI-MCN公司，创建AI达人，批量做短视频和直播，卖向全球 降低成本24h不间断多语言' },
      { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/yy_2.png', name: '全球AI内容创业', desc: '制作全球AI短剧漫剧，分发全球，中国文化出海。 全球分发文化出海AI短剧AI漫剧' },
    ],
    cta: '快速落地 · 全球市场 · 持续变现',
    arrowIcon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/yy_0.png',
  },
];

export const ctaIcons = [
  { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/01.png', text: '注册即可使用' },
  { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/02.png', text: '支持全球用户' },
  { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/03.png', text: '数据安全加密' },
  { icon: 'https://kyydata.oss-cn-beijing.aliyuncs.com/opc/system/images/iconSmall/04.png', text: '全链路AI自动化' },
];
