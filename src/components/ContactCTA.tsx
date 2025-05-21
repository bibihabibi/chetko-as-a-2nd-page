
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за заявку!",
      description: "Мы получили ваше сообщение и свяжемся с вами в ближайшее время.",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      message: ''
    });
  };
  
  return (
    <section className="py-16 md:py-24 bg-qaztech-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Хочешь быть частью альянса?</h2>
            <p className="text-xl opacity-90">
              Нам важны амбиции, опыт и ценности. Расскажите о вашей компании, и мы свяжемся с вами.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя и фамилия*
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qaztech-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qaztech-blue"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Компания*
                </label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qaztech-blue"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваша должность*
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qaztech-blue"
                >
                  <option value="">Выберите должность</option>
                  <option value="CEO">CEO / Основатель</option>
                  <option value="CTO">CTO / Технический директор</option>
                  <option value="Product">Руководитель продукта</option>
                  <option value="Marketing">Маркетинг</option>
                  <option value="Other">Другое</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Почему вы хотите присоединиться к QAZTECH?*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qaztech-blue"
              ></textarea>
            </div>
            
            <div className="text-right">
              <button 
                type="submit"
                className="bg-qaztech-blue text-white rounded-md px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
