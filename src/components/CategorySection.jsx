import { Link } from 'react-router-dom'
import { Droplets, Sparkles, Zap, FlaskConical, Tag, Scissors } from 'lucide-react'

const cats = [
  { name: 'แชมพู & ครีมนวด', icon: Droplets,    desc: 'สูตรบำรุง ฟื้นฟู และเพิ่มความชุ่มชื้น' },
  { name: 'ทรีทเม้นท์',       icon: Sparkles,    desc: 'Keratin, Collagen, Argan Oil เกรด Pro' },
  { name: 'เซรั่ม & สเปรย์',  icon: Zap,         desc: 'ปกป้องความร้อน เพิ่มประกาย ลดฟริซซี่' },
  { name: 'เคมีซาลอน',        icon: FlaskConical, desc: 'ย้อมสี ดัดผม ยืดผม ฟอกสี ระดับ Pro' },
  { name: 'OEM แบรนด์',       icon: Tag,          desc: 'รับผลิต Private Label ครบวงจร MOQ 500' },
  { name: 'อุปกรณ์ซาลอน',     icon: Scissors,     desc: 'เครื่องมือและอุปกรณ์สำหรับช่างมืออาชีพ' },
]

export default function CategorySection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">หมวดหมู่สินค้า</h2>
          <div className="w-16 h-1 bg-[#FFC300] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map(cat => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.name}
                to={`/products?cat=${encodeURIComponent(cat.name)}`}
                className="cat-block group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex items-center gap-5 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFC300]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#111] transition-colors">
                  <Icon size={26} className="cat-icon text-[#FFC300] group-hover:text-[#111] transition-colors" />
                </div>
                <div>
                  <div className="cat-name text-white font-bold text-base group-hover:text-[#111] transition-colors">{cat.name}</div>
                  <div className="cat-desc text-[#AAAAAA] text-xs mt-1 group-hover:text-[#333] transition-colors">{cat.desc}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
