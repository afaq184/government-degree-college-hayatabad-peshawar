import { SITE } from '../site';
import type { GalleryItem, NewsItem, SiteSettings } from '../types/cms';

const base = import.meta.env.BASE_URL;

const galleryTitles = [
  'Campus gardens and academic blocks',
  'Faculty gathering at the main entrance',
  'College lawns and landscaped hedges',
  'Morning assembly on campus grounds',
  'Science and classroom corridors',
  'Student life and co-curricular moments',
  'College events and celebrations',
  'Academic sessions and campus activity',
  'Official ceremonies at GDC Hayatabad',
  'Campus highlights from college life',
];

const categories = ['Campus', 'Academics', 'Events'] as const;

export function getDefaultGallery(): Omit<GalleryItem, 'id'>[] {
  return Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    return {
      title: galleryTitles[i] || `Campus Highlight ${n}`,
      category: categories[i % categories.length],
      image: `${base}gallery/hg${n}.jpg`,
      order: n,
      imgClass: 'object-cover object-center',
    };
  });
}

export function getDefaultNews(): Omit<NewsItem, 'id'>[] {
  return [
    {
      category: 'Campus Update',
      date: 'Latest',
      title: 'Welcome to Government Degree College Hayatabad',
      desc: 'Follow official notices, merit lists, and campus events on the college Facebook page. Admissions are processed through the KP HED online portal.',
      link: 'Open Facebook',
      href: SITE.facebookUrl,
      external: true,
      image: `${base}news/nh1.jpg`,
      order: 1,
    },
    {
      category: 'Admissions',
      date: 'HED Portal',
      title: 'Apply online via KP HED',
      desc: 'Intermediate and BS admissions for Government Degree College Hayatabad (college ID 9) are submitted through the Higher Education Department online admission system.',
      link: 'Admission Portal',
      href: SITE.hedAdmissionUrl,
      external: true,
      image: `${base}news/nh2.jpg`,
      order: 2,
    },
    {
      category: 'Academics',
      date: 'Ongoing',
      title: 'Intermediate & BS programmes',
      desc: 'The college offers FSc Pre-Medical, Pre-Engineering, Computer Science, FA Humanities, and multiple BS disciplines affiliated with BISE Peshawar and the University of Peshawar.',
      link: 'View Academics',
      href: '#/academics',
      external: false,
      image: `${base}news/nh3.jpg`,
      order: 3,
    },
    {
      category: 'Campus Life',
      date: 'Ongoing',
      title: '35-kanal campus in Phase 6 Hayatabad',
      desc: 'Classrooms, laboratories, library, green lawns, and a spacious hall support teaching and co-curricular life for students from Hayatabad and adjoining areas.',
      link: 'About the campus',
      href: '#/about',
      external: false,
      image: `${base}news/nh4.jpg`,
      order: 4,
    },
    {
      category: 'Leadership',
      date: 'Office',
      title: `Message from Principal ${SITE.principal}`,
      desc: 'The principal and faculty remain committed to quality teaching, discipline, and character building for every student of GDC Hayatabad.',
      link: 'Read About',
      href: '#/about',
      external: false,
      image: `${base}news/nh5.jpg`,
      order: 5,
    },
    {
      category: 'Notice',
      date: 'Board / UoP',
      title: 'Examination schedules & notices',
      desc: 'BISE Peshawar and University of Peshawar schedules are shared via departments, notice boards, and the official Facebook page. Always verify dates from primary sources.',
      link: 'Contact office',
      href: '#/contact',
      external: false,
      image: `${base}news/nh6.jpg`,
      order: 6,
    },
    {
      category: 'Events',
      date: 'Campus',
      title: 'Seminars, sports & societies',
      desc: 'Debates, sports, counseling sessions, and academic seminars are announced regularly. Check Facebook albums for recent campus photographs.',
      link: 'Photo albums',
      href: SITE.facebookPhotosUrl,
      external: true,
      image: `${base}news/nh7.jpg`,
      order: 7,
    },
    {
      category: 'Student Support',
      date: 'Services',
      title: 'Counseling & student welfare',
      desc: 'Students can approach the proctorial staff and counseling committees for guidance on discipline, welfare, and academic issues.',
      link: 'Contact',
      href: '#/contact',
      external: false,
      image: `${base}news/nh8.jpg`,
      order: 8,
    },
    {
      category: 'Community',
      date: 'Hayatabad',
      title: 'Serving Phase 6 and adjoining communities',
      desc: 'Established in 2006 to meet the demand for public higher education in Hayatabad, the college continues to serve Peshawar and neighboring districts.',
      link: 'College profile',
      href: SITE.hedAdmissionUrl,
      external: true,
      image: `${base}news/nh9.jpg`,
      order: 9,
    },
    {
      category: 'Gallery',
      date: 'Photos',
      title: 'Explore campus photographs',
      desc: 'Browse gallery highlights from college life, or visit the official Facebook page for the full photo archive.',
      link: 'Open Gallery',
      href: '#/gallery',
      external: false,
      image: `${base}news/nh10.jpg`,
      order: 10,
    },
  ];
}

export function getDefaultSiteSettings(): SiteSettings {
  return {
    shortName: SITE.shortName,
    fullName: SITE.fullName,
    tagline: SITE.tagline,
    established: SITE.established,
    campusSince: SITE.campusSince,
    principal: SITE.principal,
    chiefProctor: SITE.chiefProctor,
    addressLine: SITE.addressLine,
    city: SITE.city,
    phone: SITE.phone,
    email: SITE.email,
    facebookUrl: SITE.facebookUrl,
    facebookPhotosUrl: SITE.facebookPhotosUrl,
    hedAdmissionUrl: SITE.hedAdmissionUrl,
    hedCollegeUrl: SITE.hedCollegeUrl,
    wikipediaUrl: SITE.wikipediaUrl,
    mapQuery: SITE.mapQuery,
    vision: SITE.vision,
    heroImage: `${base}gch-hero-campus.png`,
    principalImage: `${base}principal.png`,
    aboutImage: `${base}gch-about-campus.png`,
    chiefProctorImage: `${base}chief-proctor.png`,
  };
}
