# Deploy to Vercel

## Подготовка проекта

Этот проект подготовлен для деплоя на Vercel. Следуйте инструкциям ниже.

## Необходимые шаги перед деплоем

### 1. Настройка базы данных

Проект использует PostgreSQL. Вам нужно:

1. Создать базу данных PostgreSQL (рекомендуется использовать [Neon](https://neon.tech), [Supabase](https://supabase.com) или [Railway](https://railway.app))
2. Получить строку подключения DATABASE_URL

### 2. Настройка переменных окружения в Vercel

В панели управления Vercel добавьте следующие переменные окружения:

- `DATABASE_URL` - строка подключения к PostgreSQL базе данных
- `TELEGRAM_BOT_TOKEN` - токен вашего Telegram бота
- `BOT_NAME` - имя вашего Telegram бота
- `VERCEL_URL` - URL вашего приложения на Vercel (будет доступен после первого деплоя)

### 3. Настройка Telegram Webhook

После деплоя необходимо настроить webhook для Telegram бота:

1. Отправьте POST запрос на endpoint `/api/setWebhook` с вашим Vercel URL
2. Или используйте готовый endpoint после деплоя

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Генерация Prisma клиента
npx prisma generate

# Запуск миграций (локально с SQLite)
npx prisma migrate dev

# Запуск development сервера
npm run dev
```

## Деплой на Vercel

### Вариант 1: Через Vercel CLI

```bash
# Установка Vercel CLI
npm install -g vercel

# Логин в Vercel
vercel login

# Деплой
vercel --prod
```

### Вариант 2: Через GitHub

1. Запушьте код в GitHub репозиторий
2. Подключите репозиторий в панели Vercel
3. Добавьте переменные окружения
4. Vercel автоматически задеплоит проект

## Важные замечания

- Проект использует Next.js 14 с App Router
- API routes работают в serverless режиме
- Prisma настроена для работы с PostgreSQL в production
- Для локальной разработки можно использовать SQLite

## Структура проекта

- `/src/app` - основное приложение Next.js
- `/src/app/api` - API routes
- `/prisma` - схема базы данных и миграции
- `/public` - статические файлы

## Troubleshooting

### Ошибки сборки

Если возникают ошибки при сборке:

```bash
# Очистите кэш
rm -rf .next node_modules

# Переустановите зависимости
npm install

# Перегенерируйте Prisma клиент
npx prisma generate

# Попробуйте собрать снова
npm run build
```

### Ошибки базы данных

Убедитесь, что:
- DATABASE_URL корректен
- База данных доступна из Vercel (не блокируется firewall)
- Миграции применены (`npx prisma migrate deploy`)
