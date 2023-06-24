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
            fontFamily: {
                'crimson-pro': ['Crimson Pro', 'serif'],
                inter: ['Inter', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
                raleway: ['Raleway', 'sans-serif']
            }
        }
    }
};

