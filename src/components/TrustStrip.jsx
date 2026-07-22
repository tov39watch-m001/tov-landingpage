const salons = [
  'The Kut Salon', 'Hair Studio BKK', 'Glow Hair Lounge', 'Color Lab',
  'Snip & Style', 'Mane Studio', 'Pro Salon Thonglor', 'The Blowout Bar',
  'Luxe Hair Spa', 'Tress & Co.', 'Roots Salon', 'Strand Theory',
  'Clip & Color', 'The Curl Room', 'Velvet Hair BKK',
]

export default function TrustStrip() {
  const doubled = [...salons, ...salons]

  return (
    <section className="py-16 bg-[#111111] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-[#AAAAAA] text-sm">ไว้วางใจโดยซาลอนกว่า</p>
        <p className="text-3xl font-black text-[#FFC300]">5,000+ ซาลอน</p>
        <p className="text-[#AAAAAA] text-sm mt-1">ทั่วประเทศไทย</p>
      </div>

      <div className="overflow-hidden">
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="mx-3 flex-shrink-0 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-6 py-3 text-[#AAAAAA] text-sm font-semibold hover:border-[#FFC300]/40 hover:text-[#FFC300] transition-colors"
            >
              ✂️ {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
