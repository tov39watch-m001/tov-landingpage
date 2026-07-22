import { categories } from '../data/products'

export default function CategoryBar({ active, onSelect }) {
  return (
    <div className="bg-[#FFC300] sticky top-16 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
                active === cat
                  ? 'bg-[#111111] text-[#FFC300]'
                  : 'bg-transparent text-[#111111] hover:bg-[#111111]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
