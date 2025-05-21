
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyClick = () => {
    toast({
      title: "Заявка",
      description: "Форма заявок скоро будет доступна",
      duration: 3000,
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-qaztech-blue">QAZTECH</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-gray-800 hover:text-qaztech-blue transition-colors">Миссия</a>
          <a href="#members" className="text-gray-800 hover:text-qaztech-blue transition-colors">Участники</a>
          <a href="#stories" className="text-gray-800 hover:text-qaztech-blue transition-colors">Истории</a>
          <a href="#initiatives" className="text-gray-800 hover:text-qaztech-blue transition-colors">Инициативы</a>
          <a href="#team" className="text-gray-800 hover:text-qaztech-blue transition-colors">Команда</a>
          <button
            onClick={handleApplyClick}
            className="bg-qaztech-blue text-white rounded-md px-5 py-2 font-medium hover:bg-blue-700 transition-colors"
          >
            Присоединиться
          </button>
        </nav>
        
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
