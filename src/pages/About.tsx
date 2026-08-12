import { Eye, Target, Award, BookOpen, Landmark, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useSite } from '../context/SiteContext';

export default function About() {
  const SITE = useSite();
  const aboutCampusImage = SITE.aboutImage || `${import.meta.env.BASE_URL}gch-about-campus.png`;
  const chiefProctorImage = SITE.chiefProctorImage || `${import.meta.env.BASE_URL}chief-proctor.png`;

  return (
    <div className="flex flex-col">
      <section className="pt-1 pb-20 md:pt-2 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-academy-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our legacy</span>
              <h1 className="text-5xl md:text-6xl font-bold text-academy-green mb-6 leading-tight">
                Serving Hayatabad since <span className="text-academy-gold">{SITE.established}</span>
              </h1>
              <p className="text-3xl font-serif italic text-slate-400 mb-8">علم اور کردار کی روایات</p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {SITE.fullName} is a public sector college offering intermediate classes in science and arts, and four-year BS
                degrees. Situated at {SITE.addressLine}, the campus connects easily across Hayatabad and adjoining areas of
                Peshawar.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Alongside academics, the college emphasises sports and social skills so graduates are prepared for higher
                education and civic life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mb-8 lg:mb-0"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 transform-gpu">
                <img
                  src={aboutCampusImage}
                  alt={`${SITE.fullName} — main campus`}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-10 -left-4 sm:-left-10 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-4xl font-serif font-bold text-academy-green">{SITE.campusSince}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mt-1">Present campus inaugurated</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-academy-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-12 border border-slate-100 hover-lift group">
              <div className="bg-academy-gold/10 w-14 h-14 rounded-md flex items-center justify-center mb-6">
                <Eye className="text-academy-gold" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-academy-green mb-5">Vision</h2>
              <p className="text-slate-600 leading-relaxed">{SITE.vision}</p>
            </div>
            <div className="bg-white p-10 md:p-12 border border-slate-100 hover-lift group">
              <div className="bg-academy-green/10 w-14 h-14 rounded-md flex items-center justify-center mb-6">
                <Target className="text-academy-green" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-academy-green mb-5">Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                Provide accessible, high-quality intermediate and undergraduate education; strengthen laboratories and libraries;
                promote ethical scholarship; and support co-curricular programmes that build confident, well-rounded graduates for KP
                and Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-academy-green text-center mb-12 md:mb-16">Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: String(SITE.established),
                title: 'College established',
                desc: 'Founded as a public degree college to widen access to science and general education in Hayatabad.',
              },
              {
                year: 'Phase 6',
                title: 'Hayatabad campus',
                desc: 'Situated at Street 1, Sector F-2, Phase 6 Hayatabad, serving students across Peshawar and neighboring districts.',
              },
              {
                year: 'Today',
                title: 'Intermediate & BS',
                desc: 'FSc / FA streams with BISE Peshawar and BS disciplines aligned with University of Peshawar and KP HED policies.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-4 border-academy-gold pt-6">
                <div className="text-3xl font-serif font-bold text-academy-gold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-academy-green mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-academy-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl flex flex-col lg:flex-row border border-slate-100 rounded-2xl">
            <div className="lg:w-2/5 p-6 md:p-8 flex items-center justify-center bg-academy-cream/60">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-4 ring-white bg-slate-200">
                <img
                  src={chiefProctorImage}
                  alt={`${SITE.chiefProctor}, Chief Proctor`}
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16">
                  <span className="text-academy-gold-light text-xs font-bold uppercase tracking-widest">Chief Proctor</span>
                  <p className="text-white font-bold text-sm sm:text-base leading-snug mt-2">{SITE.chiefProctor}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-academy-green mb-6">From the desk of the Chief Proctor</h3>
              <p className="text-xl md:text-2xl font-serif italic text-slate-600 leading-relaxed mb-10">
                “{SITE.vision}”
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-academy-gold" />
                <div>
                  <p className="font-bold text-academy-green">{SITE.chiefProctor}</p>
                  <p className="text-slate-500 text-sm">Chief Proctor, {SITE.fullName}</p>
                </div>
              </div>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-academy-green hover:text-academy-gold"
              >
                More on Facebook <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-14">Affiliation & oversight</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Landmark size={44} className="text-academy-green/40 mb-5" />
              <p className="font-bold text-slate-700">University of Peshawar</p>
              <p className="text-slate-500 text-sm mt-2">Degree & BS programmes (as notified)</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen size={44} className="text-academy-green/40 mb-5" />
              <p className="font-bold text-slate-700">BISE Peshawar</p>
              <p className="text-slate-500 text-sm mt-2">Intermediate examinations</p>
            </div>
            <div className="flex flex-col items-center">
              <Award size={44} className="text-academy-green/40 mb-5" />
              <p className="font-bold text-slate-700">Government of Khyber Pakhtunkhwa</p>
              <p className="text-slate-500 text-sm mt-2">Higher Education Department</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
