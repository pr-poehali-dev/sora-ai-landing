import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 py-16 max-w-6xl">
          <div className="text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Icon name="Sparkles" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">OpenAI Sora 2 — доступна прямо сейчас!</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sora — нейросеть
              </span>
              <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                для создания видео
              </span>
              <span className="block mt-2 text-foreground">от OpenAI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Искусственный интеллект стремительно меняет индустрию создания контента, и нейросеть <strong className="text-foreground">Sora от OpenAI</strong> — один из самых ярких примеров этой революции. Представьте: вы вводите текстовое описание, и через несколько минут получаете реалистичное видео, которое раньше потребовало бы часов профессиональной работы. <span className="text-primary font-semibold">Звучит фантастически? Это уже реальность.</span>
            </p>

            <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                В феврале 2024 года компания OpenAI представила первую версию Sora, а <strong className="text-foreground">30 сентября 2025 года</strong> мир увидел обновленную <strong className="text-primary">Sora 2</strong> — мощную нейросеть для генерации видео с невероятным уровнем детализации и реализма. За короткое время Sora стала объектом всеобщего внимания: от профессиональных видеографов и маркетологов до создателей контента и простых энтузиастов, желающих экспериментировать с новейшими технологиями.
              </p>
              <p>
                В этой статье мы подробно разберем, что такое нейросеть Sora, как получить к ней доступ, где скачать официальное приложение, как пользоваться генератором видео, и какие альтернативы существуют на рынке. Также вы узнаете о бесплатных и платных версиях, способах получения инвайт-кодов и найдете ответы на самые частые вопросы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative p-10 md:p-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Icon name="Gift" size={20} className="text-primary" />
                  <span className="text-sm font-bold text-primary">БЕСПЛАТНЫЙ ДОСТУП</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  🎁 Получите бесплатный доступ к Sora 2 прямо сейчас!
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Не хотите ждать в очереди месяцами? Мы предлагаем быстрый и легальный способ получить инвайт-код для Sora 2:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: 'Zap', title: 'Мгновенный доступ', text: 'Получите код приглашения в течение 5 минут' },
                  { icon: 'Shield', title: 'Без VPN', text: 'Работает через удобный Telegram-бот' },
                  { icon: 'Infinity', title: 'Бесплатные генерации', text: 'Создавайте видео без ограничений' },
                  { icon: 'HeadphonesIcon', title: 'Поддержка 24/7', text: 'Наша команда поможет на каждом этапе' }
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-background/50 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold mb-2">✅ {item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-7 rounded-2xl shadow-2xl shadow-primary/30 font-bold">
                  👉 Получить бесплатный инвайт-код прямо сейчас
                  <Icon name="ArrowRight" size={22} className="ml-2" />
                </Button>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-3">Или воспользуйтесь нашим Telegram-ботом для генерации видео:</p>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-10 py-6 rounded-2xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  👉 @YourSoraBot
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 pb-4 border-b border-primary/20">
              Что такое нейросеть Sora и зачем она нужна
            </h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-foreground">Sora</strong> — это передовая нейросеть от компании OpenAI, специализирующаяся на генерации видео из текстовых описаний. Название "Sora" (空) в переводе с японского означает "небо" — символ безграничных возможностей и творческого потенциала.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Основные характеристики Sora:</h3>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 mb-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Cpu" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Технологическая база:</h4>
                    <p className="text-muted-foreground">
                      Sora построена на архитектуре диффузионных моделей и трансформеров, аналогичных тем, что используются в ChatGPT и DALL-E. Модель обучена на миллионах видеофрагментов и способна понимать физику реального мира, законы движения, освещения и взаимодействия объектов.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Icon name="Sparkles" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Качество генерации:</h4>
                    <p className="text-muted-foreground">
                      Нейросеть создает видео с разрешением до 1080p и длительностью до 20 секунд. Sora 2, представленная в сентябре 2025 года, значительно улучшила качество изображения, стабильность движений и реалистичность деталей по сравнению с первой версией.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Сфера применения:</h4>
                    <p className="text-muted-foreground">
                      Sora открывает новые горизонты для маркетологов, создателей контента, режиссеров, рекламщиков, образовательных проектов и даже независимых художников. Вы можете создавать рекламные ролики, образовательные видео, визуализации идей, анимацию для социальных сетей и многое другое.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Кто разработчик Sora</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              За созданием Sora стоит компания <strong className="text-foreground">OpenAI</strong> — лидер в области искусственного интеллекта, известная такими проектами, как ChatGPT, DALL-E и GPT-4. Команда OpenAI работает над тем, чтобы сделать технологии ИИ максимально безопасными, доступными и полезными для широкой аудитории. Разработка Sora велась несколько лет, и результат превзошел все ожидания: нейросеть способна генерировать сложные сцены с несколькими персонажами, динамичными действиями, точной передачей эмоций и окружающего мира.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Почему вокруг Sora такой ажиотаж</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Появление Sora вызвало настоящий переполох в креативной индустрии. Профессионалы увидели в ней инструмент, который может радикально ускорить производство контента, а энтузиасты — возможность воплощать самые смелые идеи без дорогостоящего оборудования и команды специалистов.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Однако доступ к Sora ограничен: на момент запуска в 2025 году нейросеть работает в режиме инвайт-кодов и официально доступна только в США и Канаде. Это создало дефицит и повысило интерес во всем мире, включая Россию. Пользователи активно ищут способы получить приглашение, обмениваются кодами в сообществах и следят за каждым обновлением OpenAI.
            </p>
          </article>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Возможности нейросети Sora</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Sora предлагает широкий спектр функций для создания видеоконтента, который ранее был доступен только профессиональным студиям.
          </p>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Генерация видео по текстовому описанию</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Основная функция Sora — это <strong className="text-primary">text-to-video</strong>, то есть создание видео из текстового запроса (промпта). Вы описываете сцену на естественном языке, и нейросеть генерирует соответствующий видеоролик.
              </p>

              <Card className="p-8 bg-card/50 border-primary/20">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                  Примеры промптов:
                </h4>
                <div className="space-y-3">
                  {[
                    '"Кот в космическом скафандре плавает среди звезд"',
                    '"Закат над океаном с летающими дельфинами в стиле фэнтези"',
                    '"Футуристический город с летающими автомобилями в дождливую ночь"'
                  ].map((prompt, i) => (
                    <div key={i} className="p-4 bg-background/50 rounded-lg border border-primary/10">
                      <p className="text-muted-foreground italic">{prompt}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6">
                  Sora понимает не только объекты, но и действия, атмосферу, стиль (кинематографический, анимационный, фотореалистичный, сюрреалистический), освещение и даже эмоции персонажей.
                </p>
              </Card>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Поддержка Sora 2: обновления и улучшения</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Sora 2, выпущенная в сентябре 2025 года, принесла существенные улучшения:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: 'Clock',
                    title: 'Увеличенная длительность видео',
                    text: 'Если первая версия ограничивалась 5-10 секундами, то Sora 2 может генерировать ролики до 20 секунд с высокой стабильностью.'
                  },
                  {
                    icon: 'Eye',
                    title: 'Реалистичность и детализация',
                    text: 'Улучшена физика движений, текстуры объектов, игра света и теней. Видео стали ещё более убедительными и естественными.'
                  },
                  {
                    icon: 'Volume2',
                    title: 'Звуковое сопровождение',
                    text: 'Sora 2 также научилась генерировать звук, синхронизированный с видео — шаги, шум воды, голоса и фоновую атмосферу.'
                  },
                  {
                    icon: 'Sliders',
                    title: 'Расширенные настройки',
                    text: 'Больше контроля над разрешением (480p, 720p, 1080p), соотношением сторон (16:9, 9:16, 1:1) и стилистикой видео.'
                  },
                  {
                    icon: 'Edit',
                    title: 'Редактирование и ремикс',
                    text: 'В приложении Sora можно редактировать чужие генерации, создавать вариации на основе существующих видео и даже добавлять себя в ролик через функцию "камео".'
                  }
                ].map((feature, i) => (
                  <Card key={i} className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name={feature.icon as any} size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Доступные функции: видео, фото, AI video generator, AI image generator</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Хотя основная специализация Sora — генерация видео, нейросеть также способна:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'Image', text: 'Создавать статичные изображения высокого качества из текстовых описаний (функция AI image generator).' },
                  { icon: 'Video', text: 'Расширять существующие видео — вы загружаете короткий клип, а Sora продолжает его, добавляя новые кадры.' },
                  { icon: 'Camera', text: 'Генерировать видео из фотографий — функция image-to-video, которая оживляет статичные снимки.' },
                  { icon: 'Repeat', text: 'Создавать циклические видео (loops) для использования в качестве фонов и заставок.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-primary/10">
                    <Icon name={item.icon as any} size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="text-3xl font-bold mb-8">Примеры: что можно создать в Sora</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'Megaphone', title: 'Рекламные ролики', text: 'Визуализация продуктов, демонстрация услуг, создание эмоциональных сторителлинговых видео.' },
                  { icon: 'GraduationCap', title: 'Образовательный контент', text: 'Исторические реконструкции, научные визуализации, учебные анимации.' },
                  { icon: 'Smartphone', title: 'Социальные сети', text: 'Короткие вирусные видео для TikTok, Instagram Reels, YouTube Shorts.' },
                  { icon: 'Clapperboard', title: 'Концепт-арт и предвизуализация', text: 'Режиссеры и сценаристы могут быстро визуализировать идеи перед началом съемок.' },
                  { icon: 'Sparkles', title: 'Креативные эксперименты', text: 'Сюрреалистические видео, фэнтезийные миры, абстрактные композиции.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name={item.icon as any} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}:</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Section - продолжение следует */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Как получить доступ к Sora</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Одна из главных сложностей при работе с Sora — это ограниченный доступ. Рассмотрим все доступные способы получения доступа к нейросети.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Что такое инвайт-коды (invite codes)</h3>
              <Card className="p-8 bg-card/50 border-primary/20">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Инвайт-код</strong> — это специальный код приглашения, который необходимо ввести при регистрации в приложении или на сайте Sora. Без него доступ к генерации видео невозможен. OpenAI использует систему инвайтов, чтобы контролировать нагрузку на серверы и постепенно открывать доступ для новых пользователей.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Каждый пользователь, получивший доступ, может пригласить ограниченное количество друзей, что создает дефицит кодов и активный обмен приглашениями в сообществах.
                </p>
              </Card>
            </div>

            <Card className="relative overflow-hidden p-12 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 border-2 border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-4xl font-bold mb-8 text-center">Самый быстрый способ — через наш сервис</h3>
                <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Вместо того чтобы неделями ждать в официальной очереди или безуспешно искать коды в Discord, вы можете получить гарантированный доступ к Sora 2 за несколько минут:
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  <Card className="p-8 bg-background/80 backdrop-blur-sm border-primary/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-xl">
                        1
                      </div>
                      <h4 className="text-2xl font-bold">Вариант 1: Получить инвайт-код</h4>
                    </div>
                    <ol className="space-y-4 mb-8">
                      {[
                        'Перейдите по ссылке: Получить инвайт-код бесплатно (ваша реферальная ссылка)',
                        'Заполните простую форму регистрации',
                        'Получите код приглашения на email или в Telegram',
                        'Активируйте код на sora.chatgpt.com и начинайте творить!'
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 py-6 text-lg font-bold">
                      Получить инвайт-код
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </Card>

                  <Card className="p-8 bg-background/80 backdrop-blur-sm border-secondary/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-white text-xl">
                        2
                      </div>
                      <h4 className="text-2xl font-bold">Вариант 2: Telegram-бот</h4>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Если вы хотите создавать видео еще проще — без регистрации на сайте OpenAI, используйте наш Telegram-бот:
                    </p>
                    <ol className="space-y-3 mb-8 text-sm">
                      {[
                        'Откройте @YourSoraBot (ссылка на ваш бот)',
                        'Нажмите /start',
                        'Напишите текстовое описание видео',
                        'Получите готовое видео прямо в Telegram за 2-3 минуты!'
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                    
                    <div className="space-y-3 mb-8">
                      <h5 className="font-bold">Преимущества нашего бота:</h5>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {[
                          '🚀 Без VPN и блокировок',
                          '💰 Первые 3 генерации бесплатно',
                          '⚡ Быстрая обработка (в 2 раза быстрее официального сайта)',
                          '🇷🇺 Полная поддержка русского языка',
                          '📱 Работает на любом устройстве'
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 py-6 text-lg font-bold">
                      <Icon name="Send" size={20} className="mr-2" />
                      👉 Попробовать Telegram-бот прямо сейчас
                    </Button>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-primary/20 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Заключение</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Нейросеть Sora от OpenAI — это революционная технология, которая делает создание профессиональных видео доступным каждому. Теперь вам не нужны дорогие камеры, актеры или монтажеры — достаточно текстового описания, и искусственный интеллект создаст реалистичное видео за считанные минуты.
              </p>
              <p className="leading-relaxed">
                С выходом Sora 2 в 2025 году возможности стали еще шире: видео до 20 секунд, разрешение 1080p, автоматическая генерация звука и продвинутые инструменты редактирования. Это мощный инструмент для маркетологов, блогеров, режиссеров, предпринимателей и всех, кто хочет создавать уникальный визуальный контент.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-primary/20">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                SORA AI
              </h3>
              <p className="text-muted-foreground text-sm">
                Будущее создания видео уже здесь
              </p>
            </div>

            <div className="flex gap-4">
              {['Send', 'Mail', 'MessageCircle'].map((social, i) => (
                <Button 
                  key={i}
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full w-12 h-12"
                >
                  <Icon name={social as any} size={22} />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 Sora AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
