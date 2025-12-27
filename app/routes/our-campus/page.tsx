import type { Route } from './+types/page'
import {
  WelcomeSection,
  CampusInfoSection
} from "@/components/our-campus/index"
import SubPageHero from '@/components/shared-ui/hero-carousel'




export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Hệ thống cơ sở giáo dục - LHBS' },
    { name: 'description', content: 'Thông tin chung cơ sở giáo dục của Trường Song ngữ Lạc Hồng - LHBS' }
  ]
}
export default function OurCampusPage() {
  const handleNavigate = (path: string) => {
    window.location.href = path
  }
  return(
    <>
      <SubPageHero
       title="Hệ thống cơ sở giáo dục"
       subtitle="Cơ sở giáo dục thuộc trường Song ngữ Lạc Hồng"
       backgroundImage="https://lhbs.edu.vn/wp-content/uploads/2022/11/BL8Q8839-scaled.jpg"
      />
      <WelcomeSection onNavigate={handleNavigate}/>
      <CampusInfoSection onNavigate={handleNavigate}/>
    </>
  )
}