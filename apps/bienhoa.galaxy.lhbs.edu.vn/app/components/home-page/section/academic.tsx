import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img01 from "@assets/images/home-page/section-academics/01.png"
import img02 from "@assets/images/home-page/section-academics/02.png"
import img03 from "@assets/images/home-page/section-academics/03.png"
import cloudcard from '@assets/images/home-page/section-academics/card-cloud.png'
import lhbscard from '@assets/images/home-page/section-academics/card-lhbs.png'

const academicDivisions = [
  {
    id: 1,
    gradeRange: "",
    title: "Holistic Development",
    description: "The programme supports children’s growth through play, routines, and exploration, helping them develop confidence and strong skills.",
    image: img01,
    alt: "LHBS Primary School students",
    href: "/primary-school"
  },
  {
    id: 2,
    gradeRange: "",
    title: "Creative & Experiential Learning",
    description: "Art, music, and sensory activities foster imagination and self-expression. Students learn by experimenting and discovering the world meaningfully.",
    image: img02,
    alt: "LHBS Secondary School students",
    href: "/secondary-school"
  },
  {
    id: 3,
    gradeRange: "",
    title: "Balanced Academic Foundation",
    description: "Children engage in playful activities that foster early literacy, numeracy, science, and language skills for future learning.",
    image: img03,
    alt: "LHBS High School students",
    href: "/high-school"
  }
];

interface AcademicSectionProps {
  onNavigate: (path: string) => void;
}

export default function AcademicSection({ onNavigate }: AcademicSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
    id='academic-divisions'
    className="py-24 md:py-32" ref={ref}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
{/* Section Header */}
          <div className='flex flex-col items-center mb-12'>
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            {/* Thêm max-w-4xl để giới hạn chiều rộng và căn giữa tiêu đề */}
            <div className='max-w-4xl'>
              <h3 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center leading-tight'>
                Kindergarten Education Programme
              </h3>
            </div>
          </div>
          <p className="text-[#212121] font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Our programme embraces a holistic, child-centred approach to teaching and learning, nurturing every aspect of a child’s development - emotional, physical, creative, and cognitive for students aged 3-6.
          </p>
        </motion.div>

        {/* Academic Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicDivisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="relative group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => onNavigate(division.href)}
            >
              {/* Top Half - Image Section */}
              <div className="relative h-[250px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={division.image}
                  alt={division.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Cloud Card at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                  <img
                    src={cloudcard}
                    alt="Cloud decoration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Bottom Half - Content Section */}
              <div className="relative p-6 bg-white pb-20">
                {/* Grade Range Badge */}
                <div className="inline-block mb-3">
                  <span className="text-[#FABA1E] text-sm font-bold uppercase tracking-wider">
                    {division.gradeRange}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-[#1A5336]">
                  {division.title}
                </h3>

                {/* Description */}
                <p className="text-[#212121] text-sm leading-relaxed mb-4">
                  {division.description}
                </p>
              </div>

              {/* LHBS Card at bottom right corner - absolute to the card wrapper */}
              <div className="absolute bottom-0 right-0 w-64 h-auto pointer-events-none">
                <img
                  src={lhbscard}
                  alt="LHBS decoration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
