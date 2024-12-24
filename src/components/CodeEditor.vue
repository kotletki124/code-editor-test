<template>
  <div class="q-pa-md full-height">
    <div class="row q-gutter-sm">
      <q-select
        v-model="currLanguage"
        :options="supportedLanguages"
        option-label="name"
        style="width: fit-content"
      />
      <q-btn
        flat
        color="primary"
        icon="play_arrow"
        label="run"
        :disabled="currExecutionResult.isLoading"
        @click="currExecutionResult.execute()"
      />
    </div>
    <div class="editor-wrapper">
      <Codemirror
        v-model:value="code"
        :key="currSolution.state?.id as number"
        :options="cmOptions"
        border
        placeholder="Write your code here..."
        @change="handleChange"
      />
      <q-inner-loading :showing="currProblem.isLoading || currSolution.isLoading">
        <q-spinner-gears size="80px" color="primary" />
        <span>Loading code...</span>
      </q-inner-loading>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { debounce } from 'quasar'
import { useSolutionStore } from 'src/stores/solution'
import { useProblemStore } from 'src/stores/problem'
import { storeToRefs } from 'pinia'
import Codemirror from 'codemirror-editor-vue3'

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/display/placeholder.js'

import type { Solution } from 'src/types'

const langModeMap: Record<number, string> = {
  1: 'text/javascript',
  2: 'text/x-python',
  3: 'text/x-c++src',
  4: 'text/x-java',
}

const problemStore = useProblemStore()
const { currProblem } = problemStore
const { supportedLanguages } = storeToRefs(problemStore)

const solutionStore = useSolutionStore()
const { currSolution, currExecutionResult, updateSolution } = solutionStore
const { currLanguage } = storeToRefs(solutionStore)

const code = ref()

const cmOptions = computed(() => ({
  mode: langModeMap[currLanguage.value?.id] || 'text/plain',
  theme: 'default',
  lineNumbers: true,
  tabSize: 2,
  indentWithTabs: false,
  autoCloseBrackets: true,
}))

const debouncedUpdateSolution = debounce(updateSolution, 5000)

const handleChange = (code: string) => {
  const { id } = currSolution.state as Solution
  if (id) debouncedUpdateSolution(id, code)
}

watch(
  () => currSolution.state?.code,
  (newCode) => {
    if (newCode !== undefined) code.value = newCode
  },
)
</script>

<style scoped>
.editor-wrapper {
  height: calc(100% - 50px);
}
</style>
