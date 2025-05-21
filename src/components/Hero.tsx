
import React from 'react';
import AnimatedPoints from './AnimatedPoints';

const Hero = () => {
  const scrollToMission = (e: React.MouseEvent) => {
    e.preventDefault();
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedPoints count={80} connectionRadius={150} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Мы объединяем лидеров, которые двигают рынок технологий в Казахстане
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Альянс 77 IT-компаний. Продуктологи, фаундеры, CTO и инвесторы — все здесь.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#members" 
              className="bg-qaztech-blue text-white rounded-md px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
            >
              Кто с нами
            </a>
            
            <a 
              href="#mission" 
              className="bg-white border border-qaztech-blue text-qaztech-blue rounded-md px-8 py-3 font-medium hover:bg-qaztech-blue/5 transition-colors"
            >
              Смотреть миссию
            </a>
          </div>
          
          <div className="mt-20">
            <a 
              href="#mission" 
              onClick={scrollToMission}
              className="inline-block animate-float cursor-pointer"
            >
              <div className="relative h-16 w-16 mx-auto">
                {/* Основная стрелка */}
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <path 
                    d="M12 5V19M12 19L19 12M12 19L5 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Дублирующие стрелки для анимации */}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 opacity-70 animate-pulse-soft"
                >
                  <path 
                    d="M12 5V19M12 19L19 12M12 19L5 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                
                <svg 
                  width="8" 
                  height="8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-40 animate-pulse-soft"
                >
                  <path 
                    d="M12 5V19M12 19L19 12M12 19L5 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
