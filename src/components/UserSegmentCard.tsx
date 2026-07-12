import { User, Building, Landmark, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserSegmentCardProps {
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
  cta: string;
  color: string;
  image: string;
}

const iconMap: Record<string, LucideIcon> = {
  User,
  Building,
  Landmark,
};

const gradientMap: Record<string, string> = {
  'from-blue-600 to-blue-400': 'linear-gradient(135deg, #2563EB, #3B82F6)',
  'from-purple-600 to-purple-400': 'linear-gradient(135deg, #7C3AED, #A855F7)',
  'from-green-600 to-green-400': 'linear-gradient(135deg, #16A34A, #22C55E)',
  'from-blue-500 to-cyan-400': 'linear-gradient(135deg, #3B82F6, #22D3EE)',
  'from-purple-500 to-pink-400': 'linear-gradient(135deg, #A855F7, #EC4899)',
  'from-amber-500 to-orange-400': 'linear-gradient(135deg, #F59E0B, #F97316)',
  'from-green-500 to-emerald-400': 'linear-gradient(135deg, #22C55E, #10B981)',
  'from-rose-500 to-pink-400': 'linear-gradient(135deg, #F43F5E, #EC4899)',
  'from-indigo-500 to-violet-400': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
};

const getGradientColor = (color: string) => {
  return gradientMap[color] || 'linear-gradient(135deg, #6366F1, #8B5CF6)';
};

const UserSegmentCard = ({ title, subtitle, icon: iconName, features, cta, color, image }: UserSegmentCardProps) => {
  const IconComponent = iconMap[iconName] || User;
  const gradient = getGradientColor(color);

  return (
    <div className="group relative bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.style.background = gradient;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <div style={{ width: '64px', height: '8px', borderRadius: '4px', background: gradient, marginBottom: '12px' }} />
        <p className="text-white/70 text-[8px] mb-6">{subtitle}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/70 text-[8px]">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/register"
          className="inline-flex items-center px-6 py-3 text-white text-[8px] font-medium rounded-xl hover:opacity-90 transition-opacity"
          style={{ background: gradient }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default UserSegmentCard;