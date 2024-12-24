import { axiosInstance } from 'src/api'

/**
 * Log in with the provided credentials.
 * @param username - The username of the user.
 * @param password - The password of the user.
 * @returns A promise that resolves to a JWT token string.
 */
export const login = async (username: string, password: string): Promise<string> => {
  const response = await axiosInstance.post<{ token: string }>('/auth/login', {
    username,
    password,
  })
  return response.data.token
}
