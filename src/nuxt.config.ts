// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.css'
    ],
    components: [
        { path: '~/components', pathPrefix: false }
    ],
    devtools: { enabled: true },
    experimental: {
        componentIslands: true
    },
    modules: ['nuxt-icon'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            appwriteEndpoint: '',
            appwriteProjectId: ''
        }
    }
});
