import { ChevronRight, Check, BookOpen, Users, Globe, Target, Lightbulb, Heart, Beaker, Activity, Clock, MessageCircle, Award, Brain, Sparkles, Building } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsLowerSecondaryPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsLowerSecondaryPage({ onNavigate }: AcademicsLowerSecondaryPageProps) {
  return (
    <div className="w-full bg-[#fffae9]">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWNvbmRhcnklMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMHZpZXRuYW18ZW58MXx8fHwxNzYzMTAyOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Home
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li>
                <button 
                  onClick={() => onNavigate('/academics/overview')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Academics
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9] ">Lower Secondary</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              AGES 11 TO 15 · LOWER SECONDARY
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS Lower Secondary (Grades 6–9)
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              Students follow the Vietnamese Ministry of Education curriculum combined with Cambridge English, building a solid foundation of knowledge, 21st-century skills, and English proficiency. Our programme develops core competencies so students become responsible global citizens and future leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Book a School Tour
              </button>
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR LOWER SECONDARY CURRICULUM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Our Lower Secondary Curriculum
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto">
              Lower Secondary at LHBS (Grades 6–9) combines the Vietnamese National Curriculum with a comprehensive Cambridge English programme, delivering a well-rounded education that builds strong academic foundations, 21st-century skills, English fluency, and core values that shape responsible global citizens and future leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Core Subjects in Vietnamese */}
            <div className="bg-[#fffae9] p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                Core Subjects in Vietnamese
              </h3>
              <p className=" text-[#212121]/70 mb-6 leading-relaxed">
                Students study the full Vietnamese National Curriculum following MOET standards and provincial requirements:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Mathematics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Vietnamese Literature</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Natural Sciences (Physics, Chemistry, Biology)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">History & Geography</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Civic Education</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Physical Education & Arts</span>
                </li>
              </ul>
            </div>

            {/* Card 2: English & Enrichment Programmes */}
            <div className="bg-[#fffae9] p-8 border-l-4 border-[#FABA1E]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                English & Enrichment Programmes
              </h3>
              <p className=" text-[#212121]/70 mb-4 leading-relaxed">
                Our combined Cambridge English and enrichment curriculum develops bilingual excellence:
              </p>
              <div className="mb-6">
                <p className=" text-[#212121] mb-2">
                  <strong>Cambridge Assessment English:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FABA1E]">•</span>
                    <span className=" text-[#212121]/70 text-sm">Grades 6–8: Cambridge Key for Schools (KET)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FABA1E]">•</span>
                    <span className=" text-[#212121]/70 text-sm">Grade 9: Cambridge Preliminary for Schools (PET)</span>
                  </li>
                </ul>
              </div>
              <p className=" text-[#212121]/70 text-sm mb-6 leading-relaxed">
                English lessons are personalised by level, focusing on self-study skills, project work, and 21st-century competencies.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">English</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">STEM</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">AI–Robotics</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Skills Education</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Library</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Financial Management</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Experiential Learning</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Community Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR ENGLISH PROGRAMME */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-8"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Our English Programme
              </h2>

              {/* Learning Outcomes */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Learning Outcomes</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  Students work toward Cambridge KET (Grades 6–8) and PET (Grade 9) certifications, aligning with pathways for future study in Vietnam or abroad. These internationally recognized qualifications open doors to High School programmes and university preparation.
                </p>
              </div>

              {/* Teaching Approach */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Teaching Approach</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9 mb-3">
                  We provide personalised learning pathways that build self-study habits through personal study plans and regular reflection. Students engage in activities like sharing passions and talents, journaling, and collaborative projects that develop 21st-century competencies and positive behaviour.
                </p>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  Throughout the year, language events give students authentic opportunities to practice English in real-life contexts.
                </p>
              </div>

              {/* Materials and Tools */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Materials and Tools</h3>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>I-learn Smart World</strong> textbook combined with selected Cambridge materials to develop the four skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>D.E.A.R (Drop Everything And Read)</strong> programme using Macmillan graded readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>English Central</strong> software for 24/7 listening and speaking practice</span>
                  </li>
                </ul>
              </div>

              {/* Learning Pathways */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Learning Pathways</h3>
                </div>
                <div className="ml-9 space-y-3">
                  <p className=" text-[#212121]/70 text-sm">
                    <strong>For high-performing, motivated learners:</strong> "Me – Us – The World" project-based learning pathway
                  </p>
                  <p className=" text-[#212121]/70 text-sm">
                    <strong>For developing learners:</strong> Gradual progression with rich, engaging activities
                  </p>
                  <p className=" text-[#212121]/70 text-sm italic">
                    Examples: "Periods without walls", "Hobbies and talents", "Dear my journal"
                  </p>
                </div>
              </div>

              {/* English Writing Club */}
              <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                <div className="flex items-start gap-3 mb-2">
                  <Award className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">English Writing Club</h3>
                </div>
                <p className=" text-[#212121]/70 text-sm ml-9">
                  The LHBS Writers Club provides a creative space for students who love writing and publishing English stories.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[700px] lg:h-[800px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVuZ2xpc2glMjByZWFkaW5nJTIwY2xhc3N8ZW58MXx8fHwxNzYzMTAyOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students engaged in English reading and learning activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. UNLOCKING EACH STUDENT'S POTENTIAL */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-8 text-center"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Unlocking Each Student's Potential
            </h2>
            
            <p className=" text-[#212121] text-lg leading-relaxed mb-6 text-center">
              LHBS values integrity and respect, creating a learning environment where students strive to become responsible global citizens and future leaders. Our mission is to nurture well-rounded individuals who contribute positively to society.
            </p>
            
            <p className=" text-[#212121] text-lg leading-relaxed mb-12 text-center">
              Lower Secondary education at LHBS emphasises personal growth: self-awareness, independent learning, teamwork, critical thinking, creativity, and empathy. Students are supported by dedicated homeroom teachers, school counselling services, and a safe semi-boarding environment.
            </p>

            {/* Key Qualities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#fffae9] p-6 text-center">
                <Heart className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Integrity</h3>
                <p className=" text-[#212121]/70 text-sm">Acting with honesty and strong moral principles</p>
              </div>

              <div className="bg-[#fffae9] p-6 text-center">
                <Sparkles className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Confidence</h3>
                <p className=" text-[#212121]/70 text-sm">Believing in abilities and taking initiative</p>
              </div>

              <div className="bg-[#fffae9] p-6 text-center">
                <Globe className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Global Mindset</h3>
                <p className=" text-[#212121]/70 text-sm">Understanding diverse cultures and perspectives</p>
              </div>

              <div className="bg-[#fffae9] p-6 text-center">
                <Users className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Leadership</h3>
                <p className=" text-[#212121]/70 text-sm">Inspiring and guiding others positively</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A TYPICAL DAY AT LHBS LOWER SECONDARY */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-4">
            <p className="text-[#FABA1E] mb-2  uppercase tracking-wider text-sm">
              LOWER SECONDARY
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              A Typical Day at LHBS Lower Secondary
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto mb-16">
              Each day offers a rich blend of personalised learning, academic rigour, and meaningful experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336]">Morning Check-in & Homeroom</h3>
              </div>
              <p className=" text-[#212121]/70 text-sm">
                Students arrive, meet their homeroom teacher, review personal goals, and participate in class meetings or PSHE-style activities that build community.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336]">Core Academic Blocks</h3>
              </div>
              <p className=" text-[#212121]/70 text-sm">
                Lessons in Vietnamese National Curriculum subjects—Maths, Literature, Sciences, History, Geography—focusing on deep conceptual understanding and exam preparation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336]">English & Global Perspectives</h3>
              </div>
              <p className=" text-[#212121]/70 text-sm">
                Cambridge English lessons, D.E.A.R reading time, English Central practice, plus debates, case studies, and LHBS MUN-style simulations building confidence and critical thinking.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336]">STEM | AI–Robotics | Skills</h3>
              </div>
              <p className=" text-[#212121]/70 text-sm">
                Hands-on sessions in STEM, AI and Robotics, personal finance, and skills education encouraging problem-solving, creativity, communication, and collaboration.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336]">Clubs, Experiences & Service</h3>
              </div>
              <p className=" text-[#212121]/70 text-sm">
                After-school clubs, field trips, experiential learning, and community service projects—fundraising, environmental work, charity—extending learning beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIGHLY QUALIFIED TEACHERS WHO INSPIRE */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Highly Qualified Teachers Who Inspire
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our experienced teaching staff bring passion and expertise to every lesson. They engage in continuous professional development and employ modern teaching methods, including technology and AI integration, to personalise learning for Lower Secondary students.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Teachers play a dual role: strengthening Vietnamese academic excellence while advancing English language skills, ensuring students are well-prepared for both local and international pathways.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/leadership')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-['Arial'] font-bold hover:bg-[#14432b] transition-colors"
              >
                Meet Our Teachers
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1593270066815-9c7bd05560f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWNvbmRhcnklMjBzY2hvb2wlMjB0ZWFjaGVyJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMTAyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LHBS teacher inspiring Lower Secondary students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. AN ENVIRONMENT MADE FOR LEARNING */}
      <section className="bg-[#fffae9] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-[#FABA1E] mb-2  uppercase tracking-wider text-sm">
              OUR FACILITIES
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              An Environment Made for Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759722144262-c084e801c8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBmYWNpbGl0aWVzfGVufDF8fHx8MTc2MzEwMjk5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern LHBS campus facilities designed for learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our purpose-built campus in Bien Hoa provides modern classrooms, well-equipped science laboratories, comprehensive libraries, sports facilities, and a safe semi-boarding environment. Every space is designed to support active learning and collaboration.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                These facilities empower Lower Secondary students to explore their strengths, work collaboratively on projects, and develop respect for culture, language, and global citizenship in a secure, inspiring setting.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Explore Our Campus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING TAGLINE & CTA */}
      <section className="bg-[#1a5336] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 
            className="font-['SVN-Gotham'] text-[#fffae9] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            Shaping bilingual leaders for the future
          </h2>
          <p className=" text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            LHBS Lower Secondary combines Vietnamese values, bilingual excellence, and 21st-century skills to prepare students for High School and international pathways—including Dual Diploma programmes and overseas study opportunities.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors"
            >
              Book a School Tour
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
