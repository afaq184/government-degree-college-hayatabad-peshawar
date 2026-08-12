import { ArrowRight, ExternalLink, Award, Users, GraduationCap, Microscope, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { INTRO_VIDEO_URL } from '../media';
import { useSite } from '../context/SiteContext';

export default function Home() {
  const SITE = useSite();
  const heroImage = SITE.heroImage || `${import.meta.env.BASE_URL}gch-hero-campus.png`;
  const principalImage = SITE.principalImage || `${import.meta.env.BASE_URL}principal.png`;
  const campusGardensImage = `${import.meta.env.BASE_URL}gch-campus-gardens.png`;

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[min(92svh,880px)] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            src={heroImage}
            alt={`${SITE.fullName} campus`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-academy-green-dark via-academy-green-dark/55 to-academy-green-dark/25" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-5 sm:top-6 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-academy-gold-light font-bold tracking-[0.22em] uppercase text-xs sm:text-sm"
        >
          Phase 6 · Hayatabad · Peshawar
        </motion.p>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              {SITE.fullName}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              {SITE.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base shadow-2xl hover-scale hover-glow"
              >
                Contact the college
              </Link>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-white border-2 border-white/40 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all shadow-2xl hover-scale"
              >
                <ExternalLink size={20} />
                Facebook updates
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4">
          {[
            { label: 'Established', value: String(SITE.established) },
            { label: 'Programmes', value: 'FSc · FA · BS' },
            { label: 'Campus', value: '35 Kanals' },
          ].map((item) => (
            <div key={item.label} className="text-center sm:text-left sm:px-6 sm:border-r sm:last:border-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-serif font-bold text-academy-green">{item.value}</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-medium mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-academy-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-200 ring-4 ring-white ring-offset-4 ring-offset-academy-cream">
                <img
                  src={principalImage}
                  alt={`${SITE.principal}, Principal`}
                  className="absolute inset-0 h-full w-full object-cover object-[center_12%]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-academy-green-dark via-academy-green-dark/80 to-transparent px-6 pb-6 pt-28">
                  <span className="text-academy-gold-light font-bold tracking-widest uppercase text-xs block mb-2">Principal</span>
                  <p className="text-white font-serif font-bold text-lg sm:text-xl leading-snug">{SITE.principal}</p>
                </div>
              </div>
            </motion.div>

            <div>
              <span className="text-academy-gold font-bold tracking-widest uppercase text-sm mb-4 block">Leadership message</span>
              <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-8 leading-tight">Assalam-o-Alaikum</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Welcome to {SITE.fullName}. Since {SITE.established}, our campus in Phase 6 Hayatabad has served students
                  with rigorous intermediate and undergraduate teaching, well-equipped laboratories, and a culture of discipline
                  and character building.
                </p>
                <p>
                  Whether you join an FSc stream or a BS programme, our faculty and staff are committed to your academic growth.
                  Confirm admissions and notices on the KP HED portal and our{' '}
                  <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-academy-green font-semibold underline-offset-2 hover:underline">
                    Facebook page
                  </a>
                  .
                </p>
                <div className="pt-6">
                  <p className="font-serif font-bold text-academy-green text-xl">{SITE.principal}</p>
                  <p className="text-slate-500 italic">Principal, {SITE.shortName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 md:mb-10">
            <div>
              <span className="text-academy-gold font-bold tracking-widest uppercase text-sm mb-2 block">College life</span>
              <h2 className="text-4xl font-bold text-academy-green">Highlights & events</h2>
              <p className="text-slate-500 mt-2 max-w-2xl">
                Watch the college introduction video, then confirm schedules on the Facebook page and notice boards.
              </p>
            </div>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-academy-green font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0"
            >
              See latest on Facebook <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl shadow-lg bg-black aspect-video w-full sm:min-h-[260px] max-h-[min(70vh,520px)]">
              <video
                className="absolute inset-0 z-0 h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={heroImage}
              >
                <source src={INTRO_VIDEO_URL} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-2/5 bg-gradient-to-b from-black/60 to-transparent" />
              <div className="pointer-events-none absolute bottom-14 left-0 z-10 max-w-xl p-8 sm:p-10">
                <span className="bg-academy-gold text-academy-green-dark text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  College introduction
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-academy-gold-light transition-colors">
                  Welcome to {SITE.shortName}
                </h3>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-academy-green p-8 rounded-2xl text-white shadow-lg hover-lift hover-glow group cursor-pointer">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-academy-gold transition-colors duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-academy-gold-light transition-colors">Sports & societies</h3>
                <p className="text-academy-cream/80 text-sm mb-6">
                  The college supports training in sports and student societies alongside academics.
                </p>
                <div className="text-academy-gold-light font-bold text-sm">Follow Facebook for fixtures & results</div>
              </div>

              <div className="bg-slate-100 p-8 rounded-2xl shadow-sm border border-slate-200 hover-lift group cursor-pointer">
                <div className="bg-academy-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-academy-green group-hover:text-white transition-colors duration-300">
                  <Calendar size={24} className="text-academy-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-academy-green mb-2">Board & semester calendar</h3>
                <p className="text-slate-600 text-sm mb-6">BISE / university schedules are communicated via departments and official notices.</p>
                <div className="text-slate-500 font-bold text-sm">Check notice boards regularly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-academy-gold font-bold tracking-widest uppercase text-sm mb-3 block">Campus</span>
              <h2 className="text-4xl font-bold text-academy-green mb-5">Gardens, labs & learning spaces</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The college building spans about 35 kanals with ventilated classrooms, laboratories, a library with reading room,
                a spacious hall, and landscaped lawns at the heart of Hayatabad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
                  View gallery <ArrowRight size={18} />
                </Link>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-academy-green hover:text-academy-green-dark"
                >
                  <ExternalLink size={18} /> Facebook updates
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={campusGardensImage}
                alt="Aerial view of Government Degree College Hayatabad campus gardens and building"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-academy-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-academy-gold-light font-bold tracking-widest uppercase text-sm mb-3 block">Why choose us</span>
              <h2 className="text-3xl md:text-4xl font-bold">Why students choose {SITE.shortName}</h2>
            </div>
            <p className="text-white/70 max-w-md flex items-start gap-2">
              <MapPin size={18} className="shrink-0 mt-1 text-academy-gold-light" />
              {SITE.addressLine}, {SITE.city}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Strong science streams',
                desc: 'FSc Pre-Medical, Pre-Engineering, and Computer Science alongside FA Humanities.',
                icon: <Microscope />,
              },
              {
                title: 'University pathways',
                desc: 'BS programmes aligned with University of Peshawar regulations.',
                icon: <GraduationCap />,
              },
              {
                title: 'Dedicated faculty',
                desc: 'Departments across physical sciences, biological sciences, and humanities.',
                icon: <Users />,
              },
              {
                title: 'Public mission',
                desc: 'Affordable access to quality higher secondary and undergraduate education in KP.',
                icon: <Award />,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors">
                <div className="text-academy-gold-light mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
