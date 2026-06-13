/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Включает статический экспорт
  images: {
    unoptimized: true, // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // Замени 'lishnie-ruki' на название твоего репозитория, если оно другое
  basePath: '/lishnie-ruki', 
  assetPrefix: '/lishnie-ruki/',
};

module.exports = nextConfig;