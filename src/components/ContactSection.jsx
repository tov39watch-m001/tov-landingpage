import { useState } from 'react'
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            สนใจสินค้า?{' '}
            <span className="text-[#FFC300]">ติดต่อเราได้เลย</span>
          </h2>
          <p className="text-[#AAAAAA]">ทีมงานพร้อมให้คำปรึกษาและเสนอราคาฟรี</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: Phone,         label: 'โทรศัพท์',    val: '02-XXX-XXXX' },
              { icon: MessageCircle, label: 'LINE ID',      val: '@tov.official' },
              { icon: Mail,          label: 'อีเมล',        val: 'contact@tov.co.th' },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-4 bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5">
                  <div className="w-12 h-12 bg-[#FFC300]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#FFC300]" />
                  </div>
                  <div>
                    <div className="text-[#AAAAAA] text-xs">{item.label}</div>
                    <div className="text-white font-semibold">{item.val}</div>
                  </div>
                </div>
              )
            })}

            <div className="bg-[#FFC300]/10 border border-[#FFC300]/20 rounded-2xl p-5">
              <p className="text-[#FFC300] font-semibold mb-1">เวลาทำการ</p>
              <p className="text-[#AAAAAA] text-sm">จันทร์ – เสาร์: 08:00 – 18:00 น.</p>
              <p className="text-[#AAAAAA] text-sm">อาทิตย์: 09:00 – 15:00 น.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-[#AAAAAA] text-xs font-medium mb-1">ชื่อ – นามสกุล</label>
              <input
                required
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFC300] placeholder-[#555] transition-colors"
                placeholder="กรอกชื่อของคุณ"
              />
            </div>
            <div>
              <label className="block text-[#AAAAAA] text-xs font-medium mb-1">อีเมล</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFC300] placeholder-[#555] transition-colors"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-[#AAAAAA] text-xs font-medium mb-1">ข้อความ / รายละเอียด</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFC300] placeholder-[#555] transition-colors resize-none"
                placeholder="แจ้งความต้องการ หรือถามข้อมูลเพิ่มเติม"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#FFC300] hover:bg-[#E6A800] text-black font-bold py-3 rounded-xl transition-colors"
            >
              {sent ? <><CheckCircle size={18} /> ส่งแล้ว!</> : <><Send size={18} /> ส่งข้อความ</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
