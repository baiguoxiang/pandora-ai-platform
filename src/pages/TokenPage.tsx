import { useState } from 'react';
import { Search, Filter, Zap, Clock, Users, ChevronRight } from 'lucide-react';
import { aiModels } from '../data/mockData';

const TokenPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const categories = [
    { id: null, name: '全部' },
    { id: 'text', name: '文本模型' },
    { id: 'image', name: '图像模型' },
    { id: 'video', name: '视频模型' },
    { id: 'audio', name: '音频模型' },
  ];

  const filteredModels = aiModels.filter((model) => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatUsage = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI Token超市
          </h1>
          <p className="text-white text-xs">
            聚合全球所有AI大模型、图片、视频、音乐顶级模型，一个账户就可以使用全球模型
          </p>
        </div>

        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="搜索AI模型..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-white" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id ?? 'all'}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedModel ? (
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <button
              onClick={() => setSelectedModel(null)}
              className="flex items-center gap-2 text-white hover:text-white transition-colors mb-6"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              返回模型列表
            </button>
            {aiModels.find((m) => m.id === selectedModel) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src={aiModels.find((m) => m.id === selectedModel)?.image}
                      alt={aiModels.find((m) => m.id === selectedModel)?.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-3xl font-bold text-white">
                        {aiModels.find((m) => m.id === selectedModel)?.name}
                      </h2>
                      <p className="text-white text-xs">
                        {aiModels.find((m) => m.id === selectedModel)?.provider}
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-xs mb-6">
                    {aiModels.find((m) => m.id === selectedModel)?.description}
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-indigo-400" />
                      <span className="text-white text-xs">
                        使用量: {formatUsage(aiModels.find((m) => m.id === selectedModel)?.usageCount ?? 0)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-white text-xs">状态: 可用</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gradient">
                      ${aiModels.find((m) => m.id === selectedModel)?.price}
                    </span>
                    <span className="text-white text-xs">/ 1K tokens</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">快速开始</h3>
                  <div className="space-y-4">
                    <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium rounded-xl hover:opacity-90 transition-opacity">
                      立即调用
                    </button>
                    <button className="w-full py-3 bg-white/10 text-white text-xs font-medium rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                      查看API文档
                    </button>
                    <button className="w-full py-3 bg-white/10 text-white text-xs font-medium rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                      免费试用
                    </button>
                  </div>
                  <div className="mt-6 p-4 bg-black/30 rounded-lg">
                    <p className="text-white text-xs mb-2">示例代码:</p>
                    <pre className="text-white text-xs overflow-x-auto">
                      {`curl -X POST https://api.panduora.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "gpt-4o", "messages": [{"role": "user", "content": "Hello"}]}'`}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className="group bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                    model.status === 'available'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {model.status === 'available' ? '可用' : '维护中'}
                  </span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                      model.category === 'text' ? 'from-blue-500 to-cyan-400' :
                      model.category === 'image' ? 'from-purple-500 to-pink-400' :
                      model.category === 'video' ? 'from-orange-500 to-red-400' :
                      'from-green-500 to-emerald-400'
                    } flex items-center justify-center`}>
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[8px]">{model.provider}</span>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-white text-xs mb-4 line-clamp-2">
                    {model.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold">${model.price}</span>
                      <span className="text-white text-[8px]">/ 1K</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <Users className="w-3 h-3" />
                      <span>{formatUsage(model.usageCount)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-indigo-400 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      了解详情
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenPage;
