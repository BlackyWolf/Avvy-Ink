<template>
    <div class="container mx-auto">
        <nav class="flex items-center space-x-10 py-2 nav">
            <NuxtLink to="/" class="branding">
                <BrandingLogo class="text-4xl" />
            </NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="#about">About</NuxtLink>
            <NuxtLink to="#pricing">Pricing</NuxtLink>
            <NuxtLink to="https://us.avvy.ink" target="_blank">Community</NuxtLink>
            <NuxtLink to="#contact">Contact</NuxtLink>
        </nav>

        <main class="py-8">
            <slot />
        </main>

        <footer class="text-sm py-4 flex justify-between">
            Copyright &copy; Avvy Ink. All rights reserved.

            <div class="space-x-10">
                <NuxtLink to="/docs/tos" class="underline hover:no-underline" target="_blank">
                    Terms of Services
                </NuxtLink>
                <NuxtLink to="/docs/privacy" class="underline hover:no-underline" target="_blank">
                    Privacy Policy
                </NuxtLink>
            </div>
        </footer>
    </div>
</template>

<style>
body {
    @apply bg-slate-100;
}

.nav a {
    @apply border-b-2 border-transparent hover:border-b-slate-400 py-1 px-1;
}

.nav .branding {
    @apply px-0 hover:border-b-transparent;
}
</style>
