<template>
  <div v-if="currExecutionResult.isLoading" class="column q-pa-md">
    <q-skeleton type="rect" width="200px" height="32px" style="margin-block-end: 3em" />
    <q-skeleton type="rect" width="100%" height="37px" />
  </div>
  <div v-else-if="currExecutionResult.state" :class="containerClass">
    <div class="row q-gutter-sm">
      <q-icon v-if="isError" name="error" color="error" size="32px" class="q-mr-sm" />
      <h6>{{ title }}</h6>
    </div>
    <div class="message q-pa-sm fit">
      {{ currExecutionResult.state?.message }}
    </div>
  </div>
  <div v-else class="fit text-grey-8">Run the code first to see the results</div>
</template>

<script lang="ts" setup>
import { useSolutionStore } from 'src/stores/solution'
import { computed } from 'vue'

const { currExecutionResult } = useSolutionStore()

const isError = computed(() => currExecutionResult.state?.status === 'success')
const title = computed(() => (isError.value ? 'Compile error' : 'Output'))
const containerClass = computed(() => ({
  'q-pa-md': true,
  error: isError.value,
}))
</script>

<style scoped>
.message {
  background-color: #f5f5f5;
}

.error {
  color: #f44336;
}

.error > .message {
  background-color: #ffebee;
}
</style>
