import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'AI Token超市', href: '/token' },
      { name: 'AI内容创作', href: '/content' },
      { name: 'AI电商平台', href: '/ecommerce' },
      { name: 'AI数字员工', href: '/users' },
    ],
    solutions: [
      { name: '个人创业', href: '/' },
      { name: '企业服务', href: '/' },
      { name: '政府合作', href: '/' },
      { name: '开发者平台', href: '/' },
    ],
    company: [
      { name: '关于我们', href: '/' },
      { name: '新闻动态', href: '/' },
      { name: '合作伙伴', href: '/' },
      { name: '加入我们', href: '/' },
    ],
    support: [
      { name: '帮助中心', href: '/' },
      { name: 'API文档', href: '/' },
      { name: '服务条款', href: '/' },
      { name: '隐私政策', href: '/' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-black pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">潘</span>
              </div>
              <span className="text-xl font-bold text-white">潘多拉</span>
            </div>
            <p className="text-white/70 text-xs mb-4">
              全球领先的AI创业平台，赋能个人创业者、服务企业、链接全球商机。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <Mail className="w-4 h-4" />
                <span>19194991443@163.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <Phone className="w-4 h-4" />
                <span>19194991443</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <MapPin className="w-4 h-4" />
                <span>广东省惠州市惠城区水口大道茂森创意园B408</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-4">产品服务</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-4">关于公司</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold mb-4">支持帮助</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs">
              &copy; 2024 潘多拉科技有限公司. 保留所有权利.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-white/50 text-xs hover:text-white transition-colors">
                服务条款
              </Link>
              <Link to="/" className="text-white/50 text-xs hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link to="/" className="text-white/50 text-xs hover:text-white transition-colors">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
