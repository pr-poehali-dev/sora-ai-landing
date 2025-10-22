import { Button } from "@/components/ui/button";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const menuItems = [
    { id: "what-is-sora", label: "Что такое Sora" },
    { id: "developer", label: "Разработчик" },
    { id: "capabilities", label: "Возможности" },
    { id: "access", label: "Как получить доступ" },
    { id: "download", label: "Где скачать" },
    { id: "alternatives", label: "Альтернативы" },
    { id: "why-us", label: "Почему мы" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      <header>
        <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-800/30" role="navigation" aria-label="Основная навигация">
          <div className="container max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex items-center justify-between gap-4 md:gap-8">
              <div className="flex items-center gap-3 flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SORA
                </h1>
              </div>
              <div className="hidden lg:flex items-center gap-2 overflow-x-auto flex-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeSection === item.id
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-purple-900/30 hover:text-white"
                    }`}
                    aria-label={`Перейти к разделу ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden" aria-label="Главный баннер">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          
          <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                  <Icon name="Sparkles" size={16} className="text-purple-400" />
                  <span className="text-purple-300 text-xs md:text-sm font-medium">Новинка 2025</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Создавайте видео
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    из текста за минуты
                  </span>
                </h2>
                
                <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                  Нейросеть Sora от OpenAI превращает ваши идеи в реалистичные видео. 
                  Без монтажа, без камер — только ваше воображение.
                </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button 
                  size="lg" 
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl shadow-purple-500/30 font-semibold"
                  onClick={() => window.open('https://t.me/syntxaibot?start=aff_797685317', '_blank')}
                  aria-label="Начать создавать видео бесплатно"
                >
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Начать бесплатно
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-7 border-2 border-purple-500/50 text-white hover:bg-purple-900/30 font-semibold"
                  onClick={() => window.open('https://syntx.ai/welcome/1bQ2wH8v', '_blank')}
                  aria-label="Перейти на официальный сайт"
                >
                  <Icon name="Globe" size={18} className="mr-2" />
                  Официальный сайт
                </Button>
              </div>
              
              <div className="flex items-center gap-4 md:gap-8 pt-4">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                  <div className="text-xs md:text-sm text-gray-400">Пользователей</div>
                </div>
                <div className="h-10 md:h-12 w-px bg-purple-800"></div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">500K+</div>
                  <div className="text-xs md:text-sm text-gray-400">Видео создано</div>
                </div>
                <div className="hidden sm:block h-10 md:h-12 w-px bg-purple-800"></div>
                <div className="hidden sm:block">
                  <div className="text-2xl md:text-3xl font-bold text-white">20 сек</div>
                  <div className="text-xs md:text-sm text-gray-400">Макс. длина</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b1f66519-dfea-4ee9-aa2d-976d6e3fc70c/files/0ba38426-a80d-4b47-9bb0-9a8278b9bbbc.jpg"
                alt="Пример видео, созданного нейросетью Sora 2 от OpenAI - реалистичная генерация из текста"
                className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl md:rounded-3xl shadow-2xl border border-purple-500/30"
                loading="eager"
              />
            </div>
          </div>

          <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-12 md:mb-20" aria-label="Бесплатный доступ">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                🎁 Получите бесплатный доступ к Sora 2
              </h2>
              <p className="text-base md:text-xl text-gray-300">
                Начните создавать видео прямо сейчас — без очереди и ожидания
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <article className="flex items-start gap-3 md:gap-4 bg-green-500/10 border border-green-500/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                <Icon name="Check" size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Мгновенный доступ</h3>
                  <p className="text-sm md:text-base text-gray-300">Начните создавать видео через 30 секунд</p>
                </div>
              </article>
              
              <article className="flex items-start gap-3 md:gap-4 bg-blue-500/10 border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                <Icon name="Check" size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Без VPN</h3>
                  <p className="text-sm md:text-base text-gray-300">Работает через удобный Telegram-бот</p>
                </div>
              </article>
              
              <article className="flex items-start gap-3 md:gap-4 bg-purple-500/10 border border-purple-500/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                <Icon name="Check" size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Бесплатные генерации</h3>
                  <p className="text-sm md:text-base text-gray-300">Создавайте видео без ограничений</p>
                </div>
              </article>
              
              <article className="flex items-start gap-3 md:gap-4 bg-pink-500/10 border border-pink-500/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                <Icon name="Check" size={20} className="text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Поддержка 24/7</h3>
                  <p className="text-gray-300">Наша команда всегда на связи</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl shadow-purple-500/40"
                onClick={() => window.open('https://t.me/syntxaibot?start=aff_797685317', '_blank')}
              >
                <Icon name="Sparkles" size={24} className="mr-2" />
                Получить доступ к Sora 2
              </Button>
            </div>
          </div>

          <div className="space-y-12 md:space-y-20 text-white">
            <section id="what-is-sora" className="scroll-mt-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Что такое нейросеть Sora от OpenAI
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <article className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl md:rounded-2xl p-6 md:p-8">
                  <Icon name="Zap" size={28} className="text-purple-400 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Технология будущего</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Sora — это передовая нейросеть от OpenAI, которая генерирует реалистичные видео из текстовых описаний. 
                    Название "Sora" (空) в переводе с японского означает "небо" — символ безграничных возможностей.
                  </p>
                </article>
                
                <article className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl md:rounded-2xl p-6 md:p-8">
                  <Icon name="Cpu" size={28} className="text-blue-400 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Мощная архитектура</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Построена на диффузионных моделях и трансформерах. Обучена на миллионах видео и понимает физику реального мира, 
                    законы движения, освещение и взаимодействие объектов.
                  </p>
                </div>
              </div>
            </section>

            <section id="developer" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Разработчик Sora
              </h2>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    AI
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">OpenAI</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      OpenAI — американская компания, созданная в 2015 году, специализирующаяся на разработке искусственного интеллекта. 
                      Среди их продуктов: ChatGPT, DALL-E, Whisper и теперь Sora.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm">ChatGPT</span>
                      <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm">DALL-E</span>
                      <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-lg text-sm">Sora</span>
                      <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-sm">Whisper</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="capabilities" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Возможности Sora
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                  <Icon name="Video" size={28} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Длинные видео</h3>
                  <p className="text-gray-300">До 20 секунд в одной генерации с разрешением до 1080p</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                  <Icon name="Wand2" size={28} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Точность промптов</h3>
                  <p className="text-gray-300">Понимает сложные описания и передаёт все нюансы</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
                  <Icon name="Volume2" size={28} className="text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Генерация звука</h3>
                  <p className="text-gray-300">Sora 2 автоматически создаёт реалистичное звуковое сопровождение</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                  <Icon name="Users" size={28} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Персонажи</h3>
                  <p className="text-gray-300">Создаёт реалистичных людей с эмоциями и мимикой</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6">
                  <Icon name="Camera" size={28} className="text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Движение камеры</h3>
                  <p className="text-gray-300">Плавные переходы, панорамы, зумы и кинематографические ракурсы</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6">
                  <Icon name="Palette" size={28} className="text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Стили</h3>
                  <p className="text-gray-300">От фотореализма до анимации и художественных стилей</p>
                </div>
              </div>
            </section>

            <section id="access" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Как получить доступ к Sora
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm border-l-4 border-purple-500 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Через официальный сайт OpenAI</h3>
                      <p className="text-gray-300 mb-4">
                        Зарегистрируйтесь на платформе OpenAI и получите доступ через подписку ChatGPT Plus или Pro.
                        Требуется VPN и международная банковская карта.
                      </p>
                      <Button 
                        variant="outline"
                        className="border-purple-500/50 text-white hover:bg-purple-900/30"
                        onClick={() => window.open('https://syntx.ai/welcome/1bQ2wH8v', '_blank')}
                      >
                        Перейти на сайт
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm border-l-4 border-blue-500 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Через наш Telegram-бот (рекомендуем)</h3>
                      <p className="text-gray-300 mb-4">
                        Самый простой способ: без VPN, без сложных настроек, с поддержкой на русском языке.
                        Первые генерации бесплатно!
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => window.open('https://t.me/syntxaibot?start=aff_797685317', '_blank')}
                      >
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Открыть бот
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="download" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Где скачать Sora
              </h2>
              
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="AlertCircle" size={32} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Важная информация</h3>
                    <p className="text-gray-300 leading-relaxed">
                      На данный момент Sora доступна только через веб-интерфейс на сайте OpenAI. Официального мобильного приложения 
                      или десктопной версии не существует. Будьте осторожны с поддельными приложениями в App Store или Google Play.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <p className="text-amber-300 font-medium">
                    ⚠️ Используйте только официальные каналы доступа: сайт OpenAI или проверенные сервисы-партнёры
                  </p>
                </div>
              </div>
            </section>

            <section id="alternatives" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Альтернативы Sora
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Runway Gen-3</h3>
                  <div className="space-y-2 text-gray-300 mb-4">
                    <p><strong>Качество:</strong> Высокое</p>
                    <p><strong>Длительность:</strong> До 10 секунд</p>
                    <p><strong>Цена:</strong> От $12/месяц</p>
                  </div>
                  <p className="text-gray-400 text-sm">Отличный инструмент для профессионалов с удобным интерфейсом</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Pika Labs</h3>
                  <div className="space-y-2 text-gray-300 mb-4">
                    <p><strong>Качество:</strong> Среднее-высокое</p>
                    <p><strong>Длительность:</strong> До 3 секунд</p>
                    <p><strong>Цена:</strong> Бесплатно + платные планы</p>
                  </div>
                  <p className="text-gray-400 text-sm">Хороший вариант для начинающих с бесплатным доступом</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Google Veo 3</h3>
                  <div className="space-y-2 text-gray-300 mb-4">
                    <p><strong>Качество:</strong> Очень высокое</p>
                    <p><strong>Длительность:</strong> До 8 секунд</p>
                    <p><strong>Цена:</strong> Через Google Cloud</p>
                  </div>
                  <p className="text-gray-400 text-sm">Превосходная физика и реализм, конкурент Sora</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Synthesia</h3>
                  <div className="space-y-2 text-gray-300 mb-4">
                    <p><strong>Качество:</strong> Среднее</p>
                    <p><strong>Длительность:</strong> Неограниченная</p>
                    <p><strong>Цена:</strong> От $30/месяц</p>
                  </div>
                  <p className="text-gray-400 text-sm">Специализация на AI-аватарах для презентаций</p>
                </div>
              </div>
            </section>

            <section id="why-us" className="scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Почему наш сервис
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border-l-4 border-green-500 rounded-2xl p-6">
                  <Icon name="CheckCircle2" size={32} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Гарантия качества</h3>
                  <p className="text-gray-300">Работаем с официальными партнёрами OpenAI. Все коды проверены и работают</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border-l-4 border-blue-500 rounded-2xl p-6">
                  <Icon name="Zap" size={32} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Мгновенная доставка</h3>
                  <p className="text-gray-300">Получите доступ за 3-5 минут. Без очередей и долгого ожидания</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-sm border-l-4 border-purple-500 rounded-2xl p-6">
                  <Icon name="Shield" size={32} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Безопасность</h3>
                  <p className="text-gray-300">Легальный доступ без взлома. Ваш аккаунт OpenAI в безопасности</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm border-l-4 border-amber-500 rounded-2xl p-6">
                  <Icon name="DollarSign" size={32} className="text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Прозрачные цены</h3>
                  <p className="text-gray-300">Первые генерации бесплатно. Далее от 99₽ за 10 видео</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 backdrop-blur-sm border-l-4 border-pink-500 rounded-2xl p-6">
                  <Icon name="Gift" size={32} className="text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Бонусы и акции</h3>
                  <p className="text-gray-300">Регулярные розыгрыши промокодов для активных пользователей</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-sm border-l-4 border-indigo-500 rounded-2xl p-6">
                  <Icon name="Smartphone" size={32} className="text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Удобство</h3>
                  <p className="text-gray-300">Telegram-бот с русским интерфейсом. Без VPN и сложных настроек</p>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-20 mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Частые вопросы
              </h2>
              
              <div className="space-y-4">
                <details className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group">
                  <summary className="text-xl font-bold cursor-pointer list-none flex items-center justify-between">
                    <span>Можно ли использовать Sora бесплатно?</span>
                    <Icon name="ChevronDown" size={24} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Да! Через наш Telegram-бот первые генерации предоставляются бесплатно. 
                    Официальный доступ через OpenAI требует платной подписки ChatGPT Plus ($20/мес) или Pro ($200/мес).
                  </p>
                </details>
                
                <details className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group">
                  <summary className="text-xl font-bold cursor-pointer list-none flex items-center justify-between">
                    <span>Нужен ли VPN для работы с Sora?</span>
                    <Icon name="ChevronDown" size={24} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    При работе через наш Telegram-бот VPN не требуется. Для доступа к официальному сайту OpenAI из России необходим VPN.
                  </p>
                </details>
                
                <details className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group">
                  <summary className="text-xl font-bold cursor-pointer list-none flex items-center justify-between">
                    <span>Какая максимальная длительность видео?</span>
                    <Icon name="ChevronDown" size={24} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Sora может создавать видео длительностью до 20 секунд за одну генерацию. Для более длинных роликов можно склеить несколько фрагментов.
                  </p>
                </details>
                
                <details className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group">
                  <summary className="text-xl font-bold cursor-pointer list-none flex items-center justify-between">
                    <span>Можно ли использовать Sora для коммерческих целей?</span>
                    <Icon name="ChevronDown" size={24} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Да, при наличии платной подписки вы получаете права на коммерческое использование созданных видео. 
                    Подробности в пользовательском соглашении OpenAI.
                  </p>
                </details>
              </div>
            </section>

            <section id="reviews" className="scroll-mt-20 mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Отзывы пользователей
                </h2>
                <p className="text-xl text-gray-300">Что говорят те, кто уже использует Sora для создания видео</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      А
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Алексей М.</h4>
                      <p className="text-sm text-gray-400">Маркетолог</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Раньше на создание одного рекламного ролика уходила неделя и 50-100 тысяч рублей. 
                    С Sora делаю качественные видео за 10 минут. Это просто невероятно!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      М
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Мария К.</h4>
                      <p className="text-sm text-gray-400">Контент-креатор</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Использую Sora для создания контента в TikTok и Instagram. Реакция подписчиков просто взрывная! 
                    Охваты выросли в 3 раза, все спрашивают как я это снимаю.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      Д
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Дмитрий П.</h4>
                      <p className="text-sm text-gray-400">Предприниматель</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Запустил онлайн-курс и нужно было много обучающих видео. Благодаря Sora сэкономил больше 500 000 рублей 
                    на видеопродакшене. Качество отличное!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      Е
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Елена В.</h4>
                      <p className="text-sm text-gray-400">Дизайнер</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Работаю с клиентами из США и Европы. Раньше приходилось объяснять идеи словами, 
                    теперь показываю готовое видео за минуты. Клиенты в восторге!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      И
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Игорь С.</h4>
                      <p className="text-sm text-gray-400">Режиссёр</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Использую Sora для создания раскадровок и визуализации сцен перед съёмками. 
                    Это экономит массу времени и помогает команде лучше понять концепцию.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mr-3">
                      О
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Ольга Т.</h4>
                      <p className="text-sm text-gray-400">Блогер</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Никогда не думала, что смогу создавать такие крутые видео сама! Telegram-бот работает идеально, 
                    а результат выглядит как из профессиональной студии.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-8 py-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Users" size={24} className="text-purple-400" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      12,000+
                    </span>
                  </div>
                  <p className="text-gray-300">пользователей уже создают видео с помощью Sora</p>
                </div>
              </div>
            </section>

            <section className="scroll-mt-20 mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Заключение
              </h2>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 space-y-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Нейросеть Sora от OpenAI — это революционная технология, которая делает создание профессиональных видео доступным каждому. 
                  Теперь вам не нужны дорогие камеры, актеры или монтажеры — достаточно текстового описания, и искусственный интеллект 
                  создаст реалистичное видео за считанные минуты.
                </p>
                
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  С выходом Sora 2 в 2025 году возможности стали еще шире: видео до 20 секунд, разрешение 1080p, автоматическая генерация 
                  звука и продвинутые инструменты редактирования. Это мощный инструмент для маркетологов, блогеров, режиссеров, 
                  предпринимателей и всех, кто хочет создавать уникальный визуальный контент.
                </p>
                
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl"
                    onClick={() => window.open('https://t.me/syntxaibot?start=aff_797685317', '_blank')}
                  >
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать создавать видео
                  </Button>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center" aria-label="Призыв к действию">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Готовы создать своё первое видео?</h2>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-purple-100">Начните прямо сейчас — это быстро и бесплатно</p>
              <Button 
                size="lg" 
                className="text-base md:text-xl px-8 md:px-12 py-6 md:py-8 bg-white text-purple-600 hover:bg-gray-100 font-bold shadow-2xl"
                onClick={() => window.open('https://t.me/syntxaibot?start=aff_797685317', '_blank')}
                aria-label="Создать видео бесплатно в Telegram-боте"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Создать видео бесплатно
              </Button>
            </section>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white mt-12 md:mt-20 border-t border-purple-800/30" role="contentinfo">
        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SORA
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Создавайте невероятные видео из текста с помощью нейросети Sora от OpenAI. Быстро, удобно, без VPN.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-purple-400">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('what-is-sora')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Что такое Sora
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('capabilities')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Возможности
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('access')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Как получить доступ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-purple-400">Сервис</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://t.me/syntxaibot?start=aff_797685317" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Telegram-бот
                  </a>
                </li>
                <li>
                  <a 
                    href="https://syntx.ai/welcome/1bQ2wH8v" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Официальный сайт
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('why-us')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Почему мы
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('alternatives')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Альтернативы
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2025 Sora AI. Все права защищены.</p>
              <p className="text-center">
                Сервис не является официальным продуктом OpenAI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;