<script>
import OptionsApiExampleComments from './OptionsApiExampleComments.vue'
import { getPosts } from '@/api/PostRequest'

function capitalize(name) {
  console.log(name)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default {
  name: 'OptionsApiExample',
  components: { OptionsApiExampleComments },
  data() {
    return {
      posts: null,
      selectedPostId: 0,
      query: '',
    }
  },
  constText: {
    searchTitle: 'Current Search Query',
  },
  computed: {
    capitalizePosts() {
      if (!this.posts) return null
      return this.posts.map((post) => {
        return {
          ...post,
          title: capitalize(post.title),
        }
      })
    },
    searchablePost() {
      if (!this.capitalizePosts) return null
      return this.capitalizePosts.filter((post) =>
        post.title.includes(this.query),
      )
    },
  },

  created() {
    console.log('created')
    // console.log(this.$refs.input)
    getPosts().then((posts) => (this.posts = posts))
  },
  mounted() {
    // console.log(this.$refs.input)
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  unmounted() {
    console.log('unmounted')
  },
  methods: {
    showComments(id) {
      this.selectedPostId = id
    },
    removePost(id) {
      this.selectedPostId = 0
      this.posts = this.posts.filter((post) => post.id !== id)
    },
    // changeId(id) {
    //   this.selectedPostId = id
    // },
  },
  //   render() {
  //     return h(
  //       'div', // type
  //       { id: 'foo', class: 'bar' }, // props
  //       [
  //         /* children */
  //       ],
  //     )
  //   },
}
</script>
<template>
  <div class="grid grid-cols-8 gap-10">
    <div class="col-span-5">
      <h1 class="text-2xl">OptionsApiExample</h1>
      <h2>{{ $options.constText.searchTitle }}: {{ query }}</h2>
      <div class="mt-5">
        <div>
          <input ref="input" v-model="query" type="text" />
        </div>
        <ul class="mt-5 space-y-3 text-lg">
          <li
            v-for="post in searchablePost"
            :key="post.id"
            :class="{ 'bg-lime-400': selectedPostId === post.id }"
            class="p-3 border cursor-pointer"
            @click="showComments(post.id)"
          >
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-3">
      <h2 class="text-xl text-center">Selected Posts</h2>
      <!-- class class="border-4" -->
      <OptionsApiExampleComments
        :id="selectedPostId"
        @handle-remove-post="removePost"
      />
    </div>
  </div>
</template>
