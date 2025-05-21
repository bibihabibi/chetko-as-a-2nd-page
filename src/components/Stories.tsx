
import React from 'react';

interface StoryCardProps {
  title: string;
  company: string;
  description: string;
  image: string;
  video?: string;
  quote?: string;
  author?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ 
  title, 
  company, 
  description, 
  image, 
  video, 
  quote, 
  author 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover-card">
      <div className="h-48 bg-gray-200 relative">
        {video ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 rounded-full bg-qaztech-blue/80 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          </div>
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      
      <div className="p-6">
        <div className="text-sm font-medium text-qaztech-blue mb-2">{company}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {quote && (
          <div className="border-l-2 border-qaztech-blue pl-4 italic text-gray-600 mt-4">
            "{quote}"
            {author && <div className="text-sm font-medium text-gray-800 mt-1">— {author}</div>}
          </div>
        )}
        
        <button className="text-qaztech-blue font-medium flex items-center mt-4">
          Читать полную историю
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: 'Как Kaspi.kz изменил финансовый рынок Казахстана',
      company: 'Kaspi.kz',
      description: 'История трансформации от традиционного банка к инновационной финтех-компании, ставшей лидером рынка.',
      image: 'https://placehold.co/800x400/0043FF/FFFFFF?text=Kaspi.kz+Case',
      video: true,
      quote: 'Участие в QAZTECH позволило нам найти новые партнерства и ускорить разработку инновационных продуктов.',
      author: 'Михаил Ломтадзе, CEO Kaspi.kz'
    },
    {
      id: 2,
      title: 'Международная экспансия Kolesa Group',
      company: 'Kolesa Group',
      description: 'Как казахстанская компания смогла выйти на международные рынки и масштабировать свои сервисы.',
      image: 'https://placehold.co/800x400/0043FF/FFFFFF?text=Kolesa+Case'
    },
    {
      id: 3,
      title: 'Трансформация DAR в образовательный хаб',
      company: 'DAR',
      description: 'Путь от стартапа до технологического образовательного центра, формирующего новое поколение IT-специалистов.',
      image: 'https://placehold.co/800x400/0043FF/FFFFFF?text=DAR+Case',
      quote: 'Экосистема QAZTECH создала для нас возможность объединить усилия с ведущими IT-компаниями для развития образования.',
      author: 'Алмаз Шаримов, Основатель DAR'
    }
  ];

  return (
    <section id="stories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории успеха</h2>
          <p className="text-lg text-gray-700">
            Реальные истории компаний и их основателей о том, как участие в QAZTECH помогло добиться впечатляющих результатов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map(story => (
            <StoryCard 
              key={story.id}
              title={story.title}
              company={story.company}
              description={story.description}
              image={story.image}
              video={story.video}
              quote={story.quote}
              author={story.author}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-qaztech-blue text-white rounded-md px-8 py-3 font-medium hover:bg-blue-700 transition-colors">
            Смотреть все истории
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
