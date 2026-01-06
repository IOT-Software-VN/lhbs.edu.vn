export interface SchoolLevel {
  id: string
  title: string
  subtitle: string
  descriptions: string[]
  image: string
  slug: string
  learnMoreUrl?: string
}

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: 'galaxy-kc',
    title: 'MẦM NON',
    subtitle: '12 tháng - 5 tuổi',
    descriptions: [
      'Tôn trọng sự khác biệt của từng trẻ',
      'Phát triển toàn diện Đức - Trí - Thể Mỹ',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/mam-non.jpg',
    slug: '/campus/galaxy-kc'
  },

  {
    id: 'elementary',
    title: 'TIỂU HỌC',
    subtitle: 'Lớp 1 - Lớp 5',
    descriptions: [
      'Chương trình học tập cá nhân hóa.',
      'Phát triển toàn diện thể chất và trí tuệ',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/tieu-hoc.png',
    slug: '/campus/elementary',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/primary-school'
  },

  {
    id: 'middle',
    title: 'TRUNG HỌC CƠ SỞ',
    subtitle: 'Lớp 6 - Lớp 9',
    descriptions: [
      'Chương trình học tập cá nhân hóa',
      'Phát triển toàn diện thể chất và trí tuệ.',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/trung-hoc.png',
    slug: '/campus/middle-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/secondary-school'
  },

  {
    id: 'highschool',
    title: 'TRUNG HỌC PHỔ THÔNG',
    subtitle: 'Lớp 10 - Lớp 12',
    descriptions: [
      'Chương trình học tập cá nhân hóa',
      'Chương trình hướng nghiệp phù hợp với năng lực',
      'Sẵn sàng chinh phục các trường đại học hàng đầu trong nước và quốc tế'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-01.png',
    slug: '/campus/high-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/high-school'
  }
]
