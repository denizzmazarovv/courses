'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TeachersContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все преподаватели' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'data', name: 'Data Science' }
  ];

  const teachers = [
    {
      name: 'Анна Волкова',
      role: 'Senior Frontend Developer',
      category: 'frontend',
      experience: '8 лет опыта',
      company: 'Ex-Яндекс',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20frontend%20developer%20teacher%2C%20confident%20smile%2C%20modern%20tech%20office%20background%2C%20high%20quality%20portrait%20photography&width=300&height=300&seq=teacher1&orientation=squarish',
      skills: ['React', 'Vue.js', 'TypeScript', 'CSS/SASS'],
      bio: 'Ведущий frontend-разработчик с опытом в крупных продуктовых компаниях. Специализируется на React экосистеме и современных подходах к разработке.',
      achievements: ['Спикер на FrontendConf', 'Автор популярного JS-блога', 'Ментор 200+ разработчиков']
    },
    {
      name: 'Михаил Петров',
      role: 'Lead Backend Engineer',
      category: 'backend',
      experience: '12 лет опыта',
      company: 'Ex-Mail.ru Group',
      image: 'https://readdy.ai/api/search-image?query=experienced%20male%20backend%20developer%20mentor%2C%20professional%20tech%20expert%2C%20clean%20modern%20office%20setting%2C%20high%20quality%20corporate%20photography&width=300&height=300&seq=teacher2&orientation=squarish',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
      bio: 'Архитектор высоконагруженных систем. Участвовал в разработке сервисов с миллионами пользователей. Эксперт по microservices архитектуре.',
      achievements: ['Докладчик на HighLoad++', 'Создатель open-source библиотеки', 'Tech Lead в 3 стартапах']
    },
    {
      name: 'Елена Смирнова',
      role: 'Mobile Development Expert',
      category: 'mobile',
      experience: '7 лет опыта',
      company: 'Ex-Tinkoff',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20mobile%20developer%20expert%2C%20friendly%20teaching%20approach%2C%20modern%20workspace%20with%20smartphones%20and%20tablets&width=300&height=300&seq=teacher3&orientation=squarish',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      bio: 'Специалист по кроссплатформенной разработке мобильных приложений. Создавала приложения для банковской и fintech сферы.',
      achievements: ['Приложения в Top 10 AppStore', 'Google Developer Expert', 'Автор курса по Flutter']
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Fullstack Architect',
      category: 'backend',
      experience: '15 лет опыта',
      company: 'Ex-OZON',
      image: 'https://readdy.ai/api/search-image?query=senior%20male%20fullstack%20architect%20developer%2C%20technical%20leadership%20expertise%2C%20professional%20modern%20tech%20environment&width=300&height=300&seq=teacher4&orientation=squarish',
      skills: ['React', 'Node.js', 'Docker', 'Kubernetes'],
      bio: 'Fullstack разработчик и архитектор с опытом масштабирования e-commerce платформ. Эксперт по DevOps практикам.',
      achievements: ['CTO в 2 IT-компаниях', 'Спикер на DevOps Moscow', 'Внедрил CI/CD в 50+ проектах']
    },
    {
      name: 'Ольга Новикова',
      role: 'Data Science Lead',
      category: 'data',
      experience: '10 лет опыта',
      company: 'Ex-Сбер',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20data%20scientist%20teacher%2C%20intelligent%20analytical%20approach%2C%20modern%20data%20science%20lab%20with%20multiple%20monitors&width=300&height=300&seq=teacher5&orientation=squarish',
      skills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning'],
      bio: 'Ведущий специалист по машинному обучению и анализу данных. Создавала ML-модели для банковского сектора и ритейла.',
      achievements: ['PhD в Computer Science', 'Kaggle Competition Winner', '20+ публикаций в ML']
    },
    {
      name: 'Артем Васильев',
      role: 'React/Vue.js Expert',
      category: 'frontend',
      experience: '6 лет опыта',
      company: 'Ex-ВКонтакте',
      image: 'https://readdy.ai/api/search-image?query=young%20professional%20male%20frontend%20developer%20teacher%2C%20enthusiastic%20coding%20mentor%2C%20bright%20modern%20workspace%20with%20code%20on%20screens&width=300&height=300&seq=teacher6&orientation=squarish',
      skills: ['React', 'Vue.js', 'JavaScript', 'WebPack'],
      bio: 'Фронтенд-разработчик с экспертизой в React и Vue.js. Специализируется на создании высокопроизводительных SPA приложений.',
      achievements: ['Контрибьютор в Vue.js', 'YouTube канал 50K подписчиков', 'Автор React курса']
    }
  ];

  const filteredTeachers = selectedCategory === 'all' 
    ? teachers 
    : teachers.filter(teacher => teacher.category === selectedCategory);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-['Pacifico'] text-blue-600">CodeAcademy</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Курсы</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">О нас</Link>
              <Link href="/teachers" className="text-blue-600 font-medium">Преподаватели</Link>
              <Link href="/career" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Карьера</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Блог</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20classroom%20with%20experienced%20teachers%20mentoring%20students%2C%20bright%20educational%20environment%2C%20computers%20and%20whiteboards%2C%20professional%20teaching%20atmosphere&width=1920&height=800&seq=teachershero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">преподаватели</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Эксперты из ведущих IT-компаний с многолетним опытом разработки 
            и страстью к обучению
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{teacher.role}</p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                    <span>{teacher.experience}</span>
                    <span>•</span>
                    <span className="font-medium text-purple-600">{teacher.company}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {teacher.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {teacher.bio}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Достижения:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {teacher.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему наши преподаватели лучшие?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+ лет</div>
              <div className="text-gray-600">Средний опыт работы</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-building-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">TOP-10</div>
              <div className="text-gray-600">IT-компаний России</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-user-star-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Обученных студентов</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-star-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Рейтинг преподавателей</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Начни учиться у лучших экспертов
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получи персонального ментора и изучай IT с практикующими разработчиками
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Выбрать курс
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              О нашей методологии
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-['Pacifico'] text-blue-400 mb-4">CodeAcademy</h3>
              </Link>
              <p className="text-gray-400">
                Ведущая IT-академия с лучшими преподавателями
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#courses" className="hover:text-white transition-colors duration-300">Курсы</Link></li>
                <li><Link href="/teachers" className="hover:text-white transition-colors duration-300">Преподаватели</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-300">О нас</Link></li>
                <li><Link href="/career" className="hover:text-white transition-colors duration-300">Карьера</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors duration-300">Блог</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">+7 (495) 123-45-67</p>
              <p className="text-gray-400">info@codeacademy.ru</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeAcademy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}