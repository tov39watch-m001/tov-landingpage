import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden pt-16">
      {/* Diagonal accent lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="diagonal-line"
          style={{
            left: `${i * 15 - 10}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i * 0.5}s`,
            opacity: 0.15,
          }}
        />
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,195,0,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#FFC300]/30 text-[#FFC300] text-xs font-semibold px-4 py-2 rounded-full mb-6 hero-title">
          <span className="w-2 h-2 bg-[#FFC300] rounded-full animate-pulse" />
          ผลิตภัณฑ์เส้นผม Professional Grade
        </div>

        <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
          <span className="text-[#FFC300]">TOV</span>
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/90">ผู้เชี่ยวชาญด้านเส้นผม<br />สำหรับซาลอนมืออาชีพ</span>
        </h1>

        <p className="hero-sub text-base sm:text-xl text-[#AAAAAA] mb-6 max-w-2xl mx-auto leading-relaxed">
          ผลิตภัณฑ์คุณภาพระดับ Professional · รับผลิต OEM แบรนด์ของคุณ
        </p>

        {/* OEM detail pills */}
        <div className="hero-sub flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {[
            '⚗️ ออกแบบสูตรเคมี',
            '🫙 ครีมซอง / กระป๋อง / ขวด',
            '📦 ใส่กล่อง & ถุงกระดาษ',
            '🏷️ ออกแบบฉลาก & แบรนด์',
            '🚚 พร้อมแพคจำหน่าย',
          ].map(item => (
            <span
              key={item}
              className="bg-[#1A1A1A] border border-[#FFC300]/20 text-[#FFC300]/90 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 bg-[#FFC300] hover:bg-[#E6A800] text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 text-base"
          >
            ดูสินค้าทั้งหมด <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border-2 border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            <Phone size={18} />
            สอบถาม OEM
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { n: '5,000+', l: 'ซาลอนที่ไว้วางใจ' },
            { n: '80+',    l: 'สูตรผลิตภัณฑ์' },
            { n: 'OEM',    l: 'MOQ เพียง 500 ชิ้น' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-black text-[#FFC300]">{s.n}</div>
              <div className="text-xs text-[#AAAAAA] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
    </section>
  )
}
