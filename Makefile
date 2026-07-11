# Makefile для управления Next.js-сервером через PM2

.PHONY: start stop restart status logs dev prod

# Путь к проекту (можно изменить при необходимости)
PROJECT_DIR := .

# Имя процесса в PM2
APP_NAME := leerov-site

# Запуск в режиме разработки (dev)
dev:
	@echo "Starting dev server..."
	cd $(PROJECT_DIR) && pm2 start bun --name $(APP_NAME) -- run dev
	pm2 save

# Запуск в production режиме (предварительно нужно собрать bun run build)
prod:
	@echo "Starting production server..."
	cd $(PROJECT_DIR) && pm2 start bun --name $(APP_NAME) -- run start
	pm2 save

# Остановка сервера
stop:
	@echo "Stopping server..."
	pm2 stop $(APP_NAME)

# Перезапуск сервера
restart:
	@echo "Restarting server..."
	pm2 restart $(APP_NAME) > /dev/null 2>&1 || pm2 start bun --name $(APP_NAME) -- run dev > /dev/null 2>&1
	pm2 save > /dev/null 2>&1

# Статус сервера
status:
	pm2 status $(APP_NAME)

# Логи сервера
logs:
	pm2 logs $(APP_NAME)

# Запуск по умолчанию (dev)
start: dev