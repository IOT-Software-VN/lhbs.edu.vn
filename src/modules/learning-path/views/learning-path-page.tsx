'use client'

import { OverviewSection } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { LEARNING_PATH_BREADCRUMB_ITEMS } from '../constants'

export function LearningPathPage() {
  const handleNavigate = (path: string) => {
    // navigate logic if needed, currently passed to OverviewSection
    window.location.href = path
  }

  return (
    <>
      <SubPageHero
        title='LỘ TRÌNH HỌC TẬP'
        subtitle='Hành trình kiến tạo tương lai vững chắc'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={LEARNING_PATH_BREADCRUMB_ITEMS} />
        </div>
      </div>

      <OverviewSection onNavigate={handleNavigate} />
    </>
  )
}
