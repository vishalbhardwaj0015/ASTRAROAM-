import { FiTarget, FiHeart, FiEye } from 'react-icons/fi'

const team = [
  { name: 'Manish Sharma', role: 'Founder & Lead Guide', avatar: 'MS' },
  { name: 'Vishal Sharma', role: 'Founder & Lead Guide', avatar: 'VS' },
  { name: 'Rahul Sharma', role: 'Operations Manager', avatar: 'NS' },
  { name: 'Vikram Thakur', role: 'Senior Trek Leader', avatar: 'VT' },
  { name: 'Priya Negi', role: 'Customer Relations', avatar: 'PN' },
  { name: 'Tamanna Sharma', role: 'Team Leader', avatar: 'TS' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] max-md:h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1920&h=500&fit=crop" alt="About ASTRAROAM" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Our Story</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-3 font-heading">About ASTRAROAM</h1>
          <p className="text-white/45 text-lg max-w-lg font-light">{'\u201CRedefining Travel Experiences Across the Himalayas.\u201D'}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center max-xl:grid-cols-1" data-aos="fade-right">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] mt-4 mb-6 font-heading">We Turn Dreams Into Adventures</h2>
              <p className="text-gray-500 leading-relaxed mb-5 dark:text-gray-400 font-light">
                {'\u201CASTRAROAM is a premium tour & travel platform that helps travelers discover breathtaking destinations, explore curated travel packages, and plan memorable Himalayan adventures with ease. What began as a passion for the mountains has evolved into a trusted travel platform serving hundreds of happy explorers every year.\u201D'}
              </p>
              <p className="text-gray-500 leading-relaxed mb-10 dark:text-gray-400 font-light">
                {'\u201CBased in Himachal Pradesh, our team of experienced mountaineers, certified local guides, and travel technology experts brings everything you need for travel planning into one seamless platform.\u201D'}
              </p>
              <div className="grid grid-cols-4 gap-6 pt-10 border-t border-gray-100 dark:border-gray-700/50 max-sm:grid-cols-2">
                {[['500+', 'Happy Travelers'], ['50+', 'Treks Completed'], ['15+', 'Destinations'], ['3+', 'Years Experience']].map(([num, label]) => (
                  <div key={num}>
                    <strong className="block font-heading text-3xl font-bold text-accent">{num}</strong>
                    <span className="text-gray-500 text-sm dark:text-gray-400 font-light">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-premium-lg max-xl:order-first">
              <img
                src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&h=800&fit=crop"
                alt="Trekker on mountain trail"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              { icon: <FiTarget />, title: 'Our Mission', desc: '\u201CTo make the Himalayas accessible to every adventure seeker while maintaining the highest standards of safety, sustainability, and customer satisfaction.\u201D' },
              { icon: <FiEye />, title: 'Our Vision', desc: '\u201CTo become India\u2019s most trusted adventure travel brand, known for creating transformative experiences that connect people with nature\u2019s greatest wonders.\u201D' },
              { icon: <FiHeart />, title: 'Our Values', desc: '\u201CSafety first, sustainable practices, genuine hospitality, and an unwavering commitment to exceeding expectations on every single trip.\u201D' },
            ].map((item, i) => (
              <div key={i} className="glass-card text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-16 rounded-sm bg-accent/10 flex items-center justify-center text-accent text-2xl mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg mb-3 font-heading">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">Our Team</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Meet the Explorers</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">{'\u201CThe passionate people behind your Himalayan adventures.\u201D'}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {team.map((member, i) => (
              <div key={i} className="text-center p-10 premium-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-20 h-20 rounded-sm bg-navy text-accent flex items-center justify-center font-heading font-bold text-xl mx-auto mb-5">
                  {member.avatar}
                </div>
                <h4 className="text-lg font-heading font-bold mb-1">{member.name}</h4>
                <span className="text-gray-500 text-sm dark:text-gray-400 font-light">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
