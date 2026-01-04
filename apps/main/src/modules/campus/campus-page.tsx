'use client'

import { useRouter } from 'next/navigation'
import { CampusInfoSection } from './components'
import { SubPageHero, BreadcrumbSection, SchoolCommitmentSection } from '@lhbs/ui'
import { CAMPUS_BREADCRUMB_ITEMS } from './constants'

export function CampusPage() {
  const router = useRouter()
  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <SubPageHero
        title='Hệ thống cơ sở giáo dục'
        subtitle='Cơ sở giáo dục thuộc trường Song ngữ Lạc Hồng'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2022/11/BL8Q8839-scaled.jpg'
      />
      <BreadcrumbSection items={CAMPUS_BREADCRUMB_ITEMS} />
      <SchoolCommitmentSection />
      <CampusInfoSection onNavigate={handleNavigate} />
    </>
  )
}
