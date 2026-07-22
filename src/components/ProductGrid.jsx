import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, activeCategory }) {
  const [visible, setVisible] = useState(true)

  const filtered = activeCategory === 'ทั้งหมด'
    ? products
    : products.filter(p => p.category === activeCategory)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [activeCategory])

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.25s ease' }}
    >
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full text-center py-16 text-[#AAAAAA]">
          ไม่พบสินค้าในหมวดหมู่นี้
        </div>
      )}
    </div>
  )
}
