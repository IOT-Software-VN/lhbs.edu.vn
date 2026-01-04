import { schoolData } from '../constants'
import { SchoolLevel } from '../types'

interface TimelineNavigationProps {
  activeTab: SchoolLevel
  onTabChange: (level: SchoolLevel) => void
}

export function TimelineNavigation({ activeTab, onTabChange }: TimelineNavigationProps) {
  const getProgressWidth = () => {
    switch (activeTab) {
      case 'preschool':
        return '0%'
      case 'primary':
        return '33%'
      case 'secondary':
        return '66%'
      case 'high':
        return '100%'
    }
  }

  const levels: SchoolLevel[] = ['preschool', 'primary', 'secondary', 'high']

  return (
    <div className='mb-16 md:mb-24'>
      {/* Tab Headers */}
      <div className='grid grid-cols-2 md:grid-cols-4 mb-12 text-center relative z-10 gap-y-8 max-w-6xl mx-auto'>
        {levels.map((level) => (
          <div
            key={level}
            className={`cursor-pointer transition-all duration-300 group ${
              activeTab === level ? 'scale-105' : 'opacity-60 hover:opacity-100'
            }`}
            onClick={() => onTabChange(level)}
          >
            <h3
              className={`text-lg md:text-xl font-bold mb-1 transition-colors ${
                activeTab === level ? 'text-[#006b3d]' : 'text-gray-500 group-hover:text-[#006b3d]'
              }`}
            >
              {schoolData[level].title.replace('School', '')}
            </h3>
            <p
              className={`text-xs md:text-sm font-medium ${activeTab === level ? 'text-brand-gold' : 'text-gray-400'}`}
            >
              {schoolData[level].grade}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Timeline */}
      <div className='hidden md:block max-w-6xl mx-auto px-16 relative h-12'>
        <div className='flex items-center justify-between relative w-full h-full'>
          <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-100 rounded-full' />
          <div
            className='absolute top-1/2 -translate-y-1/2 h-1 bg-linear-to-r from-[#006b3d] to-brand-gold rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(250,186,30,0.3)]'
            style={{ left: '0', width: getProgressWidth() }}
          />
          {levels.map((level) => {
            const isActive = activeTab === level
            const Icon = schoolData[level].icon
            return (
              <div
                key={level}
                onClick={() => onTabChange(level)}
                className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 bg-white ${
                  isActive ? 'border-brand-gold scale-125 shadow-lg' : 'border-gray-200 hover:border-[#006b3d]/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#006b3d]' : 'text-gray-400'}`} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
