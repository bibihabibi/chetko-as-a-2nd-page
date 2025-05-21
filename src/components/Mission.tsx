
import React, { useState } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  quote?: string;
  author?: string;
  image?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, quote, author, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-4 text-qaztech-blue">{title}</h3>
      <p className="text-gray-700">{description}</p>
      
      {quote && author && (
        <div 
          className={`
            absolute inset-0 bg-qaztech-blue text-white p-6 flex flex-col justify-center
            transform transition-transform duration-300 ease-in-out
            ${isHovered ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <p className="text-lg italic mb-4">"{quote}"</p>
          <p className="font-medium text-right">- {author}</p>
          
          {image && (
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
              <img 
                src={image} 
                alt={author} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Mission = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Миссия и Ценности</h2>
          <p className="text-lg text-gray-700">
            QAZTECH объединяет технологических лидеров для создания инфраструктуры роста и укрепления голоса технологического сообщества Казахстана.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            title="Создаём инфраструктуру роста" 
            description="Развиваем экосистему, которая поддерживает технологические компании на всех этапах роста, от стартапа до глобального игрока."
            quote="Наша цель - создать среду, где каждый технологический бизнес может процветать и выходить на международные рынки."
            author="Асхат Муратов, Основатель QAZTECH"
          />
          
          <ValueCard 
            title="Укрепляем голос технологического сообщества" 
            description="Представляем интересы IT-индустрии на государственном уровне, формируя благоприятную среду для развития технологий в Казахстане."
            quote="Консолидированный голос технологического сообщества - мощный инструмент для формирования будущего цифрового Казахстана."
            author="Сауле Бектаева, Член совета директоров"
          />
          
          <ValueCard 
            title="Соединяем бизнес, государство и общество" 
            description="Строим мосты между государственными структурами, частным сектором и образовательными учреждениями для создания сильной инновационной экосистемы."
            quote="Только через тесное сотрудничество всех заинтересованных сторон мы можем создать подлинно инновационную экономику."
            author="Мурат Жанибеков, Директор по стратегическим партнерствам"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="italic text-lg text-gray-600">
            "Технологии должны служить обществу. Мы стремимся создавать решения, которые улучшают жизнь людей и двигают Казахстан вперед."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
