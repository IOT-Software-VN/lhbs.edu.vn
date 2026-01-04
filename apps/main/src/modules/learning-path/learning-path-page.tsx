'use client'

import { OverviewSection } from './components'
import { SubPageHero, BreadcrumbSection } from '@lhbs/ui'
import { LEARNING_PATH_BREADCRUMB_ITEMS } from './constants'

export function LearningPathPage() {
  const handleNavigate = (path: string) => {
    window.location.href = path
  }

  return (
    <>
      <SubPageHero
        title='LỘ TRÌNH HỌC TẬP'
        subtitle='Hành trình kiến tạo tương lai vững chắc'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />
      <BreadcrumbSection items={LEARNING_PATH_BREADCRUMB_ITEMS} />
      <OverviewSection onNavigate={handleNavigate} />
    </>
  )
}
