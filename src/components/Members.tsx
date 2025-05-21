
import React, { useState } from 'react';

// Mock data for member companies
const memberCompanies = [
  { id: 1, name: 'Kaspi.kz', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Kaspi.kz', category: 'Финтех', description: 'Ведущая финтех-компания Казахстана, предоставляющая инновационные платежные решения.' },
  { id: 2, name: 'Kolesa Group', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Kolesa', category: 'Маркетплейс', description: 'Крупнейшая автомобильная и недвижимая онлайн площадка в стране.' },
  { id: 3, name: 'Chocofamily', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Chocofamily', category: 'E-commerce', description: 'Холдинг электронной коммерции, объединяющий популярные сервисы.' },
  { id: 4, name: 'Terralink', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Terralink', category: 'IT-решения', description: 'Международная компания, специализирующаяся на корпоративных IT-решениях.' },
  { id: 5, name: 'Tinkoff', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Tinkoff', category: 'Финтех', description: 'Инновационный онлайн-банк, предлагающий широкий спектр финансовых услуг.' },
  { id: 6, name: 'DAR', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=DAR', category: 'Стартап', description: 'Экосистема инновационных технологий и образовательных проектов.' },
  { id: 7, name: 'Техногард', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Техногард', category: 'Кибербезопасность', description: 'Лидер в области информационной безопасности и защиты данных.' },
  { id: 8, name: 'Astana Hub', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Astana+Hub', category: 'Венчурный фонд', description: 'Международный технопарк IT-стартапов, поддерживающий инновационные проекты.' },
  { id: 9, name: 'Onetech', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=OneТech', category: 'IT-решения', description: 'Разработка программного обеспечения и IT-консалтинг для бизнеса.' },
  { id: 10, name: 'Traft', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Traft', category: 'Логистика', description: 'Технологическая платформа для оптимизации логистических процессов.' },
  { id: 11, name: 'Arbuz.kz', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=Arbuz', category: 'E-commerce', description: 'Онлайн-супермаркет с доставкой продуктов питания.' },
  { id: 12, name: 'BTS Digital', logo: 'https://placehold.co/200x100/0043FF/FFFFFF?text=BTS+Digital', category: 'IT-решения', description: 'Цифровая компания, разрабатывающая инновационные продукты для бизнеса и государства.' },
];

const categories = ['Все', 'Стартапы', 'Scale-ups', 'Вендоры', 'Венчурные фонды', 'Финтех', 'IT-решения', 'E-commerce', 'Маркетплейс', 'Кибербезопасность', 'Логистика'];

interface MemberCardProps {
  name: string;
  logo: string;
  category: string;
  description: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, logo, category, description }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden transition-all duration-300
        ${expanded ? 'shadow-md' : 'shadow-sm hover:shadow-md'}
      `}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6">
        <img src={logo} alt={name} className="h-16 object-contain mb-4" />
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-sm text-qaztech-blue mb-2">{category}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-40' : 'max-h-0'}`}>
          <p className="text-gray-700 mt-4">{description}</p>
        </div>
        
        <button className="text-sm text-qaztech-blue mt-3 flex items-center">
          {expanded ? 'Свернуть' : 'Подробнее'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Members = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  
  const filteredCompanies = activeCategory === 'Все'
    ? memberCompanies
    : memberCompanies.filter(company => company.category === activeCategory);
  
  return (
    <section id="members" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Участники Альянса</h2>
          <p className="text-lg text-gray-700">
            QAZTECH объединяет ведущие технологические компании Казахстана для совместного развития и влияния на рынок.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category
                  ? 'bg-qaztech-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCompanies.map(company => (
            <MemberCard
              key={company.id}
              name={company.name}
              logo={company.logo}
              category={company.category}
              description={company.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Более <span className="font-bold">70</span> компаний уже присоединились к альянсу
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
