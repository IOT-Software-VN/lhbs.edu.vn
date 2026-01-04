import {
  VisionMissionWelcomeSection,
  FoundingMessageSection,
  MissionSection,
  VisionSection,
  CoreValuesSection
} from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { TestimonialQuoteSection } from '@/components/common/testimonial-quote-section'
import { TESTIMONIALS } from '@/components/common/testimonials-data'
import { VISION_MISSION_BREADCRUMB_ITEMS } from '../constants'

export function VisionMissionPage() {
  return (
    <>
      <SubPageHero
        title='Tầm nhìn & Sứ mệnh'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={VISION_MISSION_BREADCRUMB_ITEMS} />
        </div>
      </div>

      <VisionMissionWelcomeSection />
      <FoundingMessageSection />
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} backgroundColor='bg-[#f2f2f28d]' imageOptimized={false} />
    </>
  )
}
