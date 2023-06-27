<script setup lang="ts">
type ButtonColor = 'amber' | 'black' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'gray'
    | 'green' | 'indigo' | 'lime' | 'medium-violet' | 'neutral' | 'orange' | 'pink'
    | 'purple' | 'red' | 'rose' | 'sky' | 'slate' | 'stone' | 'teal' | 'violet'
    | 'yellow' | 'zinc';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const properties = withDefaults(defineProps<{
    color: ButtonColor;
    light?: boolean;
    outline?: boolean;
    size?: ButtonSize;
}>(), {
    size: 'md'
});

function getColor(color: ButtonColor, light: boolean, outline: boolean) {
    if (outline) {
        switch (color) {
            case 'indigo': return 'text-indigo-700 hover:text-white hover:bg-indigo-500 border border-indigo-500';
        }
    }

    if (light) {
        switch (color) {
            case 'indigo': return 'text-indigo-900 bg-indigo-200 hover:bg-indigo-300';
        }
    }

    switch (color) {
        case 'indigo': return 'text-white bg-indigo-500 hover:bg-indigo-600';
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
    'font-semibold rounded-md transition duration-150',
    getColor(properties.color, properties.light, properties.outline),
    getSize(properties.size)
);
</script>

<template>
    <button
        :class="css"
    >
        <slot></slot>
    </button>
</template>
