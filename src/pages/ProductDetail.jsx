import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { ArrowLeft, Phone, MessageCircle, CheckCircle, Package } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const categoryGradients = {
  'แพคเกจจิ้ง': 'from-yellow-400 to-orange-500',
  'อาหาร':       'from-amber-400 to-yellow-600',
  'สิ่งพิมพ์':   'from-yellow-300 to-amber-500',
  'อุปกรณ์':     'from-yellow-500 to-orange-400',
  'สติ๊กเกอร์':  'from-amber-300 to-yellow-500',
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-[#111111] pt-24 flex flex-col items-center justify-center text-center px-4">
        <Package size={64} className="text-[#333] mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">ไม่พบสินค้า</h1>
        <Link to="/products" className="text-[#FFC300] hover:underline text-sm mt-2">กลับไปหน้าสินค้า</Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const grad = categoryGradients[product.category] || 'from-yellow-400 to-amber-600'

  return (
    <div className="min-h-screen bg-[#111111] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#AAAAAA] mb-8">
          <Link to="/" className="hover:text-[#FFC300]">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#FFC300]">สินค้า</Link>
          <span>/</span>
          <span className="text-[#FFC300]">{product.name}</span>
        </div>

        <Link to="/products" className="inline-flex items-center gap-2 text-[#AAAAAA] hover:text-[#FFC300] text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> กลับหน้าสินค้า
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className={`h-80 lg:h-full min-h-[320px] rounded-2xl bg-gradient-to-br ${grad} flex flex-col items-center justify-center gap-4`}>
            <span className="text-7xl">{product.name.slice(0, 2)}</span>
            <span className="text-black/40 text-sm font-bold tracking-widest">{product.category.toUpperCase()}</span>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-[#FFC300] text-xs font-semibold bg-[#FFC300]/10 px-3 py-1 rounded-full w-fit mb-4">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-3">{product.name}</h1>
            <p className="text-[#AAAAAA] text-sm leading-relaxed mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-black text-[#FFC300]">{product.price}</span>
              <span className="text-[#555] text-sm">/ หน่วย</span>
            </div>

            <ul className="space-y-2 mb-8">
              {['สินค้าคุณภาพสูง ผ่าน QC', 'จัดส่งรวดเร็วทั่วประเทศ', 'พิมพ์ลายโลโก้ตามสั่ง', 'รับประกันความพึงพอใจ'].map(f => (
                <li key={f} className="flex items-center gap-2 text-[#AAAAAA] text-sm">
                  <CheckCircle size={16} className="text-[#FFC300] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://line.me/ti/p/~@tov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FFC300] hover:bg-[#E6A800] text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                <MessageCircle size={18} />
                สอบถามทาง LINE
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 border border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-black font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                <Phone size={18} />
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-black text-white mb-6">สินค้าในหมวดเดียวกัน</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
