<script>
import { ref, watch } from 'vue'
// import { getPostComments } from '@/api/PostRequest'
import { useFetch } from '@/use/useFetch'

export default {
  name: 'CompositionApiExampleComments',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    handleRemovePost: null,
    handleChangeId: null,
  },
  setup(props, { emit }) {
    console.log(props.id)

    // const comments = ref(null)

    const { data: comments, error, isLoading, startRequest } = useFetch()

    watch(
      () => props.id,
      (newId) => {
        startRequest(
          `https://jsonplaceholder.typicode.com/posts/${newId}/comments`,
        )
        // getPostComments(newId).then((response) => (comments.value = response))
      },
    )

    const remove = (id) => {
      emit('handleRemovePost', id)
      comments.value = null
    }

    return {
      remove,
      comments,
    }
  },
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
