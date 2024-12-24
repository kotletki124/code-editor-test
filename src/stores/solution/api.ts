import { axiosInstance } from 'src/api'
import type { Solution } from 'src/types'

/**
 * Fetch a solution by ID.
 * @param id - The ID of the solution.
 * @returns A promise that resolves to a Solution object.
 */
export const fetchSolutionById = async (id: number): Promise<Solution> => {
  const response = await axiosInstance.get<Solution>(`/solutions/${id}`)
  return response.data
}

/**
 * Update a solution's code by ID.
 * @param id - The ID of the solution.
 * @param code - The new code for the solution.
 * @returns A promise that resolves to the updated Solution object.
 */
export const updateSolution = async (id: number, code: string): Promise<Solution> => {
  const response = await axiosInstance.patch<Solution>(`/solutions/${id}`, { code })
  return response.data
}

/**
 * Execute a solution by ID.
 * @param id - The ID of the solution.
 * @param code - The code to execute for the solution.
 * @returns A promise that resolves to the execution result.
 */
export const executeSolution = async (
  id: number,
  code: string,
): Promise<{ status: string; message: string }> => {
  const response = await axiosInstance.post<{ status: string; message: string }>(
    `/solutions/${id}/execute`,
    { code },
  )
  return response.data
}
