<script setup>
import GlobalSpinnerProvider from './components/spinner/GlobalSpinnerProvider.vue'
</script>
<template>
  <GlobalSpinnerProvider>
    <router-view />
  </GlobalSpinnerProvider>
</template>
