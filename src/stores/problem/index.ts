import { useAsyncState, watchOnce } from '@vueuse/core'
import { defineStore } from 'pinia'
import { fetchProblems, fetchProblemById } from './api'
import { computed } from 'vue'

export const useProblemStore = defineStore('problem', () => {
  const problems = useAsyncState(fetchProblems, [])
  const currProblem = useAsyncState(fetchProblemById, null, { immediate: false })

  const supportedLanguages = computed(() => currProblem.state.value?.supportedLanguages)

  watchOnce(problems.state, (newState) => {
    if (newState[0]?.id) currProblem.execute(0, newState[0].id)
  })

  return { problems, currProblem, supportedLanguages }
})
