import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  watchEffect(async () => {
    isLoading.value = true
    data.value = null
    error.value = null
    try {
      const response = await fetch(url.value)
      data.value = await response.json()
    } catch (error) {
      error.value = error
    }
    isLoading.value = false
  })

  return {
    data,
    error,
    isLoading,
  }
}
