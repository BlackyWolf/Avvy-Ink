<script setup lang="ts">

</script>

<template>
    <div class="relative hero rounded-xl p-32 shadow">
        <slot></slot>
    </div>
</template>

<style scoped>
.hero {
    background: linear-gradient(45deg, #7151cb 50%, #ffffff 50%);
}
</style>
