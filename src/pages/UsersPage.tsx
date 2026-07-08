import { useState } from 'react';
import { User, Settings, CreditCard, FileText, Bell, Wallet, Activity, TrendingUp, DollarSign, ChevronRight } from 'lucide-react';
import { useStore } from '../store';
import { recentOrders } from '../data/mockData';

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user } = useStore();

  const tabs = [
    { id: 'dashboard', name: '仪表盘', icon: Activity },
    { id: 'orders', name: '订单管理', icon: FileText },
    { id: 'wallet', name: '资产管理', icon: Wallet },
    { id: 'settings', name: '账户设置', icon: Settings },
    { id: 'notifications', name: '通知中心', icon: Bell },
  ];

  const quickActions = [
    { name: '充值Token', icon: CreditCard, color: 'from-green-500 to-emerald-400' },
    { name: '购买模型', icon: DollarSign, color: 'from-indigo-500 to-purple-500' },
    { name: '创建内容', icon: FileText, color: 'from-orange-500 to-amber-400' },
    { name: '联系客服', icon: Bell, color: 'from-blue-500 to-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{user.name}</h3>
                  <p className="text-white text-sm">{user.email}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30'
                        : 'text-white hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">快捷操作</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-xs">{action.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">欢迎回来，{user.name}</h2>
                      <p className="text-white">今天是个美好的日子，开始您的AI创业之旅吧！</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-white text-sm">账户余额</p>
                        <p className="text-3xl font-bold text-gradient">{user.balance} Token</p>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                        充值
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: '本月消费', value: '¥256', icon: DollarSign, color: 'from-red-500 to-rose-400' },
                    { label: '使用模型', value: '128次', icon: Activity, color: 'from-blue-500 to-cyan-400' },
                    { label: '创作内容', value: '56条', icon: FileText, color: 'from-green-500 to-emerald-400' },
                    { label: '订单数量', value: '8笔', icon: CreditCard, color: 'from-orange-500 to-amber-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">近期订单</h3>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1">
                      查看全部
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">{order.model}</p>
                            <p className="text-white text-sm">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'completed'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {order.status === 'completed' ? '已完成' : '处理中'}
                          </span>
                          <p className="text-white font-semibold">-{order.amount} Token</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">消费趋势</h3>
                    <div className="h-48 flex items-end gap-3">
                      {[40, 60, 35, 80, 55, 70, 90].map((height, i) => (
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
                  
                  <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">推荐模型</h3>
                    <div className="space-y-3">
                      {['GPT-4o', 'Stable Diffusion XL', 'ElevenLabs'].map((model) => (
                        <div key={model} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white">{model}</span>
                          </div>
                          <button className="text-indigo-400 hover:text-indigo-300 text-sm">使用</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">订单管理</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white text-sm font-medium">订单号</th>
                        <th className="text-left py-3 px-4 text-white text-sm font-medium">模型名称</th>
                        <th className="text-right py-3 px-4 text-white text-sm font-medium">消费金额</th>
                        <th className="text-center py-3 px-4 text-white text-sm font-medium">状态</th>
                        <th className="text-right py-3 px-4 text-white text-sm font-medium">创建时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 text-white font-mono">{order.id}</td>
                          <td className="py-4 px-4 text-white">{order.model}</td>
                          <td className="py-4 px-4 text-right text-white">{order.amount} Token</td>
                          <td className="py-4 px-4 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'completed'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {order.status === 'completed' ? '已完成' : '处理中'}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right text-white">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">资产管理</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4">账户余额</h3>
                    <div className="text-center py-8">
                      <p className="text-white text-sm mb-2">可用余额</p>
                      <p className="text-5xl font-bold text-gradient">{user.balance} Token</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                        充值
                      </button>
                      <button className="flex-1 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                        提现
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4">交易记录</h3>
                    <div className="space-y-3">
                      {[
                        { type: '充值', amount: '+500', date: '2024-01-15' },
                        { type: '消费', amount: '-100', date: '2024-01-14' },
                        { type: '消费', amount: '-50', date: '2024-01-13' },
                        { type: '奖励', amount: '+100', date: '2024-01-12' },
                      ].map((item) => (
                        <div key={item.date} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                          <div>
                            <p className="text-white text-sm">{item.type}</p>
                            <p className="text-white text-xs">{item.date}</p>
                          </div>
                          <p className={`font-semibold ${
                            item.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {item.amount} Token
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">账户设置</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-4">个人信息</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm mb-2">用户名</label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm mb-2">邮箱</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-4">安全设置</h3>
                    <div className="space-y-4">
                      <button className="w-full py-3 bg-white/5 text-left rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between">
                        <span className="text-white">修改密码</span>
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-full py-3 bg-white/5 text-left rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between">
                        <span className="text-white">绑定手机</span>
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-full py-3 bg-white/5 text-left rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between">
                        <span className="text-white">开启双因素认证</span>
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                    保存设置
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">通知中心</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Token充值成功', desc: '您的账户已成功充值500 Token', time: '5分钟前', read: false },
                    { title: '订单完成', desc: '您的订单 ORD001 已完成', time: '1小时前', read: false },
                    { title: '新功能上线', desc: 'AI视频创作功能已上线，快来体验吧！', time: '1天前', read: true },
                    { title: '账户安全提醒', desc: '建议开启双因素认证以提高账户安全性', time: '3天前', read: true },
                  ].map((notification, i) => (
                    <div key={i} className={`p-4 rounded-xl transition-all ${
                      notification.read ? 'bg-white/5' : 'bg-indigo-500/10 border border-indigo-500/30'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1">{notification.title}</h4>
                          <p className="text-white text-sm">{notification.desc}</p>
                        </div>
                        <span className="text-white text-xs ml-4">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
