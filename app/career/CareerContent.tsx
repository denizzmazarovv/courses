"use client";

import { useState } from "react";
import Link from "next/link";

export default function CareerContent() {
  // Все состояния
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const openPositions = [
    {
      title: "Senior Frontend Преподаватель",
      department: "Образование",
      type: "Полный день",
      location: "Москва / Удаленно",
      description:
        "Ищем опытного frontend-разработчика для преподавания современных веб-технологий",
      requirements: [
        "5+ лет опыта в frontend разработке",
        "Экспертиза в React, Vue.js, TypeScript",
        "Опыт менторства или преподавания",
        "Отличные коммуникативные навыки",
      ],
      responsibilities: [
        "Ведение курсов по frontend разработке",
        "Менторинг студентов",
        "Разработка учебных материалов",
        "Проведение code review",
      ],
    },
    {
      title: "Backend Developer Mentor",
      department: "Образование",
      type: "Частичная занятость",
      location: "Удаленно",
      description:
        "Нужен эксперт в backend разработке для работы со студентами продвинутого уровня",
      requirements: [
        "7+ лет опыта в backend разработке",
        "Знание Node.js, Python, баз данных",
        "Опыт работы с микросервисами",
        "Желание делиться знаниями",
      ],
      responsibilities: [
        "Индивидуальное менторство студентов",
        "Проверка проектов и домашних заданий",
        "Консультации по архитектуре",
        "Помощь в подготовке к собеседованиям",
      ],
    },
    {
      title: "Product Manager",
      department: "Продукт",
      type: "Полный день",
      location: "Москва",
      description:
        "Ищем продакт-менеджера для развития образовательной платформы",
      requirements: [
        "3+ года опыта в product management",
        "Понимание EdTech рынка",
        "Навыки работы с аналитикой",
        "Опыт запуска продуктов",
      ],
      responsibilities: [
        "Управление продуктовой стратегией",
        "Анализ пользовательских потребностей",
        "Координация с командами разработки",
        "A/B тестирование новых функций",
      ],
    },
    {
      title: "UX/UI Designer",
      department: "Дизайн",
      type: "Полный день",
      location: "Москва / Удаленно",
      description:
        "Креативный дизайнер для создания интуитивных обучающих интерфейсов",
      requirements: [
        "Портфолио с UX/UI проектами",
        "Опыт работы с Figma, Sketch",
        "Понимание принципов UX design",
        "Знание веб-технологий приветствуется",
      ],
      responsibilities: [
        "Дизайн пользовательских интерфейсов",
        "Проведение UX исследований",
        "Создание прототипов",
        "Работа с командой разработки",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "IT",
      type: "Полный день",
      location: "Москва",
      description: "DevOps инженер для поддержки и развития IT-инфраструктуры",
      requirements: [
        "Опыт работы с AWS, Docker, Kubernetes",
        "Знание CI/CD практик",
        "Навыки автоматизации",
        "Опыт мониторинга систем",
      ],
      responsibilities: [
        "Поддержка продуктивной среды",
        "Автоматизация процессов деплоя",
        "Мониторинг и алертинг",
        "Обеспечение безопасности",
      ],
    },
    {
      title: "HR Business Partner",
      department: "HR",
      type: "Полный день",
      location: "Москва",
      description: "HR-партнер для поддержки быстро растущей команды",
      requirements: [
        "Опыт работы в HR 3+ года",
        "Знание трудового законодательства",
        "Навыки рекрутинга IT-специалистов",
        "Опыт работы в стартапах приветствуется",
      ],
      responsibilities: [
        "Подбор и адаптация сотрудников",
        "HR-партнерство с командами",
        "Развитие HR-процессов",
        "Планирование и проведение мероприятий",
      ],
    },
  ];

  const benefits = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "Конкурентная зарплата",
      description: "Высокий уровень оплаты труда + бонусы за результат",
    },
    {
      icon: "ri-time-line",
      title: "Гибкий график",
      description: "Возможность удаленной работы и гибкого планирования",
    },
    {
      icon: "ri-book-line",
      title: "Обучение и развитие",
      description: "Бесплатные курсы, конференции и сертификации",
    },
    {
      icon: "ri-team-line",
      title: "Команда экспертов",
      description: "Работа с лучшими специалистами отрасли",
    },
    {
      icon: "ri-heart-line",
      title: "Медицинская страховка",
      description: "ДМС для сотрудника и семьи",
    },
    {
      icon: "ri-gamepad-line",
      title: "Work-life balance",
      description: "Корпоративные мероприятия и отпуск",
    },
  ];

  const handleApply = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setFormData((prev) => ({
      ...prev,
      message: `Хочу откликнуться на вакансию "${positionTitle}"`,
    }));
    setShowApplicationForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время."
    );
    setShowApplicationForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-['Pacifico'] text-blue-600">
                CodeAcademy
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#courses"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Курсы
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                О нас
              </Link>
              <Link
                href="/teachers"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Преподаватели
              </Link>
              <Link href="/career" className="text-blue-600 font-medium">
                Карьера
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Блог
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Откликнуться на вакансию
              </h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-2xl"></i>
                </div>
              </button>
            </div>

            <form id="career-application-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Сопроводительное письмо *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Расскажите о своем опыте и мотивации"
                  required
                />
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 символов
                </div>
              </div>

              <button
                type="submit"
                disabled={formData.message.length > 500}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}

      <section
        className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20tech%20office%20workspace%20with%20diverse%20team%20collaborating%2C%20bright%20open%20space%20with%20computers%20and%20meeting%20areas%2C%20professional%20career%20environment&width=1920&height=800&seq=careerhero&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Карьера в{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeAcademy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Присоединяйся к команде профессионалов, которые формируют будущее
            IT-образования
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему CodeAcademy?
            </h2>
            <p className="text-xl text-gray-600">
              Мы создаем идеальную рабочую среду для профессионального роста
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <i
                    className={`${benefit.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Открытые вакансии
            </h2>
            <p className="text-xl text-gray-600">
              Найди позицию, которая подходит именно тебе
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-building-line"></i>
                        </div>
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-time-line"></i>
                        </div>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-map-pin-line"></i>
                        </div>
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(position.title)}
                    className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Откликнуться
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Требования:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start text-gray-600"
                        >
                          <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Обязанности:
                    </h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start text-gray-600"
                        >
                          <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша культура
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                В CodeAcademy мы создали среду, где каждый может расти
                профессионально и лично. Наша команда — это семья
                единомышленников, которые разделяют общие ценности и стремятся к
                совершенству.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">
                    Открытость к новым идеям и экспериментам
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">
                    Поддержка профессионального развития
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">
                    Баланс между работой и личной жизнью
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-gray-700">
                    Командная работа и взаимопомощь
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=happy%20diverse%20team%20working%20together%20in%20modern%20office%2C%20collaborative%20environment%20with%20smiling%20people%2C%20bright%20workspace%20with%20plants%20and%20modern%20furniture&width=600&height=500&seq=culture1&orientation=landscape"
                alt="Наша команда"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готов присоединиться к нашей команде?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Если не нашел подходящую вакансию, но хочешь работать с нами —
            присылай свое резюме
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                setSelectedPosition("Инициативная заявка");
                setFormData((prev) => ({
                  ...prev,
                  message:
                    "Хочу работать в CodeAcademy. Рассмотрите мою кандидатуру.",
                }));
                setShowApplicationForm(true);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Отправить резюме
            </button>

            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Узнать больше о компании
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-['Pacifico'] text-blue-400 mb-4">
                  CodeAcademy
                </h3>
              </Link>
              <p className="text-gray-400">
                Строим будущее IT-образования вместе
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/#courses"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teachers"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Преподаватели
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Карьера
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Блог
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">hr@codeacademy.ru</p>
              <p className="text-gray-400">+7 (495) 123-45-67</p>
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
