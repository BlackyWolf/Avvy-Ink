<template>
    <Container class="my-12">
        <nav class="flex items-center space-x-10 pt-4 nav">
            <NuxtLink to="/" class="branding">
                <Logo class="text-4xl" />
            </NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="https://us.avvy.ink" target="_blank">
                Community<Icon name="ph:arrow-line-up-right"></Icon>
            </NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>

            <NuxtLink to="/me" class="!ml-auto login">
                <Button color="indigo">Enter App</Button>
            </NuxtLink>
        </nav>

        <main class="py-8">
            <slot></slot>
        </main>

        <footer class="text-sm mt-4 flex justify-between">
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
    </Container>
</template>

<style>
body {
    @apply bg-slate-200 bg-noisy;
}

.nav a {
    @apply border-b-2 border-transparent hover:border-b-slate-400 py-1 px-1;
}

.nav .branding {
    @apply px-0 hover:border-b-transparent;
}

.nav .login {
    @apply hover:border-b-transparent;
}
</style>
