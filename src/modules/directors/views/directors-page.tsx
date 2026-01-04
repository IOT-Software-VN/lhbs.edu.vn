import { SubPageHero } from '@/components/common/sub-page-hero'
import { DirectorsWelcomeSection, DirectorsCarousel, StudentAchievementsSection } from '../components'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { DIRECTORS_BREADCRUMB_ITEMS } from '../constants'

export function DirectorsPage() {
  return (
    <>
      <SubPageHero
        title='Ban Lãnh đạo'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2022/11/MG_5251.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={DIRECTORS_BREADCRUMB_ITEMS} />
        </div>
      </div>

      <DirectorsWelcomeSection />
      <DirectorsCarousel />
      <StudentAchievementsSection />
    </>
  )
}
