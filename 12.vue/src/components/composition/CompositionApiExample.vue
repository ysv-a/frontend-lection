<script>
import { computed, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue'
import CompositionApiExampleComments from './CompositionApiExampleComments.vue'
// import { getPosts } from '@/api/PostRequest'
import { useFetch } from '@/use/useFetch'

function capitalize(name) {
  //   console.log(name)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default {
  name: 'CompositionApiExample',
  components: { CompositionApiExampleComments },
  constText: {
    searchTitle: 'Current Search Query',
  },
  setup(props, context) {
    //  {attrs, slots, emit, expose}
    console.log('created')

    // const posts = ref(null)
    const selectedPostId = ref(0)
    const query = ref('')

    const { data: posts, error, isLoading, startRequest } = useFetch()

    startRequest('https://jsonplaceholder.typicode.com/posts')

    // getPosts().then((response) => {
    //   posts.value = response
    // })

    const capitalizePosts = computed(() => {
      if (!posts.value) return null
      return posts.value.map((post) => {
        return {
          ...post,
          title: capitalize(post.title),
        }
      })
    })
    const searchablePost = computed(() => {
      if (!posts.value) return null
      return capitalizePosts.value.filter((post) =>
        post.title.includes(query.value),
      )
    })

    const showComments = (id) => {
      selectedPostId.value = id
    }
    const removePost = (id) => {
      selectedPostId.value = 0
      posts.value = posts.value.filter((post) => post.id !== id)
    }

    onMounted(() => {
      // console.log(this.$refs.input)
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onUnmounted(() => {
      console.log('unmounted')
    })

    return {
      query,
      selectedPostId,
      searchablePost,
      showComments,
      removePost,
    }
  },
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
      <CompositionApiExampleComments
        :id="selectedPostId"
        @handle-remove-post="removePost"
      />
    </div>
  </div>
</template>
