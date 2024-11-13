import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategorySectionProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ name, icon: Icon, color }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full ${color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      
      <div className="relative">
        <Icon className={`h-10 w-10 ${color.replace('bg-', 'text-')} mb-4`} />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">探索最新的{name}工具和应用</p>
        
        <button className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          查看更多
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategorySection;