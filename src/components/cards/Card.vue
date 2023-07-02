<script setup lang="ts">
withDefaults(defineProps<{
    pad?: boolean;
}>(), {
    pad: true
});
</script>

<template>
    <div class="bg-white shadow rounded-xl">
        <div>
            <slot name="header"></slot>
        </div>
        <div :class="{ 'p-8': pad }">
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
