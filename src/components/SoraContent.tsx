import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const HowToUseSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Как пользоваться Sora</h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        После получения доступа вам нужно разобраться в интерфейсе и функциях нейросети.
      </p>

      <Card className="p-10 mb-12 bg-card/50 border-primary/20">
        <h3 className="text-3xl font-bold mb-8">Пошаговая инструкция: регистрация, активация инвайта, ввод промпта</h3>
        
        <div className="space-y-8">
          {[
            {
              title: 'Шаг 1: Регистрация',
              steps: [
                'Откройте sora.com или sora.chatgpt.com',
                'Войдите через существующий аккаунт OpenAI или создайте новый',
                'Укажите дату рождения для настройки возрастных ограничений'
              ]
            },
            {
              title: 'Шаг 2: Активация инвайт-кода',
              steps: [
                'В приложении или на сайте вам предложат ввести код приглашения',
                'Введите полученный инвайт-код и подтвердите',
                'После успешной активации вы получите доступ к панели генерации'
              ]
            },
            {
              title: 'Шаг 3: Настройка профиля',
              steps: [
                'Выберите имя пользователя',
                'Добавьте аватар (опционально)',
                'Настройте параметры приватности'
              ]
            },
            {
              title: 'Шаг 4: Создание первого видео',
              steps: [
                'На главном экране найдите поле для ввода текстового описания (промпта)',
                'Опишите желаемую сцену подробно и ясно',
                'Выберите параметры: длительность (5, 10, 15, 20 сек), разрешение (480p, 720p, 1080p), соотношение сторон (16:9, 9:16, 1:1)',
                'Нажмите "Generate" и дождитесь обработки (обычно 2-5 минут)'
              ]
            },
            {
              title: 'Шаг 5: Просмотр и редактирование',
              steps: [
                'После генерации видео появится в вашей ленте',
                'Вы можете скачать его, отредактировать, создать вариацию или поделиться в сообществе Sora'
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="relative pl-8 border-l-4 border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Icon name="Circle" size={8} className="text-primary mt-2 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Lightbulb" size={28} className="text-primary" />
            Примеры хороших промптов для Sora
          </h3>
          <p className="text-muted-foreground mb-6">
            Качество результата напрямую зависит от качества промпта. Вот несколько рекомендаций:
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">1</span>
                Детализируйте:
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Чем подробнее описание, тем лучше результат.</p>
              <div className="pl-4 space-y-1">
                <p className="text-sm text-red-400">❌ Плохо: "Кот идёт"</p>
                <p className="text-sm text-green-400">✅ Хорошо: "Рыжий пушистый кот медленно идет по деревянному мосту на закате, вокруг летают светлячки"</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">2</span>
                Указывайте стиль:
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Кинематографический, анимационный, фотореалистичный, акварельный, киберпанк и т.д.</p>
              <div className="p-3 bg-background/50 rounded-lg border border-primary/10">
                <p className="text-sm text-primary italic">"Футуристический город в стиле Blade Runner, неоновые огни, дождь, кинематографическая съёмка"</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">3</span>
                Описывайте движение и действия:
              </h4>
              <p className="text-sm text-muted-foreground">"Камера медленно облетает вокруг объекта", "Персонаж бежит к камере", "Плавный переход от крупного плана к общему"</p>
            </div>

            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">4</span>
                Используйте эмоции и атмосферу:
              </h4>
              <p className="text-sm text-muted-foreground">"Мистическая атмосфера", "Радостная, яркая сцена", "Мрачный, напряжённый момент"</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Sparkles" size={28} className="text-secondary" />
            Примеры готовых промптов:
          </h3>
          
          <div className="space-y-4">
            {[
              '"Космонавт в белом скафандре плавает в открытом космосе, на фоне Земли и Солнца, кинематографическая съёмка, 4K качество"',
              '"Маленькая девочка с воздушными шарами бежит по цветущему лугу, солнечный день, мягкий фокус, стиль студии Pixar"',
              '"Дракон пролетает над средневековым замком, извергая пламя, эпическая сцена в стиле фэнтези, вечернее освещение"'
            ].map((prompt, i) => (
              <div key={i} className="p-4 bg-background/50 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground italic">{prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-card/50 border-primary/20">
        <h3 className="text-2xl font-bold mb-6">Настройки качества, длительности и разрешения видео</h3>
        <p className="text-muted-foreground mb-6">
          В интерфейсе Sora доступны следующие настройки:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'Clock',
              title: 'Длительность',
              desc: 'От 5 до 20 секунд (в Sora 2 Pro)'
            },
            {
              icon: 'Monitor',
              title: 'Разрешение',
              desc: '480p, 720p, 1080p'
            },
            {
              icon: 'Maximize',
              title: 'Соотношение сторон',
              desc: '16:9 (горизонтальное), 9:16 (вертикальное для Stories и Reels), 1:1 (квадратное)'
            },
            {
              icon: 'Palette',
              title: 'Стиль рендеринга',
              desc: 'Фотореалистичный, анимационный, киберпанк, ретро, акварель и другие'
            },
            {
              icon: 'Droplet',
              title: 'Наличие водяного знака',
              desc: 'В бесплатной версии водяной знак присутствует, в Pro-версии можно отключить'
            }
          ].map((setting, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-background/30 rounded-lg">
              <Icon name={setting.icon as any} size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">{setting.title}</h4>
                <p className="text-sm text-muted-foreground">{setting.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <Icon name="Info" size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <span>Чем выше качество и длительнее видео, тем больше времени займет генерация и тем быстрее расходуется лимит бесплатных генераций.</span>
          </p>
        </div>
      </Card>
    </div>
  </section>
);

export default HowToUseSection;
