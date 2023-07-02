<script setup lang="ts">
withDefaults(defineProps<{
    margin?: boolean;
}>(), {
    margin: true
});
</script>

<template>
    <p :class="{ 'mb-4': margin }">
        <slot></slot>
    </p>
</template>
