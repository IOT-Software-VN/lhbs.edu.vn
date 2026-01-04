export interface AnnualReport {
  id: string
  title: string
  year: string
  description: string
  pdfUrl: string
  publishDate: string
  fileSize: string
  featured?: boolean
}

export interface FormDocument {
  id: string
  name: string
  category: 'admission' | 'leave' | 'health' | 'complaint' | 'other'
  description: string
  pdfUrl: string
  fileSize: string
  lastUpdate: string
}
