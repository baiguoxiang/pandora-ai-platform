import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import { useStore } from '../store';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  const { register } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || password !== confirmPassword || !agreed) return;
    
    setIsLoading(true);
    setTimeout(() => {
      register(name, email, password);
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  const passwordRequirements = [
    { text: '至少6个字符', met: password.length >= 6 },
    { text: '包含字母', met: /[a-zA-Z]/.test(password) },
    { text: '包含数字', met: /[0-9]/.test(password) },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center pt-24 pb-16">
      <div className="max-w-lg w-full mx-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">潘</span>
            </div>
            <span className="text-2xl font-bold text-white">潘多拉</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">创建账户</h1>
          <p className="text-white/70 text-xs">开启您的AI创业之旅，免费体验全球顶尖AI模型</p>
        </div>

        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white text-xs font-medium mb-3">用户名</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="请输入用户名"
                  className="w-full pl-14 pr-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white text-xs placeholder-white/40 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white text-xs font-medium mb-3">邮箱</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入邮箱地址"
                  className="w-full pl-14 pr-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white text-xs placeholder-white/40 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white text-xs font-medium mb-3">密码</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="w-full pl-14 pr-14 py-4 bg-white/10 border border-white/20 rounded-xl text-white text-xs placeholder-white/40 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="mt-3 space-y-2">
                {passwordRequirements.map((req) => (
                  <div key={req.text} className="flex items-center gap-2">
                    <CheckCircle className={`w-5 h-5 ${req.met ? 'text-green-400' : 'text-white/40'}`} />
                    <span className={`text-xs ${req.met ? 'text-green-400' : 'text-white/60'}`}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white text-xs font-medium mb-3">确认密码</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="请再次输入密码"
                  className={`w-full pl-14 pr-5 py-4 bg-white/10 border rounded-xl text-white text-xs placeholder-white/40 focus:outline-none transition-all ${
                    confirmPassword && password !== confirmPassword
                      ? 'border-red-500'
                      : 'border-white/20 focus:border-indigo-500 focus:bg-white/15'
                  }`}
                />
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-400 text-xs mt-2">两次输入的密码不一致</p>
              )}
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-gray-500 bg-white/10 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 mt-0.5"
              />
              <span className="text-white/80 text-xs">
                我同意潘多拉的
                <Link to="/" className="text-indigo-400 hover:text-indigo-300">服务条款</Link>
                和
                <Link to="/" className="text-indigo-400 hover:text-indigo-300">隐私政策</Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading || !name || !email || !password || password !== confirmPassword || !agreed}
              className={`w-full py-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                isLoading || !name || !email || !password || password !== confirmPassword || !agreed
                  ? 'bg-gray-600 text-white/70 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 glow-effect'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  注册中...
                </>
              ) : (
                <>
                  注册
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <p className="text-center text-white/70 text-xs">
              已有账户？
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 ml-1 font-medium">
                立即登录
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-card text-white/60 text-xs">或使用以下方式注册</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white text-xs">Google</span>
              </button>
              <button className="py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white text-xs">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-medium">新用户专享福利</p>
              <p className="text-white/70 text-[8px] mt-1">注册即送1000 Token免费额度，体验全球顶尖AI模型</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
