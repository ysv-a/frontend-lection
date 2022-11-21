<script setup>
import { inject } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: '',
    requred: true,
  },
  idKey: {
    type: Number,
    default: 0,
    requred: true,
  },
})

const { index, setIndex } = inject('accordion-setting')
</script>
<template>
  <div>
    <button
      class="p-5 border text-lg my-1 w-full text-left font-bold"
      @click="setIndex(idKey)"
    >
      {{ header }}
    </button>
    <div :class="{ hidden: index !== idKey }">
      <div class="p-5 text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
