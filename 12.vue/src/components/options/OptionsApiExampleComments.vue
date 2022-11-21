<script>
import { getPostComments } from '@/api/PostRequest'

export default {
  name: 'OptionsApiExampleComments',
  //   inheritAttrs: false,
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
  data() {
    return {
      comments: null,
    }
  },
  computed: {
    postId: {
      get() {
        return this.id
      },
      set(newValue) {
        this.$emit('handleChangeId', newValue)
      },
    },
  },
  watch: {
    id(newId, oldId) {
      getPostComments(newId).then((comments) => (this.comments = comments))
    },

    // id: {
    //   handler(newId, oldId) {},
    //   deep: true,
    //   immediate: true
    // }
  },
  created() {
    console.log(this.id)
  },
  methods: {
    remove(id) {
      this.$emit('handleRemovePost', id)
      this.comments = null
      //   this.id = 0
      this.postId = 0
    },
  },
}
</script>
<template>
  <div>
    <h2>Post Id: {{ id }}</h2>
    <!-- v-bind="$attrs" -->
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
