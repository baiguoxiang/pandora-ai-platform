import { useState } from 'react';
import { Users, MessageSquare, Video, Clock, Shield, Settings, Sparkles, ChevronRight } from 'lucide-react';

const DigitalStaffPage = () => {
  const [activeTab, setActiveTab] = useState('avatars');

  const tabs = [
    { id: 'avatars', name: '数字人直播' },
    { id: 'chatbot', name: '智能客服' },
    { id: 'automation', name: '自动化运营' },
  ];

  const avatars = [
    {
      id: '1',
      name: '小美',
      role: '电商主播',
      style: 'from-pink-500 to-rose-400',
      image: '/pandora-ai-platform/images/platform-5.jpg',
      stats: { liveCount: 128, viewers: '50万+', sales: '200万+' },
    },
    {
      id: '2',
      name: '小智',
      role: '知识主播',
      style: 'from-blue-500 to-cyan-400',
      image: '/pandora-ai-platform/images/platform-5.jpg',
      stats: { liveCount: 89, viewers: '30万+', sales: '150万+' },
    },
    {
      id: '3',
      name: '小薇',
      role: '娱乐主播',
      style: 'from-purple-500 to-violet-400',
      image: '/pandora-ai-platform/images/platform-5.jpg',
      stats: { liveCount: 215, viewers: '80万+', sales: '350万+' },
    },
    {
      id: '4',
      name: '小宇',
      role: '游戏主播',
      style: 'from-green-500 to-emerald-400',
      image: '/pandora-ai-platform/images/platform-5.jpg',
      stats: { liveCount: 156, viewers: '60万+', sales: '280万+' },
    },
  ];

  const chatbotFeatures = [
    { icon: MessageSquare, title: '7x24小时在线', desc: '全天候服务，永不疲倦' },
    { icon: Shield, title: '多语种支持', desc: '支持100+语言，服务全球客户' },
    { icon: Sparkles, title: '智能对话', desc: '理解上下文，精准回答' },
    { icon: Settings, title: '自定义配置', desc: '根据业务需求定制' },
  ];

  const automationTasks = [
    { title: '定时直播', desc: '自动安排直播时间，无需人工干预' },
    { title: '智能回复', desc: '自动回复客户咨询，提高响应速度' },
    { title: '数据分析', desc: '自动分析运营数据，生成报告' },
    { title: '内容发布', desc: '自动发布社交媒体内容' },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI数字员工
          </h1>
          <p className="text-white">
            7x24小时数字人直播，智能客服，自动化运营，让AI为您工作
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Video, value: '1000+', label: '数字人直播', desc: '每天' },
            { icon: MessageSquare, value: '500万+', label: '智能对话', desc: '每月' },
            { icon: Clock, value: '99.9%', label: '服务可用', desc: '全年' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/50 to-purple-500/50 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white text-sm">{stat.label} <span className="text-indigo-400">{stat.desc}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex border-b border-white/10 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-indigo-500'
                    : 'text-white hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'avatars' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {avatars.map((avatar) => (
                    <div key={avatar.id} className="group bg-white/5 rounded-xl overflow-hidden hover:border-indigo-500/50 border border-white/10 transition-all">
                      <div className={`relative h-48 bg-gradient-to-br ${avatar.style}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 rounded-full text-white text-xs font-medium flex items-center gap-1">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          在线
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${avatar.style} flex items-center justify-center`}>
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{avatar.name}</h4>
                            <p className="text-white text-xs">{avatar.role}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center">
                            <p className="text-white font-bold text-sm">{avatar.stats.liveCount}</p>
                            <p className="text-white text-xs">直播场</p>
                          </div>
                          <div className="text-center">
                            <p className="text-white font-bold text-sm">{avatar.stats.viewers}</p>
                            <p className="text-white text-xs">观看</p>
                          </div>
                          <div className="text-center">
                            <p className="text-white font-bold text-sm">{avatar.stats.sales}</p>
                            <p className="text-white text-xs">销售额</p>
                          </div>
                        </div>
                        <button className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                          立即使用
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chatbot' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {chatbotFeatures.map((feature) => (
                  <div key={feature.title} className="group bg-white/5 rounded-xl overflow-hidden">
                    <div className="relative h-32 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                      <p className="text-white text-sm">{feature.desc}</p>
                      <button className="mt-4 text-indigo-400 text-sm font-medium flex items-center gap-1">
                        了解更多 <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'automation' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {automationTasks.map((task) => (
                  <div key={task.title} className="group bg-white/5 rounded-xl overflow-hidden">
                    <div className="relative h-32 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-2">{task.title}</h4>
                      <p className="text-white text-sm">{task.desc}</p>
                      <button className="mt-4 w-full py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/15 transition-colors">
                        启用任务
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-2xl p-6 border border-red-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-400 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI数字员工解决方案</h3>
                <p className="text-white text-sm">7x24小时不间断服务，降低人力成本</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
              免费体验
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStaffPage;