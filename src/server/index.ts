import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  Response,
  type Request,
  type Server,
  type Registry,
} from 'miragejs'
import { problems } from 'src/server/data/problems'
import { solutions } from 'src/server/data/solutions'

const ProblemModel = Model.extend({
  solutions: hasMany(),
})

const SolutionModel = Model.extend({
  problem: belongsTo(),
})

type AppRegistry = Registry<{ problem: typeof ProblemModel; solution: typeof SolutionModel }, any>
type AppSchema = Server<AppRegistry>

const requireAuth = (request: Request) => {
  const authHeader = request.requestHeaders.Authorization

  if (!authHeader) {
    return new Response(401, {}, { error: 'Unauthorized' })
  }

  return null
}

export default function () {
  return createServer({
    models: {
      problem: ProblemModel,
      solution: SolutionModel,
    },

    seeds(server: AppSchema) {
      problems.forEach((problem) => {
        const newProblem = server.create('problem', problem as any)
        const relatedSolutions = solutions.filter((solution) => solution.problemId === problem.id)

        relatedSolutions.forEach((solution) => {
          server.create('solution', { ...solution, problem: newProblem })
        })
      })
    },

    routes() {
      this.namespace = '/api'

      this.post('/auth/login', () => {
        const token = 'sample_token_123'
        return new Response(200, {}, { token })
      })

      this.get('/problems', (schema, request) => {
        const authError = requireAuth(request)

        const problems = schema.all('problem').models.map((problem) => {
          const attrs = problem.attrs
          if (authError) {
            const { solutions, ...rest } = attrs
            return rest
          }
          return attrs
        })

        return new Response(200, {}, problems)
      })

      this.get('/problems/:id', (schema, request) => {
        const id = request.params.id
        const problem = schema.find('problem', id)

        if (!problem) {
          return new Response(404, {}, { error: 'Problem not found' })
        }

        const authError = requireAuth(request)

        const response = authError
          ? problem.attrs
          : {
              ...problem.attrs,
              solutions: problem.solutions.models.map((solution) => solution.attrs),
            }

        return new Response(200, {}, response)
      })

      this.get('/solutions/:id', (schema, request) => {
        const authError = requireAuth(request)
        if (authError) return authError

        const id = request.params.id
        const solution = schema.find('solution', id)

        if (!solution) {
          return new Response(404, {}, { error: 'Solution not found' })
        }

        return solution.attrs
      })

      this.patch('/solutions/:id', (schema, request) => {
        const authError = requireAuth(request)
        if (authError) return authError

        const id = request.params.id
        const solution = schema.find('solution', id)

        if (!solution) {
          return new Response(404, {}, { error: 'Solution not found' })
        }

        const { code } = JSON.parse(request.requestBody)
        solution.update({ code })

        return solution.attrs
      })

      this.post('/solutions/:id/execute', (schema, request) => {
        const authError = requireAuth(request)
        if (authError) return authError

        const id = request.params.id
        const solution = schema.find('solution', id)

        if (!solution) {
          return new Response(404, {}, { error: 'Solution not found' })
        }

        const isSuccess = Math.random() > 0.5
        if (isSuccess) {
          return { status: 'success', message: 'SyntaxError: Unexpected token' }
        } else {
          return { status: 'error', message: 'Hello world' }
        }
      })
    },
  })
}
