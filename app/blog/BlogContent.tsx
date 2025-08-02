'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'programming', name: 'Программирование' },
    { id: 'career', name: 'Карьера' },
    { id: 'trends', name: 'Тренды' },
    { id: 'tutorials', name: 'Уроки' }
  ];

  const articles = [
    {
      title: 'React 18: Новые возможности и concurrent features',
      category: 'programming',
      author: 'Анна Волкова',
      date: '15 марта 2024',
      readTime: '8 мин',
      image: 'https://readdy.ai/api/search-image?query=modern%20React%20development%20code%20editor%20with%20React%20logo%2C%20clean%20programming%20workspace%2C%20professional%20software%20development%20environment&width=400&height=250&seq=blog1&orientation=landscape',
      excerpt: 'Разбираем ключевые нововведения React 18: Suspense, concurrent rendering, automatic batching и другие features, которые изменят разработку.',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'Как стать Middle разработчиком за год: пошаговый план',
      category: 'career',
      author: 'Михаил Петров',
      date: '12 марта 2024',
      readTime: '12 мин',
      image: 'https://readdy.ai/api/search-image?query=professional%20developer%20career%20growth%20concept%2C%20person%20climbing%20stairs%20representing%20programming%20skill%20levels%2C%20motivational%20tech%20illustration&width=400&height=250&seq=blog2&orientation=landscape',
      excerpt: 'Детальный план развития от Junior до Middle developer. Какие навыки нужны, как составить learning path и избежать распространенных ошибок.',
      tags: ['Карьера', 'Развитие', 'Советы']
    },
    {
      title: 'TypeScript vs JavaScript в 2024: что выбрать для проекта',
      category: 'programming',
      author: 'Елена Смирнова',
      date: '10 марта 2024',
      readTime: '10 мин',
      image: 'https://readdy.ai/api/search-image?query=TypeScript%20versus%20JavaScript%20comparison%2C%20two%20code%20windows%20side%20by%20side%2C%20modern%20programming%20language%20comparison%20visualization&width=400&height=250&seq=blog3&orientation=landscape',
      excerpt: 'Сравниваем TypeScript и JavaScript: преимущества, недостатки, когда использовать каждый из языков и как принять правильное решение.',
      tags: ['TypeScript', 'JavaScript', 'Сравнение']
    },
    {
      title: 'Топ-10 трендов веб-разработки в 2024 году',
      category: 'trends',
      author: 'Дмитрий Козлов',
      date: '8 марта 2024',
      readTime: '15 мин',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20web%20development%20trends%20visualization%2C%20modern%20tech%20innovations%2C%20digital%20transformation%20concepts%20with%20laptops%20and%20code&width=400&height=250&seq=blog4&orientation=landscape',
      excerpt: 'Анализируем главные тренды: AI в разработке, Web3, edge computing, новые фреймворки и инструменты, которые будут популярны в этом году.',
      tags: ['Тренды', 'Web Development', '2024']
    },
    {
      title: 'Создаем REST API с Node.js и Express: полное руководство',
      category: 'tutorials',
      author: 'Ольга Новикова',
      date: '5 марта 2024',
      readTime: '20 мин',
      image: 'https://readdy.ai/api/search-image?query=Node.js%20Express%20API%20development%20tutorial%2C%20server%20code%20architecture%20diagram%2C%20backend%20development%20workspace%20setup&width=400&height=250&seq=blog5&orientation=landscape',
      excerpt: 'Пошаговое создание REST API: настройка проекта, роутинг, middleware, аутентификация, тестирование и деплой. С примерами кода.',
      tags: ['Node.js', 'Express', 'Backend', 'Tutorial']
    },
    {
      title: 'Soft skills для программистов: почему они важны',
      category: 'career',
      author: 'Артем Васильев',
      date: '2 марта 2024',
      readTime: '7 мин',
      image: 'https://readdy.ai/api/search-image?query=professional%20team%20communication%20and%20collaboration%2C%20developers%20working%20together%2C%20soft%20skills%20in%20tech%20workplace%20illustration&width=400&height=250&seq=blog6&orientation=landscape',
      excerpt: 'Разбираем ключевые soft skills: коммуникация, тимворк, тайм-менеджмент. Как развивать эти навыки и почему они критичны для карьеры.',
      tags: ['Soft Skills', 'Карьера', 'Коммуникация']
    },
    {
      title: 'Docker для Frontend разработчиков: с чего начать',
      category: 'tutorials',
      author: 'Анна Волкова',
      date: '28 февраля 2024',
      readTime: '14 мин',
      image: 'https://readdy.ai/api/search-image?query=Docker%20containerization%20for%20frontend%20development%2C%20container%20architecture%20visualization%2C%20modern%20DevOps%20development%20workflow&width=400&height=250&seq=blog7&orientation=landscape',
      excerpt: 'Введение в Docker для фронтенд-разработчиков: основные концепты, создание Dockerfile, docker-compose, интеграция в development workflow.',
      tags: ['Docker', 'Frontend', 'DevOps']
    },
    {
      title: 'Зарплаты разработчиков в 2024: обзор рынка',
      category: 'career',
      author: 'Михаил Петров',
      date: '25 февраля 2024',
      readTime: '11 мин',
      image: 'https://readdy.ai/api/search-image?query=salary%20statistics%20charts%20and%20graphs%20for%20software%20developers%2C%20professional%20financial%20data%20visualization%2C%20career%20growth%20metrics&width=400&height=250&seq=blog8&orientation=landscape',
      excerpt: 'Актуальная статистика зарплат разработчиков по направлениям, городам и уровням. Факторы влияния на доходы и прогнозы на год.',
      tags: ['Зарплаты', 'Статистика', 'IT-рынок']
    },
    {
      title: 'Vue.js 3 vs React: детальное сравнение фреймворков',
      category: 'programming',
      author: 'Елена Смирнова',
      date: '22 февраля 2024',
      readTime: '16 мин',
      image: 'https://readdy.ai/api/search-image?query=Vue.js%20versus%20React%20framework%20comparison%2C%20side%20by%20side%20code%20examples%2C%20modern%20frontend%20development%20comparison&width=400&height=250&seq=blog9&orientation=landscape',
      excerpt: 'Подробное сравнение Vue.js 3 и React: производительность, экосистема, learning curve, сообщество. Поможем выбрать подходящий фреймворк.',
      tags: ['Vue.js', 'React', 'Frameworks']
    }
  ];

  const featuredArticle = {
    title: 'Искусственный интеллект в программировании: ChatGPT, GitHub Copilot и будущее разработки',
    author: 'Дмитрий Козлов',
    date: '18 марта 2024',
    readTime: '25 мин',
    image: 'https://readdy.ai/api/search-image?query=AI%20artificial%20intelligence%20in%20programming%2C%20developer%20using%20AI%20coding%20assistant%2C%20futuristic%20software%20development%20with%20machine%20learning%20integration&width=800&height=400&seq=featured&orientation=landscape',
    excerpt: 'Как ИИ меняет программирование: обзор инструментов, практические кейсы использования, влияние на профессию разработчика и прогнозы развития.',
    tags: ['AI', 'ChatGPT', 'Будущее программирования']
  };

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
              <Link href="/teachers" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Преподаватели</Link>
              <Link href="/career" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Карьера</Link>
              <Link href="/blog" className="text-blue-600 font-medium">Блог</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Блог <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeAcademy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Актуальные статьи о программировании, карьере в IT и тенденциях разработки
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Рекомендуем
                  </span>
                  {featuredArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{featuredArticle.author}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Читать статью
                  </button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
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

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 cursor-pointer">
                      Читать →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Не пропускай новые статьи
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Подписывайся на наш блог и получай еженедельную подборку лучших материалов по программированию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Подписаться
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Никакого спама, только полезный контент
          </p>
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
                Лучшие статьи о программировании и IT-карьере
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setSelectedCategory('programming')} className="hover:text-white transition-colors duration-300">Программирование</button></li>
                <li><button onClick={() => setSelectedCategory('career')} className="hover:text-white transition-colors duration-300">Карьера</button></li>
                <li><button onClick={() => setSelectedCategory('tutorials')} className="hover:text-white transition-colors duration-300">Уроки</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-300">О нас</Link></li>
                <li><Link href="/career" className="hover:text-white transition-colors duration-300">Карьера</Link></li>
                <li><Link href="/teachers" className="hover:text-white transition-colors duration-300">Преподаватели</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-telegram-line text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-youtube-line text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-github-line text-lg"></i>
                </div>
              </div>
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