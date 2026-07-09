import { useState } from 'react';
import { FileText, Image, Video, Music, BookOpen, Subtitles, Play, Sparkles } from 'lucide-react';
import { contentTemplates } from '../data/mockData';

const ContentPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const iconMap: Record<string, typeof FileText> = {
    script: FileText,
    image: Image,
    video: Video,
    audio: Music,
    comic: BookOpen,
    subtitle: Subtitles,
  };

  const colorMap: Record<string, string> = {
    script: 'from-blue-500 to-cyan-400',
    image: 'from-purple-500 to-pink-400',
    video: 'from-orange-500 to-red-400',
    audio: 'from-green-500 to-emerald-400',
    comic: 'from-yellow-500 to-orange-400',
    subtitle: 'from-indigo-500 to-violet-400',
  };

  const handleGenerate = () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    setOutput(null);
    
    setTimeout(() => {
      setIsGenerating(false);
      setOutput('生成内容示例：\n\n根据您的输入，我们已经为您生成了高质量的内容。这是一个演示输出，展示了潘多拉AI内容创作平台的强大能力。');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI内容创作平台
          </h1>
          <p className="text-white">
            从剧本生成到视频合成，一键完成AI短剧漫剧制作，让创意触达全球
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              {selectedTemplate ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      {contentTemplates.find((t) => t.id === selectedTemplate)?.name}
                    </h3>
                    <button
                      onClick={() => setSelectedTemplate(null)}
                      className="text-white hover:text-white transition-colors"
                    >
                      返回模板选择
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">
                      输入内容描述
                    </label>
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="请输入您想要生成的内容描述..."
                      className="w-full h-40 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !inputText.trim()}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isGenerating || !inputText.trim()
                        ? 'bg-gray-600 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90'
                    }`}
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        生成中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        开始生成
                      </>
                    )}
                  </button>
                  
                  {output && (
                    <div className="mt-6 p-4 bg-black/30 rounded-xl">
                      <h4 className="text-white font-medium mb-2">生成结果</h4>
                      <pre className="text-white text-sm whitespace-pre-wrap">{output}</pre>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contentTemplates.map((template) => {
                    const IconComponent = iconMap[template.category] || FileText;
                    const color = colorMap[template.category] || 'from-indigo-500 to-purple-500';
                    
                    return (
                      <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 cursor-pointer transition-all hover:-translate-y-1"
                      >
                        <div className={`relative h-32 rounded-lg mb-4 bg-gradient-to-br ${color}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-white/20" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <h3 className="text-white font-semibold mb-2">{template.name}</h3>
                        <p className="text-white text-sm">{template.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4" />
                          开始使用
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-8 bg-gradient-card backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">创作流程</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: '输入创意', desc: '描述您的创作想法', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20brainstorming%20with%20AI%20idea%20generation%20interface&image_size=square' },
                  { step: '2', title: '选择模型', desc: '挑选合适的AI模型', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20model%20selection%20dashboard%20with%20various%20models&image_size=square' },
                  { step: '3', title: '生成内容', desc: '一键生成高质量内容', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20content%20generation%20process%20with%20creative%20output&image_size=square' },
                  { step: '4', title: '全球分发', desc: '分发至全球平台变现', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=global%20content%20distribution%20network%20with%20world%20map&image_size=square' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-card backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">作品展示</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: '科幻短剧《星际穿越》', type: '短剧', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sci-fi%20short%20film%20space%20exploration%20scene&image_size=landscape_16_9' },
                  { title: '动漫《未来城市》', type: '漫剧', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anime%20style%20futuristic%20city%20night%20scene&image_size=landscape_16_9' },
                  { title: '宣传片《AI时代》', type: '视频', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20promotional%20video%20futuristic%20concept&image_size=landscape_16_9' },
                  { title: '插画《梦境》', type: '图片', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=surreal%20dream%20landscape%20fantasy%20artwork&image_size=landscape_16_9' },
                  { title: '纪录片《自然之美》', type: '视频', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nature%20documentary%20beautiful%20landscape%20scenery&image_size=landscape_16_9' },
                  { title: '漫画《星际冒险》', type: '漫剧', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=manga%20comic%20space%20adventure%20scene%20style&image_size=landscape_16_9' },
                ].map((item, index) => (
                  <div key={index} className="group relative rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-2 py-1 bg-indigo-500/80 text-white text-xs rounded-full mb-2">{item.type}</span>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">热门功能</h3>
              <ul className="space-y-3">
                {[
                  { name: 'AI剧本生成', usage: '10万+次/日' },
                  { name: 'AI图片生成', usage: '50万+次/日' },
                  { name: 'AI视频创作', usage: '5万+次/日' },
                  { name: '多语种配音', usage: '15万+次/日' },
                ].map((item) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="text-white">{item.name}</span>
                    <span className="text-white text-sm">{item.usage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">限时优惠</h3>
              <p className="text-white text-sm mb-4">
                新用户注册即送1000 Token免费额度
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                立即领取
              </button>
            </div>

            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">使用教程</h3>
              <div className="space-y-3">
                {[
                  '如何快速生成AI短剧',
                  'AI图片生成技巧',
                  '多语种配音设置',
                  '内容分发指南',
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left text-white hover:text-white transition-colors text-sm py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
