import React, { useState } from 'react';
import { Search, Sparkles, Brain, MessageSquare, Image, Code, Music, Video, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import CategorySection from './components/CategorySection';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: '通用AI', icon: Brain, color: 'bg-purple-500' },
    { id: 2, name: '对话助手', icon: MessageSquare, color: 'bg-blue-500' },
    { id: 3, name: '图像创作', icon: Image, color: 'bg-pink-500' },
    { id: 4, name: '代码开发', icon: Code, color: 'bg-green-500' },
    { id: 5, name: '音频处理', icon: Music, color: 'bg-yellow-500' },
    { id: 6, name: '视频制作', icon: Video, color: 'bg-red-500' },
  ];

  const featuredTools = [
    {
      id: 1,
      name: 'ChatGPT',
      description: '强大的AI对话助手，支持多场景应用',
      category: '对话助手',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Midjourney',
      description: '专业的AI图像生成工具',
      category: '图像创作',
      image: 'https://images.unsplash.com/photo-1686191128892-3f895b8a0c51?w=800&auto=format&fit=crop&q=60',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'GitHub Copilot',
      description: 'AI驱动的代码智能助手',
      category: '代码开发',
      image: 'https://images.unsplash.com/photo-1687186735445-df877226fae9?w=800&auto=format&fit=crop&q=60',
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">发现最佳AI工具</h1>
            <p className="text-xl mb-8">探索、比较和使用顶级AI工具，提升您的工作效率</p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索AI工具..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">工具分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategorySection key={category.id} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Tools */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">精选工具</h2>
          <button className="flex items-center text-purple-600 hover:text-purple-700">
            查看全部 <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">获取最新AI工具资讯</h2>
          <p className="text-gray-300 mb-8">订阅我们的周报，获取AI工具更新和使用技巧</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              订阅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;