<script setup lang="ts">
const properties = withDefaults(defineProps<{
    margin?: boolean;
}>(), {
    margin: true
});
</script>

<template>
    <p :class="{ 'mb-4': properties.margin }">
        <slot></slot>
    </p>
</template>
