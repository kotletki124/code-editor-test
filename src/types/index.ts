export interface Problem {
  id: number
  title: string
  description: string
  supportedLanguages: Language[]
  solutions: Solution[]
}

export interface Language {
  id: number;
  name: string;
}

export interface Solution {
  id: number;
  problemId: number;
  languageId: number;
  code: string;
}
