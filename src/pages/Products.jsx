import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import { SlidersHorizontal } from 'lucide-react'

export default function Products() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState('ทั้งหมด')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat && categories.includes(cat)) setActive(cat)
  }, [searchParams])

  const filtered = products.filter(p => {
    const matchCat = active === 'ทั้งหมด' || p.category === active
    const matchSearch = search === '' || p.name.includes(search) || p.description.includes(search)
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-[#111111] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">สินค้าทั้งหมด</h1>
          <div className="w-16 h-1 bg-[#FFC300] rounded-full mt-2" />
        </div>

        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="ค้นหาสินค้า..."
            className="flex-1 bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFC300] placeholder-[#555]"
          />
          <div className="flex items-center gap-2 text-[#AAAAAA] text-sm">
            <SlidersHorizontal size={16} className="text-[#FFC300]" />
            <span>{filtered.length} รายการ</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-48 flex-shrink-0">
            <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-[#FFC300]" />
              หมวดหมู่
            </h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === cat
                      ? 'bg-[#FFC300] text-black'
                      : 'text-[#AAAAAA] hover:text-white hover:bg-[#1A1A1A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              style={{ opacity: 1, transition: 'opacity 0.25s ease' }}
            >
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-[#AAAAAA]">ไม่พบสินค้าที่ต้องการ</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
