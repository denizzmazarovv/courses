'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Frontend разработчик",
      text: "Этый курс кардинально изменил мою карьеру! За 3 месяца я освоила все современные технологии и получила работу мечты.",
      avatar: "https://readdy.ai/api/search-image?query=professional%20young%20woman%20developer%20smiling%20confidently%2C%20clean%20white%20background%2C%20high%20quality%20portrait%20photography%20style&width=80&height=80&seq=avatar1&orientation=squarish"
    },
    {
      name: "Максим Козлов",
      role: "Fullstack разработчик",
      text: "Преподаватели объясняют сложные вещи простым языком. Практические задания помогли закрепить знания на реальных проектах.",
      avatar: "https://readdy.ai/api/search-image?query=young%20professional%20male%20programmer%20developer%2C%20friendly%20smile%2C%20clean%20white%20background%2C%20high%20quality%20portrait%20photography&width=80&height=80&seq=avatar2&orientation=squarish"
    },
    {
      name: "Елена Сидорова",
      role: "UX/UI Designer",
      text: "Отличная структура обучения и поддержка менторов. Уже через месяц начала работать фрилансером и зарабатывать.",
      avatar: "https://readdy.ai/api/search-image?query=creative%20female%20designer%20professional%20headshot%2C%20confident%20smile%2C%20clean%20white%20background%2C%20modern%20photography%20style&width=80&height=80&seq=avatar3&orientation=squarish"
    }
  ];

  const courses = [
    {
      title: "Frontend Разработка",
      description: "HTML, CSS, JavaScript, React, Vue.js",
      duration: "3 месяца",
      price: "24,990 ₽",
      image: "https://readdy.ai/api/search-image?query=modern%20computer%20screen%20displaying%20beautiful%20responsive%20website%20design%2C%20clean%20minimalist%20coding%20workspace%2C%20professional%20lighting%2C%20high%20tech%20aesthetic&width=400&height=300&seq=course1&orientation=landscape",
      fullDescription: "Полный курс по frontend разработке включает изучение современных веб-технологий: HTML5, CSS3, JavaScript ES6+, React, Vue.js, адаптивную верстку, работу с API и многое другое.",
      skills: ["HTML5/CSS3", "JavaScript ES6+", "React/Vue.js", "Responsive Design", "Git/GitHub", "REST API"],
      program: [
        "Основы HTML и CSS",
        "JavaScript и DOM",
        "React и компонентный подход",
        "Работа с API и состоянием",
        "Тестирование и деплой",
        "Финальный проект"
      ]
    },
    {
      title: "Backend Разработка",
      description: "Node.js, Python, Базы данных, API",
      duration: "4 месяца",
      price: "29,990 ₽",
      image: "https://readdy.ai/api/search-image?query=server%20room%20with%20glowing%20data%20visualization%2C%20modern%20backend%20development%20environment%2C%20clean%20professional%20tech%20atmosphere&width=400&height=300&seq=course2&orientation=landscape",
      fullDescription: "Изучите серверную разработку с использованием Node.js и Python. Научитесь создавать API, работать с базами данных и развертывать приложения.",
      skills: ["Node.js/Express", "Python/Django", "SQL/NoSQL", "REST/GraphQL API", "Docker", "AWS/Cloud"],
      program: [
        "Основы серверной разработки",
        "Работа с базами данных",
        "Создание REST API",
        "Аутентификация и безопасность",
        "Тестирование и мониторинг",
        "Деплой и DevOps"
      ]
    },
    {
      title: "Fullstack Разработка",
      description: "Комплексное обучение frontend + backend",
      duration: "6 месяцев",
      price: "44,990 ₽",
      image: "https://readdy.ai/api/search-image?query=multiple%20monitors%20showing%20full%20stack%20development%20workflow%2C%20modern%20programmer%20workspace%2C%20clean%20tech%20setup%20with%20code%20and%20design&width=400&height=300&seq=course3&orientation=landscape",
      fullDescription: "Станьте универсальным разработчиком, освоив и frontend, и backend разработку. Создавайте полноценные веб-приложения от дизайна до деплоя.",
      skills: ["Frontend + Backend", "Database Design", "DevOps", "System Architecture", "Testing", "Project Management"],
      program: [
        "Frontend разработка (React/Vue)",
        "Backend разработка (Node.js/Python)",
        "Базы данных и архитектура",
        "API и интеграции",
        "Тестирование и CI/CD",
        "Полноценный проект"
      ]
    },
    {
      title: "Mobile Разработка",
      description: "React Native, Flutter, iOS, Android",
      duration: "4 месяца",
      price: "32,990 ₽",
      image: "https://readdy.ai/api/search-image?query=smartphone%20and%20tablet%20displaying%20beautiful%20mobile%20apps%2C%20modern%20mobile%20development%20workspace%2C%20clean%20tech%20aesthetic&width=400&height=300&seq=course4&orientation=landscape",
      fullDescription: "Разрабатывайте мобильные приложения для iOS и Android используя React Native и Flutter. Изучите нативную разработку и публикацию в App Store и Google Play.",
      skills: ["React Native", "Flutter/Dart", "iOS/Swift", "Android/Kotlin", "App Store", "Push Notifications"],
      program: [
        "Основы мобильной разработки",
        "React Native разработка",
        "Flutter и Dart",
        "Нативные возможности",
        "Публикация приложений",
        "Мобильный проект"
      ]
    }
  ];

  const faqData = [
    {
      question: "Подходит ли курс для новичков?",
      answer: "Абсолютно! Наши курсы разработаны с учетом начального уровня. Мы начинаем с основ и постепенно переходим к более сложным темам."
    },
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Рекомендуется заниматься 10-15 часов в неделю. Это позволит комфортно усваивать материал и выполнять практические задания."
    },
    {
      question: "Есть ли поддержка преподавателей?",
      answer: "Да! У каждого студента есть персональный ментор, доступ к чату с преподавателями и еженедельные вебинары."
    },
    {
      question: "Какой документ получу после окончания?",
      answer: "После успешного завершения курса вы получите сертификат, который признается IT-компаниями и поможет при трудоустройстве."
    },
    {
      question: "Есть ли рассрочка?",
      answer: "Да, доступна рассрочка до 12 месяцев без переплат. Также есть возможность оплаты материнским капиталом."
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    if (!formData.name || !formData.phone || !formData.message) {
      setSubmitStatus('Пожалуйста, заполните все поля');
      setIsSubmitting(false);
      return;
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      setSubmitStatus('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCourseDetails = (course: any) => {
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-['Pacifico'] text-blue-600">CodeAcademy</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Курсы</a>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">О нас</Link>
                <Link href="/teachers" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Преподаватели</Link>
                <Link href="/career" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Карьера</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Блог</Link>
                <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Отзывы</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">FAQ</a>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Записаться
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Курсы</a>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">О нас</Link>
                <Link href="/teachers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Преподаватели</Link>
                <Link href="/career" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Карьера</Link>
                <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Блог</Link>
                <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Отзывы</a>
                <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
                <button 
                  onClick={() => {
                    setShowModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mt-2 cursor-pointer whitespace-nowrap"
                >
                  Записаться
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Course Details Modal */}
      {showCourseModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900">{selectedCourse.title}</h3>
              <button
                onClick={() => setShowCourseModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-2xl"></i>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover object-top rounded-lg mb-6"
                />
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Детали курса</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Длительность:</span>
                      <span className="font-semibold">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Стоимость:</span>
                      <span className="font-semibold text-blue-600">{selectedCourse.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Формат:</span>
                      <span className="font-semibold">Онлайн + практика</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">О курсе</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedCourse.fullDescription}</p>

                <h5 className="text-xl font-bold text-gray-900 mb-3">Вы изучите:</h5>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {selectedCourse.skills.map((skill: string, index: number) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>

                <h5 className="text-xl font-bold text-gray-900 mb-3">Программа курса:</h5>
                <div className="space-y-2 mb-6">
                  {selectedCourse.program.map((module: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setShowCourseModal(false);
                    setShowModal(true);
                    setFormData(prev => ({ ...prev, message: `Хочу записаться на курс "${selectedCourse.title}"` }));
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Записаться на курс
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Оставить заявку</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-2xl"></i>
                </div>
              </button>
            </div>

            <form id="application-form" onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Расскажите, какой курс вас интересует"
                  required
                />
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 символов
                </div>
              </div>

              {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${submitStatus.includes('Спасибо') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20minimalist%20office%20workspace%20with%20computer%20screens%20showing%20code%2C%20bright%20clean%20environment%20with%20soft%20natural%20lighting%2C%20professional%20tech%20atmosphere%2C%20blurred%20background&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Освой <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT-профессию</span>
              <br />с нуля за 3 месяца
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Получи востребованную профессию в IT с помощью практических курсов от экспертов. 
              Гарантированное трудоустройство и поддержка 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Начать обучение
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Бесплатный урок
              </button>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm sm:text-base text-gray-600">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm sm:text-base text-gray-600">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">4.9/5</div>
                <div className="text-sm sm:text-base text-gray-600">Рейтинг курсов</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-down-line text-2xl text-gray-600"></i>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Популярные курсы
            </h2>
            <p className="text-xl text-gray-600">Выберите направление, которое изменит вашу карьеру</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="animate-on-scroll group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {course.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <button 
                        onClick={() => handleCourseDetails(course)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0">
                    <i className="ri-code-s-slash-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Практический подход</h3>
                    <p className="text-gray-600">80% времени посвящено практике. Работа над реальными проектами с первого дня обучения.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full flex-shrink-0">
                    <i className="ri-team-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Менторская поддержка</h3>
                    <p className="text-gray-600">Персональный ментор для каждого студента. Еженедельные консультации и код-ревью.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-pink-600 text-white rounded-full flex-shrink-0">
                    <i className="ri-briefcase-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия трудоустройства</h3>
                    <p className="text-gray-600">Помогаем с резюме, подготовкой к собеседованиям и поиском работы. Возврат денег, если не найдете работу.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20tech%20education%20environment%2C%20students%20learning%20programming%20together%2C%20bright%20collaborative%20workspace%20with%20computers%20and%20screens%2C%20professional%20educational%20atmosphere&width=600&height=500&seq=about1&orientation=landscape"
                alt="Обучение в CodeAcademy"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Отзывы выпускников
            </h2>
            <p className="text-xl text-gray-600">Что говорят наши студенты</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                      />
                      <p className="text-lg text-gray-700 mb-6 italic">{testimonial.text}</p>
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className={`ri-${activeAccordion === index ? 'subtract' : 'add'}-line text-xl text-gray-500 transition-transform duration-300`}></i>
                      </div>
                    </div>
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Готов начать свой путь в IT?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Запишись на бесплатную консультацию и получи персональный план обучения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Записаться на консультацию
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Скачать программу
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-['Pacifico'] text-blue-400 mb-4">CodeAcademy</h3>
              <p className="text-gray-400 mb-4">
                Ведущая IT-академия с практическим подходом к обучению и гарантированным трудоустройством.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-telegram-line text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-vk-line text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <i className="ri-youtube-line text-lg"></i>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/frontend" className="hover:text-white transition-colors duration-300">Frontend разработка</Link></li>
                <li><Link href="/backend" className="hover:text-white transition-colors duration-300">Backend разработка</Link></li>
                <li><Link href="/fullstack" className="hover:text-white transition-colors duration-300">Fullstack разработка</Link></li>
                <li><Link href="/mobile" className="hover:text-white transition-colors duration-300">Mobile разработка</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors duration-300">О нас</Link></li>
                <li><Link href="/teachers" className="hover:text-white transition-colors duration-300">Преподаватели</Link></li>
                <li><Link href="/career" className="hover:text-white transition-colors duration-300">Карьера</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors duration-300">Блог</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line"></i>
                  </div>
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-mail-line"></i>
                  </div>
                  <span>info@codeacademy.ru</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-1">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span>Москва, ул. Тверская, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeAcademy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}