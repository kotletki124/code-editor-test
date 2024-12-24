import { axiosInstance } from 'src/api'
import type { Problem } from 'src/types'

/**
 * Fetch all problems.
 * @returns A promise that resolves to an array of Problem objects.
 */
export const fetchProblems = async (): Promise<Problem[]> => {
  const response = await axiosInstance.get<Problem[]>('/problems')
  return response.data
}

/**
 * Fetch a problem by ID.
 * @param id - The ID of the problem.
 * @returns A promise that resolves to a Problem object.
 */
export const fetchProblemById = async (id: number): Promise<Problem> => {
  const response = await axiosInstance.get<Problem>(`/problems/${id}`)
  return response.data
}
