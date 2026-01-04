export interface Director {
  id: string | number
  image: string
  name: string
  role1: string
  role2?: string
}

export interface StudentAchievement {
  id: number
  image: string
  name: string
  achievement: string
}
