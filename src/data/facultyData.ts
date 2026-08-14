export interface Department {
  id: string;
  name: string;
  facultyCategory: 'Physical Sciences' | 'Biological Sciences' | 'Social Sciences & Humanities' | 'Support Services';
  overview: string;
  programs: string[];
}

export interface FacultyMember {
  id: string;
  deptId: string;
  name: string;
  designation: string;
  specialization: string;
  email: string;
  photo: string;
  qualification: string;
  biography: string;
  researchInterests: string[];
  publications: string[];
  googleScholar?: string;
  linkedin?: string;
  contactInfo: string;
}

const baseUrl = import.meta.env.BASE_URL || '/';

function facultyPhoto(fileName: string): string {
  return encodeURI(`${baseUrl}faculty/faculty pic/${fileName}`);
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'computer-science',
    name: 'Computer Science Department',
    facultyCategory: 'Physical Sciences',
    overview: 'The Department of Computer Science at Government Degree College Hayatabad provides state-of-the-art education in computing. Equipped with modern computer labs and high-speed internet, we prepare students for dynamic careers in software development, AI, and IT. Our curriculum integrates theoretical principles with extensive practical laboratory sessions.',
    programs: ['BS Computer Science (4 Years)', 'FSc Computer Science (2 Years)', 'Free Graphic Design Course (KPITB/PAFH-IUST)']
  },
  {
    id: 'mathematics',
    name: 'Mathematics Department',
    facultyCategory: 'Physical Sciences',
    overview: 'The Department of Mathematics fosters analytical thinking and deep problem-solving skills. Our curriculum covers pure and applied mathematics, preparing students for successful careers in academic research, financial analysis, data science, and secondary education.',
    programs: ['BS Mathematics (4 Years)', 'Associate Degree (2 Years)', 'FSc Pre-Engineering (2 Years)']
  },
  {
    id: 'physics',
    name: 'Physics Department',
    facultyCategory: 'Physical Sciences',
    overview: 'The Department of Physics offers a comprehensive understanding of the physical world. Through rigorous experimental laboratory work and theoretical study, students explore classical mechanics, electromagnetic theory, thermodynamics, and modern quantum physics.',
    programs: ['BS Physics (4 Years)', 'Associate Degree (2 Years)', 'FSc Pre-Engineering (2 Years)']
  },
  {
    id: 'chemistry',
    name: 'Chemistry Department',
    facultyCategory: 'Physical Sciences',
    overview: 'The Department of Chemistry provides theoretical knowledge and practical laboratory experience in organic, inorganic, and physical chemistry. Our students engage in experimental research, analytical testing, and safety-focused laboratory practices.',
    programs: ['BS Chemistry (4 Years)', 'Associate Degree (2 Years)', 'FSc Pre-Medical (2 Years)']
  },
  {
    id: 'statistics',
    name: 'Statistics Department',
    facultyCategory: 'Physical Sciences',
    overview: 'The Department of Statistics develops quantitative reasoning and data analysis skills. Students learn probability, inferential statistics, and applied methods used in research, public administration, and the social and natural sciences.',
    programs: ['BS Statistics (4 Years)', 'FA / FSc Statistics (2 Years)']
  },
  {
    id: 'botany',
    name: 'Botany Department',
    facultyCategory: 'Biological Sciences',
    overview: 'The Department of Botany specializes in plant sciences, ecology, physiology, and plant biochemistry. With well-equipped labs, student-guided field excursions, and plant herbariums, we explore biodiversity conservation and environmental challenges.',
    programs: ['BS Botany (4 Years)', 'FSc Pre-Medical (2 Years)']
  },
  {
    id: 'zoology',
    name: 'Zoology Department',
    facultyCategory: 'Biological Sciences',
    overview: 'The Department of Zoology focuses on animal biology, physiology, genetics, evolution, and ecology. Students gain hands-on experience through advanced laboratory investigations, microscope studies, and local ecological field trips.',
    programs: ['BS Zoology (4 Years)', 'FSc Pre-Medical (2 Years)']
  },
  {
    id: 'health-physical-education',
    name: 'Health & Physical Education Department',
    facultyCategory: 'Biological Sciences',
    overview: 'The Department of Health and Physical Education promotes lifelong wellness, sports science, and physical fitness. Instruction combines exercise science, pedagogy, and practical training to support student health and athletic development.',
    programs: ['Health & Physical Education (Intermediate)', 'College Sports & Fitness Programmes']
  },
  {
    id: 'english',
    name: 'English Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of English develops language proficiency, critical reading capabilities, and a deep appreciation of global literature. We offer balanced courses in linguistics, writing, and literature to foster creative communication and critical analysis.',
    programs: ['BS English (4 Years)', 'FA Humanities (2 Years)']
  },
  {
    id: 'political-science',
    name: 'Political Science Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Political Science covers political systems, governance, public policies, and international relations. We aim to prepare students for public service careers, law, journalism, and academic research.',
    programs: ['BS Political Science (4 Years)', 'FA Humanities (2 Years)']
  },
  {
    id: 'urdu',
    name: 'Urdu Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Urdu promotes the national language, culture, and heritage, offering deep insights into Urdu poetry, prose, classical texts, and contemporary literary criticism.',
    programs: ['BS Urdu (4 Years)', 'FA Humanities (2 Years)']
  },
  {
    id: 'islamic-studies',
    name: 'Islamic Studies Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Islamic Studies and Islamiyat offers instruction in Islamic education, Arabic-related scholarship, and related humanities. The department supports students in developing a grounded understanding of Islamic thought, ethics, and academic study of religion.',
    programs: ['Islamic Studies / Islamiyat (Degree & Intermediate)', 'FA Humanities (2 Years)']
  },
  {
    id: 'arabic',
    name: 'Arabic Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Arabic offers classical and modern Arabic language learning, enhancing the understanding of Islamic history, classical literature, grammar, and translation techniques.',
    programs: ['BS Arabic (4 Years)', 'FA Humanities (2 Years)']
  },
  {
    id: 'history',
    name: 'History Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of History covers local, regional, and global historical trajectories. We help students develop historical research skills and analyze how past societies shape contemporary socio-political developments.',
    programs: ['BS History (4 Years)', 'FA Humanities (2 Years)']
  },
  {
    id: 'geography',
    name: 'Geography Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Geography explores human-environment relationships, physical mapping, climatology, and Geographic Information Systems (GIS). Our students gain skills in field surveying and digital cartography.',
    programs: ['BS Geography (4 Years)', 'Associate Degree (2 Years)', 'FA General Science (2-Year)']
  },
  {
    id: 'economics',
    name: 'Economics Department',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'The Department of Economics introduces economic theories, market analysis, econometrics, and public policy issues. We equip students with analytical tools to assess economic problems at local and global scales.',
    programs: ['BS Economics (4 Years)', 'Associate Degree (2 Years)']
  },
  {
    id: 'additional-faculty',
    name: 'College Faculty',
    facultyCategory: 'Social Sciences & Humanities',
    overview: 'Teaching staff serving Government Degree College Hayatabad whose submitted profile listed Higher Education Department as the parent department and did not name a subject department. Assignments can be updated when the academic department is confirmed.',
    programs: ['Intermediate and Degree Classes']
  },
  {
    id: 'administration',
    name: 'College Administration',
    facultyCategory: 'Support Services',
    overview: 'The administrative wing coordinates academic sessions, admissions, accounts, pupil fund, and day-to-day college operations under the Principal and DDO. Support staff keep financial records, student services, and official correspondence in order.',
    programs: ['Principal Office', 'DDO / Accounts', 'Pupil Fund Account', 'Admissions & Student Records']
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  // Computer Science
  {
    id: 'dr-mohammad-tehseen-khan',
    deptId: 'computer-science',
    name: 'Dr. Mohammad Tehseen Khan',
    designation: 'Associate Professor',
    specialization: 'Artificial Intelligence & Machine Learning',
    email: 'for.tehseen.khan@gmail.com',
    photo: facultyPhoto('Muhammad Tehseen.jpg'),
    qualification: 'PhD in Computer Science (Machine Learning / AI), University of Peshawar',
    biography: 'Dr. Mohammad Tehseen Khan completed his doctorate in AI (Machine Learning) from the University of Peshawar. He is serving as Associate Professor at GDC Boys Hayatabad. He has 6 international journal publications with an impact factor of more than 13.',
    researchInterests: ['Cyber Security', 'Machine Learning', 'Artificial Intelligence', 'Bio Sensor Networks', 'Network Security'],
    publications: ['5 journal publications and 1 book chapter (impact factor more than 13).'],
    contactInfo: 'IT Block, GDC Boys Hayatabad'
  },
  {
    id: 'sikandar-azam',
    deptId: 'computer-science',
    name: 'Sikandar Azam',
    designation: 'Associate Professor',
    specialization: 'Computer Networks',
    email: 'sikandardawar@gmail.com',
    photo: facultyPhoto('sikandar azam.jpg'),
    qualification: 'MS-CS',
    biography: 'Sikandar Azam is Associate Professor of Computer Science at Government Degree College, Hayatabad. He is serving in BPS-19 and has extensive experience in teaching, academic activities, and departmental responsibilities. He is passionate about education, technology, and helping students develop their knowledge and skills.',
    researchInterests: ['Computer Networks'],
    publications: [],
    contactInfo: 'Hayatabad, Peshawar'
  },
  {
    id: 'jawad-akhtar',
    deptId: 'computer-science',
    name: 'Jawad Akhtar',
    designation: 'Assistant Professor',
    specialization: 'Computer Science',
    email: 'jawadakhtar83@gmail.com',
    photo: facultyPhoto('jawad akhtar.png'),
    qualification: 'MS (Computer Science), COMSATS University Islamabad (2009)',
    biography: 'Jawad Akhtar completed his MS-CS degree from COMSATS University Islamabad in 2009 and has been working in the Higher Education Department since then.',
    researchInterests: [],
    publications: [],
    contactInfo: 'IT Block, GDC Hayatabad'
  },
  {
    id: 'dr-zafar-khan-khalil',
    deptId: 'computer-science',
    name: 'Dr. Zafar Khan Khalil',
    designation: 'Lecturer in Computer Science',
    specialization: 'Computer Vision & Deep Learning',
    email: 'zafar.khalil88@gmail.com',
    photo: facultyPhoto('Dr. Zafar Khan Khalil.png'),
    qualification: 'Ph.D. Computer Science',
    biography: 'Dr. Zafar Khan Khalil is a Computer Science and AI professional with a strong background in teaching and research. His special interests include deep learning, computer vision, image processing, IoT, and medical images.',
    researchInterests: ['Computer Vision', 'Image Processing', 'Machine Learning', 'Deep Learning'],
    publications: ['A comprehensive dataset of Infant Facial Expressions of Pain Intensity'],
    googleScholar: 'https://scholar.google.com/citations?user=RvLkP9UAAAAJ&hl=en',
    contactInfo: 'Department of Computer Science, GDC Hayatabad'
  },
  {
    id: 'ameer-mustafa',
    deptId: 'computer-science',
    name: 'Ameer Mustafa',
    designation: 'Lecturer (BPS-17)',
    specialization: 'Computer Science',
    email: 'ameer983465@gmail.com',
    photo: facultyPhoto('Ameer mustafa.jpg'),
    qualification: 'MSc in Computer Science, University of Peshawar (2022)',
    biography: 'Ameer Mustafa belongs to District Peshawar, Khyber Pakhtunkhwa. He completed his Master in Computer Science from the University of Peshawar in 2022 and is working in the Higher Education Department as Lecturer.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Hayatabad, Peshawar'
  },

  // Mathematics
  {
    id: 'dr-mohammad-ishaq',
    deptId: 'mathematics',
    name: 'Dr. Mohammad Ishaq',
    designation: 'Assistant Professor',
    specialization: 'Fluid Mechanics & Graph Theory',
    email: 'mohammadishaq117@gmail.com',
    photo: facultyPhoto('Dr.Mohammad Ishaq.jpeg'),
    qualification: 'Ph.D. in Mathematics, Islamia College University, Peshawar',
    biography: 'Dr. Mohammad Ishaq is Assistant Professor in Mathematics with a Ph.D. in Mathematics from Islamia College University, Peshawar. He has more than 20 years of teaching and research experience, specializing in fluid mechanics and graph theory. He has published more than 20 research articles in national and international journals. He currently serves at Government Degree College, Hayatabad, where he is actively involved in teaching, research, and academic administration.',
    researchInterests: ['Applied Mathematics', 'Pure Mathematics'],
    publications: ['More than 20 publications in different fields of Mathematics'],
    contactInfo: 'Govt. Degree College Hayatabad, Phase-6, Peshawar'
  },
  {
    id: 'dr-abdul-hameed',
    deptId: 'mathematics',
    name: 'Dr. Abdul Hameed',
    designation: 'Assistant Professor',
    specialization: 'Graph Theory & Linear Algebra',
    email: 'hameedafr@gmail.com',
    photo: facultyPhoto('Dr. Abdul Hameed.jpeg'),
    qualification: 'PhD Mathematics, Shanghai Jiao Tong University, China; M.Ed.',
    biography: 'Dr. Abdul Hameed is Assistant Professor of Mathematics at Government Degree College, Hayatabad, Peshawar. He holds a PhD in Mathematics from Shanghai Jiao Tong University, China. He teaches mathematics courses at both intermediate and BS levels. His research interests include graph theory, spectral graph theory, linear algebra, and matrix theory.',
    researchInterests: ['Graph Theory', 'Linear Algebra', 'Matrix Theory'],
    publications: [
      'Hameed, A., Khan, Z. U., and Tyaglov, M. Laplacian energy and first Zagreb Index of Laplacian integral graphs, Analele Stiintifice ale Universitatii Ovidius din Constanta, Mathematical Series, 30 (2022), no. 2, 133–160.',
      'Hameed, A., and Tyaglov, M. Integral Laplacian graphs with a unique repeated Laplacian eigenvalue, I, Special Matrices, 11 (2023), no. 2, 20230111.',
      'Hameed, A., and Tyaglov, M. Integral Laplacian graphs with a unique repeated Laplacian eigenvalue, II, Bulletin of the Korean Mathematical Society, (2025), 299–317.',
      'Khan, Z. U., Hameed, A., and Ijaz, M. On Degree Distance spectra of graphs, Contributions to Discrete Mathematics, 21 (2025), no. 1.',
      'Khan, Z. U., and Hameed, A. On the spectral radius and energy of the degree distance matrix of a connected graph, Open Mathematics, 23 (2025), no. 4, 20250139.',
      'Hameed, A., Rehman, M. U., and Boulaaras, S. Study of piecewise global fractional financial model with three state variables, Fractals, 33 (2025), no. 4, 2540073.',
      'Hameed, A., and Khan, Z. U. Note on generalized distance matrix of graphs, Thai Journal of Mathematics, 20 (2022), no. 4, 1505–1518.',
      'Khan, Z. U., Hameed, A., Ali, G., and Baig, A. Q. 5-Cyclic Graphs with Minimum Degree Distance, Natural Publishing, (In press).'
    ],
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=jUcntwUAAAAJ',
    linkedin: 'https://www.linkedin.com/in/dr-abdul-hameed-72a27214a/',
    contactInfo: 'Government Degree College, Hayatabad Peshawar'
  },
  {
    id: 'nadeem-khan',
    deptId: 'mathematics',
    name: 'Nadeem Khan',
    designation: 'Assistant Professor',
    specialization: 'Mathematics',
    email: 'nadeemgcp@gmail.com',
    photo: '',
    qualification: 'MPhil Mathematics',
    biography: 'Nadeem Khan is Assistant Professor of Mathematics with an MPhil in Mathematics and around 15 years of teaching experience.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },
  {
    id: 'abdul-majeed',
    deptId: 'mathematics',
    name: 'Abdul Majeed',
    designation: 'Lecturer in Mathematics (BPS-17)',
    specialization: 'Fluid Mechanics',
    email: 'abdulmajeed.kundi@gmail.com',
    photo: facultyPhoto('Abdul Majeed.jpg'),
    biography: 'Abdul Majeed is Lecturer in Mathematics. His qualification is M.Phil Mathematics, and his research interest is Ph.D. research in fluid mechanics.',
    researchInterests: ['Fluid Mechanics'],
    publications: [],
    contactInfo: 'GDC Hayatabad'
  },
  {
    id: 'malik-aizaz-ali',
    deptId: 'mathematics',
    name: 'Malik Aizaz Ali',
    designation: 'Lecturer',
    specialization: 'Mathematics',
    email: 'malikaizazali@gmail.com',
    photo: facultyPhoto('Malik Aizaz Ali.jpg'),
    qualification: 'MPhil (Mathematics), B.Ed., M.Ed.',
    biography: 'Malik Aizaz Ali completed his MPhil in Mathematics from the University of Peshawar. He is currently working as Lecturer at Govt. Degree College Hayatabad Peshawar and is passionate about learning and teaching.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Department of Mathematics, GDC Hayatabad Peshawar'
  },

  // Physics
  {
    id: 'himayat-ullah',
    deptId: 'physics',
    name: 'Himayat Ullah',
    designation: 'Lecturer in Physics & Head of Department (HOD)',
    specialization: 'Materials Science',
    email: 'himayatkhan666@gmail.com',
    photo: facultyPhoto('Himayat Ullah.jpg'),
    qualification: 'MPhil Physics (Materials Science)',
    biography: 'Himayat Ullah is a Physics Lecturer and researcher specializing in Materials Science and functional materials. He holds an MPhil in Physics (Materials Science) and has several years of teaching and research experience. His research interests include piezoelectric, dielectric, ferroelectric, and energy-storage materials, with a focus on their advanced functional applications. He has authored research publications in the fields of materials science, engineering, and functional materials.',
    researchInterests: ['Materials Science', 'Polymers', 'Ceramics', 'Mechatronics and Control Engineering'],
    publications: [
      'Advancements in Piezoelectric Nanomaterials for Wearable Sensor Applications — Spectrum of Engineering Sciences, 2026.',
      'Advanced Characterization of Hierarchical Porous Carbon Electrodes for Supercapacitor Applications — Spectrum of Engineering Sciences, 2026.'
    ],
    linkedin: 'https://www.linkedin.com/in/himayat-ullah-8a59a9367',
    contactInfo: 'GDC Hayatabad Peshawar for Boys'
  },
  {
    id: 'dr-qaisar-hayat',
    deptId: 'physics',
    name: 'Dr. Qaisar Hayat',
    designation: 'Assistant Professor',
    specialization: 'Plasmonics & Terahertz Photonics',
    email: 'qaisarqh@gmail.com',
    photo: facultyPhoto('Dr Qaisar Hayat.jpg'),
    qualification: 'PhD Physics (Electronic Engineering), Shanghai Jiao Tong University, China',
    biography: 'Dr. Qaisar Hayat recently completed his PhD in plasmonic-based nanoantenna arrays with a major in Physics (electronic engineering) from Shanghai Jiao Tong University, Shanghai, P. R. China, a 36th QS-ranked university in the world. His research focused on the construction of plasmonic-based active nanoantenna arrays to enhance optical characteristics for applications in label-free wearable biosensors for rapid detection, terahertz communication, and terahertz photonics.',
    researchInterests: ['Label-free wearable biosensors for rapid detection', 'Plasmonics', 'Terahertz photonics'],
    publications: [],
    googleScholar: 'https://sites.google.com/view/qhayat',
    linkedin: 'https://www.linkedin.com/in/qaisar-hayat-835333153',
    contactInfo: 'Government Degree College Hayatabad Peshawar'
  },
  {
    id: 'omar-farooq',
    deptId: 'physics',
    name: 'Omar Farooq',
    designation: 'Lecturer',
    specialization: 'Physics',
    email: 'phy1.gdch@gmail.com',
    photo: facultyPhoto('OMAR FAROOQ.jpg'),
    qualification: 'M.Phil, Physics',
    biography: 'Mr. Omar Farooq is a college educator dedicated to making complex STEM concepts accessible through hands-on, inquiry-based learning. With a background in science, he attempts to bridge the gap between theoretical principles and real-world innovation.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },

  // Chemistry
  {
    id: 'syed-mahfooz-jan',
    deptId: 'chemistry',
    name: 'Syed Mahfooz Jan',
    designation: 'Associate Professor',
    specialization: 'Biochemistry',
    email: 'mahfoozj@gmail.com',
    photo: facultyPhoto('Syed Mahfooz Jan.jpg'),
    qualification: 'M.Sc Chemistry (Biochemistry)',
    biography: 'Syed Mahfooz Jan holds an M.Sc in Chemistry with specialization in biochemistry and has 26 years of teaching experience.',
    researchInterests: ['Biochemistry'],
    publications: [],
    contactInfo: 'GDC Hayatabad, Phase 6, Hayatabad Peshawar'
  },
  {
    id: 'faizan-fayaz',
    deptId: 'chemistry',
    name: 'Faizan Fayaz',
    designation: 'Lecturer',
    specialization: 'Nanotechnology',
    email: 'faizanfayaz.upesh@gmail.com',
    photo: facultyPhoto('Faizan Fayaz.jpg'),
    qualification: 'M.Sc Chemistry',
    biography: 'Faizan Fayaz is Lecturer in Chemistry (BPS-17) at Government Degree College Hayatabad. His academic work includes nanotechnology and related chemical research.',
    researchInterests: ['Nanotechnology'],
    publications: ['Biological Evaluation of Silver Nanoparticles Derived from Sub Fractions of Dodonaea viscosa'],
    contactInfo: 'GDC Hayatabad, Phase 6'
  },
  {
    id: 'shahid-amin',
    deptId: 'chemistry',
    name: 'Shahid Amin',
    designation: 'Lecturer',
    specialization: 'Applied Chemistry & Nanomaterials',
    email: 'shahidaminkhan142@gmail.com',
    photo: facultyPhoto('shahid amin.jpg'),
    qualification: 'MPhil in Applied Chemistry, University of Peshawar',
    biography: 'Shahid Amin holds an MPhil in Applied Chemistry from the University of Peshawar, Khyber Pakhtunkhwa, Pakistan. He has over five years of experience in academia. His expertise includes 2D materials, including MXene and Graphene.',
    researchInterests: ['Nanotechnology', 'Composite materials'],
    publications: [],
    contactInfo: 'GDC Hayatabad'
  },

  // Statistics
  {
    id: 'tariq-hussain',
    deptId: 'statistics',
    name: 'Tariq Hussain',
    designation: 'DDO / Vice Principal / Associate Professor',
    specialization: 'Statistics',
    email: 'tariqzhussain@gmail.com',
    photo: facultyPhoto('Tariq Hussain.png'),
    qualification: 'M.Phil in Statistics',
    biography: 'Tariq Hussain belongs to Peshawar. He completed his M.Phil in Statistics and currently serves as DDO / Vice Principal and Associate Professor at Government Degree College Hayatabad, Peshawar.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },

  // Zoology
  {
    id: 'ubaidullah',
    deptId: 'zoology',
    name: 'Ubaidullah',
    designation: 'Professor (BPS-20)',
    specialization: 'Molecular Biology',
    email: 'surajsunud2002@gmail.com',
    photo: facultyPhoto('Ubaidullah.jpeg'),
    qualification: 'PhD Zoology',
    biography: 'Ubaidullah is Professor (BPS-20) of Zoology with a PhD in Zoology and 24 years of teaching experience. His research work includes molecular biology and related biological studies.',
    researchInterests: ['Molecular Biology'],
    publications: ['Bio Monitoring of DNA Damage in Matchstick industry workers from Peshawar, Khyber Pakhtunkhwa, Pakistan'],
    contactInfo: 'GDC Hayatabad, Phase 6, Peshawar'
  },
  {
    id: 'mohabat-khan',
    deptId: 'zoology',
    name: 'Mohabat Khan',
    designation: 'Assistant Professor',
    specialization: 'Genetics (SNP)',
    email: 'mohabatkhan1@gmail.com',
    photo: facultyPhoto('Mohabat khan.jpg'),
    qualification: 'M.Sc, University of Peshawar',
    biography: 'Mohabat Khan, son of Syed Raheem, was born on 2 January 1987 in Badabar, Peshawar. He completed Matriculation at Badabar Model School, earned F.Sc. from Government Superior Science College, and graduated with an M.Sc. from the University of Peshawar.',
    researchInterests: ['Genetics (SNP)'],
    publications: [],
    contactInfo: 'Government Degree College Hayatabad, Peshawar'
  },
  {
    id: 'dr-saif-ullah',
    deptId: 'zoology',
    name: 'Dr. Saif Ullah',
    designation: 'Lecturer in Zoology',
    specialization: 'Zoology, Diabetes & Neuroscience',
    email: 'saifktk302@gmail.com',
    photo: facultyPhoto('Dr.Saif ullah.JPG'),
    qualification: 'PhD Zoology; B.Ed.; M.Ed.',
    biography: 'Dr. Saif Ullah is a dedicated biology teacher with over 10 years of teaching experience in government and private educational institutions in Pakistan. He holds a PhD in Zoology, along with B.Ed. and M.Ed. qualifications, with a strong foundation in biology education, laboratory instruction, and student-centered learning. He is experienced in delivering engaging lessons, managing classrooms, conducting practical laboratory sessions, and promoting academic excellence.',
    researchInterests: ['Zoology', 'Diabetes', 'Neuroscience'],
    publications: ['https://www.jptcp.com/index.php/jptcp/article/view/6535'],
    linkedin: 'https://www.linkedin.com/in/dr-saif-ullah-40aa37315',
    contactInfo: 'GDC for Boys Hayatabad'
  },
  {
    id: 'muhammad-sangeen-khan',
    deptId: 'zoology',
    name: 'Muhammad Sangeen Khan',
    designation: 'Lecturer',
    specialization: 'Environmental Science',
    email: 'sangeen1990@gmail.com',
    photo: facultyPhoto('Muhammad Sangeen Khan.jpg'),
    qualification: 'MS Environmental Science',
    biography: 'Muhammad Sangeen Khan is an aspiring environmentalist, passionate about environmental protection, sustainability, and conservation. He is interested in understanding environmental challenges and exploring practical, science-based solutions for a healthier and more sustainable future.',
    researchInterests: ['Environmental protection', 'Sustainability', 'Conservation'],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },
  {
    id: 'muhammad-ishtiaq',
    deptId: 'zoology',
    name: 'Muhammad Ishtiaq',
    designation: 'BS Lecturer',
    specialization: 'Fisheries',
    email: 'ishtiaq.zoologist@gmail.com',
    photo: facultyPhoto('Muhammad Ishtiaq.jpg'),
    qualification: 'MPhil Zoology',
    biography: 'Muhammad Ishtiaq is BS Lecturer in Zoology with an MPhil in Zoology. His research interest is fisheries.',
    researchInterests: ['Fisheries'],
    publications: [],
    contactInfo: 'GDC Hayatabad'
  },

  // Health & Physical Education
  {
    id: 'kamran-ahmad',
    deptId: 'health-physical-education',
    name: 'Kamran Ahmad',
    designation: 'Assistant Professor',
    specialization: 'Exercise Science & Pedagogy',
    email: 'kamranppr@gmail.com',
    photo: facultyPhoto('Kamran Ahmad.jpg'),
    qualification: 'MS Sports Science',
    biography: 'Kamran Ahmad is Assistant Professor of Health and Physical Education, dedicated to promoting lifelong wellness through evidence-based teaching and mentorship. He has a strong background in exercise science and pedagogy.',
    researchInterests: ['Exercise science', 'Physical education pedagogy'],
    publications: [],
    contactInfo: 'Near Main Hall, GDC Hayatabad'
  },

  // English
  {
    id: 'abdullah-khan',
    deptId: 'english',
    name: 'Abdullah Khan',
    designation: 'Assistant Professor',
    specialization: 'English',
    email: 'abd835.ak@gmail.com',
    photo: facultyPhoto('Abdullah Khan.jpg'),
    qualification: 'MA English',
    biography: 'Abdullah Khan is Assistant Professor of English at Government Degree College Hayatabad, Peshawar.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },
  {
    id: 'irfan-ullah',
    deptId: 'english',
    name: 'Irfan Ullah',
    designation: 'Assistant Professor',
    specialization: 'English',
    email: 'ifnmohmand@gmail.com',
    photo: facultyPhoto('irfan ullah.JPG'),
    qualification: 'MA (English), University of Peshawar',
    biography: 'Irfan Ullah permanently resides in District Peshawar. He completed his Master\'s from the University of Peshawar and has been serving in the Higher Education Department, Khyber Pakhtunkhwa, since 2012.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Govt. Degree College Hayatabad, Peshawar'
  },
  {
    id: 'owais-ahmad',
    deptId: 'english',
    name: 'Owais Ahmad',
    designation: 'Lecturer in English',
    specialization: 'Linguistics & English Language Teaching',
    email: 'soulman0011@gmail.com',
    photo: facultyPhoto('Owais Ahmad.JPG'),
    qualification: 'MPhil in English',
    biography: 'Owais Ahmad is Lecturer in English at Government Degree College Hayatabad, Peshawar. He holds an MPhil in English and is engaged in teaching English language and literature at the undergraduate level. His academic interests include Linguistics, Applied Linguistics, and English Language Teaching. He is particularly interested in language learning and effective English language pedagogy.',
    researchInterests: ['Linguistics', 'English language teaching'],
    publications: [],
    contactInfo: 'Government Degree College Hayatabad, Peshawar'
  },
  {
    id: 'aftab-ali',
    deptId: 'english',
    name: 'Aftab Ali',
    designation: 'Lecturer',
    specialization: 'Contemporary Novel',
    email: 'aftabgdcwp@gmail.com',
    photo: facultyPhoto('Aftab Ali.jpg'),
    qualification: 'M.Phil English',
    biography: 'Aftab Ali is a teacher by passion and profession, and a learner by temperament. He always tries to make his classroom a space where knowledge and ideas are exchanged, not merely taught, and aims to impart the best to his students.',
    researchInterests: ['Contemporary Novel'],
    publications: [],
    linkedin: 'https://www.linkedin.com/in/aftab-ali-1ab0a7349',
    contactInfo: 'Government Degree College Hayatabad, Peshawar'
  },

  // Political Science
  {
    id: 'dr-muhammad-adeel-khan',
    deptId: 'political-science',
    name: 'Dr. Muhammad Adeel Khan',
    designation: 'Lecturer (BPS-17)',
    specialization: 'Governance & Foreign Policy',
    email: 'dradeelkhan2@gmail.com',
    photo: facultyPhoto('Dr. Muhammad Adeel khan.jpg'),
    qualification: 'Ph.D. in Political Science',
    biography: 'Dr. Muhammad Adeel Khan holds a PhD in Political Science and serves as Lecturer in the Higher Education Department. His academic interests focus on governance, decision-making, and both domestic and international actors and organizations. He is passionate about translating this knowledge to students to foster critical understanding of political systems and global affairs.',
    researchInterests: ['Civil-military relationship', 'Decision-making processes', 'Foreign policy'],
    publications: ['9 publications in HEC-recognized journals'],
    contactInfo: 'Hayatabad, Peshawar'
  },
  {
    id: 'muhammad-amir-khan',
    deptId: 'political-science',
    name: 'Muhammad Amir Khan',
    designation: 'Lecturer',
    specialization: 'Political Science',
    email: 'amirlc133@gmail.com',
    photo: facultyPhoto('Muhammad Amir khan.jpeg'),
    qualification: 'MA Political Science',
    biography: 'Muhammad Amir Khan is a scholar of political science serving as Lecturer at Hayatabad Degree College, Phase-6.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Hayatabad Degree College, Phase-6'
  },
  {
    id: 'babar-khurshid',
    deptId: 'political-science',
    name: 'Babar Khurshid',
    designation: 'Lecturer (BPS-17)',
    specialization: 'Governance, Justice & Pashtun Society',
    email: 'babarkhurshid92@gmail.com',
    photo: facultyPhoto('Babar khurshid.jpg'),
    qualification: 'MPhil Political Science, University of Peshawar',
    biography: 'Babar Khurshid belongs to District Lakki Marwat. After high school education in the same district, he moved to Peshawar and completed BS Political Science from the Department of Political Science, University of Peshawar. From the same department he completed an MPhil with specialization in governance and justice, and anthropology of justice and law in Pashtun society. He is currently working as Lecturer in the Higher Education Department, Khyber Pakhtunkhwa.',
    researchInterests: ['Governance and justice', 'Anthropology of justice and law', 'Indigenous justice systems', 'Justice in Pashtun society', 'Mineral and energy justice'],
    publications: [],
    linkedin: 'https://pk.linkedin.com/in/babar-khurshid-875267409',
    contactInfo: 'Government Degree College Hayatabad, Phase 6, Peshawar'
  },
  {
    id: 'kashif-mehmood',
    deptId: 'political-science',
    name: 'Kashif Mehmood',
    designation: 'Lecturer',
    specialization: 'International Relations',
    email: 'kashifwazir529@gmail.com',
    photo: facultyPhoto('Kashif Mehmood.jpg'),
    qualification: 'M.Sc International Relations',
    biography: 'Kashif Mehmood is presently working as Lecturer in the Political Science Department at GDC Hayatabad, Peshawar.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Hayatabad, Phase 6'
  },

  // Urdu
  {
    id: 'dr-muhammad-rasheed',
    deptId: 'urdu',
    name: 'Dr. Muhammad Rasheed',
    designation: 'Associate Professor',
    specialization: 'Urdu Literature & Critical Theory',
    email: 'rasheedjan53@gmail.com',
    photo: facultyPhoto('Dr Muhammad Rasheed.jpg'),
    qualification: 'PhD Urdu',
    biography: 'Dr. Muhammad Rasheed is a PhD in Urdu, researcher, and educator. He is passionate about classical and modern Urdu literature, linguistic evolution, and critical theory.',
    researchInterests: ['Classical and modern Urdu literature', 'Linguistic evolution', 'Critical theory'],
    publications: [
      'خیبر پختونخوا میں اُردو افسانہ',
      'خیبر پختونخوا کے جنوبی اضلاع کے افسانہ نگار'
    ],
    contactInfo: 'GDC Hayatabad'
  },
  {
    id: 'muhammad-adil',
    deptId: 'urdu',
    name: 'Muhammad Adil',
    designation: 'Lecturer',
    specialization: 'Urdu Language & Literature',
    email: 'madiljan1993@gmail.com',
    photo: facultyPhoto('Muhammad Adil.jpg'),
    qualification: 'M.A Urdu',
    biography: 'Muhammad Adil is Urdu Lecturer (BPS-17) and a passionate educator dedicated to teaching, learning, and continuous professional growth. He has a strong interest in Urdu language and literature, modern teaching methodologies, SLO-based education, and educational technology. He values honesty, professionalism, knowledge, and lifelong learning.',
    researchInterests: ['Urdu language and literature', 'SLO-based education', 'Educational technology'],
    publications: [],
    contactInfo: 'Govt. Degree College Hayatabad, Peshawar'
  },
  {
    id: 'sami-ullah-urdu',
    deptId: 'urdu',
    name: 'Sami Ullah',
    designation: 'Lecturer in Urdu',
    specialization: 'Urdu Literature & Linguistics',
    email: 'sami.urdu2233@gmail.com',
    photo: facultyPhoto('Samiullah.jpg'),
    qualification: 'BS Urdu',
    biography: 'Sami Ullah teaches Urdu literature and linguistics on a critical basis at Government Degree College Hayatabad, Peshawar.',
    researchInterests: ['Urdu literature', 'Linguistics'],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },

  // Islamic Studies
  {
    id: 'abdul-shakoor',
    deptId: 'islamic-studies',
    name: 'Abdul Shakoor',
    designation: 'Associate Professor',
    specialization: 'Islamic Education & Arabic',
    email: 'shakoorabdul15576@gmail.com',
    photo: facultyPhoto('Abdul Shakoor.jpg'),
    qualification: 'Al-Shahadat-ul-Aalamia (MA Islamiyat / Arabic)',
    biography: 'Abdul Shakoor is Associate Professor in Islamic Education / Arabic at Hayatabad Degree College. He is a resident of Tehkal Bala, Peshawar, and a research scholar in Islamic topics.',
    researchInterests: ['Islamic studies'],
    publications: [],
    contactInfo: 'Govt. Degree College, Phase 6, Hayatabad, Peshawar'
  },
  {
    id: 'sami-ullah-islamic-studies',
    deptId: 'islamic-studies',
    name: 'Sami Ullah',
    designation: 'Lecturer',
    specialization: 'Islamic Studies',
    email: 'samiislamiyat@gmail.com',
    photo: '',
    qualification: 'MS Islamic Studies',
    biography: 'Sami Ullah is Lecturer in Islamic Studies at Government Degree College Hayatabad, Peshawar.',
    researchInterests: ['Islamic Studies'],
    publications: [],
    contactInfo: 'Hayatabad, Peshawar'
  },

  // Economics
  {
    id: 'amjad-ali',
    deptId: 'economics',
    name: 'Amjad Ali',
    designation: 'Associate Professor',
    specialization: 'Economics',
    email: 'amjadalikhan1148@gmail.com',
    photo: facultyPhoto('amjad ali.jpg'),
    qualification: 'PhD in Economics',
    biography: 'Amjad Ali is Associate Professor of Economics at GDC Hayatabad, Peshawar. He is known as a hard worker, kind-hearted, and cooperative colleague.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad, Peshawar'
  },
  {
    id: 'ahmad-arsalan',
    deptId: 'economics',
    name: 'Ahmad Arsalan',
    designation: 'Lecturer',
    specialization: 'Economics',
    email: 'ahmadarsalan46@gmail.com',
    photo: facultyPhoto('ahmad arsalan.jpg'),
    qualification: 'BS Economics, IMSciences Peshawar',
    biography: 'Ahmad Arsalan studied BS Economics from IMSciences Peshawar and is currently serving as Lecturer at GDC Hayatabad.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC, Phase 6, Hayatabad Peshawar'
  },

  // College Faculty — subject department was not named in the submitted profile
  {
    id: 'gohar-rehman',
    deptId: 'additional-faculty',
    name: 'Gohar Rehman',
    designation: 'Lecturer',
    specialization: 'College Teaching',
    email: 'goharrehman796@gmail.com',
    photo: facultyPhoto('gohar rehman.jpg'),
    qualification: 'M.Sc., M.Ed.',
    biography: 'Gohar Rehman is Lecturer at Government Degree College Hayatabad, Peshawar. He belongs to Garhi Faizullah, Peshawar (date of birth 2 August 1988). His submitted profile listed Higher Education Department as the parent department and did not name a subject department.',
    researchInterests: [],
    publications: [],
    contactInfo: 'GDC Hayatabad'
  },

  // Support & Services
  {
    id: 'aamir-khan',
    deptId: 'administration',
    name: 'Aamir Khan',
    designation: 'Senior Clerk',
    specialization: 'Pupil Fund Account & College Finance',
    email: 'amirqacc123@gmail.com',
    photo: facultyPhoto('AAMIR KHAN.png'),
    qualification: 'Master in Finance',
    biography: 'Aamir Khan serves as Senior Clerk at Government Degree College Hayatabad, Peshawar. He performs duties with dedication, sincerity, and responsibility, and maintains the Pupil Fund Account accurately and systematically. He ensures proper recording of all receipts, payments, and financial transactions, and keeps account records, vouchers, cheques, and supporting documents properly organized. He prepares statements, reconciles the account regularly, and ensures that funds are utilized strictly according to approved rules and guidelines. He completes financial work within the prescribed time, maintains transparency in all transactions, and cooperates with the Principal, DDO, and other concerned officials in financial matters.',
    researchInterests: [],
    publications: [],
    contactInfo: 'Govt. Degree College Hayatabad, Peshawar, Phase 6, Sector F-2'
  }
];
