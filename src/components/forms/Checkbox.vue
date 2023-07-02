<script setup lang="ts">
type InputType = 'text' | 'email' | 'password' | 'datetime-local' | 'number'
    | 'search' | 'tel' | 'time' | 'url' | 'week' | 'month' | 'date';

withDefaults(defineProps<{
    id?: string;
    label: string;
    name: string;
    required?: boolean;
    type?: InputType;
}>(), {
    type: 'text'
});
</script>

<template>
    <div class="flex items-center">
        <input
            class="h-4 w-4 rounded border-gray-300 text-medium-violet-600 focus:ring-medium-violet-600"
            :id="id || name"
            :name="name"
            type="checkbox"
        />

        <label :for="id || name" class="ml-3 block text-sm leading-6 text-gray-700">
            {{ label }}
        </label>
    </div>
</template>
