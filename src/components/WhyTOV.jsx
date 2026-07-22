import { FlaskConical, Award, Truck, Palette } from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    title: 'สูตรระดับ Professional',
    desc: 'พัฒนาร่วมกับนักเคมีผม ได้รับมาตรฐาน ISO และ GMP ทุกผลิตภัณฑ์ผ่านการทดสอบทางคลินิก',
  },
  {
    icon: Award,
    title: 'OEM & Private Label',
    desc: 'รับผลิตแบรนด์ของคุณครบวงจร ตั้งแต่ออกแบบสูตร ฉลาก บรรจุภัณฑ์ MOQ เพียง 500 ชิ้น',
  },
  {
    icon: Truck,
    title: 'ส่งตรงถึงซาลอน',
    desc: 'จัดส่งทั่วประเทศภายใน 1–3 วัน มีระบบสมาชิกซาลอนสำหรับสั่งซื้อประจำ ราคาพิเศษ',
  },
  {
    icon: Palette,
    title: 'ปรับสูตรได้เอง',
    desc: 'รองรับการปรับกลิ่น ความเข้มข้น และส่วนผสมพิเศษตามความต้องการของแบรนด์คุณ',
  },
]

export default function WhyTOV() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FFC300] text-sm font-semibold tracking-widest uppercase mb-2">ทำไมต้อง TOV?</p>
          <h2 className="text-3xl font-black text-white">จุดแข็งของเรา</h2>
          <div className="w-16 h-1 bg-[#FFC300] mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 text-center hover:border-[#FFC300]/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#FFC300]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFC300]/20 transition-colors">
                  <Icon size={30} className="text-[#FFC300]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-[#AAAAAA] text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
