
import React, { useState } from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  quote: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio, quote }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="h-96 relative perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`
          absolute inset-0 w-full h-full transition-transform duration-500 transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h4 className="text-xl font-bold text-white">{name}</h4>
            <p className="text-white/80">{position}</p>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className="
            absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden 
            rotate-y-180 bg-qaztech-blue text-white p-6 flex flex-col justify-between
          "
        >
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="opacity-80 mb-4">{position}</p>
            <p className="text-sm">{bio}</p>
          </div>
          
          <div className="mt-4">
            <p className="italic text-sm border-l-2 border-white/50 pl-3">
              "{quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Асхат Муратов',
      position: 'Основатель, Председатель',
      image: 'https://placehold.co/400x600/0043FF/FFFFFF?text=Асхат',
      bio: 'Серийный предприниматель с 15-летним опытом создания успешных технологических компаний в Казахстане и СНГ.',
      quote: 'Мы создаем QAZTECH как платформу для объединения лидеров, которые не просто следуют тенденциям, а формируют их.'
    },
    {
      id: 2,
      name: 'Мадина Абылкасымова',
      position: 'Директор по стратегии',
      image: 'https://placehold.co/400x600/0043FF/FFFFFF?text=Мадина',
      bio: 'Опыт разработки стратегий развития для ведущих компаний и государственных учреждений. Эксперт в области цифровой трансформации.',
      quote: 'Стратегическое видение - это не только о будущем, но и о том, как сделать правильные шаги сегодня.'
    },
    {
      id: 3,
      name: 'Ержан Сулейменов',
      position: 'Технический директор',
      image: 'https://placehold.co/400x600/0043FF/FFFFFF?text=Ержан',
      bio: 'Более 20 лет опыта в разработке программного обеспечения и руководстве техническими командами в международных IT-компаниях.',
      quote: 'Казахстан имеет все возможности стать технологическим хабом Центральной Азии. Наша задача - превратить этот потенциал в реальность.'
    },
    {
      id: 4,
      name: 'Сауле Бектаева',
      position: 'Директор по развитию',
      image: 'https://placehold.co/400x600/0043FF/FFFFFF?text=Сауле',
      bio: 'Эксперт в области бизнес-девелопмента с фокусом на IT-секторе. Опыт работы в международных консалтинговых компаниях.',
      quote: 'QAZTECH - это про создание возможностей, которых раньше не было. Мы строим мост между амбициями и реальностью.'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map(member => (
        <TeamMember
          key={member.id}
          name={member.name}
          position={member.position}
          image={member.image}
          bio={member.bio}
          quote={member.quote}
        />
      ))}
    </div>
  );
};

const AdvisoryBoard = () => {
  const industries = ['Все', 'Технологии', 'Финансы', 'Образование', 'Право', 'Государственный сектор'];
  const [activeIndustry, setActiveIndustry] = useState('Все');
  
  const advisors = [
    { id: 1, name: 'Ерлан Нурлыбаев', company: 'Kaspi Bank', industry: 'Финансы' },
    { id: 2, name: 'Айгуль Кенжебаева', company: 'DarTech', industry: 'Образование' },
    { id: 3, name: 'Нурлан Кожахметов', company: 'Ministry of Digital Development', industry: 'Государственный сектор' },
    { id: 4, name: 'Сакен Жунусов', company: 'Tech Ventures', industry: 'Технологии' },
    { id: 5, name: 'Лаура Макишева', company: 'Legal Tech Lab', industry: 'Право' },
    { id: 6, name: 'Тимур Исатаев', company: 'Freedom Finance', industry: 'Финансы' }
  ];
  
  const filteredAdvisors = activeIndustry === 'Все'
    ? advisors
    : advisors.filter(advisor => advisor.industry === activeIndustry);
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Экспертный совет</h3>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {industries.map(industry => (
          <button
            key={industry}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeIndustry === industry
                ? 'bg-qaztech-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            onClick={() => setActiveIndustry(industry)}
          >
            {industry}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAdvisors.map(advisor => (
          <div
            key={advisor.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h4 className="text-lg font-bold">{advisor.name}</h4>
            <p className="text-qaztech-blue">{advisor.company}</p>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full inline-block mt-2">
              {advisor.industry}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Команда и Совет</h2>
          <p className="text-lg text-gray-700">
            Познакомьтесь с людьми, которые строят QAZTECH и формируют будущее технологической индустрии Казахстана.
          </p>
        </div>
        
        <TeamGrid />
        <AdvisoryBoard />
      </div>
    </section>
  );
};

export default Team;
