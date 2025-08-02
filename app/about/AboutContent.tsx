'use client';

import Link from 'next/link';

export default function AboutContent() {
  const stats = [
    { number: '5 лет', label: 'На рынке образования' },
    { number: '2500+', label: 'Выпускников' },
    { number: '98%', label: 'Трудоустройство' },
    { number: '150+', label: 'Партнеров-работодателей' }
  ];

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Инновации',
      description: 'Используем самые современные технологии и методы обучения для максимальной эффективности'
    },
    {
      icon: 'ri-team-line',
      title: 'Командная работа',
      description: 'Учим работать в команде, как это происходит в реальных IT-компаниях'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Качество',
      description: 'Высокие стандарты обучения и постоянное совершенствование программ'
    },
    {
      icon: 'ri-heart-line',
      title: 'Забота о студентах',
      description: 'Индивидуальный подход и поддержка каждого студента на всех этапах обучения'
    }
  ];

  const team = [
    {
      name: 'Алексей Морозов',
      role: 'CEO и основатель',
      experience: '15 лет в IT',
      image: 'https://readdy.ai/api/search-image?query=professional%20CEO%20executive%20man%20in%20business%20suit%2C%20confident%20leadership%20pose%2C%20clean%20white%20background%2C%20high%20quality%20corporate%20photography&width=300&height=300&seq=ceo1&orientation=squarish',
      description: 'Бывший CTO в крупной IT-компании, эксперт по цифровой трансформации'
    },
    {
      name: 'Мария Петрова',
      role: 'Директор по образованию',
      experience: '12 лет в EdTech',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20education%20director%2C%20warm%20friendly%20smile%2C%20modern%20office%20environment%2C%20high%20quality%20portrait%20photography&width=300&height=300&seq=director1&orientation=squarish',
      description: 'Специалист по разработке образовательных программ и методологий'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Технический директор',
      experience: '18 лет в разработке',
      image: 'https://readdy.ai/api/search-image?query=senior%20male%20software%20architect%20developer%2C%20technical%20expertise%20confidence%2C%20modern%20tech%20environment%2C%20professional%20photography&width=300&height=300&seq=cto1&orientation=squarish',
      description: 'Архитектор высоконагруженных систем, ментор для senior-разработчиков'
    }
  ];

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
              <Link href="/about" className="text-blue-600 font-medium">О нас</Link>
              <Link href="/teachers" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Преподаватели</Link>
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20with%20glass%20facade%2C%20professional%20business%20architecture%2C%20bright%20daylight%2C%20clean%20minimalist%20design%20aesthetic&width=1920&height=800&seq=abouthero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            О <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeAcademy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Мы создаем будущее IT-образования, готовя специалистов мирового уровня 
            с практическими навыками и гарантированным трудоустройством
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Мы верим, что каждый человек может освоить IT-профессию и изменить свою жизнь к лучшему. 
                Наша задача — предоставить качественное образование, которое действительно готовит к работе в IT.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                С 2019 года мы помогли более 2500 людям начать успешную карьеру в технологиях. 
                Наши выпускники работают в ведущих IT-компаниях России и мира.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#courses"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Посмотреть курсы
                </Link>
                <Link 
                  href="/teachers"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Наши преподаватели
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20successful%20IT%20professionals%20and%20students%20collaborating%20in%20modern%20bright%20office%20space%2C%20laptops%20and%20screens%2C%20teamwork%20atmosphere&width=600&height=500&seq=mission1&orientation=landscape"
                alt="Наша команда"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <i className={`${value.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Руководящая команда
            </h2>
            <p className="text-xl text-gray-600">
              Эксперты с многолетним опытом в IT и образовании
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Присоединяйся к нашей команде успешных выпускников
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Начни свой путь в IT с лучшими преподавателями и проверенной методологией
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Выбрать курс
            </Link>
            <Link 
              href="/career"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Карьерные возможности
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
                Ведущая IT-академия с практическим подходом к обучению
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