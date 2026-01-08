import {
  TrustStatsSection,
  FeaturedReportSection,
  AccreditationSection,
  DocumentsSection,
  ContactCtaSection
} from './components'
import { SubPageHero, BreadcrumbSection } from '@lhbs/ui'
import { PUBLIC_INFO_BREADCRUMB_ITEMS, HERO_BACKGROUND_IMAGE } from './constants'

export function PublicInfoPage() {
  return (
    <main className='bg-white overflow-hidden'>
      <SubPageHero
        title='CÔNG KHAI THÔNG TIN'
        subtitle='Minh bạch - Uy tín - Chất lượng giáo dục quốc tế'
        backgroundImage={HERO_BACKGROUND_IMAGE}
      />

      <BreadcrumbSection items={PUBLIC_INFO_BREADCRUMB_ITEMS} variant='dark' />

      {/* Trust Statistics - Key numbers */}
      <TrustStatsSection />

      {/* Featured Annual Report - Showcase latest */}
      <FeaturedReportSection />

      {/* Accreditation Logos */}
      <AccreditationSection />

      {/* Documents Library - Tabs for Reports/Policies/Forms */}
      <DocumentsSection />

      {/* Contact CTA */}
      <ContactCtaSection />
    </main>
  )
}
