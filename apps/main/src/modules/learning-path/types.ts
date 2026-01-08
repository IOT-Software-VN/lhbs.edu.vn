export type SchoolLevel = 'preschool' | 'primary' | 'secondary' | 'high'

export interface Certificate {
  name: string
  icon: any
  description?: string
  logo?: string | null
}

export interface SchoolLevelData {
  title: string
  grade: string
  description: string
  link: string
  competencies: string[]
  certificates: Certificate[]
  icon: any
}
