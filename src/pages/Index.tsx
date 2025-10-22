import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sora — нейросеть для создания видео от OpenAI: как получить доступ и пользоваться
          </h1>

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
        </article>
      </div>
    </div>
  );
};

export default Index;