
import React from 'react';

interface InitiativeProps {
  year: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
  image?: string;
  orientation: 'left' | 'right';
}

const InitiativeCard: React.FC<InitiativeProps> = ({
  year,
  title,
  description,
  status,
  image,
  orientation
}) => {
  const statusColors = {
    upcoming: 'bg-yellow-100 text-yellow-800',
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800'
  };
  
  const statusLabels = {
    upcoming: 'Планируется',
    active: 'В процессе',
    completed: 'Завершен'
  };
  
  return (
    <div className={`flex items-center mb-16 ${orientation === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm relative hover-card h-full">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
          
          <h4 className="text-xl font-bold mt-3 mb-2">{title}</h4>
          <div className="text-sm font-medium text-qaztech-blue mb-3">{year}</div>
          <p className="text-gray-700">{description}</p>
          
          <button className="mt-4 text-qaztech-blue font-medium flex items-center">
            Подробнее
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 p-4">
        <div className="bg-gray-100 rounded-lg h-64 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-qaztech-blue/10">
              <span className="text-qaztech-blue font-medium">QAZTECH</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Инициативы и проекты</h2>
          <p className="text-lg text-gray-700">
            Стратегические проекты QAZTECH, направленные на развитие технологического сектора Казахстана.
          </p>
        </div>
        
        <div className="relative">
          <div className="initiative-line"></div>
          
          <InitiativeCard
            year="2023-2024"
            title="QAZTECH 2025 Guide"
            description="Стратегический документ, формулирующий цели и дорожную карту развития технологического сектора Казахстана до 2025 года."
            status="active"
            image="https://placehold.co/800x400/0043FF/FFFFFF?text=Guide+2025"
            orientation="left"
          />
          
          <InitiativeCard
            year="2023-2025"
            title="Центр права будущего"
            description="Инициатива по созданию правовой базы для регулирования новых технологий и стимулирования инноваций в Казахстане."
            status="active"
            orientation="right"
          />
          
          <InitiativeCard
            year="2024"
            title="QAZTECH Education"
            description="Образовательная программа, направленная на подготовку высококвалифицированных IT-специалистов в партнерстве с ведущими университетами."
            status="upcoming"
            orientation="left"
          />
          
          <InitiativeCard
            year="2023"
            title="Tech Forum Almaty"
            description="Крупнейшее технологическое мероприятие, объединившее более 2000 участников из 150 компаний для обсуждения будущего технологий в Казахстане."
            status="completed"
            image="https://placehold.co/800x400/0043FF/FFFFFF?text=Tech+Forum"
            orientation="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
