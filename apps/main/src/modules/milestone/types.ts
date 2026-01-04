import type { ReactNode } from 'react'

export interface EdgeSection {
  id: string
  icon: ReactNode
  title: string
  titleFull: string
  subtitle: string
  description: string
  features: Array<{ title: string; desc: string; icon: ReactNode }>
  imageUrl: string
  timeRange: string
}
