import { Breadcrumb, type BreadcrumbItem } from '../primitives/breadcrumb'

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export function BreadcrumbSection({ items, variant = 'light' }: BreadcrumbSectionProps) {
  const isDark = variant === 'dark'

  return (
    <div className={`w-full pt-12 pb-4 md:pt-20 md:pb-6 relative z-10 ${isDark ? 'bg-[#013b1d]' : 'bg-white'}`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-12'>
        <Breadcrumb
          items={items}
          {...(isDark && {
            textClassName: 'text-white',
            activeTextClassName: 'text-white font-medium',
            separatorClassName: 'text-white'
          })}
        />
      </div>
    </div>
  )
}
