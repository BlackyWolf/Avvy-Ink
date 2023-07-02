<script setup lang="ts">
type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6';

defineProps<{
    bold?: boolean;
    center?: boolean;
    size: HeadingSize;
}>();
</script>

<template>
    <h1
        v-bind="$attrs" v-if="size === '1'"
        class="text-6xl font-semibold mb-6"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h1>

    <h2
        v-bind="$attrs" v-if="size === '2'"
        class="text-5xl font-semibold mb-6"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h2>

    <h3
        v-bind="$attrs" v-if="size === '3'"
        class="text-4xl font-semibold mb-4"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h3>

    <h4
        v-bind="$attrs" v-if="size === '4'"
        class="text-3xl font-semibold mb-4"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h4>

    <h5
        v-bind="$attrs" v-if="size === '5'"
        class="text-2xl font-semibold mb-2"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h5>

    <h6
        v-bind="$attrs" v-if="size === '6'"
        class="text-lg font-semibold mb-1"
        :class="{ 'font-extrabold': bold, 'flex items-center': center }"
    >
        <slot></slot>
    </h6>
</template>
