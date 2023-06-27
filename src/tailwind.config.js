/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue'
    ],
    plugins: [],
    theme: {
        extend: {
            backgroundImage: {
                noisy: 'url(./assets/images/styles/noise-white-5.png)'
            },
            colors: {
                'medium-violet': {
                    50: '#f9f7fd',
                    100: '#e0d9f4',
                    200: '#af9de2',
                    300: '#967ed9',
                    400: '#8a6fd4',
                    500: '#7151cb',
                    600: '#6542c6',
                    700: '#5434ad',
                    800: '#4c2f9e',
                    900: '#372271'
                }
            },
            fontFamily: {
                'crimson-pro': ['Crimson Pro', 'serif'],
                inter: ['Inter', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
                raleway: ['Raleway', 'sans-serif']
            }
        }
    }
};

