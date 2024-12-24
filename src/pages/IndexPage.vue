<template>
  <q-page class="row no-wrap" style="min-width: 800px">
    <q-splitter v-model="panelSplit" :limits="[30, 70]" class="full-width">
      <template v-slot:before>
        <problem-selector class="q-pa-md" />
      </template>

      <template v-slot:after>
        <div class="column full-height">
          <q-splitter horizontal v-model="editorOutputSplit" :limits="[20, 80]" class="full-height">
            <template v-slot:before>
              <code-editor />
            </template>

            <template v-slot:after>
              <div class="q-pa-md">
                <execution-output />
              </div>
            </template>
          </q-splitter>
        </div>
      </template>
    </q-splitter>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProblemSelector from 'src/components/ProblemSelector.vue'
import CodeEditor from 'src/components/CodeEditor.vue'
import ExecutionOutput from 'src/components/ExecutionOutput.vue'

const panelSplit = ref(50)
const editorOutputSplit = ref(80)
</script>
