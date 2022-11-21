import { reactive, toRefs } from 'vue'

export function useFetch() {
  const settings = reactive({
    data: null,
    error: null,
    isLoading: null,
  })

  const startRequest = async (url) => {
    settings.isLoading = true
    settings.data = null
    settings.error = null
    try {
      const response = await fetch(url)
      settings.data = await response.json()
    } catch (error) {
      settings.error = error
    }
    settings.isLoading = false
  }

  return {
    ...toRefs(settings),
    startRequest,
  }
}
