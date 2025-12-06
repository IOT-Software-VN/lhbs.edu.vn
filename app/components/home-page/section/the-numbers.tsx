import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import lhbslogo from "@/images/base/logo.png"
const statsData = [
  {
    number: "100%",
    description: "Years of excellence"
  },
  {
    number: "250",
    description: "Experienced Teachers"
  },
  {
    number: "2,600",
    description: "Students of all grades"
  }
];

// University/College logos for the carousel
const universityLogos = [
  {
    id: 1,
    name: "University Logo 1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RMIT_University_Logo.svg/1200px-RMIT_University_Logo.svg.png"
  },
  {
    id: 2,
    name: "Van Lang University",
    image: "https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Dai-Hoc-Van-Lang-H.png"
  },
  {
    id: 3,
    name: "FPTU",
    image: "https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
  },
  {
    id: 4,
    name: "VG University",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/VGU-Logo.png"
  },
  {
    id: 5,
    name: "LHBS",
    image: lhbslogo
  },
    {
    id: 6,
    name: "CSU",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/CSU_San_Marcos_seal.svg/1200px-CSU_San_Marcos_seal.svg.png"
  },
  {
    id: 7,
    name: "NYU",
    image: "https://logos-world.net/wp-content/uploads/2021/09/NYU-Logo.png"
  },
  {
    id: 8,
    name: "Nevada University",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/University-of-nevada-vertical-blue.svg"
  }
];

export default function TheNumbers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="container mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-4 leading-tight bg-gradient-to-b from-[#FF9500] to-[#FFD267] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #FF9500 0%, #FFD267 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            By the numbers
          </h2>

        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-20"
        >
          {statsData.map((stat, index) => (
            <div key={index} className={`relative flex flex-col items-center text-center ${index < 2 ? 'md:border-r md:border-gray-400' : ''}`}>
              
              {/* Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="mb-4"
              >
                <span 
                  className="block text-7xl lg:text-8xl font-black leading-none"
                  style={{ 
                    color: '#00602F',
                    fontSize: '72px',
                    fontWeight: '900'
                  }}
                >
                  {stat.number}
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <p 
                  className="text-lg md:text-[28px] font-light max-w-xs"
                  style={{ 
                    color: '#212121',
                    fontWeight: '350'
                  }}
                >
                  {stat.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* University Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Carousel
            className="w-full px-20 mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {universityLogos.map((logo) => (
                <CarouselItem key={logo.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center h-24 md:h-28 lg:h-32 transition-all duration-200"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="max-h-full max-w-full object-contain p-2"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="w-12 h-12 absolute left-4 top-1/2 -translate-y-1/2 border-0" />
            <CarouselNext className="w-12 h-12  absolute right-4 top-1/2 -translate-y-1/2 border-0" />
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
