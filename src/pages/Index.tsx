import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activePlan, setActivePlan] = useState<string>('pro');

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Революция в создании видео</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              SORA AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Создавайте потрясающие видео из текста с помощью передовой нейросети от OpenAI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 rounded-2xl">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 rounded-2xl">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности Sora</h2>
            <p className="text-muted-foreground text-lg">
              Безграничный творческий потенциал на кончиках ваших пальцев
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Video',
                title: 'Генерация из текста',
                description: 'Превращайте текстовые описания в профессиональные видео за секунды',
                gradient: 'from-primary to-secondary'
              },
              {
                icon: 'Wand2',
                title: 'Реалистичные сцены',
                description: 'Создавайте фотореалистичные видео с детализированными объектами и персонажами',
                gradient: 'from-secondary to-accent'
              },
              {
                icon: 'Zap',
                title: 'Молниеносная скорость',
                description: 'Получайте готовые видео в высоком разрешении за считанные минуты',
                gradient: 'from-accent to-primary'
              },
              {
                icon: 'Layers',
                title: 'Множество стилей',
                description: 'От кинематографа до анимации — любой визуальный стиль на выбор',
                gradient: 'from-primary to-accent'
              },
              {
                icon: 'Settings',
                title: 'Точный контроль',
                description: 'Управляйте камерой, освещением и композицией сцены',
                gradient: 'from-secondary to-primary'
              },
              {
                icon: 'Brain',
                title: 'AI обучение',
                description: 'Нейросеть постоянно улучшается и понимает ваши запросы лучше',
                gradient: 'from-accent to-secondary'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group hover:border-primary/40 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-muted-foreground text-lg">
              Выберите план, который подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '990₽',
                period: 'в месяц',
                features: [
                  '10 видео в месяц',
                  'До 5 секунд',
                  '720p разрешение',
                  'Базовые стили',
                  'Email поддержка'
                ],
                popular: false
              },
              {
                name: 'Pro',
                price: '2990₽',
                period: 'в месяц',
                features: [
                  '50 видео в месяц',
                  'До 30 секунд',
                  '1080p разрешение',
                  'Все стили',
                  'Приоритетная поддержка',
                  'Коммерческое использование'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'свяжитесь с нами',
                features: [
                  'Безлимитные видео',
                  'До 60 секунд',
                  '4K разрешение',
                  'API доступ',
                  'Выделенный менеджер',
                  'Кастомные модели'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-secondary/10 scale-105' 
                    : 'border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-full">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-xl ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : 'bg-primary/10 hover:bg-primary/20 text-primary'
                  }`}
                  size="lg"
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на самые частые вопросы о Sora AI
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Что такое Sora AI?',
                answer: 'Sora — это революционная нейросеть от OpenAI, которая создает реалистичные видео на основе текстовых описаний. Она использует передовые технологии машинного обучения для генерации высококачественного видеоконтента.'
              },
              {
                question: 'Как долго генерируется видео?',
                answer: 'Время генерации зависит от длины и сложности видео. Обычно видео длительностью 5-10 секунд создается за 2-3 минуты, а более длинные ролики могут занять до 10-15 минут.'
              },
              {
                question: 'Могу ли я использовать видео в коммерческих целях?',
                answer: 'Да, при подписке на план Pro или Enterprise вы получаете полные права на коммерческое использование созданных видео. План Starter предназначен только для личного использования.'
              },
              {
                question: 'Какие форматы видео поддерживаются?',
                answer: 'Sora генерирует видео в формате MP4 с кодеком H.264, что обеспечивает максимальную совместимость с большинством платформ и устройств.'
              },
              {
                question: 'Есть ли ограничения на контент?',
                answer: 'Да, мы запрещаем генерацию контента, содержащего насилие, дискриминацию, дезинформацию или нарушающего авторские права. Наша система модерации автоматически проверяет все запросы.'
              },
              {
                question: 'Можно ли редактировать сгенерированное видео?',
                answer: 'В данный момент прямое редактирование в интерфейсе не поддерживается, но вы можете скачать видео и отредактировать его в любом видеоредакторе. Функция редактирования появится в будущих обновлениях.'
              }
            ].map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-xl px-6 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                SORA AI
              </h3>
              <p className="text-muted-foreground text-sm">
                Будущее создания видео уже здесь
              </p>
            </div>

            <div className="flex gap-6">
              {['Twitter', 'Github', 'Mail'].map((social, i) => (
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
            © 2024 Sora AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
