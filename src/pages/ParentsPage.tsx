import { PageTemplate } from '../components/PageTemplate';

interface ParentsPageProps {
  onNavigate: (path: string) => void;
}

export function ParentsPage({ onNavigate }: ParentsPageProps) {
  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Parents' }
  ];

  const relatedPages = [
    {
      title: 'Apply Now',
      description: 'Start your LHBS journey with our application process',
      onClick: () => onNavigate('/admissions/apply-now')
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our admissions team',
      onClick: () => onNavigate('/contact')
    },
    {
      title: 'FAQs',
      description: 'Find answers to common questions',
      onClick: () => onNavigate('/admissions/faqs')
    }
  ];

  return (
    <PageTemplate
      title="Parents"
      subtitle="Resources and information for LHBS families"
      introText="Welcome to the LHBS Parents section. We understand that partnering with parents is crucial to student success. Here you'll find essential resources, important dates, and ways to get involved in your child's educational journey."
      ctaText="Contact Us"
      onCtaClick={() => onNavigate('/contact')}
      breadcrumbs={breadcrumbs}
      relatedPages={relatedPages}
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className=" text-[32px] md:text-[40px] text-[#1a5336] mb-6">Parent Portal</h2>
          <p className=" text-[#666] leading-relaxed mb-6">
            Access important information, school calendar, academic reports, and communicate directly with teachers through our parent portal. Stay connected with your child's progress and school activities.
          </p>
          <button
            onClick={() => onNavigate('/admissions/apply-now')}
            className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
          >
            Access Portal
          </button>
        </div>

        <div>
          <h2 className=" text-[32px] md:text-[40px] text-[#1a5336] mb-6">Parent Resources</h2>
          <ul className=" text-[#666] space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Parent Handbook & School Policies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Academic Calendar & Important Dates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Parent-Teacher Association (PTA)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Volunteer Opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>School Communication Guidelines</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 mb-16">
        <h2 className=" text-[32px] md:text-[40px] text-[#1a5336] mb-6">Parent Community</h2>
        <p className=" text-[#666] leading-relaxed mb-6">
          Join our vibrant parent community and connect with other LHBS families. Participate in school events, workshops, and support networks designed to enhance your family's experience at LHBS.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#fffae9]">
            <h3 className=" text-[24px] text-[#1a5336] mb-3">Parent Workshops</h3>
            <p className=" text-[#666] text-sm">
              Regular workshops on parenting, child development, and supporting your child's education.
            </p>
          </div>
          <div className="p-6 bg-[#fffae9]">
            <h3 className=" text-[24px] text-[#1a5336] mb-3">School Events</h3>
            <p className=" text-[#666] text-sm">
              Participate in school performances, sports days, cultural celebrations, and family activities.
            </p>
          </div>
          <div className="p-6 bg-[#fffae9]">
            <h3 className=" text-[24px] text-[#1a5336] mb-3">Support Network</h3>
            <p className=" text-[#666] text-sm">
              Connect with other parents, share experiences, and build lasting friendships within our community.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
