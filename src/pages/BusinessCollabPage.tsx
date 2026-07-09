import { useState } from 'react';
import { Globe, Briefcase, Users, TrendingUp, MessageCircle, ChevronRight, Search, Filter } from 'lucide-react';

const BusinessCollabPage = () => {
  const [activeTab, setActiveTab] = useState('opportunities');

  const tabs = [
    { id: 'opportunities', name: '商机大厅' },
    { id: 'projects', name: '项目承接' },
    { id: 'network', name: '人脉圈' },
  ];

  const opportunities = [
    {
      id: '1',
      title: 'AI短视频制作项目',
      category: '内容创作',
      budget: '5000-10000',
      location: '全球',
      deadline: '30天',
      applicants: 23,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20short%20video%20production%20project%20creative&image_size=square',
    },
    {
      id: '2',
      title: '电商AI客服系统开发',
      category: '技术开发',
      budget: '20000-50000',
      location: '中国',
      deadline: '60天',
      applicants: 15,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20AI%20chatbot%20system%20development%20tech&image_size=square',
    },
    {
      id: '3',
      title: 'AI数字人直播服务',
      category: '营销推广',
      budget: '3000-8000',
      location: '全球',
      deadline: '15天',
      applicants: 31,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20digital%20human%20live%20streaming%20marketing&image_size=square',
    },
    {
      id: '4',
      title: 'AI图像生成API集成',
      category: '技术开发',
      budget: '10000-20000',
      location: '美国',
      deadline: '45天',
      applicants: 18,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20image%20generation%20API%20integration%20tech&image_size=square',
    },
    {
      id: '5',
      title: 'AI剧本创作服务',
      category: '内容创作',
      budget: '2000-5000',
      location: '全球',
      deadline: '20天',
      applicants: 28,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20script%20writing%20service%20creative%20writing&image_size=square',
    },
    {
      id: '6',
      title: '跨境电商AI选品',
      category: '电商服务',
      budget: '5000-15000',
      location: '全球',
      deadline: '30天',
      applicants: 22,
      status: 'active',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cross%20border%20ecommerce%20AI%20product%20selection&image_size=square',
    },
  ];

  const projects = [
    {
      id: '1',
      name: 'AI智能客服系统',
      progress: 85,
      client: '某电商平台',
      earnings: '25000',
      status: '进行中',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20smart%20customer%20service%20system%20dashboard&image_size=square',
    },
    {
      id: '2',
      name: '短视频创作项目',
      progress: 100,
      client: '某品牌方',
      earnings: '8000',
      status: '已完成',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=short%20video%20creative%20project%20completed&image_size=square',
    },
    {
      id: '3',
      name: '数字人直播服务',
      progress: 45,
      client: '某电商主播',
      earnings: '12000',
      status: '进行中',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20human%20live%20streaming%20service%20progress&image_size=square',
    },
    {
      id: '4',
      name: 'AI图像生成工具',
      progress: 20,
      client: '某设计公司',
      earnings: '18000',
      status: '进行中',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20image%20generation%20tool%20development&image_size=square',
    },
  ];

  const network = [
    {
      id: '1',
      name: '张明',
      role: 'AI技术专家',
      company: '某科技公司',
      location: '北京',
      connections: 520,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20AI%20tech%20expert%20portrait&image_size=square',
    },
    {
      id: '2',
      name: '李华',
      role: '电商运营总监',
      company: '某电商平台',
      location: '上海',
      connections: 890,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20ecommerce%20director%20portrait&image_size=square',
    },
    {
      id: '3',
      name: '王芳',
      role: '内容创作达人',
      company: '自由职业',
      location: '深圳',
      connections: 1200,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20content%20creator%20portrait&image_size=square',
    },
    {
      id: '4',
      name: '陈伟',
      role: '产品经理',
      company: '某AI公司',
      location: '杭州',
      connections: 650,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20product%20manager%20portrait&image_size=square',
    },
    {
      id: '5',
      name: '刘洋',
      role: '跨境电商卖家',
      company: '自营店铺',
      location: '广州',
      connections: 780,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20cross%20border%20seller%20portrait&image_size=square',
    },
    {
      id: '6',
      name: '赵雪',
      role: 'AI培训讲师',
      company: '某教育机构',
      location: '成都',
      connections: 430,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20AI%20trainer%20portrait&image_size=square',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            OPC商机协作
          </h1>
          <p className="text-white">
            链接全球商机，承接AI订单，实现技能变现
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { value: '10万+', label: '商机数量', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20opportunities%20count%20statistics&image_size=square' },
            { value: '50万+', label: '活跃用户', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=active%20users%20community%20network&image_size=square' },
            { value: '100亿+', label: '交易总额', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=transaction%20amount%20financial%20growth&image_size=square' },
            { value: '200+', label: '覆盖国家', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20coverage%20world%20map%20connections&image_size=square' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="relative h-20 rounded-xl overflow-hidden mb-4">
                <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/60 to-purple-500/60" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white text-sm">{stat.label}</p>
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
            {activeTab === 'opportunities' && (
              <div>
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                    <input
                      type="text"
                      placeholder="搜索商机..."
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-white" />
                    <select className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors">
                      <option value="">全部分类</option>
                      <option value="content">内容创作</option>
                      <option value="tech">技术开发</option>
                      <option value="marketing">营销推广</option>
                      <option value="ecommerce">电商服务</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities.map((opp) => (
                    <div key={opp.id} className="group bg-white/5 rounded-xl overflow-hidden hover:border-indigo-500/50 border border-white/10 transition-all cursor-pointer">
                      <div className="relative h-32">
                        <img src={opp.image} alt={opp.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                          opp.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-white'
                        }`}>
                          {opp.status === 'active' ? '进行中' : '已结束'}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{opp.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-white/5 rounded text-white text-xs">{opp.category}</span>
                          <span className="px-2 py-1 bg-white/5 rounded text-white text-xs">{opp.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white text-xs mb-1">预算</p>
                            <p className="text-white font-bold">${opp.budget}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-xs mb-1">截止日期</p>
                            <p className="text-white text-sm">{opp.deadline}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-1 text-white text-xs">
                            <Users className="w-3 h-3" />
                            <span>{opp.applicants}人申请</span>
                          </div>
                          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                            立即申请
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white/5 rounded-xl overflow-hidden">
                    <div className="relative h-32">
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-2">{project.name}</h4>
                      <p className="text-white text-sm mb-3">客户: {project.client}</p>
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-xs">进度</span>
                          <span className="text-white text-xs">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              project.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          project.status === '进行中'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-white font-bold">${project.earnings}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'network' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {network.map((person) => (
                  <div key={person.id} className="group bg-white/5 rounded-xl p-4 text-center hover:border-indigo-500/50 border border-white/10 transition-all">
                    <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0A1628]" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{person.name}</h4>
                    <p className="text-white text-xs mb-1">{person.role}</p>
                    <p className="text-white text-xs mb-2">{person.company}</p>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Globe className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{person.location}</span>
                    </div>
                    <button className="w-full py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/15 transition-colors">
                      加为好友
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl p-6 border border-indigo-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">OPC商机协作平台</h3>
                <p className="text-white text-sm">连接全球商机，实现技能变现</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
              发布商机
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCollabPage;