import type { BreadcrumbItem } from '@/components/ui/breadcrumb'
import type { Director, StudentAchievement } from './types'

const founderImage = '/images/base/thay-tai.png'

export const leadershipData: Director[] = [
  {
    id: 1,
    image: founderImage,
    name: 'Cố Nhà giáo nhân dân - Tiến sĩ Đỗ Hữu Tài',
    role1: 'Nhà sáng lập',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 2,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/04/CoLanHuong-201x300.jpg',
    name: 'Bà Nguyễn Thị Lan Hương',
    role1: 'Chủ tịch Hội đồng quản trị Công ty TNHH Hương Nguyên',
    role2: 'Chủ đầu tư Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 3,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2022/10/MG_9775-blur-185x300.jpg',
    name: 'Tiến sĩ Đỗ Thị Lan Đài',
    role1: 'Thành viên Hội đồng quản trị Công ty TNHH Hương Nguyên',
    role2: 'Chủ tịch Hội đồng quản trị Trường Đại học Lạc Hồng'
  },
  {
    id: 4,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2022/05/55900a55f39705c95c86-scaled-e1689042031581-200x300.jpg',
    name: 'Cô Trần Thị Hoa',
    role1: 'Phó Hiệu trưởng',
    role2: 'Hành chính quản trị'
  }
]

export const preschoolData: Director[] = [
  {
    id: 'p1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/08/DANG-THI-TUYET_HIEU-TRUONG-MN_LHBS-01-01-200x300.jpg',
    name: 'Cô Đặng Thị Tuyết',
    role1: 'Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  },
  {
    id: 'p2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/10/Co-Kieu_LHBS-2-200x300.jpg',
    name: 'Cô Hoàng Thị Ngọc Kiều',
    role1: 'Phó Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  },
  {
    id: 'p3',
    image:
      'https://lhbs.edu.vn/wp-content/uploads/elementor/thumbs/NGUYEN-THI-MONG-HUYEN_HIEU-PHO-MN_LHBS-qb9k7xd646xvjekkzkfb0extuzqmzu7npmnd6xc52w.jpg',
    name: 'Cô Nguyễn Thị Mộng Huyền',
    role1: 'Phó Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  }
]

export const highSchoolData: Director[] = [
  {
    id: 'h1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/08/z6919167807030_50bfac5d1dbb89531e6e5552034497ae.jpg',
    name: 'Cô Hoàng Thị Diễm Trang',
    role1: 'Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/BL8Q9322-e1689041913717-193x300.jpg',
    name: 'Cô Nguyễn Thị Thuật',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h3',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/07/IMG_1664-e1689041977870.jpg',
    name: 'Cô Trương Thu Trang',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h4',
    image:
      'https://lhbs.edu.vn/wp-content/uploads/elementor/thumbs/IMG_1652-e1688982179811-q97axoc3co13x600s1xy9svvclttxr106ih49ar1dk.jpg',
    name: 'Cô Nguyễn Thị Thu Thảo',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  }
]

export const DIRECTORS_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Ban lãnh đạo' }
]

export const studentAchievementsData: StudentAchievement[] = [
  {
    id: 1,
    image:
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/543461130_759818933346916_1979257807565480094_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fIsdA_fAiGgQ7kNvwF40L5i&_nc_oc=AdmCcQ2qqNMRIz1SbqnLsE6pcQPUNUPEHJ8pnaenAI_DrXrG_ZL-vepQZr2g7MOupT0SNTGD-4yup6XwmFZykqF8&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=w7lOX9_ajBDpMQB_g66r2Q&oh=00_AfldLeyLfXGM8YNuGu7FRdeVtDPb_9fM_TeoN5GikB2STg&oe=693B925A',
    name: 'VAN PHÚ',
    achievement: 'ĐẠI HỌC BÁCH KHOA'
  },
  {
    id: 2,
    image:
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/543402169_759821123346697_2032243040218498585_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bWb6x784cHoQ7kNvwFHZAZF&_nc_oc=AdnuuyRm-m4XPKQYSN2PMFuyXTumNM0_Y-6kEkUfiye4LYWI6_oTf1vYUTq-jtUynOMCjkT3a2-asR9vJnuhGRI1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=h2xIaMXQGo8ie9uQQPHh3Q&oh=00_Afm7d3tr_-5WyL2e57y2kpKGo9Xr6IMcOgvomXac2lGPtQ&oe=693B93DA',
    name: 'ĐẶNG DOANH',
    achievement: 'ÚC - DU HỌC'
  },
  {
    id: 3,
    image:
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/543343603_759821950013281_4292234303308542164_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vQLNqYRr0TwQ7kNvwECSCGV&_nc_oc=AdkOFVZfr0-rKazJlV24LMPRF1fFOE03tLbgQmLfN-ymAnfBWqQIWHx50FNZMnS2t9OgOy09rnC7G29OKqREgpbD&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=-wKI18So16LijMHOdfE2Ug&oh=00_AflNpfleoUlpMS4l43v1P7jeYjV8SeWt_QviB6J_me1pkA&oe=693B8D04',
    name: 'KHÁNH HƯNG',
    achievement: 'ĐẠI HỌC RMIT VIỆT NAM'
  },
  {
    id: 4,
    image:
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/543420378_759821533346656_1832669033012096925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kQRDjZ5qcQEQ7kNvwE9yb4A&_nc_oc=AdlWF7ooWuOD7V4C0mgH5Q5ad_PnReF_P4vybrONvUhh8qKFXmY4gKuU4f7SVdeFVO7cUhjwScIp1B-yVUaVcyoH&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=yapSSk4toEDkuTXglCltPA&oh=00_AfkpMpnx9TcOcAAlIbeCJxWWsDL_Pfz27NS0h6pbQsAQgg&oe=693B8F4D',
    name: 'TIỂU ĐÔNG',
    achievement: 'ĐẠI HỌC VĂN LANG'
  },
  {
    id: 5,
    image:
      'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/543397657_759821726679970_4407237426915228198_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wOBaT_aebjQQ7kNvwGYW8Pe&_nc_oc=Adm6oDmLbAdsOx6Ig8YHN-pWxEy-YFiVOnhQk9_RljC0LU7TfrOxSP54O2id8EGVLJMxtjyjKtdgcl5YmqohZTCh&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ZnNc56cKA7yXXr4Lmu13hA&oh=00_AfloIG7MYb91k5wGMGxLeG2bc6BcKIeZfUKd3k4wRlhHyA&oe=693BB30D',
    name: 'GIA HƯNG',
    achievement: 'HOA KỲ - DU HỌC'
  }
]
