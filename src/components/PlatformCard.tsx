import { ShoppingCart, Film, Wrench, Store, Users, Globe, LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Film,
  Wrench,
  Store,
  Users,
  Globe,
};

const gradientMap: Record<string, string> = {
  'from-blue-500 to-cyan-400': 'linear-gradient(to right, #3B82F6, #22D3EE)',
  'from-purple-500 to-pink-400': 'linear-gradient(to right, #A855F7, #EC4899)',
  'from-green-500 to-emerald-400': 'linear-gradient(to right, #22C55E, #10B981)',
  'from-orange-500 to-amber-400': 'linear-gradient(to right, #F97316, #F59E0B)',
  'from-red-500 to-rose-400': 'linear-gradient(to right, #EF4444, #F43F5E)',
  'from-indigo-500 to-violet-400': 'linear-gradient(to right, #6366F1, #8B5CF6)',
};

const getGradientColor = (color: string) => {
  return gradientMap[color] || 'linear-gradient(to right, #6366F1, #8B5CF6)';
};

const PlatformCard = ({ name, description, icon: iconName, color }: PlatformCardProps) => {
  const IconComponent = iconMap[iconName] || Globe;

  return (
    <div className="group relative bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
      <div className={`relative h-40 bg-gradient-to-br ${color}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-white text-sm font-semibold mb-2">{name}</h3>
        <div style={{ width: '64px', height: '8px', borderRadius: '4px', background: getGradientColor(color), marginBottom: '12px' }} />
        <p className="text-white/70 text-[8px] leading-relaxed">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-indigo-400 text-[8px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>了解更多</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;