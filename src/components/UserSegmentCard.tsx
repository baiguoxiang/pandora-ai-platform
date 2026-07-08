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

const UserSegmentCard = ({ title, subtitle, icon: iconName, features, cta, color, image }: UserSegmentCardProps) => {
  const IconComponent = iconMap[iconName] || User;

  return (
    <div className="group relative bg-gradient-card backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/30 to-purple-500/30">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            const iconContainer = target.parentElement?.querySelector('.icon-placeholder') as HTMLElement;
            if (iconContainer) iconContainer.style.display = 'none';
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="icon-placeholder absolute inset-0 flex items-center justify-center">
          <IconComponent className="w-16 h-16 text-white/30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />
        <div className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
          <IconComponent className="w-7 h-7 text-white" />
        </div>
      </div>
      
      <div className="relative p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm mb-6">{subtitle}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to="/register"
          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${color} text-white font-medium rounded-xl hover:opacity-90 transition-opacity`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default UserSegmentCard;
