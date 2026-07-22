import ContactSection from '../components/ContactSection'
import { MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111111] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="mb-4">
          <h1 className="text-3xl font-black text-white">ติดต่อเรา</h1>
          <div className="w-16 h-1 bg-[#FFC300] rounded-full mt-2 mb-4" />
          <div className="flex items-center gap-2 text-[#AAAAAA] text-sm">
            <MapPin size={14} className="text-[#FFC300]" />
            888 หมู่ที่ 5 ต.บางเพรียง อ.บางบ่อ จ.สมุทรปราการ 10560
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
