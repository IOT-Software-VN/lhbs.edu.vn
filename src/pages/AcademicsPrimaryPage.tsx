import { ChevronRight, Check, BookOpen, Users, Globe, Target, Lightbulb, Heart, Beaker, Activity, Clock, Music, Palette, MessageCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AcademicsPrimaryPageProps {
  onNavigate: (path: string) => void;
}

export function AcademicsPrimaryPage({ onNavigate }: AcademicsPrimaryPageProps) {
  return (
    <div className="w-full ">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2024/07/DSC04962.jpg)`,
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
              <li className="text-[#fffae9] ">Primary</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              AGES 6 TO 11 · PRIMARY SCHOOL
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS Primary School – Grades 1 to 5
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              At LHBS, we believe every child is a natural learner. Our child-centred Primary programme places students at the heart of everything we do, nurturing their social and emotional growth, independence, and confidence through bilingual excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Book a School Tour
              </button>
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONE PRIMARY JOURNEY, ONE APPROACH, BILINGUAL EXCELLENCE */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] text-center mb-4"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              One Primary Journey, One Approach, Bilingual Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image */}
            <div className="relative h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/07/z5633818664921_9dd3faec93cd8c9c2e86d325df8d03a4.jpg"
                alt="LHBS Primary students engaged in bilingual learning activities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content Blocks */}
            <div className="space-y-8">
              {/* Block 1 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  Vietnamese National Curriculum
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  LHBS follows Vietnam's General Education Curriculum established by the Ministry of Education and Training (MOET), building knowledge according to official standards for each grade from Grade 1 through Grade 5.
                </p>
              </div>

              {/* Block 2 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  One Coherent Primary Programme
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  We design a seamless learning journey from Grade 1 to 5, building on previous stages and preparing for Secondary School. Our programme nurtures social and emotional development, independence, problem-solving skills, and a genuine love of learning.
                </p>
              </div>

              {/* Block 3 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  One Approach
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  Our child-centred, activity-based teaching approach keeps classes small (around 28 students per class) to ensure personalized attention. We provide a safe, full-day environment that supports both academic excellence and student wellbeing.
                </p>
              </div>

              {/* Block 4 */}
              <div className="border-l-4 border-[#FABA1E] pl-6">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-3">
                  Bilingual Learning in English and Vietnamese
                </h3>
                <p className=" text-[#212121]/70 text-lg leading-relaxed">
                  Our bilingual framework uses Cambridge Kid's Box and English Central to help students achieve Cambridge Young Learners English (YLE) certificates—Starters, Movers, and Flyers. Students build strong English proficiency while maintaining excellence in Vietnamese.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREPARING FOR LOWER SECONDARY AND FUTURE PATHWAYS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Preparing for Lower Secondary and Future Pathways
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS Primary School builds a solid academic foundation aligned with MOET standards and our comprehensive bilingual programme. From Grades 4 and 5, we specifically prepare students for the transition to Secondary and High School.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Students develop essential life skills and 21st-century competencies, following a clear roadmap: Primary → Secondary → High School → international programmes such as the Dual Diploma, 2+2 pathways, and university preparation worldwide.
              </p>
              <button 
                onClick={() => onNavigate('/academics/lower-secondary')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Explore LHBS Secondary School
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/IMG_9717.jpg"
                alt="LHBS students preparing for secondary education"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INNOVATIVE ENGLISH & PHONICS SYSTEM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/IMG_0297.jpg"
                alt="Students learning English through Cambridge curriculum"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Innovative English & Phonics System
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Cambridge Kid's Box serves as our comprehensive 3-in-1 English course, combining online English instruction, Cambridge exam preparation, and integrated science subjects. This proven system helps students build confidence in daily English communication.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                English Central online platform provides 24/7 access to listening and speaking practice, allowing students to improve their pronunciation and fluency anytime, anywhere. Our goal is to help every student confidently use English and successfully conquer Cambridge examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A PERSONALISED LEARNING APPROACH & LIFE SKILLS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A Personalised Learning Approach
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Every child is a natural learner. LHBS places students at the centre of their educational journey, focusing on social and emotional growth, independence, and building self-confidence through personalized support.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Our teachers track each student's progress and differentiate learning through small classes, integrated teaching methods, and continuous assessment. This approach ensures every child receives the support they need to reach their full potential.
              </p>

              {/* Life Skills Sub-block */}
              <div className="bg-white p-8 border-l-4 border-[#1a5336]">
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                  Life Skills Education
                </h3>
                <p className=" text-[#212121]/70 leading-relaxed mb-4">
                  Beyond academics, we integrate comprehensive life skills modules covering:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Safety awareness and abuse prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Positive behaviour management and social skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Financial literacy through the Cha-Ching project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70">Environmental responsibility and community engagement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/07/IMG_8029.jpg"
                alt="Teacher providing personalized support to primary student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. A TYPICAL DAY AT LHBS PRIMARY */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-4">
            <p className="text-[#FABA1E] mb-2  uppercase tracking-wider text-sm">
              PRIMARY
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              A Typical Day at LHBS Primary
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto mb-16">
              Every day at LHBS Primary is filled with learning, creativity, and personal growth in a structured, supportive environment.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className=" p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Morning Arrival & Homeroom</h3>
              </div>
              <p className=" text-[#212121]/70">
                Students are welcomed warmly, participate in class meetings, set learning goals for the day, and prepare for structured lessons.
              </p>
            </div>

            {/* Step 2 */}
            <div className=" p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Core Academic Lessons</h3>
              </div>
              <p className=" text-[#212121]/70">
                Vietnamese curriculum subjects including Mathematics, Vietnamese Language, Science, Social Studies, and Arts delivered through engaging methods.
              </p>
            </div>

            {/* Step 3 */}
            <div className=" p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">English & Bilingual Blocks</h3>
              </div>
              <p className=" text-[#212121]/70">
                Cambridge Kid's Box lessons, English Central practice sessions, and integrated English-medium instruction across subjects.
              </p>
            </div>

            {/* Step 4 */}
            <div className=" p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">STEAM & Projects</h3>
              </div>
              <p className=" text-[#212121]/70">
                Hands-on STEAM courses, thematic project work, problem-solving activities, and collaborative learning experiences.
              </p>
            </div>

            {/* Step 5 */}
            <div className=" p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#FABA1E]" />
                </div>
                <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Reading Time & After-school Clubs</h3>
              </div>
              <p className=" text-[#212121]/70">
                Dedicated library reading time to develop literacy habits, followed by optional clubs and enrichment activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGHLY QUALIFIED TEACHERS WHO INSPIRE */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758685733907-42e9651721f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwdGVhY2hlciUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzEwMjQzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Experienced LHBS teacher inspiring primary students"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Highly Qualified Teachers Who Inspire
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our experienced teaching staff employ modern pedagogical methods and continuously develop their professional skills to deliver engaging, effective lessons. Teachers integrate technology and AI-enhanced learning tools where relevant to enrich the educational experience.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                They play a crucial role in nurturing bilingual, globally-minded students who are curious, compassionate, and equipped with the skills to thrive in an interconnected world.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/leadership')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Meet Our Teachers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDUCATION BEYOND THE CLASSROOM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Education Beyond the Classroom
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS provides a safe, full-day school environment where learning extends beyond traditional lessons. Students participate in clubs, events, competitions, summer programmes, and enrichment courses that develop diverse talents and interests.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Our co-curricular offerings include STEAM/STEM activities, Global Citizens programmes, AI and Robotics, Financial Management workshops, study-abroad opportunities, and cultural exchange experiences that broaden horizons and prepare students for global citizenship.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhY3Rpdml0aWVzJTIwY2x1YnMlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMxMDI0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students participating in extracurricular activities and clubs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. A SUPPORTIVE PARTNERSHIP WITH OUR PARENTS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576673196028-cd681592bd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjB0ZWFjaGVyJTIwbWVldGluZyUyMHNjaG9vbHxlbnwxfHx8fDE3NjMxMDI0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LHBS teacher meeting with parents for collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A Supportive Partnership with Our Parents
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                We believe education is most effective when parents and teachers work together. LHBS maintains open, transparent communication with families through our Parent Handbook, regular meetings, digital channels, and dedicated counselling services.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed">
                Our team collaborates closely with parents to support each child's unique learning roadmap, address concerns promptly, celebrate achievements, and ensure holistic wellbeing throughout their Primary School journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR FACILITIES: AN ENVIRONMENT MADE FOR LEARNING */}
      <section className="bg-white py-24 md:py-32">
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
            {/* Left: Text Content */}
            <div>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                LHBS Primary classrooms are modern, spacious learning environments (approximately 60 m²) designed for 25–30 students. Each classroom features air-conditioning, integrated ICT tools, and flexible furniture arrangements that support collaborative learning.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Our campus provides comprehensive facilities including well-stocked libraries, outdoor playgrounds, sports fields, music and art rooms, science laboratories, swimming pool, medical clinic, and safe transportation services—everything needed for a well-rounded education.
              </p>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Explore Our Campus
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBmYWNpbGl0aWVzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzEwMjQzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern LHBS classroom facilities and learning environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING TAGLINE & CTA */}
      <section className="bg-[#1a5336] py-24 md:py-32"
         style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}>
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 
            className="font-['SVN-Gotham'] text-[#fffae9] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            Nurturing bilingual leaders for a changing world
          </h2>
          <p className=" text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            LHBS Primary School provides the essential foundation for future academic success, global citizenship, and lifelong learning. Join us on this transformative educational journey.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              Book a School Tour
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
