<script setup lang="ts">
type ButtonColor = 'amber' | 'black' | 'blue' | 'cyan' | 'dark-gray' | 'emerald' | 'fuchsia' | 'gray'
    | 'green' | 'indigo' | 'lime' | 'medium-violet' | 'neutral' | 'orange' | 'pink'
    | 'purple' | 'red' | 'rose' | 'sky' | 'slate' | 'stone' | 'teal' | 'violet'
    | 'yellow' | 'zinc';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const properties = withDefaults(defineProps<{
    color: ButtonColor;
    full?: boolean;
    light?: boolean;
    outline?: boolean;
    size?: ButtonSize;
}>(), {
    full: false,
    light: false,
    outline: false,
    size: 'md'
});

function getColor(color: ButtonColor, light: boolean, outline: boolean) {
    if (outline) {
        switch (color) {
            case 'blue': return 'text-blue-700 hover:text-white hover:bg-blue-500 border border-blue-500';
            case 'dark-gray': return 'text-gray-900 hover:text-white hover:bg-stone-700 border border-stone-800';
            case 'indigo': return 'text-indigo-700 hover:text-white hover:bg-indigo-500 border border-indigo-500';
            case 'medium-violet': return 'text-medium-violet-700 hover:text-white hover:bg-medium-violet-500 border border-medium-violet-500';
        }
    }

    if (light) {
        switch (color) {
            case 'blue': return 'text-blue-900 bg-blue-200 hover:bg-blue-300';
            case 'dark-gray': return 'text-stone-900 bg-stone-400 hover:bg-stone-500';
            case 'indigo': return 'text-indigo-900 bg-indigo-200 hover:bg-indigo-300';
            case 'medium-violet': return 'text-medium-violet-900 bg-medium-violet-200 hover:bg-medium-violet-300';
        }
    }

    switch (color) {
        case 'blue': return 'text-white bg-blue-500 hover:bg-blue-600';
        case 'dark-gray': return 'text-white bg-stone-800 hover:bg-stone-700';
        case 'indigo': return 'text-white bg-indigo-500 hover:bg-indigo-600';
        case 'medium-violet': return 'text-white bg-medium-violet-500 hover:bg-medium-violet-600';
    }
}

function getSize(size: ButtonSize) {
    switch (size) {
        case 'xs': return 'px-2 py-1 text-xs';
        case 'sm': return 'px-2 py-1 text-sm';
        case 'md': return 'px-4 py-2 text-sm';
        case 'lg': return 'px-4 py-2 text-base';
        case 'xl': return 'px-6 py-3 text-base';
    }
}

const css = joinCss(
    'font-semibold rounded-md transition duration-150 flex items-center justify-center',
    properties.full ? 'w-full' : undefined,
    getColor(properties.color, properties.light, properties.outline),
    getSize(properties.size)
);
</script>

<template>
    <button :class="css">
        <slot></slot>
    </button>
</template>
