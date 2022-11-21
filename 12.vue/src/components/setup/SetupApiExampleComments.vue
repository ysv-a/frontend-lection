<script setup>
import { watch } from 'vue'

import { useFetch } from '@/use/useFetch'

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits({
  handleRemovePost: null,
  handleChangeId: null,
})

const { data: comments, error, isLoading, startRequest } = useFetch()

watch(
  () => props.id,
  (newId) => {
    startRequest(`https://jsonplaceholder.typicode.com/posts/${newId}/comments`)
  },
)

function remove(id) {
  emit('handleRemovePost', id)
  comments.value = null
}
</script>
<template>
  <div>
    <h2>Post Id: {{ id }}</h2>
    <div class="mt-10">
      <ul class="list-disc space-y-1">
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.body }}
        </li>
      </ul>
    </div>
    <div v-if="id" class="mt-10">
      <button class="p-5 bg-black text-white" @click="remove(id)">
        REMOVE POST
      </button>
    </div>
  </div>
</template>
