import { useState } from 'react';
import { ShoppingCart, Video, BarChart3, Globe, Sparkles, TrendingUp, DollarSign } from 'lucide-react';
import { ecommerceFeatures } from '../data/mockData';

const EcommercePage = () => {
  const [activeTab, setActiveTab] = useState('products');

  const tabs = [
    { id: 'products', name: '商品管理' },
    { id: 'live', name: '数字人直播' },
    { id: 'analytics', name: '数据统计' },
    { id: 'distribution', name: '全球分发' },
  ];

  const products = [
    { id: '1', name: '智能手表', category: '电子产品', price: 299, sales: 1258, status: 'active', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20watch%20product%20photo%20on%20white%20background&image_size=square' },
    { id: '2', name: '无线耳机', category: '电子产品', price: 199, sales: 2345, status: 'active', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20earbuds%20product%20photo%20on%20white%20background&image_size=square' },
    { id: '3', name: '便携充电宝', category: '数码配件', price: 89, sales: 5678, status: 'active', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portable%20power%20bank%20product%20photo%20on%20white%20background&image_size=square' },
    { id: '4', name: '智能台灯', category: '智能家居', price: 159, sales: 892, status: 'draft', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20desk%20lamp%20product%20photo%20on%20white%20background&image_size=square' },
  ];

  const liveStats = [
    { label: '直播场次', value: '24', unit: '场' },
    { label: '观看人数', value: '12.5万', unit: '人' },
    { label: '销售额', value: '58.6万', unit: '元' },
    { label: '转化率', value: '3.2%', unit: '' },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI电商平台
          </h1>
          <p className="text-white">
            AI赋能跨境电商，选品带货，一人卖向全球。智能商品素材生成，数字人直播，全球分发。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {ecommerceFeatures.map((feature) => (
            <div key={feature.id} className="bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
                <p className="text-white text-sm">{feature.description}</p>
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
            {activeTab === 'products' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">商品列表</h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    添加商品
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white/5 rounded-xl overflow-hidden">
                      <div className="relative h-40">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-white'
                        }`}>
                          {product.status === 'active' ? '在售' : '草稿'}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-medium mb-1">{product.name}</h4>
                        <p className="text-white text-xs mb-2">{product.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">${product.price}</span>
                          <span className="text-white text-xs">销量: {product.sales}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'live' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {liveStats.map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                      <p className="text-white text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                        <span className="text-white text-sm font-normal ml-1">{stat.unit}</span>
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 rounded-xl overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20human%20live%20shopping%20streaming%20broadcast%20studio&image_size=landscape_16_9"
                          alt="直播画面"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 rounded-full text-white text-xs font-medium flex items-center gap-1">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          LIVE
                        </div>
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-xs">
                          1.2万观看
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-semibold mb-2">智能手表直播专场</h4>
                        <p className="text-white text-sm mb-4">实时互动，AI主播讲解产品特点</p>
                        <div className="flex items-center gap-3">
                          <button className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                            进入直播
                          </button>
                          <button className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/15 transition-colors">
                            配置
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analytics%20dashboard%20with%20charts%20and%20graphs&image_size=square" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div className="relative">
                    <h4 className="text-white font-semibold mb-4">销售趋势</h4>
                    <div className="h-64 flex items-end gap-4">
                      {[60, 80, 45, 90, 70, 85, 100].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 text-white text-xs">
                      {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=top%20selling%20products%20ecommerce%20ranking&image_size=square" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div className="relative">
                    <h4 className="text-white font-semibold mb-4">热门商品</h4>
                    <div className="space-y-4">
                      {products.slice(0, 3).map((product, i) => (
                        <div key={product.id} className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                            i === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white' :
                            i === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white' :
                            'bg-gradient-to-br from-orange-600 to-orange-700 text-white'
                          }`}>
                            {i + 1}
                          </div>
                          <div className="w-12 h-12 rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm">{product.name}</p>
                            <p className="text-white text-xs">销量: {product.sales}</p>
                          </div>
                          <p className="text-white font-semibold">${product.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'distribution' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'TikTok', users: '10亿+', color: 'from-cyan-500 to-blue-500', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tiktok%20social%20media%20platform%20logo%20concept&image_size=square' },
                  { name: 'YouTube', users: '20亿+', color: 'from-red-500 to-orange-500', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=youtube%20video%20platform%20logo%20concept&image_size=square' },
                  { name: 'Amazon', users: '3亿+', color: 'from-orange-500 to-amber-500', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=amazon%20ecommerce%20platform%20logo%20concept&image_size=square' },
                  { name: 'Shopify', users: '400万+', color: 'from-green-500 to-emerald-500', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shopify%20ecommerce%20platform%20logo%20concept&image_size=square' },
                ].map((platform) => (
                  <div key={platform.name} className="bg-white/5 rounded-xl overflow-hidden text-center">
                    <div className="relative h-32">
                      <img src={platform.image} alt={platform.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-2">{platform.name}</h4>
                      <p className="text-white text-sm">{platform.users}用户</p>
                      <button className="mt-4 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/15 transition-colors">
                        连接
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-6 border border-orange-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI电商解决方案</h3>
                <p className="text-white text-sm">从选品到全球分发，一站式AI赋能</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-white text-xs">效率提升</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">3x</p>
                <p className="text-white text-xs">销量增长</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
