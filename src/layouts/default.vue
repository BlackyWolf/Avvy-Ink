<script setup lang="ts">

</script>

<template>
    <Authenticated>
        <nav class="bg-slate-50 border-b">
            <Container class="flex">
                <ul class="flex items-center space-x-10">
                    <li class="my-2">
                        <Logo class="text-4xl" />
                    </li>
                    <li>
                        <NuxtLink to="/me" class="" active-class="font-semibold">
                            <Icon name="ph:users-three-fill" class="mr-1 text-3xl text-medium-violet-500"></Icon>
                            Avatars
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/me/gallery">
                            <Icon name="ion:ios-images" class="mr-1 text-3xl text-green-500"></Icon>
                            Gallery
                        </NuxtLink>
                    </li>
                </ul>
                <ul class="ml-auto flex">
                    <li class="bg-slate-200 border-x border-x-slate-300 flex items-center">
                        <NuxtLink to="/me/profile" class="p-4">
                            <Icon name="carbon:user-avatar-filled" class="text-3xl text-slate-700"></Icon>
                        </NuxtLink>
                    </li>
                    <li class="bg-slate-800 border-x border-x-slate-300 flex items-center">
                        <NuxtLink to="/me/logout" class="p-4">
                            <Icon name="octicon:sign-out" class="text-3xl text-white"></Icon>
                        </NuxtLink>
                    </li>
                </ul>
            </Container>
        </nav>

        <Container>
            <main class="py-8">
                <slot></slot>
            </main>

            <Footer></Footer>
        </Container>
    </Authenticated>
</template>

<style>
body {
    background: white;
}
</style>
