import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlatformCard from '../components/PlatformCard';
import UserSegmentCard from '../components/UserSegmentCard';
import { platforms, userSegments, modelCarouselImages, advantages, systemLayers, ctaIcons } from '../data/mockData';

const HomePage = () => {
  const stats = [
    { value: '1000+', label: 'AI模型' },
    { value: '10万+', label: '创业者' },
    { value: '100+', label: '国家地区' },
    { value: '99.9%', label: '服务可用性' },
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
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 mb-6">
              <span className="text-white/70 text-[8px]">全球AI工具平台</span>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                潘多拉平台
              </h1>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                链接全球AI模型 · 系统 · 商机
              </h2>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-8">
              <p className="text-xs text-white/80 max-w-2xl">
                赋能个人・服务企业・链接全球
              </p>
            </div>
            
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-10">
              <p className="text-xs text-white/80 max-w-2xl">
                汇聚全球OPC创业者，用AI赋能OPC创业者，链接全球商机和AIOPC创业生态平台
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
                已集成全球1000+顶级AI模型
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {modelCarouselImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={image} 
                  alt={`模型 ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                全球AI Token超市平台
              </h2>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-2 border border-white/10">
              <p className="text-white/70 text-xs max-w-2xl">
                聚合全球所有AI大模型，AI图片，AI视频，AI音乐顶级模型，一个账户就可以使用全球模型，支持API，比官方价格更优惠。
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))';
                    }}
                  />
                </div>
                <h4 className="text-white text-sm font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-[8px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {systemLayers.map((layer) => (
            <div key={layer.id} className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 mb-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img 
                      src={layer.icon} 
                      alt={layer.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))';
                      }}
                    />
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={layer.numberIcon} 
                      alt={`${layer.title}图标`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))';
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{layer.title}</h3>
                  <h4 className="text-white/80 text-sm mb-4">{layer.subtitle}</h4>
                  <p className="text-white/60 text-xs mb-6 leading-relaxed">{layer.description}</p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {layer.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={feature.icon} 
                            alt={feature.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))';
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-white text-[8px] font-semibold">{feature.name}</p>
                          {feature.desc && <p className="text-white/50 text-[6px] mt-1">{feature.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img 
                      src={layer.arrowIcon} 
                      alt="箭头" 
                      className="w-8 h-8"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="text-indigo-400 text-xs font-medium">{layer.cta}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                开始你的全球 AI创业之旅
              </h2>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-10">
              <p className="text-white/70 text-sm max-w-2xl">
                从今天起，用AI重构你的业务
              </p>
            </div>
            <div className="inline-block bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 mb-10">
              <p className="text-white/70 text-xs max-w-2xl">
                汇聚全球OPC创业者，用AI赋能OPC创业者，链接全球商机和OPC创业生态平台
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              {ctaIcons.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img 
                    src={item.icon} 
                    alt={item.text} 
                    className="w-8 h-8"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-white text-xs">{item.text}</span>
                </div>
              ))}
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
