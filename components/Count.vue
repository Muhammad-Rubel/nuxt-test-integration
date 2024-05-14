<template>
  <div>
    <p data-test-id="count-num">{{ $store.count }}</p>

    <button data-test-id="increment" @click="increment">Count Increment</button>

    <div data-test-id="lottie-container" class="px-10">
      <client-only>
        <Vue3Lottie
          :animationData="ForgotPasswordLottie"
          width="25%"
          :loop="true"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index';
import { Vue3Lottie } from 'vue3-lottie';
import ForgotPasswordLottie from '@/assets/lottie/forgot-password.json';

const $store = useStore();

const increment = () => {
  $store.increment();
};
</script>

<style scoped></style>
