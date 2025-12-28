import type { Route } from './+types/page'
import SubPageHero from '@/components/shared-ui/hero-carousel'
import {
  MainReportSection,
  ArchiveReportsSection,
  FormsSection
} from "@/components/public-information/index"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Công khai thông tin - LHBS' },
    { name: 'description', content: 'Công khai thông tin thường niên của Trường Song ngữ Lạc Hồng - LHBS' }
  ]
}

export default function PublicInformationPage (){
  return(
    <>
    <SubPageHero
      title='CỔNG THÔNG TIN & TÀI LIỆU SỐ'
      subtitle='Hệ thống văn bản, báo cáo thường niên và quy chế hoạt động chính thức của Trường Song ngữ Lạc Hồng'
      backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
    />
    <MainReportSection />
    <ArchiveReportsSection />
    <FormsSection />
    </>
  )
} 