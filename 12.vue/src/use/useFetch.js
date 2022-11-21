import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(false)
  const startRequest = async (url) => {
    isLoading.value = true
    data.value = null
    error.value = null
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (error) {
      error.value = error
    }
    isLoading.value = false
  }

  return {
    data,
    error,
    isLoading,
    startRequest,
  }
}
