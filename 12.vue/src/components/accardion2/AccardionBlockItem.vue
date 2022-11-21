<script setup>
import { ref } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: '',
    requred: true,
  },
})

const show = ref(false)

function toggle() {
  show.value = !show.value
}
</script>
<template>
  <div>
    <button
      class="p-5 border text-lg my-1 w-full text-left font-bold"
      @click="toggle"
    >
      {{ header }}
    </button>
    <div :class="{ hidden: !show }">
      <div class="p-5 text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
