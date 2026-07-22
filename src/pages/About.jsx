import { ShieldCheck, Users, Award, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const milestones = [
  { year: '2014', text: 'ก่อตั้งบริษัท TOV เริ่มต้นด้วยทีมงาน 5 คน' },
  { year: '2017', text: 'ขยายโรงงานผลิต รองรับออเดอร์กว่า 10,000 ชิ้น/เดือน' },
  { year: '2020', text: 'เปิดตัวแพลตฟอร์มออนไลน์ สั่งซื้อง่ายทุกที่ทุกเวลา' },
  { year: '2024', text: 'ลูกค้ากว่า 50,000 ราย ทั่วประเทศไทย' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#111111] pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(255,195,0,0.06), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl font-black text-[#FFC300]">TOV</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">เกี่ยวกับเรา</h1>
          <p className="text-[#AAAAAA] leading-relaxed max-w-2xl mx-auto">
            TOV คือผู้นำด้านบรรจุภัณฑ์และสิ่งพิมพ์คุณภาพสูง มากกว่า 10 ปีที่เราพิสูจน์ตัวเองด้วยสินค้าที่ดีที่สุด
            ราคาที่เป็นธรรม และบริการที่ใส่ใจลูกค้าทุกคน
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users,      n: '50,000+', l: 'ลูกค้าทั่วประเทศ' },
              { icon: Award,      n: '200+',    l: 'ประเภทสินค้า' },
              { icon: Clock,      n: '10+',     l: 'ปีประสบการณ์' },
              { icon: ShieldCheck,n: '100%',    l: 'รับประกันคุณภาพ' },
            ].map(s => {
              const Icon = s.icon
              return (
                <div key={s.l} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 text-center">
                  <Icon size={28} className="text-[#FFC300] mx-auto mb-3" />
                  <div className="text-3xl font-black text-[#FFC300]">{s.n}</div>
                  <div className="text-[#AAAAAA] text-xs mt-1">{s.l}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8 text-center">เส้นทางของ TOV</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2A2A2A]" />
            <div className="space-y-8">
              {milestones.map(m => (
                <div key={m.year} className="flex gap-6">
                  <div className="w-12 h-12 bg-[#FFC300] rounded-full flex items-center justify-center flex-shrink-0 z-10 text-black text-xs font-black">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 flex-1">
                    <span className="text-[#FFC300] font-bold text-sm">{m.year}</span>
                    <p className="text-[#AAAAAA] text-sm mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111] text-center">
        <h2 className="text-2xl font-black text-white mb-4">พร้อมให้บริการคุณวันนี้</h2>
        <p className="text-[#AAAAAA] mb-8">ติดต่อทีมงาน TOV เพื่อขอคำปรึกษาและใบเสนอราคาฟรี</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/products" className="bg-[#FFC300] hover:bg-[#E6A800] text-black font-bold px-8 py-3 rounded-xl transition-colors">
            ดูสินค้า
          </Link>
          <Link to="/contact" className="border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black font-bold px-8 py-3 rounded-xl transition-colors">
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </div>
  )
}
