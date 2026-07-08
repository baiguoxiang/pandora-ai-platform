import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, User } from 'lucide-react';
import { useStore } from '../store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useStore();
  const navigate = useNavigate();

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: '首页', href: '/' },
    { name: 'AI Token超市', href: '/token' },
    { name: 'AI内容创作', href: '/content' },
    { name: 'AI电商平台', href: '/ecommerce' },
    { name: 'AI数字员工', href: '/digital-staff' },
    { name: 'OPC商机协作', href: '/business' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">潘</span>
            </div>
            <span className="text-xl font-bold text-white">潘多拉</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 text-white cursor-pointer hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">中文</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {user.isLoggedIn ? (
              <>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">{user.name}</p>
                    <p className="text-white text-xs">余额: {user.balance} Token</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white hover:text-white transition-colors"
                >
                  退出登录
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-white transition-colors"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  注册
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-black border-b border-white/10 z-50">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-white hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              {user.isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{user.name}</p>
                      <p className="text-white text-xs">余额: {user.balance} Token</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-white hover:text-white transition-colors"
                  >
                    退出登录
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full py-2 text-white hover:text-white transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    登录
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center font-medium rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    注册
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
