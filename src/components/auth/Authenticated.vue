<script setup lang="ts">
const router = useRouter();
const { $appwrite } = useNuxtApp();

const signedIn = ref(false);

try {
    const session = await $appwrite.account.get();

    signedIn.value = !!session?.status;
} catch (error) {
    if (error.code === 401) {
        router.push({ path: '/login' })
    } else {
        console.error(error);
    }
}
</script>

<template>
    <slot v-if="signedIn"></slot>
</template>
