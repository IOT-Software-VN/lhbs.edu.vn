export interface AnnualReport {
  id: string
  title: string
  year: string
  description: string
  pdfUrl: string
  publishDate: string
  fileSize: string
  featured?: boolean
  thumbnailUrl?: string
}

export interface FormDocument {
  id: string
  name: string
  category: 'report' | 'policy' | 'form'
  description: string
  pdfUrl: string
  fileSize: string
  lastUpdate: string
}

export interface TrustStatistic {
  id: string
  value: string
  label: string
  icon: 'calendar' | 'users' | 'graduation' | 'award'
}

export interface Accreditation {
  id: string
  name: string
  logoUrl: string
  description?: string
}

export type DocumentCategory = 'report' | 'policy' | 'form'
