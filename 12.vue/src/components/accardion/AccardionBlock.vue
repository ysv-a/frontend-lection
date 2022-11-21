<script setup>
import { provide, readonly, ref } from 'vue'

// import { useGlobalSpinner } from '../spinner/GlobalSpinnerProvider.vue'
// const { setGlobalSpinnerOn, setGlobalSpinnerOff } = useGlobalSpinner()

// const showSpinner = () => {
//   setGlobalSpinnerOn()
//   setTimeout(() => {
//     setGlobalSpinnerOff()
//   }, 2000)
// }

const index = ref(null)

const setIndex = (id) => {
  index.value = id
}

provide('accordion-setting', {
  index: readonly(index),
  setIndex,
})
</script>
<template>
  <div>
    <!-- <button @click="showSpinner">Show Sinner</button> -->
    <slot />
  </div>
</template>
