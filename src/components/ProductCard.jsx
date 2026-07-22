import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'

const categoryMocks = {
  'แชมพู & ครีมนวด': [
    { bg: 'from-yellow-400 to-amber-500',  emoji: '🧴', label: 'แชมพู' },
    { bg: 'from-amber-300 to-yellow-500',  emoji: '💛', label: 'ครีมนวด' },
    { bg: 'from-yellow-300 to-amber-400',  emoji: '🫧', label: 'โฟม' },
    { bg: 'from-amber-400 to-orange-400',  emoji: '✨', label: 'บำรุง' },
  ],
  'ทรีทเม้นท์': [
    { bg: 'from-yellow-400 to-orange-500', emoji: '💆', label: 'มาส์ก' },
    { bg: 'from-amber-300 to-yellow-600',  emoji: '🌿', label: 'Keratin' },
    { bg: 'from-orange-300 to-amber-500',  emoji: '💎', label: 'Collagen' },
    { bg: 'from-yellow-500 to-amber-600',  emoji: '🫙', label: 'ทรีทเม้นท์' },
  ],
  'เซรั่ม & สเปรย์': [
    { bg: 'from-amber-300 to-yellow-500',  emoji: '💧', label: 'เซรั่ม' },
    { bg: 'from-yellow-300 to-amber-400',  emoji: '✨', label: 'สเปรย์' },
    { bg: 'from-orange-300 to-yellow-400', emoji: '🌟', label: 'Oil' },
    { bg: 'from-yellow-400 to-orange-300', emoji: '💨', label: 'มิสท์' },
  ],
  'เคมีซาลอน': [
    { bg: 'from-yellow-500 to-orange-500', emoji: '🎨', label: 'สีผม' },
    { bg: 'from-amber-400 to-orange-600',  emoji: '⚗️', label: 'ฟอกสี' },
    { bg: 'from-orange-400 to-amber-500',  emoji: '🔬', label: 'ดัดผม' },
    { bg: 'from-yellow-400 to-amber-600',  emoji: '💡', label: 'ยืดผม' },
  ],
  'OEM แบรนด์': [
    { bg: 'from-yellow-300 to-amber-500',  emoji: '🏷️', label: 'Private' },
    { bg: 'from-amber-300 to-yellow-400',  emoji: '📦', label: 'บรรจุ' },
    { bg: 'from-yellow-400 to-orange-400', emoji: '🖨️', label: 'ฉลาก' },
    { bg: 'from-orange-300 to-amber-400',  emoji: '✅', label: 'OEM' },
  ],
  'อุปกรณ์ซาลอน': [
    { bg: 'from-amber-400 to-yellow-500',  emoji: '✂️', label: 'กรรไกร' },
    { bg: 'from-yellow-300 to-amber-400',  emoji: '💇', label: 'ซาลอน' },
    { bg: 'from-orange-300 to-yellow-400', emoji: '🪮', label: 'หวี' },
    { bg: 'from-yellow-400 to-amber-500',  emoji: '💡', label: 'เครื่องมือ' },
  ],
}

const fallbackMocks = [
  { bg: 'from-yellow-400 to-orange-500', emoji: '🧴', label: 'สินค้า' },
  { bg: 'from-amber-400 to-yellow-600',  emoji: '✨', label: 'คุณภาพ' },
  { bg: 'from-orange-300 to-amber-500',  emoji: '💛', label: 'TOV' },
  { bg: 'from-yellow-300 to-orange-400', emoji: '🌿', label: 'Pro' },
]

export default function ProductCard({ product }) {
  const mocks = categoryMocks[product.category] || fallbackMocks

  return (
    <div className="product-card bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col">
      {/* 2×2 mock image grid */}
      <div className="relative h-64 grid grid-cols-2 grid-rows-2 gap-0.5 bg-[#111]">
        {mocks.map((m, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${m.bg} flex flex-col items-center justify-center gap-1`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-black/40 text-[10px] font-bold">{m.label}</span>
          </div>
        ))}
        <div className="absolute top-3 right-3 bg-[#FFC300] text-black text-xs font-black px-3 py-1 rounded-full shadow">
          {product.price}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-semibold text-[#FFC300] bg-[#FFC300]/10 px-2 py-1 rounded-full w-fit mb-2">
          {product.category}
        </span>
        <h3 className="text-white font-bold text-sm leading-snug mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-[#AAAAAA] text-xs leading-relaxed flex-1 line-clamp-2">{product.description}</p>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 flex items-center justify-center gap-2 border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
        >
          <Eye size={15} />
          ดูรายละเอียด
        </Link>
      </div>
    </div>
  )
}
