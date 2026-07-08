import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import PlatformCard from '../components/PlatformCard';
import UserSegmentCard from '../components/UserSegmentCard';
import { platforms, userSegments, heroImages } from '../data/mockData';

const HomePage = () => {
  const stats = [
    { value: '1000+', label: 'AI模型' },
    { value: '10万+', label: '创业者' },
    { value: '100+', label: '国家地区' },
    { value: '99.9%', label: '服务可用性' },
  ];

  const advantages = [
    { icon: Sparkles, title: '全球部署', desc: '多区域节点、低延迟高可用' },
    { icon: Zap, title: '一站式集成', desc: '五大AI平台，一次接入全能力' },
    { icon: Globe, title: '开放生态', desc: '支持开发者、伙伴、商家共创' },
    { icon: Shield, title: '企业级安全', desc: '合规保障，数据隐私可控' },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1A2744] to-[#0A1628]" />
        <img
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20technology%20abstract%20background%20with%20neon%20lights%20digital%20network&image_size=landscape_16_9"
          alt="AI技术背景"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">全球领先的AI创业平台</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              用AI重构你的
              <span className="text-gradient"> 创业未来</span>
            </h1>
            
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
              潘多拉汇聚全球顶尖AI模型，提供一站式AI创业解决方案。
              无论个人、企业还是政府，都能在这里找到适合的AI赋能路径。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-effect"
              >
                免费注册，立即体验
              </Link>
              <Link
                to="/token"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                浏览AI模型
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-white text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              七大超级平台，覆盖AI创业全场景
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              一套潘多拉平台，链接全球AI模型和系统，满足您的所有创业需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} {...platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              为不同用户群体量身定制
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              无论是个人创业者、企业还是政府，潘多拉都能提供专业的AI解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userSegments.map((segment) => (
              <UserSegmentCard key={segment.id} {...segment} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  全球AI超级枢纽
                </h2>
                <p className="text-white mb-8 leading-relaxed">
                  汇聚·输送·应用，一个平台打通从AI资源到全球生意的全链路。
                  潘多拉将全球顶尖AI模型聚合在一起，为您提供最优质的AI能力支持。
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {advantages.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-white text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <img
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20AI%20network%20connection%20with%20globe%20and%20digital%20nodes%20technology&image_size=square"
                    alt="全球AI网络"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 animate-float">
                        <Globe className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-white text-xl font-bold">连接全球</p>
                      <p className="text-white text-sm">AI资源</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              准备好开启AI创业之旅了吗？
            </h2>
            <p className="text-white mb-10 max-w-2xl mx-auto">
              立即注册，免费体验全球顶尖AI模型，开启您的创业新篇章
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-effect flex items-center justify-center gap-2"
              >
                立即注册
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/users"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
