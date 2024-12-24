import { useAsyncState } from '@vueuse/core'
import { defineStore } from 'pinia'
import { executeSolution, fetchSolutionById, updateSolution } from './api'
import { ref, watch } from 'vue'
import { useProblemStore } from '../problem'
import type { Language, Solution } from 'src/types'

const defaultLanguage: Language = { id: 0, name: 'Select a language' }

export const useSolutionStore = defineStore('solution', () => {
  const { currProblem } = useProblemStore()

  const currLanguage = ref<Language>(defaultLanguage)
  const currSolution = useAsyncState(fetchSolutionById, null, { immediate: false })
  const currExecutionResult = useAsyncState(
    () => {
      const { id, code } = currSolution.state.value as Solution
      if (id) return executeSolution(id, code)
      return Promise.resolve(null)
    },
    null,
    { immediate: false, resetOnExecute: false },
  )

  watch(
    () => currProblem.state,
    (newProblem) => {
      if (newProblem?.supportedLanguages[0]) currLanguage.value = newProblem.supportedLanguages[0]
    },
  )

  watch(
    () => currLanguage.value,
    (newLanguage) => {
      currExecutionResult.state.value = null
      const newSolutionId = currProblem.state?.solutions.find(
        (s) => s.languageId === newLanguage?.id,
      )?.id
      if (newSolutionId) currSolution.execute(0, newSolutionId)
    },
  )

  return { currLanguage, currSolution, currExecutionResult, updateSolution }
})
