# Leerov - Next.js Application

Современное веб-приложение на Next.js 14 с интеграцией Telegram бота.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Настройка окружения

Скопируйте файл `.env.example` в `.env` и заполните переменные:

```bash
cp .env.example .env
```

### Локальная разработка

```bash
# Генерация Prisma клиента
npx prisma generate

# Запуск development сервера
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## 📦 Деплой на Vercel

Этот проект полностью готов к деплою на Vercel.

### Шаг 1: Подготовка базы данных

Проект использует PostgreSQL. Создайте базу данных в одном из сервисов:
- [Neon](https://neon.tech) (рекомендуется)
- [Supabase](https://supabase.com)
- [Railway](https://railway.app)
- [Vercel Postgres](https://vercel.com/postgres)

Получите строку подключения `DATABASE_URL`.

### Шаг 2: Настройка переменных окружения в Vercel

В панели управления Vercel добавьте:

| Переменная | Описание |
|------------|----------|
| `DATABASE_URL` | Строка подключения к PostgreSQL |
| `TELEGRAM_BOT_TOKEN` | Токен Telegram бота от @BotFather |
| `BOT_NAME` | Имя вашего Telegram бота |
| `VERCEL_URL` | URL приложения (заполняется после первого деплоя) |

### Шаг 3: Деплой

#### Вариант A: Через GitHub (рекомендуется)

1. Запушьте код в GitHub репозиторий
2. В панели Vercel нажмите "Add New Project"
3. Импортируйте ваш репозиторий
4. Добавьте переменные окружения
5. Нажмите "Deploy"

#### Вариант B: Через Vercel CLI

```bash
# Установка Vercel CLI
npm install -g vercel

# Логин
vercel login

# Деплой
vercel --prod
```

### Шаг 4: Настройка Telegram Webhook

После деплоя настройте webhook для получения обновлений от Telegram:

```bash
curl -X POST https://your-app.vercel.app/api/setWebhook
```

Или отправьте POST запрос через любой HTTP клиент на endpoint `/api/setWebhook`.

## 🛠 Технологии

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Styling**: SCSS
- **Animations**: Framer Motion
- **Bot Integration**: Telegraf
- **Hosting**: Vercel

## 📁 Структура проекта

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   │   ├── telegramBot/  # Webhook handler
│   │   │   └── setWebhook/   # Webhook setup
│   │   └── [pages]/      # Страницы приложения
│   ├── service/          # Бизнес-логика
│   └── ui/               # UI компоненты
├── prisma/
│   └── schema.prisma     # Схема базы данных
├── public/               # Статические файлы
└── vercel.json           # Конфигурация Vercel
```

## 🔧 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск development сервера |
| `npm run build` | Сборка проекта |
| `npm run start` | Запуск production сервера |
| `npm run lint` | Проверка кода ESLint |
| `npx prisma generate` | Генерация Prisma клиента |
| `npx prisma migrate dev` | Создание и применение миграций |
| `npx prisma migrate deploy` | Применение миграций в production |

## ⚙️ Конфигурация Vercel

Файл `vercel.json` содержит настройки для деплоя:

```json
{
  "buildCommand": "npx prisma generate && next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## 🔐 Безопасность

- Не коммитьте файл `.env` в репозиторий
- Используйте `.env.example` как шаблон
- Храните токены и секреты в Vercel Environment Variables

## 📝 Лицензия

MIT License

## 🤝 Поддержка

Для вопросов и предложений создавайте Issues в репозитории.
