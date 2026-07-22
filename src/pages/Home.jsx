import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryBar from '../components/CategoryBar'
import ProductGrid from '../components/ProductGrid'
import CategorySection from '../components/CategorySection'
import WhyTOV from '../components/WhyTOV'
import TrustStrip from '../components/TrustStrip'
import ContactSection from '../components/ContactSection'
import { products } from '../data/products'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด')
  const featured = products.slice(0, 8)

  return (
    <>
      <Hero />
      <CategoryBar active={activeCategory} onSelect={setActiveCategory} />

      {/* Featured Products */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-white">สินค้าแนะนำ</h2>
              <div className="w-16 h-1 bg-[#FFC300] rounded-full mt-2" />
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1 text-[#FFC300] text-sm font-semibold hover:gap-2 transition-all"
            >
              ดูทั้งหมด <ArrowRight size={16} />
            </Link>
          </div>
          <ProductGrid products={featured} activeCategory={activeCategory} />
        </div>
      </section>

      <CategorySection />
      <WhyTOV />
      <TrustStrip />
      <ContactSection />
    </>
  )
}
