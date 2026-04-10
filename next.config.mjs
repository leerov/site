// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	// Другие настройки

	// Добавьте настройку для разрешенных доменов изображений
	images: {
		domains: ['api.telegram.org'],
	},
}

export default nextConfig
