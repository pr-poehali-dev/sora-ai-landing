import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sora — нейросеть для создания видео от OpenAI: как получить доступ и пользоваться
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => window.open('https://sora.chatgpt.com', '_blank')}
            >
              🌐 Попробовать на сайте
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              🤖 Перейти в бот
            </Button>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Искусственный интеллект стремительно меняет индустрию создания контента, и нейросеть Sora от OpenAI — один из самых ярких примеров этой революции. Представьте: вы вводите текстовое описание, и через несколько минут получаете реалистичное видео, которое раньше потребовало бы часов профессиональной работы. Звучит фантастически? Это уже реальность.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            В феврале 2024 года компания OpenAI представила первую версию Sora, а 30 сентября 2025 года мир увидел обновленную Sora 2 — мощную нейросеть для генерации видео с невероятным уровнем детализации и реализма. За короткое время Sora стала объектом всеобщего внимания: от профессиональных видеографов и маркетологов до создателей контента и простых энтузиастов, желающих экспериментировать с новейшими технологиями.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            В этой статье мы подробно разберем, что такое нейросеть Sora, как получить к ней доступ, где скачать официальное приложение, как пользоваться генератором видео, и какие альтернативы существуют на рынке. Также вы узнаете о бесплатных и платных версиях, способах получения инвайт-кодов и найдете ответы на самые частые вопросы.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-2xl p-8 md:p-10 mb-12 border border-purple-200 dark:border-purple-800">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              🎁 Получите бесплатный доступ к Sora 2 прямо сейчас!
            </h2>

            <p className="text-lg mb-6">
              Не хотите ждать в очереди месяцами? Мы предлагаем быстрый и легальный способ получить инвайт-код для Sora 2:
            </p>

            <ul className="space-y-3 mb-8 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                <span><strong>Мгновенный доступ</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                <span><strong>Без VPN и сложных настроек</strong> — работает через удобный Telegram-бот</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                <span><strong>Бесплатные генерации</strong> — создавайте видео без ограничений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✅</span>
                <span><strong>Поддержка 24/7</strong> — наша команда поможет на каждом этапе</span>
              </li>
            </ul>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                👉 Получить доступ к Sora 2
              </Button>
            </div>
          </div>

          <h2 id="what-is-sora" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Что такое нейросеть Sora и зачем она нужна
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sora — это передовая нейросеть от компании OpenAI, специализирующаяся на генерации видео из текстовых описаний. Название "Sora" (空) в переводе с японского означает "небо" — символ безграничных возможностей и творческого потенциала.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Основные характеристики Sora:
          </h3>

          <div className="space-y-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">Технологическая база:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Sora построена на архитектуре диффузионных моделей и трансформеров, аналогичных тем, что используются в ChatGPT и DALL-E. Модель обучена на миллионах видеофрагментов и способна понимать физику реального мира, законы движения, освещения и взаимодействия объектов.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">Качество генерации:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Нейросеть создает видео с разрешением до 1080p и длительностью до 20 секунд. Sora 2, представленная в сентябре 2025 года, значительно улучшила качество изображения, стабильность движений и реалистичность деталей по сравнению с первой версией.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">Сфера применения:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Sora открывает новые горизонты для маркетологов, создателей контента, режиссеров, рекламщиков, образовательных проектов и даже независимых художников. Вы можете создавать рекламные ролики, образовательные видео, визуализации идей, анимацию для социальных сетей и многое другое.
              </p>
            </div>
          </div>

          <h2 id="developer" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Кто разработчик Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            За созданием Sora стоит компания <strong>OpenAI</strong> — лидер в области искусственного интеллекта, известная такими проектами, как ChatGPT, DALL-E и GPT-4. Команда OpenAI работает над тем, чтобы сделать технологии ИИ максимально безопасными, доступными и полезными для широкой аудитории. Разработка Sora велась несколько лет, и результат превзошел все ожидания: нейросеть способна генерировать сложные сцены с несколькими персонажами, динамичными действиями, точной передачей эмоций и окружающего мира.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">
            Почему вокруг Sora такой ажиотаж
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Появление Sora вызвало настоящий переполох в креативной индустрии. Профессионалы увидели в ней инструмент, который может радикально ускорить производство контента, а энтузиасты — возможность воплощать самые смелые идеи без дорогостоящего оборудования и команды специалистов.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Однако доступ к Sora ограничен: на момент запуска в 2025 году нейросеть работает в режиме инвайт-кодов и официально доступна только в США и Канаде. Это создало дефицит и повысило интерес во всем мире, включая Россию. Пользователи активно ищут способы получить приглашение, обмениваются кодами в сообществах и следят за каждым обновлением OpenAI.
          </p>

          <h2 id="capabilities" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Возможности нейросети Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Sora предлагает широкий спектр функций для создания видеоконтента, который ранее был доступен только профессиональным студиям.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Генерация видео по текстовому описанию
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Основная функция Sora — это <strong>text-to-video</strong>, то есть создание видео из текстового запроса (промпта). Вы описываете сцену на естественном языке, и нейросеть генерирует соответствующий видеоролик.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-3">Примеры промптов:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• "Кот в космическом скафандре плавает среди звезд"</li>
              <li>• "Закат над океаном с летающими дельфинами в стиле фэнтези"</li>
              <li>• "Футуристический город с летающими автомобилями в дождливую ночь"</li>
            </ul>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Sora понимает не только объекты, но и действия, атмосферу, стиль (кинематографический, анимационный, фотореалистичный, сюрреалистический), освещение и даже эмоции персонажей.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Поддержка Sora 2: обновления и улучшения
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sora 2, выпущенная в сентябре 2025 года, принесла существенные улучшения:
          </p>

          <div className="grid gap-4 mb-8">
            <div className="bg-card rounded-lg p-5 border">
              <h4 className="font-semibold text-lg mb-2">Увеличенная длительность видео:</h4>
              <p className="text-muted-foreground">
                Если первая версия ограничивалась 5-10 секундами, то Sora 2 может генерировать ролики до 20 секунд с высокой стабильностью.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 border">
              <h4 className="font-semibold text-lg mb-2">Реалистичность и детализация:</h4>
              <p className="text-muted-foreground">
                Улучшена физика движений, текстуры объектов, игра света и теней. Видео стали ещё более убедительными и естественными.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 border">
              <h4 className="font-semibold text-lg mb-2">Звуковое сопровождение:</h4>
              <p className="text-muted-foreground">
                Sora 2 также научилась генерировать звук, синхронизированный с видео — шаги, шум воды, голоса и фоновую атмосферу.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 border">
              <h4 className="font-semibold text-lg mb-2">Расширенные настройки:</h4>
              <p className="text-muted-foreground">
                Больше контроля над разрешением (480p, 720p, 1080p), соотношением сторон (16:9, 9:16, 1:1) и стилистикой видео.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 border">
              <h4 className="font-semibold text-lg mb-2">Редактирование и ремикс:</h4>
              <p className="text-muted-foreground">
                В приложении Sora можно редактировать чужие генерации, создавать вариации на основе существующих видео и даже добавлять себя в ролик через функцию "камео".
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Доступные функции: видео, фото, AI video generator, AI image generator
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Хотя основная специализация Sora — генерация видео, нейросеть также способна:
          </p>

          <ul className="space-y-3 text-lg text-muted-foreground mb-8">
            <li>• Создавать статичные изображения высокого качества из текстовых описаний (функция AI image generator).</li>
            <li>• Расширять существующие видео — вы загружаете короткий клип, а Sora продолжает его, добавляя новые кадры.</li>
            <li>• Генерировать видео из фотографий — функция image-to-video, которая оживляет статичные снимки.</li>
            <li>• Создавать циклические видео (loops) для использования в качестве фонов и заставок.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Примеры: что можно создать в Sora
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-lg mb-2">Рекламные ролики:</h4>
              <p className="text-muted-foreground text-sm">
                Визуализация продуктов, демонстрация услуг, создание эмоциональных сторителлинговых видео.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-lg mb-2">Образовательный контент:</h4>
              <p className="text-muted-foreground text-sm">
                Исторические реконструкции, научные визуализации, учебные анимации.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-lg mb-2">Социальные сети:</h4>
              <p className="text-muted-foreground text-sm">
                Короткие вирусные видео для TikTok, Instagram Reels, YouTube Shorts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-lg mb-2">Концепт-арт и предвизуализация:</h4>
              <p className="text-muted-foreground text-sm">
                Режиссеры и сценаристы могут быстро визуализировать идеи перед началом съемок.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-lg mb-2">Креативные эксперименты:</h4>
              <p className="text-muted-foreground text-sm">
                Сюрреалистические видео, фэнтезийные миры, абстрактные композиции.
              </p>
            </div>
          </div>

          <h2 id="access" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Как получить доступ к Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Одна из главных сложностей при работе с Sora — это ограниченный доступ. Рассмотрим все доступные способы получения доступа к нейросети.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Что такое инвайт-коды (invite codes)
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Инвайт-код — это специальный код приглашения, который необходимо ввести при регистрации в приложении или на сайте Sora. Без него доступ к генерации видео невозможен. OpenAI использует систему инвайтов, чтобы контролировать нагрузку на серверы и постепенно открывать доступ для новых пользователей.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Каждый пользователь, получивший доступ, может пригласить ограниченное количество друзей, что создает дефицит кодов и активный обмен приглашениями в сообществах.
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-10 mb-12 border-2 border-indigo-300 dark:border-indigo-700">
            <h3 className="text-2xl font-bold mb-6">
              Если вы хотите создавать видео еще проще — без регистрации на сайте OpenAI, используйте наш Telegram-бот:
            </h3>

            <div className="bg-white/60 dark:bg-black/20 rounded-lg p-6 mb-6">
              <ol className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[24px]">1.</span>
                  <span>Откройте <Button 
                    variant="link" 
                    className="p-0 h-auto font-bold text-indigo-600 dark:text-indigo-400"
                    onClick={() => window.open('https://t.me/your_bot', '_blank')}
                  >
                    Telegram-бот
                  </Button></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[24px]">2.</span>
                  <span>Нажмите /start</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[24px]">3.</span>
                  <span>Напишите текстовое описание видео</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-[24px]">4.</span>
                  <span>Получите готовое видео прямо в Telegram за 2-3 минуты!</span>
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-lg mb-4">Преимущества нашего бота:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  <span>Без VPN и блокировок</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <span>Первые 3 генерации бесплатно</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span>Быстрая обработка (в 2 раза быстрее официального сайта)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇷🇺</span>
                  <span>Полная поддержка русского языка</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📱</span>
                  <span>Работает на любом устройстве</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                👉 Попробовать Telegram-бот прямо сейчас
              </Button>
            </div>
          </div>

          <h2 id="download" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Где скачать и установить Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Чтобы начать работать с Sora, нужно знать, где находятся официальные источники для скачивания.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Sora официальный сайт
          </h3>

          <div className="bg-card rounded-lg p-6 border mb-6">
            <p className="mb-3"><strong>Главная страница нейросети:</strong> <a href="https://openai.com/sora" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">openai.com/sora</a></p>
            <p><strong>Веб-версия для генерации:</strong> <a href="https://sora.chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sora.chatgpt.com</a> или <a href="https://sora.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sora.com</a></p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Именно через эти адреса осуществляется доступ к Sora в браузере. Здесь вы можете регистрироваться, вводить инвайт-коды и создавать видео без необходимости устанавливать приложение.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Версии для Android, iPhone, Windows, macOS
          </h3>

          <div className="space-y-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">iOS (iPhone и iPad):</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Официальное приложение "Sora by OpenAI" доступно в App Store: <a href="https://apps.apple.com/us/app/sora-by-openai/id6744034028" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">apps.apple.com/us/app/sora-by-openai/id6744034028</a></li>
                <li>• Требования: iOS 18.0 и выше</li>
                <li>• Приложение полностью бесплатное, но требует инвайт-кода для активации</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">Android:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Мобильное приложение для Android было анонсировано и доступно для предварительной регистрации в Google Play: <a href="https://play.google.com/store/apps/details?id=com.openai.sora" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">play.google.com/store/apps/details?id=com.openai.sora</a></li>
                <li>• Требования: Android 7.1 и выше</li>
                <li>• Однако на момент написания статьи полный функционал доступен не во всех регионах</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h4 className="text-xl font-semibold mb-3">Windows и macOS:</h4>
              <p className="text-muted-foreground">
                Нативного десктопного приложения для компьютеров пока нет. Пользователи Windows и macOS могут работать с Sora через веб-версию <a href="https://sora.chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sora.chatgpt.com</a> в любом современном браузере (Chrome, Firefox, Safari, Edge).
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Где скачать официально и безопасно
          </h3>

          <p className="text-lg mb-4">Всегда используйте только официальные источники:</p>

          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800 mb-6">
            <ul className="space-y-2 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>App Store (для iOS)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Google Play (для Android)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Официальный сайт openai.com/sora</span>
              </li>
            </ul>
          </div>

          <p className="text-lg mb-4"><strong>Никогда не скачивайте Sora из:</strong></p>

          <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8">
            <ul className="space-y-2 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Сторонних сайтов с APK-файлами</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Telegram-каналов, предлагающих "взломанные" версии</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Неофициальных магазинов приложений</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-red-600 dark:text-red-400 font-semibold mb-8">
            ⚠️ Использование неофициальных версий грозит утечкой ваших данных, вирусами и блокировкой аккаунта OpenAI.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Разница между официальной и взломанной версией
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h4 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Официальная версия:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Безопасна и защищена</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Регулярные обновления и новые функции</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Техническая поддержка от OpenAI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Легальное использование контента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Стабильная работа</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h4 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">"Взломанная" версия:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Риск вирусов и кражи данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Отсутствие обновлений</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Возможная блокировка аккаунта</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Нестабильная работа</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                  <span>Нет технической поддержки</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 mb-8">
            <p className="text-lg font-semibold">
              <strong>Вывод:</strong> используйте только официальные версии Sora, чтобы защитить свои данные и получать качественный сервис.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Альтернатива: Telegram-бот вместо приложения
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Если у вас возникают проблемы с установкой официального приложения Sora (недоступен регион, нет инвайт-кода, сложности с VPN), есть более простое решение — используйте наш Telegram-бот.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Почему это удобнее:</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
                    <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-semibold">Официальное приложение Sora</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-4 text-left font-semibold">Наш Telegram-бот</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> Требуется инвайт-код
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> Не требуется инвайт-код
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> Работает только в США/Канаде
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> Работает в любой стране
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> Нужен VPN
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> VPN не нужен
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> Регистрация через OpenAI
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> Быстрый вход через Telegram
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> Ограничения для бесплатных пользователей
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> Больше бесплатных генераций
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-950/10">
                      <span className="text-red-600 dark:text-red-400">✗</span> iOS 18.0+ / Android 7.1+
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-4 bg-green-50 dark:bg-green-950/10">
                      <span className="text-green-600 dark:text-green-400">✓</span> Любое устройство с Telegram
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              🤖 Перейти в Telegram-бот
            </Button>
          </div>

          <h2 id="alternatives" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Альтернативы и аналоги Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Хотя Sora — лидер в генерации видео, на рынке существуют достойные альтернативы.
          </p>

          <h3 className="text-2xl font-semibold mb-6 mt-8">
            Сравнение с Runway ML, Pika Labs, Synthesia
          </h3>

          <div className="space-y-6 mb-8">
            <div className="bg-card rounded-lg p-6 border hover:border-primary/50 transition-colors">
              <h4 className="text-xl font-bold mb-3">Runway Gen-3 / Gen-4</h4>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <p><strong>Качество:</strong> Высокое, близкое к Sora</p>
                <p><strong>Длительность:</strong> До 18 секунд</p>
                <p><strong>Цена:</strong> От $12/месяц</p>
                <p><strong>Доступность:</strong> Широкая география, включая Россию</p>
              </div>
              <p className="mt-3 text-muted-foreground"><strong>Особенности:</strong> Отличная работа с редактированием существующего видео, инструменты для профессионалов</p>
            </div>

            <div className="bg-card rounded-lg p-6 border hover:border-primary/50 transition-colors">
              <h4 className="text-xl font-bold mb-3">Pika Labs</h4>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <p><strong>Качество:</strong> Среднее-высокое</p>
                <p><strong>Длительность:</strong> До 3-4 секунд</p>
                <p><strong>Цена:</strong> Бесплатная версия + премиум от $10/месяц</p>
                <p><strong>Доступность:</strong> Глобальная</p>
              </div>
              <p className="mt-3 text-muted-foreground"><strong>Особенности:</strong> Быстрая генерация, простой интерфейс, активное сообщество Discord</p>
            </div>

            <div className="bg-card rounded-lg p-6 border hover:border-primary/50 transition-colors">
              <h4 className="text-xl font-bold mb-3">Kling AI</h4>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <p><strong>Качество:</strong> Высокое, особенно для азиатской аудитории</p>
                <p><strong>Длительность:</strong> До 10 секунд</p>
                <p><strong>Цена:</strong> Бесплатная версия с лимитами</p>
                <p><strong>Доступность:</strong> Глобальная</p>
              </div>
              <p className="mt-3 text-muted-foreground"><strong>Особенности:</strong> Отлично работает с анимацией и фэнтези-контентом</p>
            </div>

            <div className="bg-card rounded-lg p-6 border hover:border-primary/50 transition-colors">
              <h4 className="text-xl font-bold mb-3">Google Veo 3</h4>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <p><strong>Качество:</strong> Очень высокое, конкурент Sora</p>
                <p><strong>Длительность:</strong> До 8 секунд</p>
                <p><strong>Цена:</strong> Интегрирован в Google Cloud (платный доступ)</p>
                <p><strong>Доступность:</strong> Через Google Cloud</p>
              </div>
              <p className="mt-3 text-muted-foreground"><strong>Особенности:</strong> Превосходная физика и реализм</p>
            </div>

            <div className="bg-card rounded-lg p-6 border hover:border-primary/50 transition-colors">
              <h4 className="text-xl font-bold mb-3">Synthesia</h4>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <p><strong>Качество:</strong> Среднее (фокус на аватары, а не на кинематографическое видео)</p>
                <p><strong>Длительность:</strong> Неограниченная для говорящих аватаров</p>
                <p><strong>Цена:</strong> От $30/месяц</p>
                <p><strong>Доступность:</strong> Глобальная</p>
              </div>
              <p className="mt-3 text-muted-foreground"><strong>Особенности:</strong> Создание видео с AI-аватарами для презентаций и обучения</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Преимущества Sora
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-lg p-5 border border-violet-200 dark:border-violet-800">
              <h4 className="font-semibold text-lg mb-2">🏆 Непревзойденное качество:</h4>
              <p className="text-muted-foreground text-sm">
                Sora генерирует самые реалистичные и детализированные видео на рынке.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-lg mb-2">⏱️ Длительные ролики:</h4>
              <p className="text-muted-foreground text-sm">
                До 20 секунд в одной генерации — это больше, чем у большинства конкурентов.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-lg mb-2">🎯 Точное следование промпту:</h4>
              <p className="text-muted-foreground text-sm">
                Sora лучше других понимает сложные описания и передает нюансы.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg p-5 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-lg mb-2">🔊 Звуковое сопровождение:</h4>
              <p className="text-muted-foreground text-sm">
                Sora 2 автоматически генерирует звук, что делает видео еще более реалистичным.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-lg p-5 border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-lg mb-2">🔗 Экосистема OpenAI:</h4>
              <p className="text-muted-foreground text-sm">
                Интеграция с ChatGPT, возможность использовать GPT для генерации промптов.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg p-5 border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-semibold text-lg mb-2">👥 Активное сообщество:</h4>
              <p className="text-muted-foreground text-sm">
                Огромное количество пользователей, обмен опытом, обучающие материалы.
              </p>
            </div>
          </div>

          <h2 id="why-us" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Почему наш сервис — лучший способ получить доступ к Sora
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            На рынке существует множество сервисов, предлагающих инвайт-коды для Sora. Почему стоит выбрать именно нас?
          </p>

          <div className="space-y-6 mb-10">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">✅</span> Гарантированный результат
              </h3>
              <p className="text-muted-foreground">
                Мы работаем напрямую с официальными партнерами OpenAI и гарантируем, что каждый код работает. Никаких подделок или уже использованных кодов.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Мгновенная доставка
              </h3>
              <p className="text-muted-foreground">
                Среднее время получения кода — 3-5 минут. Не нужно ждать днями в очереди или искать коды на форумах.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🔒</span> Безопасность
              </h3>
              <p className="text-muted-foreground">
                Все коды легальны. Мы не предлагаем взломанные версии или сомнительные обходные пути. Ваш аккаунт OpenAI останется в безопасности.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">💰</span> Прозрачные цены
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Первые 3 генерации — <strong>бесплатно</strong></li>
                <li>• Далее от <strong>99 рублей за 10 видео</strong></li>
                <li>• Премиум-подписка от <strong>590 рублей/месяц</strong> (безлимит)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🎁</span> Бонусы и акции
              </h3>
              <p className="text-muted-foreground">
                Мы регулярно проводим розыгрыши, раздаем промокоды и поощряем активных пользователей. Присоединяйтесь к нашему сообществу и получайте больше бесплатно!
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-xl p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">📱</span> Удобство использования
              </h3>
              <p className="text-muted-foreground">
                Наш Telegram-бот — это самый простой способ создавать видео с помощью Sora. Без сложных настроек, VPN и технических знаний. Просто напишите текст — и получите видео.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🇷🇺</span> Полная поддержка русского языка
              </h3>
              <p className="text-muted-foreground">
                В отличие от официального интерфейса Sora (только английский), наш бот полностью на русском языке. Интуитивно понятный интерфейс, подсказки и примеры промптов.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">💬</span> Живая поддержка
              </h3>
              <p className="text-muted-foreground">
                Наша команда на связи 24/7. Возникли вопросы? Нужна помощь с настройкой? Пишите в @YourSupportBot — ответим в течение 5 минут.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              🚀 Получить доступ к Sora прямо сейчас
            </Button>
          </div>

          <h2 id="faq" className="text-3xl font-bold mb-8 mt-16 scroll-mt-20">
            FAQ
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-3">Безопасно ли использовать ваш сервис?</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Абсолютно безопасно. Мы не запрашиваем ваш пароль от OpenAI и не требуем доступа к вашему аккаунту. Вы получаете только инвайт-код, который вводите самостоятельно на официальном сайте Sora.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наш Telegram-бот использует официальное API и полностью соответствует правилам OpenAI.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-3">Работает ли ваш сервис в России?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Да! В отличие от официального приложения Sora, наш Telegram-бот работает в России и любой другой стране без VPN. Это одно из главных преимуществ нашего сервиса.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Чем ваш Telegram-бот отличается от официального сайта Sora?</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
                      <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-semibold">Параметр</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-semibold">Официальный Sora</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-semibold">Наш Telegram-бот</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Нужен инвайт-код</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Да</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">Нет</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Работает в России</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Нет (нужен VPN)</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">Да (без VPN)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Интерфейс</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Английский</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">Русский</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Первые генерации</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Ограничены</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">3 бесплатно</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Поддержка</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Email (медленно)</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">Telegram 24/7</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Удобство</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-red-50 dark:bg-red-950/10">
                        <span className="text-red-600 dark:text-red-400">Веб-сайт/приложение</span>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3 bg-green-50 dark:bg-green-950/10">
                        <span className="text-green-600 dark:text-green-400">Прямо в мессенджере</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 md:p-10 mt-16 mb-12 border-2 border-purple-300 dark:border-purple-700">
            <h2 className="text-3xl font-bold mb-6">Заключение</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Нейросеть Sora от OpenAI — это революционная технология, которая делает создание профессиональных видео доступным каждому. Теперь вам не нужны дорогие камеры, актеры или монтажеры — достаточно текстового описания, и искусственный интеллект создаст реалистичное видео за считанные минуты.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              С выходом Sora 2 в 2025 году возможности стали еще шире: видео до 20 секунд, разрешение 1080p, автоматическая генерация звука и продвинутые инструменты редактирования. Это мощный инструмент для маркетологов, блогеров, режиссеров, предпринимателей и всех, кто хочет создавать уникальный визуальный контент.
            </p>

            <div className="bg-white/60 dark:bg-black/20 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-center mb-4">
                🚀 Готовы попробовать Sora прямо сейчас?
              </p>
              <p className="text-center text-muted-foreground mb-6">
                Получите мгновенный доступ к нейросети через наш Telegram-бот!<br />
                Никаких инвайт-кодов, VPN или сложных настроек.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl"
                  onClick={() => window.open('https://t.me/your_bot', '_blank')}
                >
                  ✨ Начать создавать видео бесплатно
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Первые 3 генерации — бесплатно. Без регистрации. Без ожидания.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Index;