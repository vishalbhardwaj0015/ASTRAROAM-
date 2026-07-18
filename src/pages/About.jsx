import { FiTarget, FiHeart, FiEye } from 'react-icons/fi'

const team = [
  { name: 'Arjun Singh', role: 'Founder & Lead Guide', avatar: 'AS' },
  { name: 'Neha Sharma', role: 'Operations Manager', avatar: 'NS' },
  { name: 'Vikram Thakur', role: 'Senior Trek Leader', avatar: 'VT' },
  { name: 'Priya Negi', role: 'Customer Relations', avatar: 'PN' },
]

export default function About() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=500&fit=crop" alt="About ASTRAROAM" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <h1 className="text-white text-[clamp(2rem,5vw,3rem)] mb-3">About ASTRAROAM</h1>
          <p className="text-white/70 text-lg max-w-lg">Redefining Travel Experiences Across the Himalayas</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-[1.2fr_1fr] gap-14 items-center max-xl:grid-cols-1" data-aos="fade-right">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] mt-3 mb-5">We Turn Dreams Into Adventures</h2>
              <p className="text-gray leading-relaxed mb-4">
                ASTRAROAM is a modern tour & travel platform that helps travelers discover breathtaking destinations, explore curated travel packages, and plan memorable Himalayan adventures with ease. What began as a passion for the mountains has evolved into a trusted travel platform serving hundreds of happy explorers every year.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                Based in Himachal Pradesh, our team of experienced mountaineers, certified local guides, and travel technology experts brings everything you need for travel planning into one seamless platform. From finding the perfect trek to booking hotels and creating custom itineraries — ASTRAROAM makes your dream trip a reality.
              </p>
              <div className="grid grid-cols-4 gap-5 pt-9 border-t border-gray-100 max-sm:grid-cols-2">
                {[['500+', 'Happy Travelers'], ['50+', 'Treks Completed'], ['15+', 'Destinations'], ['3+', 'Years Experience']].map(([num, label]) => (
                  <div key={num}>
                    <strong className="block font-heading text-3xl font-extrabold text-primary">{num}</strong>
                    <span className="text-gray text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-glass-xl max-xl:order-first">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop"
                alt="Mountain adventure"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              { icon: <FiTarget />, title: 'Our Mission', desc: "To make the Himalayas accessible to every adventure seeker while maintaining the highest standards of safety, sustainability, and customer satisfaction." },
              { icon: <FiEye />, title: 'Our Vision', desc: "To become India's most trusted adventure travel brand, known for creating transformative experiences that connect people with nature's greatest wonders." },
              { icon: <FiHeart />, title: 'Our Values', desc: 'Safety first, sustainable practices, genuine hospitality, and an unwavering commitment to exceeding expectations on every single trip.' },
            ].map((item, i) => (
              <div key={i} className="glass-card text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <FiTarget className="text-accent text-3xl mx-auto mb-4" style={{display:'block'}} />
                <h3 className="text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">Our Team</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Meet the Explorers</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">The passionate people behind your Himalayan adventures</p>
          </div>
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {team.map((member, i) => (
              <div key={i} className="text-center p-9 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h4 className="text-lg mb-1">{member.name}</h4>
                <span className="text-gray text-sm">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
