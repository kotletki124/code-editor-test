import { defineStore } from 'pinia'
import { login } from './api'
import { useAsyncState } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const token = useAsyncState(async (username: string, password: string) => {
    try {
      const newToken = await login(username, password)
      sessionStorage.setItem('auth_token', newToken)
    } catch (error) {
      console.error('Login failed:', error)
      throw new Error('Login failed')
    }
  }, null)

  return { token }
})
