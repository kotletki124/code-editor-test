<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-inner-loading v-if="token.isLoading" :showing="token.isLoading">
        <q-spinner-gears size="80px" color="primary" />
        <span>Authentication...</span>
      </q-inner-loading>
      <router-view v-else />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useAuthStore } from 'src/stores/auth'

const { token } = useAuthStore()
</script>
