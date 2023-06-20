/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [
        '@tailwindcss/forms'
    ],
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
