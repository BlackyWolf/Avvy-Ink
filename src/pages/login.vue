<script setup lang="ts">
definePageMeta({
    layout: 'login'
});
</script>

<template>
    <div class="flex min-h-full flex-1">
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <Logo class="text-4xl" />

                <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>

                <p class="mt-2 text-sm leading-6 text-gray-500">
                    Not a member?{{ ' ' }}
                    <a href="#" class="font-semibold text-medium-violet-600 hover:text-medium-violet-500">
                        Start a 14 day free trial
                    </a>
                </p>

                <form action="/api/account/login" method="POST" class="space-y-6 mt-10">
                    <Input name="email" label="Email" type="email" autocomplete="email" required />
                    <Input name="password" label="Password" type="password" autocomplete="current-password" required />

                    <div class="flex items-center justify-between">
                        <Checkbox name="rememberMe" label="Remember me" />

                        <NuxtLink to="/reset-password" class="font-semibold text-medium-violet-600 hover:text-medium-violet-500 text-sm leading-6">
                            Forgot password?
                        </NuxtLink>
                    </div>

                    <Button color="medium-violet" type="submit" full>
                        Sign in
                    </Button>
                </form>

                <div class="mt-10">
                    <Divider title="Or continue with" />

                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <Button color="blue">
                            <Icon name="fa6-brands:twitter" class="text-xl"></Icon>

                            <span class="text-sm font-semibold ml-2">Twitter</span>
                        </Button>
                        <Button color="dark-gray">
                            <Icon name="fa6-brands:github" class="text-xl"></Icon>

                            <span class="text-sm font-semibold ml-2">GitHub</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="~/assets/images/backgrounds/pexels-pavel-danilyuk-6593532-login-bg.jpg"
                alt="Pavel Daniluk"
            />

            <span class="absolute text-white bottom-0 right-0 mr-8 mb-4">
                from Pexels by <span class="font-semibold">Pavel Danilyuk</span>
            </span>
        </div>
    </div>
</template>
