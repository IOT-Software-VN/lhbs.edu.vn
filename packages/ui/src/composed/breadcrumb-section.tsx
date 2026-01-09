import { Breadcrumb, type BreadcrumbItem } from '../primitives/breadcrumb'

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export function BreadcrumbSection({ items, variant = 'light' }: BreadcrumbSectionProps) {
  const isDark = variant === 'dark'

  return (
    <div className={`w-full py-12 md:py-20 relative z-10 flex items-center ${isDark ? 'bg-brand-green' : 'bg-white'}`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
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
