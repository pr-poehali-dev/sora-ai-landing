import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 py-20 max-w-5xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">OpenAI Sora 2 уже доступна!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Sora — нейросеть для создания видео от OpenAI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Искусственный интеллект стремительно меняет индустрию создания контента. Представьте: вы вводите текстовое описание, и через несколько минут получаете реалистичное видео, которое раньше потребовало бы часов профессиональной работы.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-10 py-7 rounded-2xl shadow-lg shadow-primary/20">
                🎁 Получить бесплатный инвайт-код
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-10 py-7 rounded-2xl">
                <Icon name="Send" size={20} className="mr-2" />
                Открыть Telegram-бот
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto">
              {[
                { icon: 'Check', text: 'Мгновенный доступ — 5 минут' },
                { icon: 'Check', text: 'Без VPN и настроек' },
                { icon: 'Check', text: 'Бесплатные генерации' },
                { icon: 'Check', text: 'Поддержка 24/7' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name={item.icon as any} size={16} className="text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Что такое нейросеть Sora и зачем она нужна</h2>
            
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                <strong className="text-foreground">Sora</strong> — это передовая нейросеть от компании OpenAI, специализирующаяся на генерации видео из текстовых описаний. Название "Sora" (空) в переводе с японского означает "небо" — символ безграничных возможностей и творческого потенциала.
              </p>
              
              <p>
                В феврале 2024 года компания OpenAI представила первую версию Sora, а <strong className="text-foreground">30 сентября 2025 года</strong> мир увидел обновленную <strong className="text-foreground">Sora 2</strong> — мощную нейросеть для генерации видео с невероятным уровнем детализации и реализма.
              </p>

              <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Основные характеристики Sora</h3>

              <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm my-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Cpu" size={24} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Технологическая база:</strong> Sora построена на архитектуре диффузионных моделей и трансформеров, аналогичных тем, что используются в ChatGPT и DALL-E. Модель обучена на миллионах видеофрагментов и способна понимать физику реального мира.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" size={24} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Качество генерации:</strong> Нейросеть создает видео с разрешением до 1080p и длительностью до 20 секунд. Sora 2 значительно улучшила качество изображения, стабильность движений и реалистичность деталей.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Target" size={24} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Сфера применения:</strong> Sora открывает новые горизонты для маркетологов, создателей контента, режиссеров, рекламщиков, образовательных проектов и независимых художников.
                    </div>
                  </li>
                </ul>
              </Card>

              <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Кто разработчик Sora</h3>
              
              <p>
                За созданием Sora стоит компания <strong className="text-foreground">OpenAI</strong> — лидер в области искусственного интеллекта, известная такими проектами, как ChatGPT, DALL-E и GPT-4. Команда OpenAI работает над тем, чтобы сделать технологии ИИ максимально безопасными, доступными и полезными для широкой аудитории.
              </p>

              <h3 className="text-3xl font-bold mt-12 mb-6 text-foreground">Почему вокруг Sora такой ажиотаж</h3>
              
              <p>
                Появление Sora вызвало настоящий переполох в креативной индустрии. Профессионалы увидели в ней инструмент, который может радикально ускорить производство контента, а энтузиасты — возможность воплощать самые смелые идеи без дорогостоящего оборудования.
              </p>
              
              <p>
                Однако доступ к Sora ограничен: на момент запуска в 2025 году нейросеть работает в режиме инвайт-кодов и официально доступна только в США и Канаде. Это создало дефицит и повысило интерес во всем мире, включая Россию.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Возможности нейросети Sora</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: 'Type',
                title: 'Генерация видео по текстовому описанию',
                description: 'Text-to-video: описывайте сцену на естественном языке, и нейросеть генерирует соответствующий видеоролик'
              },
              {
                icon: 'Wand2',
                title: 'Поддержка Sora 2: обновления и улучшения',
                description: 'Видео до 20 секунд, разрешение 1080p, улучшенная физика движений и реалистичность деталей'
              },
              {
                icon: 'Volume2',
                title: 'Звуковое сопровождение',
                description: 'Sora 2 генерирует звук, синхронизированный с видео — шаги, шум воды, голоса и фоновую атмосферу'
              },
              {
                icon: 'Image',
                title: 'AI video generator, AI image generator',
                description: 'Создание статичных изображений высокого качества и оживление фотографий'
              },
              {
                icon: 'Film',
                title: 'Расширение видео',
                description: 'Загрузите короткий клип, и Sora продолжит его, добавляя новые кадры'
              },
              {
                icon: 'Settings',
                title: 'Расширенные настройки',
                description: 'Больше контроля над разрешением, соотношением сторон и стилистикой видео'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Примеры: что можно создать в Sora</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'Megaphone', text: 'Рекламные ролики: визуализация продуктов, демонстрация услуг, эмоциональный сторителлинг' },
                { icon: 'GraduationCap', text: 'Образовательный контент: исторические реконструкции, научные визуализации, учебные анимации' },
                { icon: 'Smartphone', text: 'Социальные сети: короткие вирусные видео для TikTok, Instagram Reels, YouTube Shorts' },
                { icon: 'Clapperboard', text: 'Концепт-арт и предвизуализация: быстрая визуализация идей перед началом съемок' },
                { icon: 'Palette', text: 'Креативные эксперименты: сюрреалистические видео, фэнтезийные миры, абстрактные композиции' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={item.icon as any} size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Как получить доступ к Sora</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Одна из главных сложностей при работе с Sora — это ограниченный доступ. Рассмотрим все доступные способы.
          </p>

          <div className="prose prose-invert max-w-none mb-12">
            <h3 className="text-3xl font-bold mb-6">Что такое инвайт-коды (invite codes)</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Инвайт-код</strong> — это специальный код приглашения, который необходимо ввести при регистрации в приложении или на сайте Sora. Без него доступ к генерации видео невозможен. OpenAI использует систему инвайтов, чтобы контролировать нагрузку на серверы и постепенно открывать доступ для новых пользователей.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Каждый пользователь, получивший доступ, может пригласить ограниченное количество друзей, что создает дефицит кодов и активный обмен приглашениями в сообществах.
            </p>
          </div>

          <Card className="p-10 border-2 border-primary bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">🚀 Самый быстрый способ — через наш сервис</h3>
              <p className="text-lg text-muted-foreground">
                Вместо того чтобы неделями ждать в официальной очереди или безуспешно искать коды в Discord, вы можете получить гарантированный доступ к Sora 2 за несколько минут!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-background/50 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h4 className="text-xl font-bold">Вариант 1: Получить инвайт-код</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Перейдите по ссылке: <strong>Получить инвайт-код бесплатно</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Заполните простую форму регистрации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Получите код приглашения на email или в Telegram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Активируйте код на sora.chatgpt.com и начинайте творить!</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary">
                  Получить инвайт-код
                </Button>
              </Card>

              <Card className="p-6 bg-background/50 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h4 className="text-xl font-bold">Вариант 2: Telegram-бот</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Если вы хотите создавать видео еще проще — без регистрации на сайте OpenAI, используйте наш Telegram-бот:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li>🚀 Без VPN и блокировок</li>
                  <li>💰 Первые 3 генерации бесплатно</li>
                  <li>⚡ Быстрая обработка (в 2 раза быстрее официального сайта)</li>
                  <li>🇷🇺 Полная поддержка русского языка</li>
                  <li>📱 Работает на любом устройстве</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent">
                  <Icon name="Send" size={18} className="mr-2" />
                  Попробовать Telegram-бот прямо сейчас
                </Button>
              </Card>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Как пользоваться Sora</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            После получения доступа вам нужно разобраться в интерфейсе и функциях нейросети.
          </p>

          <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold mb-6">Пошаговая инструкция: регистрация, активация инвайта, ввод промпта</h3>
            
            <div className="space-y-6">
              {[
                {
                  step: 'Шаг 1: Регистрация',
                  items: ['Откройте sora.com или sora.chatgpt.com', 'Войдите через существующий аккаунт OpenAI или создайте новый', 'Укажите дату рождения для настройки возрастных ограничений']
                },
                {
                  step: 'Шаг 2: Активация инвайт-кода',
                  items: ['В приложении или на сайте вам предложат ввести код приглашения', 'Введите полученный инвайт-код и подтвердите', 'После успешной активации вы получите доступ к панели генерации']
                },
                {
                  step: 'Шаг 3: Настройка профиля',
                  items: ['Выберите имя пользователя', 'Добавьте аватар (опционально)', 'Настройте параметры приватности']
                },
                {
                  step: 'Шаг 4: Создание первого видео',
                  items: ['На главном экране найдите поле для ввода текстового описания (промпта)', 'Опишите желаемую сцену подробно и ясно', 'Выберите параметры: длительность (5, 10, 15, 20 сек), разрешение (480p, 720p, 1080p), соотношение сторон (16:9, 9:16, 1:1)', 'Нажмите "Generate" и дождитесь обработки (обычно 2-5 минут)']
                },
                {
                  step: 'Шаг 5: Просмотр и редактирование',
                  items: ['После генерации видео появится в вашей ленте', 'Вы можете скачать его, отредактировать, создать вариацию или поделиться в сообществе Sora']
                }
              ].map((section, i) => (
                <div key={i} className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-bold mb-3">{section.step}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <h3 className="text-3xl font-bold mb-6">Примеры хороших промптов для Sora</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Качество результата напрямую зависит от качества промпта. Вот несколько рекомендаций:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={20} className="text-primary" />
                Правила создания промптов
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    1
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Детализируйте:</strong>
                    <p className="text-xs">Плохо: "Кот идёт"</p>
                    <p className="text-xs text-primary">Хорошо: "Рыжий пушистый кот медленно идет по деревянному мосту на закате, вокруг летают светлячки"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    2
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Указывайте стиль:</strong>
                    <p className="text-xs">Кинематографический, анимационный, фотореалистичный, акварельный, киберпанк и т.д.</p>
                    <p className="text-xs text-primary italic mt-1">"Футуристический город в стиле Blade Runner, неоновые огни, дождь, кинематографическая съёмка"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    3
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Описывайте движение и действия:</strong>
                    <p className="text-xs">"Камера медленно облетает вокруг объекта", "Персонаж бежит к камере", "Плавный переход от крупного плана к общему"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    4
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Используйте эмоции и атмосферу:</strong>
                    <p className="text-xs">"Мистическая атмосфера", "Радостная, яркая сцена", "Мрачный, напряжённый момент"</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-primary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} className="text-secondary" />
                Примеры готовых промптов
              </h4>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
                  <p className="text-muted-foreground italic">"Космонавт в белом скафандре плавает в открытом космосе, на фоне Земли и Солнца, кинематографическая съёмка, 4K качество"</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
                  <p className="text-muted-foreground italic">"Маленькая девочка с воздушными шарами бежит по цветущему лугу, солнечный день, мягкий фокус, стиль студии Pixar"</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
                  <p className="text-muted-foreground italic">"Дракон пролетает над средневековым замком, извергая пламя, эпическая сцена в стиле фэнтези, вечернее освещение"</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 border-primary/20 bg-card/50">
            <h3 className="text-2xl font-bold mb-6">Настройки качества, длительности и разрешения видео</h3>
            <p className="text-muted-foreground mb-6">
              В интерфейсе Sora доступны следующие настройки:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  Длительность
                </h4>
                <p className="text-sm text-muted-foreground">От 5 до 20 секунд (в Sora 2 Pro)</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Monitor" size={18} className="text-primary" />
                  Разрешение
                </h4>
                <p className="text-sm text-muted-foreground">480p, 720p, 1080p</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Maximize" size={18} className="text-primary" />
                  Соотношение сторон
                </h4>
                <p className="text-sm text-muted-foreground">16:9 (горизонтальное), 9:16 (вертикальное для Stories), 1:1 (квадратное)</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Palette" size={18} className="text-primary" />
                  Стиль рендеринга
                </h4>
                <p className="text-sm text-muted-foreground">Фотореалистичный, анимационный, киберпанк, ретро, акварель и другие</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <Icon name="Info" size={16} className="inline text-primary mr-2" />
                Чем выше качество и длительнее видео, тем больше времени займет генерация и тем быстрее расходуется лимит бесплатных генераций.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Где скачать и установить Sora</h2>

          <div className="prose prose-invert max-w-none mb-12">
            <h3 className="text-3xl font-bold mb-6">Sora официальный сайт</h3>
            <ul className="text-lg text-muted-foreground space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="Globe" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Главная страница нейросети: <strong className="text-foreground">openai.com/sora</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Globe" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Веб-версия для генерации: <strong className="text-foreground">sora.chatgpt.com</strong> или <strong className="text-foreground">sora.com</strong></span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Именно через эти адреса осуществляется доступ к Sora в браузере. Здесь вы можете регистрироваться, вводить инвайт-коды и создавать видео без необходимости устанавливать приложение.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-6">Версии для Android, iPhone, Windows, macOS</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Apple" size={32} className="text-primary" />
                <h4 className="text-xl font-bold">iOS (iPhone и iPad)</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Официальное приложение "Sora by OpenAI" доступно в App Store</li>
                <li>• <strong className="text-foreground">Требования:</strong> iOS 18.0 и выше</li>
                <li>• Приложение полностью бесплатное, но требует инвайт-кода для активации</li>
              </ul>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Smartphone" size={32} className="text-secondary" />
                <h4 className="text-xl font-bold">Android</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Мобильное приложение доступно для предварительной регистрации в Google Play</li>
                <li>• <strong className="text-foreground">Требования:</strong> Android 7.1 и выше</li>
                <li>• На момент написания статьи полный функционал доступен не во всех регионах</li>
              </ul>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Monitor" size={32} className="text-accent" />
                <h4 className="text-xl font-bold">Windows и macOS</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Нативного десктопного приложения для компьютеров пока нет. Пользователи Windows и macOS могут работать с Sora через веб-версию <strong className="text-foreground">sora.chatgpt.com</strong> в любом современном браузере (Chrome, Firefox, Safari, Edge).
              </p>
            </Card>
          </div>

          <h3 className="text-3xl font-bold mb-6">Где скачать официально и безопасно</h3>

          <Card className="p-8 mb-8 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <h4 className="font-bold text-lg mb-4 text-green-400 flex items-center gap-2">
              <Icon name="Shield" size={24} />
              ✅ Всегда используйте только официальные источники:
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>App Store (для iOS)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Google Play (для Android)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Официальный сайт openai.com/sora</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 border-red-500/30 bg-red-500/5 mb-12">
            <div className="flex items-start gap-4">
              <Icon name="AlertTriangle" size={32} className="text-red-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-3 text-red-400">❌ Никогда не скачивайте Sora из:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Сторонних сайтов с APK-файлами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Telegram-каналов, предлагающих "взломанные" версии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Неофициальных магазинов приложений</span>
                  </li>
                </ul>
                <p className="text-red-400 mt-4 font-bold">
                  Использование неофициальных версий грозит утечкой ваших данных, вирусами и блокировкой аккаунта OpenAI.
                </p>
              </div>
            </div>
          </Card>

          <h3 className="text-3xl font-bold mb-6">Разница между официальной и взломанной версией</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
              <h4 className="font-bold text-lg mb-4 text-green-400">✅ Официальная версия</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Безопасна и защищена</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Регулярные обновления и новые функции</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Техническая поддержка от OpenAI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Легальное использование контента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Стабильная работа</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
              <h4 className="font-bold text-lg mb-4 text-red-400">❌ "Взломанная" версия</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Риск вирусов и кражи данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Отсутствие обновлений</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Возможная блокировка аккаунта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Нестабильная работа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Нет технической поддержки</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <p className="text-center font-bold text-lg">
              <Icon name="Info" size={20} className="inline mr-2 text-primary" />
              Вывод: используйте только официальные версии Sora, чтобы защитить свои данные и получать качественный сервис.
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-primary/20 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Заключение</h2>
            <div className="prose prose-invert max-w-3xl mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Нейросеть Sora от OpenAI — это революционная технология, которая делает создание профессиональных видео доступным каждому. Теперь вам не нужны дорогие камеры, актеры или монтажеры — достаточно текстового описания, и искусственный интеллект создаст реалистичное видео за считанные минуты.
              </p>
              <p className="text-lg leading-relaxed mt-4">
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

            <div className="flex gap-6">
              {['Send', 'Mail', 'MessageCircle'].map((social, i) => (
                <Button 
                  key={i}
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full"
                >
                  <Icon name={social as any} size={20} />
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
