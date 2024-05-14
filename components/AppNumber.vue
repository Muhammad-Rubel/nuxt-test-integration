<template>
  <div>
    <p>Number: {{ num }}</p>

    <p data-test-id="route-path">{{ $route.fullPath }}</p>

    <button @click="refreshNum">Refresh</button>
  </div>
</template>

<script setup lang="ts">
const $route = useRoute();

const num = ref(Math.random());

const refreshNum = () => {
  num.value = Math.random();
};
</script>

<style scoped></style>
