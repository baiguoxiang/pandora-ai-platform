import { ShoppingCart, Film, Wrench, Store, Users, Globe, LucideIcon } from 'lucide-react';
import { useState } from 'react';

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

const PlatformCard = ({ name, description, icon: iconName, color, image }: PlatformCardProps) => {
  const IconComponent = iconMap[iconName] || Globe;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="group relative bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-40 overflow-hidden">
        {!imageFailed && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageFailed(true)}
          />
        )}
        {imageFailed && (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <IconComponent className="w-16 h-16 text-white/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="relative p-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-white text-base font-semibold mb-2">{name}</h3>
        <p className="text-white/80 text-xs leading-relaxed">{description}</p>
        
        <div className="mt-4 flex items-center gap-2 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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