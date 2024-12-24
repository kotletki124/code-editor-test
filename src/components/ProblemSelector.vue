<template>
  <div>
    <div class="row justify-between">
      <h4>
        <q-skeleton v-if="currProblem.isLoading" type="rect" width="350px" height="40px" />
        <span v-else>{{ currProblem.state?.title }}</span>
      </h4>
      <div class="row q-gutter-sm items-center">
        <q-btn
          flat
          dense
          icon="arrow_back"
          :disabled="isFirstSelected"
          @click="handlePrevClick"
          aria-label="Previous"
        />
        <q-btn
          flat
          dense
          icon="arrow_forward"
          :disabled="isLastSelected"
          @click="handleNextClick"
          aria-label="Next"
        />
      </div>
    </div>

    <q-skeleton v-if="currProblem.isLoading" type="rect" height="300px" />
    <div
      v-else
      class="markdown-content"
      v-html="renderMarkdown(currProblem.state?.description as string)"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { renderMarkdown } from 'src/utils'
import { useProblemStore } from 'src/stores/problem'
import type { Problem } from 'src/types'

const { problems, currProblem } = useProblemStore()

const currProblemInd = ref(0)

const isFirstSelected = computed(() => currProblemInd.value === 0)
const isLastSelected = computed(() => currProblemInd.value === problems.state.length - 1)

const handleNextClick = () => {
  if (!isLastSelected.value) currProblemInd.value++
}

const handlePrevClick = () => {
  if (!isFirstSelected.value) currProblemInd.value--
}

watch(currProblemInd, (newInd) => {
  const { id } = problems.state[newInd] as Problem
  if (id) currProblem.execute(0, id)
})
</script>

<style>
.markdown-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}

.markdown-content h2 {
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0.9rem 0;
}

.markdown-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.8rem 0;
}

.markdown-content h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.7rem 0;
}

.markdown-content h5 {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.6rem 0;
}

.markdown-content h6 {
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.markdown-content pre,
.markdown-content code {
  width: 100%;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 3px;
  padding: 0.1em 0.3em;
  font-size: 0.9rem;
}

.markdown-content pre code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f7f7f7;
  color: #221e20;
  padding: 0.2em 0.4em;
  font-size: 1rem;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
