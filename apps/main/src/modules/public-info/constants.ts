import type { BreadcrumbItem } from '@lhbs/ui'
import type { AnnualReport, FormDocument, TrustStatistic, Accreditation } from './types'

// =============================================================================
// HERO & BREADCRUMB
// =============================================================================

export const HERO_BACKGROUND_IMAGE = 'https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'

export const PUBLIC_INFO_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Công khai thông tin' }
]

// =============================================================================
// TRUST STATISTICS
// =============================================================================

export const TRUST_STATISTICS: TrustStatistic[] = [
  {
    id: 'years',
    value: '11',
    label: 'Năm hoạt động',
    icon: 'calendar'
  },
  {
    id: 'students',
    value: '2,600',
    label: 'Học sinh',
    icon: 'users'
  },
  {
    id: 'teachers',
    value: '250',
    label: 'Giáo viên',
    icon: 'graduation'
  },
  {
    id: 'graduation-rate',
    value: '100',
    label: 'Tỷ lệ tốt nghiệp',
    icon: 'award'
  }
]

// =============================================================================
// ACCREDITATIONS
// =============================================================================

export const ACCREDITATIONS: Accreditation[] = [
  {
    id: 'cambridge',
    name: 'Cambridge International',
    logoUrl: '/images/accreditation/cambridge.png',
    description: 'Chương trình Cambridge IGCSE & A-Level'
  },
  {
    id: 'moet',
    name: 'Bộ Giáo dục & Đào tạo',
    logoUrl: '/images/accreditation/moet.png',
    description: 'Được cấp phép hoạt động bởi Bộ GD&ĐT'
  },
  {
    id: 'doet',
    name: 'Sở Giáo dục & Đào tạo',
    logoUrl: '/images/accreditation/doet.png',
    description: 'Được cấp phép bởi Sở GD&ĐT Đồng Nai'
  }
]

// =============================================================================
// ANNUAL REPORTS
// =============================================================================

export const ANNUAL_REPORTS: AnnualReport[] = [
  {
    id: 'report-2024-2025',
    title: 'Báo cáo thường niên năm học 2024 - 2025',
    year: '2024-2025',
    description:
      'Báo cáo toàn diện về hoạt động giáo dục, chất lượng đào tạo và các thành tích nổi bật của hệ thống trường Song ngữ Lạc Hồng trong năm học 2024-2025',
    pdfUrl: '/documents/Anual-Report-LHBS.pdf',
    publishDate: '01/02/2025',
    fileSize: '15.2 MB',
    featured: true,
    thumbnailUrl: '/images/reports/annual-report-2024-2025-cover.jpg'
  },
  {
    id: 'report-2023-2024',
    title: 'Báo cáo thường niên năm học 2023 - 2024',
    year: '2023-2024',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2023-2024',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2024/02/BAO-CAO-THUONG-NIEN-2023-2024.pdf',
    publishDate: '15/02/2024',
    fileSize: '14.8 MB'
  },
  {
    id: 'report-2022-2023',
    title: 'Báo cáo thường niên năm học 2022 - 2023',
    year: '2022-2023',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2022-2023',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2023/02/BAO-CAO-THUONG-NIEN-2022-2023.pdf',
    publishDate: '20/02/2023',
    fileSize: '13.5 MB'
  },
  {
    id: 'report-2021-2022',
    title: 'Báo cáo thường niên năm học 2021 - 2022',
    year: '2021-2022',
    description: 'Báo cáo tổng kết hoạt động giáo dục năm học 2021-2022',
    pdfUrl: 'https://lhbs.edu.vn/wp-content/uploads/2022/02/BAO-CAO-THUONG-NIEN-2021-2022.pdf',
    publishDate: '25/02/2022',
    fileSize: '12.9 MB'
  }
]

// =============================================================================
// DOCUMENTS (Unified: Forms + Policies)
// =============================================================================

export const DOCUMENTS: FormDocument[] = [
  // Forms - Parent
  {
    id: 'form-leave-02',
    name: 'Đơn rút hồ sơ',
    category: 'form',
    description: 'Mẫu đơn rút hồ sơ học sinh',
    pdfUrl: 'https://drive.google.com/file/d/1I1QBFJaFAYp1g8CYWYJojzIRsj-g5bTg/preview',
    fileSize: '200 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-01',
    name: 'Đơn đề nghị cấp giấy xác nhận học sinh',
    category: 'form',
    description: 'Mẫu đơn đề nghị cấp giấy xác nhận học sinh',
    pdfUrl: 'https://drive.google.com/file/d/1knZSDJ5fnT0rIbBEUPecPte0tVX2Fq8I/preview',
    fileSize: '250 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-02',
    name: 'Đơn xin photo hồ sơ',
    category: 'form',
    description: 'Mẫu đơn xin photo hồ sơ học sinh',
    pdfUrl: 'https://drive.google.com/file/d/197qKBa2x7OYLtI-FJXnQ9ojwzr6lOxp8/preview',
    fileSize: '180 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-03',
    name: 'Đơn thay đổi SĐT',
    category: 'form',
    description: 'Mẫu đơn đề nghị thay đổi số điện thoại liên hệ',
    pdfUrl: 'https://drive.google.com/file/d/1QglJuLUtdhk53ZqwbWU8wmDUbz7jCnFq/preview',
    fileSize: '200 KB',
    lastUpdate: '30/12/2024'
  },
  {
    id: 'form-other-04',
    name: 'Đơn đăng ký/ Hủy đăng ký dịch vụ',
    category: 'form',
    description: 'Mẫu đơn đăng ký hoặc hủy đăng ký các dịch vụ của nhà trường',
    pdfUrl: 'https://drive.google.com/file/d/1QdkVPTZtNIFjcLJRdL7srYDP52QZDgKI/preview',
    fileSize: '220 KB',
    lastUpdate: '30/12/2024'
  }
]

export const DOCUMENT_CATEGORIES = [
  { id: 'report', label: 'Báo cáo thường niên' },
  { id: 'policy', label: 'Chính sách' },
  { id: 'form', label: 'Biểu mẫu' }
] as const
