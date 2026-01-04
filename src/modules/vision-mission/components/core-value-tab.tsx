import type { CoreValue } from '../types'

interface CoreValueTabProps {
  value: CoreValue
  index: number
  isActive: boolean
  onClick: () => void
}

export function CoreValueTab({ value, index, isActive, onClick }: CoreValueTabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative group flex items-center justify-center
        w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 
        rounded-full lg:rounded-l-full lg:rounded-r-none transition-all duration-300
        ${
          isActive
            ? 'bg-white text-brand-green shadow-[0_0_15px_rgba(255,255,255,0.3)] translate-x-0'
            : 'bg-transparent border border-white/30 text-white/60 hover:text-white hover:border-white hover:bg-white/10'
        }
      `}
    >
      <value.icon
        className={`relative z-10 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}
        strokeWidth={1.5}
      />
      {isActive && (
        <div className='absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-lhbs-yellow rounded-full lg:hidden' />
      )}
    </button>
  )
}
