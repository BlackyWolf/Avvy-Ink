<script setup lang="ts">
import { AutoComplete } from './AutoComplete';

type InputType = 'text' | 'email' | 'password' | 'datetime-local' | 'number'
    | 'search' | 'tel' | 'time' | 'url' | 'week' | 'month' | 'date';

withDefaults(defineProps<{
    autocomplete?: AutoComplete;
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
    type?: InputType;
}>(), {
    type: 'text'
});
</script>

<template>
    <div>
        <label
            v-if="label" :for="id || name"
            class="block text-sm font-medium leading-6 text-gray-900"
        >
            {{ label }}
        </label>

        <input
            :autocomplete="autocomplete"
            class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-violet-600 sm:text-sm sm:leading-6"
            :id="id || name"
            :name="name"
            :required="required"
            :type="type"
        />
    </div>
</template>
