import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">AI Times</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">首页</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">工具库</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">教程</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">博客</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">关于我们</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-purple-600 hover:text-purple-700">登录</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              注册
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;