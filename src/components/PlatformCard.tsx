import { ShoppingCart, Film, Wrench, Store, Users, Globe, LucideIcon } from 'lucide-react';
import { imageUrl } from '../utils/imageUrl';

interface PlatformCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
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
  'from-blue-500 to-cyan-400': 'linear-gradient(135deg, #3B82F6, #22D3EE)',
  'from-purple-500 to-pink-400': 'linear-gradient(135deg, #A855F7, #EC4899)',
  'from-green-500 to-emerald-400': 'linear-gradient(135deg, #22C55E, #10B981)',
  'from-orange-500 to-amber-400': 'linear-gradient(135deg, #F97316, #F59E0B)',
  'from-red-500 to-rose-400': 'linear-gradient(135deg, #EF4444, #F43F5E)',
  'from-indigo-500 to-violet-400': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
};

const getGradientColor = (color: string) => {
  return gradientMap[color] || 'linear-gradient(135deg, #6366F1, #8B5CF6)';
};

const PlatformCard = ({ name, description, icon: iconName, color, image }: PlatformCardProps) => {
  const IconComponent = iconMap[iconName] || Globe;
  const gradient = getGradientColor(color);

  return (
    <div className="group relative bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <img 
          src={imageUrl(image)} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.style.background = gradient;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-white text-sm font-semibold mb-2">{name}</h3>
        <div style={{ width: '64px', height: '8px', borderRadius: '4px', background: gradient, marginBottom: '12px' }} />
        <p className="text-white/70 text-[8px] leading-relaxed">{description}</p>

        <div className="mt-4 text-indigo-400 text-[8px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>了解更多</span>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;