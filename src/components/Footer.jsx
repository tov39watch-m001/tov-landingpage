import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

const productLinks = ['แชมพู & ครีมนวด', 'ทรีทเม้นท์', 'เซรั่ม & สเปรย์', 'เคมีซาลอน', 'OEM แบรนด์']
const helpLinks = [
  { label: 'วิธีสั่งสินค้า', to: '/about' },
  { label: 'นโยบายการจัดส่ง', to: '/about' },
  { label: 'การรับประกัน', to: '/about' },
  { label: 'ติดต่อเรา', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-black text-[#FFC300] tracking-widest">TOV</Link>
            <p className="text-[#AAAAAA] text-sm mt-3 leading-relaxed">
              ผู้เชี่ยวชาญผลิตภัณฑ์เส้นผมระดับ Professional <br />
              รับผลิต OEM & Private Label สำหรับซาลอน
            </p>
            <p className="text-[#AAAAAA] text-lg font-semibold mt-4 leading-relaxed">888 หมู่ที่ 5 ต.บางเพรียง<br />อ.บางบ่อ จ.สมุทรปราการ 10560</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">สินค้า</h4>
            <ul className="space-y-2">
              {productLinks.map(p => (
                <li key={p}>
                  <Link
                    to={`/products?cat=${encodeURIComponent(p)}`}
                    className="text-[#AAAAAA] hover:text-[#FFC300] text-sm transition-colors"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">ช่วยเหลือ</h4>
            <ul className="space-y-2">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[#AAAAAA] hover:text-[#FFC300] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">ติดตามเรา</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: Facebook,       label: 'Facebook',   href: '#' },
                { icon: Instagram,      label: 'Instagram',  href: '#' },
                { icon: Youtube,        label: 'YouTube',    href: '#' },
                { icon: MessageCircle,  label: 'LINE OA',    href: '#' },
              ].map(s => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 text-[#AAAAAA] hover:text-[#FFC300] text-sm transition-colors"
                  >
                    <Icon size={16} />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} TOV. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="text-[#444] hover:text-[#FFC300] transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
