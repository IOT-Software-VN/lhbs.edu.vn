import { PageTemplate } from '../components/PageTemplate';

interface AcademicResultsPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicResultsPage({ onNavigate }: AcademicResultsPageProps) {
  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Academic Results' }
  ];

  const relatedPages = [
    {
      title: 'Holistic Education',
      description: 'Explore our comprehensive educational programs',
      onClick: () => onNavigate('/academics/overview')
    },
    {
      title: 'Apply Now',
      description: 'Join our community of achievers',
      onClick: () => onNavigate('/admissions/apply-now')
    },
    {
      title: 'Scholarships',
      description: 'Excellence-based scholarship opportunities',
      onClick: () => onNavigate('/admissions/scholarships')
    }
  ];

  return (
    <PageTemplate
      title="Academic Results"
      subtitle="Excellence in education, proven outcomes"
      introText="At LHBS, we are proud of our students' outstanding achievements. Our holistic approach to education, combining rigorous academics with character development, has consistently produced exceptional results in national and international assessments."
      ctaText="Explore Our Programs"
      onCtaClick={() => onNavigate('/academics/overview')}
      breadcrumbs={breadcrumbs}
      relatedPages={relatedPages}
    >
      <div className="mb-16">
        <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6 text-center">
          Outstanding Achievements
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white">
            <div className="font-['Crimson_Pro'] text-[48px] text-[#1a5336] mb-2">98%</div>
            <p className="font-['Lexend_Deca'] text-[#666]">University Placement Rate</p>
          </div>
          <div className="text-center p-6 bg-white">
            <div className="font-['Crimson_Pro'] text-[48px] text-[#1a5336] mb-2">85%</div>
            <p className="font-['Lexend_Deca'] text-[#666]">International Scholarships</p>
          </div>
          <div className="text-center p-6 bg-white">
            <div className="font-['Crimson_Pro'] text-[48px] text-[#1a5336] mb-2">15+</div>
            <p className="font-['Lexend_Deca'] text-[#666]">Countries Students Attend</p>
          </div>
          <div className="text-center p-6 bg-white">
            <div className="font-['Crimson_Pro'] text-[48px] text-[#1a5336] mb-2">100%</div>
            <p className="font-['Lexend_Deca'] text-[#666]">Cambridge Pass Rate</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6">National Excellence</h2>
          <p className="font-['Lexend_Deca'] text-[#666] leading-relaxed mb-6">
            Our students consistently achieve top marks in Vietnamese national examinations, demonstrating strong mastery of the national curriculum while developing critical thinking and problem-solving skills.
          </p>
          <ul className="font-['Lexend_Deca'] text-[#666] space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Top 5% in National High School Graduation Exam</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Multiple National Math and Science Olympiad Winners</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Outstanding Performance in Vietnamese Language Arts</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6">International Recognition</h2>
          <p className="font-['Lexend_Deca'] text-[#666] leading-relaxed mb-6">
            LHBS students excel in international assessments and competitions, earning recognition from prestigious institutions worldwide and securing places at top universities globally.
          </p>
          <ul className="font-['Lexend_Deca'] text-[#666] space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>Cambridge International Examinations: Distinction Level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>IELTS Average Score: 7.5+</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FABA1E] mt-1">•</span>
              <span>International Science and Math Competitions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1a5336] text-white p-8 md:p-12 mb-16">
        <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] mb-6 text-center">University Destinations</h2>
        <p className="font-['Lexend_Deca'] text-center mb-8 max-w-3xl mx-auto">
          Our graduates have been accepted to world-renowned universities across Asia, Europe, North America, and Australia, including:
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">National University of Singapore</p>
          </div>
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">University of Melbourne</p>
          </div>
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">University of British Columbia</p>
          </div>
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">Seoul National University</p>
          </div>
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">Hanoi National University</p>
          </div>
          <div className="text-center p-4 bg-white/10">
            <p className="font-['Lexend_Deca']">Ho Chi Minh City University of Technology</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12">
        <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6">Beyond Academic Scores</h2>
        <p className="font-['Lexend_Deca'] text-[#666] leading-relaxed mb-6">
          While we celebrate academic achievements, at LHBS we measure success holistically. Our students develop leadership skills, creative talents, athletic abilities, and social responsibility—preparing them not just for university, but for life.
        </p>
        <button
          onClick={() => onNavigate('/academics/overview')}
          className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
        >
          Discover Our Holistic Approach
        </button>
      </div>
    </PageTemplate>
  );
}
