/** Official-style facts: KP HED listings + public college profiles (verify phone/email with the college office). */

export const SITE = {
  shortName: 'GDC Hayatabad',
  fullName: 'Government Degree College Hayatabad',
  tagline:
    'A public sector college in Phase 6, Hayatabad, offering Intermediate and BS programmes affiliated with BISE Peshawar and the University of Peshawar.',
  established: 2006,
  campusSince: 2006,
  principal: 'Professor Munawar Alam',
  chiefProctor: 'Muhammad Sangeen Khan',
  addressLine: 'Street 1, Sector F-2, Phase 6, Hayatabad',
  city: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  phone: '091-5864698',
  email: 'gdc_hayatabad@hotmail.com',
  facebookUrl: 'https://www.facebook.com/Govt.DegreeCollegeHayatabad/',
  /** Official page photo albums — use for gallery CTAs (Facebook does not allow stable hotlinks). */
  facebookPhotosUrl: 'https://www.facebook.com/Govt.DegreeCollegeHayatabad/photos',
  hedAdmissionUrl: 'https://admission.hed.gkp.pk/college.php?college_id=9',
  hedCollegeUrl: 'https://hed.gkp.pk/',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Government_College_Hayatabad_Peshawar',
  mapQuery: 'Government Degree College for Boys Hayatabad Peshawar',
  vision:
    'To provide affordable, high-quality education that empowers students with both knowledge and character to lead and serve society effectively.',
} as const;

export const PROGRAMS = {
  intermediate: [
    'FSc Pre-Medical (2 years)',
    'FSc Pre-Engineering (2 years)',
    'FSc Computer Science (2 years)',
    'FA Humanities (2 years)',
  ],
  degreeTwoYear: ['BA / BSc pathways (as notified)'],
  bsFourYear: [
    'BS Botany',
    'BS Chemistry',
    'BS Computer Science',
    'BS Economics',
    'BS English',
    'BS Geography',
    'BS Health & Physical Education',
    'BS Islamic Studies',
    'BS Mathematics',
    'BS Pakistan Studies',
    'BS Physics',
    'BS Political Science',
    'BS Urdu',
    'BS Zoology',
  ],
} as const;
