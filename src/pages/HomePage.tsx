import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import PlatformCard from '../components/PlatformCard';
import UserSegmentCard from '../components/UserSegmentCard';
import { platforms, userSegments } from '../data/mockData';
import { imageUrl } from '../utils/imageUrl';

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
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0e27] to-[#0d0a25]" />
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="absolute top-0 left-0 w-[900px] h-[900px]" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.4) 40%, rgba(236,72,153,0.2) 70%, transparent 100%)', filter: 'blur(120px)' }} />
          <div className="absolute top-1/4 right-0 w-[700px] h-[700px]" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(139,92,246,0.4) 50%, rgba(99,102,241,0.2) 80%, transparent 100%)', filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.4) 50%, rgba(99,102,241,0.2) 80%, transparent 100%)', filter: 'blur(90px)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.25) 40%, rgba(236,72,153,0.15) 70%, transparent 100%)', filter: 'blur(150px)' }} />
          <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px]" style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.5) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px]" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)', filter: 'blur(35px)' }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/70 text-[8px]">全球领先的AI创业平台</span>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                用AI重构你的
                <span className="text-gradient"> 创业未来</span>
              </h1>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-10">
              <p className="text-xs text-white/80 max-w-2xl">
                潘多拉汇聚全球顶尖AI模型，提供一站式AI创业解决方案。
                无论个人、企业还是政府，都能在这里找到适合的AI赋能路径。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-all glow-effect"
              >
                免费注册，立即体验
              </Link>
              <Link
                to="/token"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                浏览AI模型
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-white/60 text-[8px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                七大超级平台，覆盖AI创业全场景
              </h2>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-2 border border-white/10">
              <p className="text-white/70 text-xs max-w-2xl">
                一套潘多拉平台，链接全球AI模型和系统，满足您的所有创业需求
              </p>
            </div>
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
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                为不同用户群体量身定制
              </h2>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-2 border border-white/10">
              <p className="text-white/70 text-xs max-w-2xl">
                无论是个人创业者、企业还是政府，潘多拉都能提供专业的AI解决方案
              </p>
            </div>
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
                <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    全球AI超级枢纽
                  </h2>
                </div>
                <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-8">
                  <p className="text-white/70 text-xs leading-relaxed">
                    汇聚·输送·应用，一个平台打通从AI资源到全球生意的全链路。
                    潘多拉将全球顶尖AI模型聚合在一起，为您提供最优质的AI能力支持。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {advantages.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white text-[8px] font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/60 text-[8px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden">
                  <img 
                    src={imageUrl('images/global-network.jpg')} 
                    alt="全球AI网络" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 animate-float">
                        <Globe className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-white text-lg font-bold">连接全球</p>
                      <p className="text-white text-xs">AI资源</p>
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
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                准备好开启AI创业之旅了吗？
              </h2>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-10">
              <p className="text-white/70 text-sm max-w-2xl">
                立即注册，免费体验全球顶尖AI模型，开启您的创业新篇章
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all glow-effect flex items-center justify-center gap-2 shadow-lg"
              >
                立即注册
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/users"
                className="w-full sm:w-auto px-8 py-4 bg-black/40 backdrop-blur-md text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all"
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
