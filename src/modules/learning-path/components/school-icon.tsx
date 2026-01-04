import { schoolData } from '../constants'
import { SchoolLevel } from '../types'

interface SchoolIconProps {
  level: SchoolLevel
}

export function SchoolIcon({ level }: SchoolIconProps) {
  const Icon = schoolData[level].icon
  return <Icon className='w-4 h-4' />
}
