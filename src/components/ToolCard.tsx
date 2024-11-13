import React from 'react';
import { Star } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  image: string;
  rating: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, category, image, rating }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            了解详情
          </button>
          <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;