import type {
  NavItem,
  Slide,
  GalleryItem,
  GalleryCategories,
  EventItem,
  EventCategories,
  VolunteerBenefit,
  VolunteerRole,
} from "./constants-types";
import {
  BookOpen,
  HeartPulse,
  HandHelping,
  BriefcaseBusiness,
  Trees,
  ShieldAlert,
  Home,
  Stethoscope,
  Users,
  MapPin,
  Calendar,
  Shield,
  Leaf,
  Target,
  Eye,
  Lightbulb,
  Award,
  Heart,
  GraduationCap,
  Globe,
  HeartHandshake,
  Clock,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const logo = "/assets/logo.png";

export const nav_links = {
  about_us: "/about-us",
  profile: "/profile",
  project: "/project",
  contact_us: "/contact-us",
  vision_mission: "/vision-mission",
  donation: "/donation",
  gallery: "/gallery",
  events: "/events",
  volunteer: "/volunteer",
  faqs: "/faqs",
  privacy_policy: "/privacy-policy",
  terms_conditions: "/term-conditions",
};

export const legalLinks = [
  { label: "Privacy Policy", href: `${nav_links.privacy_policy}` },
  { label: "Terms and Condition", href: `${nav_links.terms_conditions}` },
  { label: "Faqs", href: `${nav_links.faqs}` },
  // { label: "80G Certificate", href: "#certificate" },
];
export const ngo_name = "Bright Future Foundation";
export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    children: [
      { title: "About Bright", href: `${nav_links.about_us}` },
      {
        title: "Vision & Mission",
        href: `${nav_links.vision_mission}`,
      },
      {
        title: "Profile of NGO",
        href: `${nav_links.profile}`,
      },
      {
        title: "Gallery",
        href: `${nav_links.gallery}`,
      },
    ],
  },
  { title: "Events", href: `${nav_links.events}` },
  { title: "Volunteer", href: `${nav_links.volunteer}` },
  { title: "Contact Us", href: `${nav_links.contact_us}` },
];

export const slides: Slide[] = [
  { image: "/assets/I11.jpg" },
  { image: "/assets/I6.jpeg" },
  { image: "/assets/I1.jpeg" },
  { image: "/assets/I12.jpg" },
  { image: "/assets/I15.jpeg" },
];

export const HomeAbout = {
  paragraphs: [
    `${ngo_name} is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, skill development, and social welfare initiatives.`,

    "Established with a vision to create sustainable social impact, the foundation works closely with volunteers, educators, healthcare professionals, and community leaders to improve lives and build a brighter future for all.",
  ],
  ctaText: "read more >",
  ctaLink: `${nav_links.about_us}`,
};

export const programs = [
  {
    title: "Education",
    image: "/assets/I6.jpeg",
    description: "Education, nutrition and holistic development of children",
    icon: BookOpen,
    color: "text-yellow-500",
    link: nav_links.gallery,
    category: "Education" as GalleryCategories,
    bg: "bg-yellow-100",
  },
  {
    title: "Healthcare",
    description:
      "Taking healthcare services to doorsteps of hard to reach communities",
    link: nav_links.gallery,
    category: "Healthcare" as GalleryCategories,
    icon: HeartPulse,
    color: "text-purple-400",
    bg: "bg-purple-100",
  },
  {
    title: "Women Empowerment",
    description:
      "Empowering adolescent girls & women through community engagement",
    link: nav_links.gallery,
    category: "Empowerment" as GalleryCategories,
    icon: HandHelping,
    color: "text-cyan-400",
    bg: "bg-cyan-100",
  },
  {
    title: "Livelihood",
    description:
      "Skill training and placement support for underprivileged youth",
    icon: BriefcaseBusiness,
    link: nav_links.gallery,
    category: "Empowerment" as GalleryCategories,
    color: "text-orange-300",
    bg: "bg-orange-100",
  },
  {
    title: "Empowering Grassroots",
    link: nav_links.gallery,
    category: "Community" as GalleryCategories,
    description:
      "Helping community-based organizations become locally sustainable",
    icon: Trees,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Disaster Response",
    description:
      "Reach out and respond to the needs of disaster-affected people",
    link: nav_links.gallery,
    category: "Community" as GalleryCategories,
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-100",
  },
];

export const HERO_CONTENT = {
  label: "Registered NGO under Section 80G",
  title: "Give Every Child a Chance to",
  highlight: "Learn & Dream",
  subtitle:
    "Your donation today builds a brighter tomorrow for underprivileged children across India.",
  stats: [
    { number: "1,85,000+", label: "Children Educated" },
    { number: "977", label: "Education Centers" },
    { number: "27", label: "States Covered" },
  ],
};

export const SOCIAL_LINKS = [
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
];
export const SOCIAL_LINKS_PATH = {
  Fhref: "",
  Xhref: "",
  Ihref: "",
  Mhref: "",
};

export const CONTACT_INFO = {
  email: "brightfuturefoundationcontact@gmail.com",
  phone: "+91-7302721902",
  hours: "Monday - Saturday, 10AM to 7PM (IST)",
  address: "New Delhi, India",
};

export const TAX_INFO = {
  title: "Tax Benefits",
  description:
    "All donations are exempted under Section 80G of the Income Tax Act (Registered under Societies Registration Act XXI of 1860)",
  badge: "50% Tax Exemption",
};

export const FAQS = [
  {
    question: "How does my donation make a difference?",
    answer:
      "Your donation directly funds education programs, providing books, uniforms, and quality teaching to underprivileged children.",
  },
  {
    question: "Is my donation tax deductible?",
    answer:
      "Yes! All donations qualify for 50% tax exemption under Section 80G of the Income Tax Act.",
  },
  {
    question: "Will I receive updates on my impact?",
    answer:
      "Absolutely. We send quarterly newsletters and annual impact reports to all donors.",
  },
  {
    question: "Is there a minimum donation amount?",
    answer:
      "No, every contribution counts. You can donate any amount starting from ₹100.",
  },
];

export const FAQSMain = [
  {
    question: `What is ${ngo_name}?`,
    answer: `${ngo_name} is a non-profit organization dedicated to improving the lives of underprivileged communities through education, healthcare, women empowerment, child welfare, environmental initiatives, and skill development programs.`,
  },
  {
    question: `How can I donate to ${ngo_name}?`,
    answer:
      "You can donate securely through our website using UPI, debit/credit cards, net banking, or other available payment methods. Every contribution, regardless of the amount, helps us create a lasting impact.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donations directly support our ongoing initiatives such as educational scholarships, medical assistance, food distribution, environmental campaigns, community development projects, and emergency relief programs.",
  },
  {
    question: "Is my donation tax deductible?",
    answer: `Yes. If ${ngo_name} is registered under the applicable sections of the Income Tax Act (such as 80G in India), eligible donations qualify for tax benefits. A donation receipt will be provided for your records.`,
  },
  {
    question: "How can I volunteer?",
    answer:
      "We welcome passionate volunteers who wish to make a difference. Simply fill out the volunteer registration form on our website, and our team will reach out with available opportunities based on your interests and location.",
  },
  {
    question: "Can I make a monthly recurring donation?",
    answer:
      "Yes. You can choose to support us with recurring monthly donations, helping us plan and sustain our long-term projects more effectively.",
  },
  {
    question: "How do I know my contribution is making an impact?",
    answer:
      "We believe in complete transparency. We regularly share project updates, success stories, impact reports, photographs, and financial information to show how your support is changing lives.",
  },
  {
    question: `Can organizations or companies partner with ${ngo_name}?`,
    answer:
      "Absolutely. We collaborate with businesses, educational institutions, corporate CSR teams, and community organizations to create meaningful social impact through partnerships and joint initiatives.",
  },
  {
    question: "Can I donate items instead of money?",
    answer:
      "Yes. Depending on our current requirements, we accept donations such as books, clothes, school supplies, food, medical equipment, and other essential items. Please contact us before making an in-kind donation.",
  },
  {
    question: `How can I contact ${ngo_name}?`,
    answer:
      "You can reach us through our Contact Us page, email, or phone number listed on the website. Our team will be happy to answer your questions and assist you with donations, volunteering, or partnership opportunities.",
  },
];
export const partners = [
  { name: "Suzlon", logo: "assets/suzlon.webp" },
  { name: "Aditya Birla", logo: "assets/adityabirla.webp" },
  { name: "Ather", logo: "assets/ather.webp" },
  { name: "Blue Star", logo: "assets/bluestar.webp" },
  { name: "HDFC", logo: "assets/hdfc.webp" },
  { name: "Vedanta", logo: "assets/vedanta.webp" },
  { name: "Vedanta", logo: "assets/Mitsubishi_Electric.webp" },
  { name: "Vedanta", logo: "assets/habshifa.webp" },
  { name: "HDFC", logo: "assets/hdfc.webp" },
  { name: "Vedanta", logo: "assets/vedanta.webp" },
];

export const DONATION_AMOUNTS = [
  { amount: 500, label: "Supplies", impact: "Books for 2 kids" },
  { amount: 1000, label: "Nutrition", impact: "Meals for 1 month" },
  { amount: 2500, label: "School Kit", impact: "Kit for 5 kids" },
  { amount: 5000, label: "Sponsor", impact: "1 year education" },
  { amount: 10000, label: "Classroom", impact: "Digital tools" },
  { amount: 0, label: "Custom", impact: "Any amount helps", isCustom: true },
];

export const EVENTS_CONTENT = {
  hero: {
    badge: "Our Events",
    title: "Moments of",
    highlight: "Impact & Togetherness",
    subtitle:
      "Explore the drives, camps and celebrations we have hosted to serve communities across India.",
    stats: [
      { value: "120+", label: "Events Hosted" },
      { value: "25K+", label: "Lives Touched" },
      { value: "10+", label: "States Covered" },
    ],
  },
  categories: [
    "All",
    "Education",
    "Healthcare",
    "Community",
    "Empowerment",
    "Environment",
  ] as EventCategories[],
  filters: ["All", "Upcoming", "Completed"] as const,
};

export const events: EventItem[] = [
  {
    title: "Back to School Drive 2026",
    date: "12 Oct 2026",
    location: "New Delhi",
    description:
      "Distributed school kits, uniforms and books to 1,000+ underprivileged children ahead of the new academic year.",
    image: "/assets/educationForAll.png",
    category: "Education",
    status: "Upcoming",
    attendees: 1200,
  },
  {
    title: "Free Health Checkup Camp",
    date: "18 May 2026",
    location: "Lucknow, UP",
    description:
      "Two-day camp offering free consultations, medicines and health screening for 800+ villagers.",
    image: "/assets/healthInitiativecamp.png",
    category: "Healthcare",
    status: "Upcoming",
    attendees: 850,
  },
  {
    title: "Women Empowerment Workshop",
    date: "02 Apr 2026",
    location: "Jaipur, RJ",
    description:
      "Skill-building and awareness sessions for 300 women from Self Help Groups.",
    image: "/assets/I12.jpg",
    category: "Empowerment",
    status: "Upcoming",
    attendees: 300,
  },
  {
    title: "Community Food Drive",
    date: "21 Mar 2026",
    location: "Kolkata, WB",
    description:
      "Mobile kitchen and ration distribution serving hot meals to 2,000+ families.",
    image: "/assets/bulidingcommunity.png",
    category: "Community",
    status: "Completed",
    attendees: 2000,
  },
  {
    title: "Green Sapling Plantation",
    date: "05 Feb 2026",
    location: "Indore, MP",
    description:
      "Planted 5,000 saplings with 400 volunteers to restore urban green cover.",
    image: "/assets/environment.webp",
    category: "Environment",
    status: "Completed",
    attendees: 400,
  },
  {
    title: "Scholarship Ceremony 2025",
    date: "20 Nov 2025",
    location: "New Delhi",
    description:
      "Felicitated 500 meritorious students with scholarships for higher education.",
    image: "/assets/I6.jpeg",
    category: "Education",
    status: "Completed",
    attendees: 600,
  },
  {
    title: "Medical Camp & Eye Screening",
    date: "12 Oct 2025",
    location: "Patna, BR",
    description:
      "Specialised eye and general checkups for elderly residents + free spectacles.",
    image: "/assets/I9.jpg",
    category: "Healthcare",
    status: "Completed",
    attendees: 950,
  },
  {
    title: "Youth Skill Mela",
    date: "05 Sep 2025",
    location: "Bhopal, MP",
    description:
      "Vocational training showcase connecting 250 youths with employers.",
    image: "/assets/I13.jpg",
    category: "Empowerment",
    status: "Completed",
    attendees: 250,
  },
  {
    title: "Winter Blanket Donation",
    date: "14 Jan 2026",
    location: "Amritsar, PB",
    description:
      "650 blankets and warm clothing distributed to families in need.",
    image: "/assets/volunteerWork.png",
    category: "Community",
    status: "Completed",
    attendees: 650,
  },
  {
    title: "Cleanliness & River Drive",
    date: "28 Dec 2025",
    location: "Haridwar, UK",
    description:
      "Community-led cleanliness drive along the ghats with 300 volunteers.",
    image: "/assets/I5.webp",
    category: "Environment",
    status: "Completed",
    attendees: 300,
  },
  {
    title: "Nutrition Awareness Drive",
    date: "16 Nov 2025",
    location: "Varanasi, UP",
    description:
      "Workshops on balanced nutrition and hygiene for mothers and children.",
    image: "/assets/healthInitiativecamp.png",
    category: "Healthcare",
    status: "Completed",
    attendees: 500,
  },
  {
    title: "Sports Day for Children",
    date: "15 Aug 2025",
    location: "New Delhi",
    description:
      "A fun-filled day of sports, games and prizes for 400 children.",
    image: "/assets/I16.jpeg",
    category: "Education",
    status: "Completed",
    attendees: 400,
  },
];

export const VOLUNTEER_CONTENT = {
  hero: {
    badge: "Be Our Volunteer",
    title: "Lend Your Time,",
    highlight: "Change a Life",
    subtitle:
      "Join a growing community of changemakers who dedicate their skills and heart to serving underprivileged communities across India.",
    stats: [
      { value: "100+", label: "Active Volunteers" },
      { value: "5K+", label: "Hours Contributed" },
      { value: "10+", label: "Cities Covered" },
    ],
  },
  benefits: [
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      desc: "Gain hands-on field experience and professional skill-building opportunities.",
    },
    {
      icon: HeartHandshake,
      title: "Meaningful Impact",
      desc: "Directly touch lives and witness the difference your effort makes.",
    },
    {
      icon: Users,
      title: "Community of Changemakers",
      desc: "Connect with like-minded people, mentors and community leaders.",
    },
    {
      icon: Award,
      title: "Recognition",
      desc: "Receive certificates of appreciation and references for your contribution.",
    },
    {
      icon: Globe,
      title: "Travel & Exposure",
      desc: "Visit new places and communities while making a difference.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Volunteer around your schedule with both weekend and weekday options.",
    },
  ] as VolunteerBenefit[],
  roles: [
    {
      title: "Field Volunteer",
      desc: "Support on-ground drives, camps and community programs.",
      commitment: "4-8 hrs / week",
    },
    {
      title: "Teaching Mentor",
      desc: "Teach and mentor children in our education centers.",
      commitment: "3-6 hrs / week",
    },
    {
      title: "Health Ambassador",
      desc: "Assist in health camps, awareness drives and screenings.",
      commitment: "Weekends",
    },
    {
      title: "Digital Volunteer",
      desc: "Help with social media, design, content and online fundraising.",
      commitment: "Remote",
    },
    {
      title: "Fundraiser",
      desc: "Organize campaigns and mobilize resources for our programs.",
      commitment: "Flexible",
    },
    {
      title: "Event Coordinator",
      desc: "Help plan and run events, drives and celebrations.",
      commitment: "Per event",
    },
  ] as VolunteerRole[],
  interestAreas: [
    "Education",
    "Healthcare",
    "Environment",
    "Women Empowerment",
    "Livelihood",
    "Disaster Relief",
  ],
  faqs: [
    {
      q: "Do I need any prior experience to volunteer?",
      a: "No. We provide orientation and guidance for every volunteer role.",
    },
    {
      q: "Can students or professionals volunteer remotely?",
      a: "Yes! Many roles like teaching, design and fundraising can be done remotely.",
    },
    {
      q: "Is there a minimum time commitment?",
      a: "We ask for a minimum of 4 hours per week, but flexible options exist.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes, volunteers receive certificates of appreciation and references.",
    },
  ],
};

export const heroImages = [
  {
    src: "/assets/bulidingcommunity.png",
    alt: "Community support",
    caption: "Building Communities",
  },
  {
    src: "/assets/educationForAll.png",
    alt: "Education program",
    caption: "Education For All",
  },
  {
    src: "/assets/healthInitiativecamp.png",
    alt: "Health initiative",
    caption: "Healthcare Access",
  },
  {
    src: "/assets/volunteerWork.png",
    alt: "Volunteer work",
    caption: "Volunteer Network",
  },
  {
    src: "/assets/I16.jpeg",
    alt: "Volunteer work",
    caption: "Volunteer Network",
  },
];

export const IMPACT_AREAS = [
  {
    icon: BookOpen,
    title: "Primary Education",
    description: "Quality schooling for children aged 6-14 years",
    color: "bg-blue-500",
  },
  {
    icon: Stethoscope,
    title: "Health & Nutrition",
    description: "Regular health checkups and nutritious meals",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Teacher Training",
    description: "Professional development for educators",
    color: "bg-purple-500",
  },
  {
    icon: Home,
    title: "Infrastructure",
    description: "Building classrooms and learning spaces",
    color: "bg-orange-500",
  },
];

export const quickLinks = [
  { label: "About Us", href: `${nav_links.about_us}` },
  { label: "Our Programs", href: "/programs" },
  { label: "Success Stories", href: "/stories" },
  { label: "Annual Reports", href: "/reports" },
  { label: "Contact", href: "/contact-us" },
];

export const Address = {
  address: {
    established: " Registered NGO · Est. 2003",
    location: "123 Charity Lane, New Delhi, India 110001",
    phoneNo: "+91-7302721902",
    email: "brigthfuturefoundationcontact@gmail.com",
  },
};

export const ABOUT_CONTENT = {
  hero: {
    badge: "About Us",
    title: "Building Hope,",
    highlight: "Transforming Lives",
    subtitle:
      "A journey of compassion and commitment towards the marginalized sections of society since 2003.",
    stats: [
      { value: "20+", label: "Years of Service" },
      { value: "4", label: "States Covered" },
      { value: "50K+", label: "Lives Touched" },
      { value: "100+", label: "Dedicated Volunteers" },
    ],
  },

  story: {
    label: "Our Story",
    title: "How It All",
    highlight: "Began",
    paragraphs: [
      `${ngo_name} , is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, skill development, and social welfare initiatives. It was established by a group of people representing diverse social and professional communities — Academicians, Lawyers, Social Activists, and Management Professionals.`,
      `This organization was born with the vision of working towards the overall development of the marginalized section of society in all spheres. It is this understanding which prompted us to focus our attention on areas of Health & Hygiene, Environment, Livelihood, Elementary Education, and HIV/AIDS awareness.`,
      `${ngo_name} has evolved robust management systems and data analysis frameworks for its projects. Our volunteers bring experience in both field-level execution and technical managerial skills for project implementation.`,
    ],
    quote: {
      text: "Every act of kindness, no matter how small, creates a ripple of change that transforms communities.",
      author: "Founding Members",
      role: `${ngo_name}`,
    },
    image: "/assets/team.avif",
    imageAlt: "Our journey beginning",
    href: "/vision-mission",
  },

  vision: {
    label: "Vision",
    title: "A Future Where",
    highlight: "No One is Left Behind",
    description:
      "To create an equitable society where every individual, regardless of their background, has access to basic necessities, education, healthcare, and opportunities for a dignified life.",
    points: [
      "Empowered communities driving their own development",
      "Sustainable solutions for long-term social impact",
      "Inclusive growth reaching the last mile",
    ],
    image: "/assets/I17.jpg",
    imageAlt: "Our vision for the future",
    icon: Eye,
    color: "emerald",
  },

  mission: {
    label: "Mission",
    title: "Dedicated to",
    highlight: "Lasting Change",
    description:
      "To implement holistic development programs that address the root causes of poverty and marginalization, while building capacities of communities to sustain progress independently.",
    points: [
      "Deliver quality education and healthcare to underprivileged communities",
      "Empower women through Self Help Groups and skill development",
      "Protect environment while ensuring sustainable livelihoods",
      "Combat HIV/AIDS through awareness, prevention, and care",
    ],
    image: "/assets/environment.webp",
    imageAlt: "Our mission in action",
    icon: Target,
    color: "teal",
  },

  philosophy: {
    label: "Philosophy of Change",
    title: "Believing in",
    highlight: "Grassroots Impact",
    description:
      "We believe that sustainable change begins at the community level. Our philosophy centers on participatory development — involving communities in every stage from planning to execution.",
    pillars: [
      {
        icon: Users,
        title: "Community First",
        desc: "Every decision is made with the community, not for them.",
      },
      {
        icon: Lightbulb,
        title: "Innovation",
        desc: "Adapting modern solutions to age-old challenges.",
      },
      {
        icon: Shield,
        title: "Accountability",
        desc: "Transparent operations with measurable outcomes.",
      },
      {
        icon: Leaf,
        title: "Sustainability",
        desc: "Building systems that outlive our intervention.",
      },
    ],
    image: "/assets/about-philosophy.jpg",
    imageAlt: "Our philosophy",
  },

  lifecycle: {
    label: "The Lifecycle Approach",
    title: "From",
    highlight: "Vision to Impact",
    steps: [
      {
        number: "01",
        title: "Identify",
        desc: "Deep community engagement to understand real needs",
      },
      {
        number: "02",
        title: "Design",
        desc: "Co-create solutions with stakeholders and experts",
      },
      {
        number: "03",
        title: "Implement",
        desc: "Execute with trained volunteers and local partners",
      },
      {
        number: "04",
        title: "Monitor",
        desc: "Continuous tracking through robust data systems",
      },
      {
        number: "05",
        title: "Evaluate",
        desc: "Measure impact and adapt strategies accordingly",
      },
    ],
  },

  work: {
    label: "How We Work",
    title: "Our Approach to",
    highlight: "Social Development",
    areas: [
      {
        title: "Health & Hygiene",
        desc: "Focusing on Women, Children, and Adolescents through preventive care and awareness programs.",
        icon: Heart,
        color: "rose",
      },
      {
        title: "Women Empowerment",
        desc: "Building Self Help Groups (SHGs) and providing vocational training for economic independence.",
        icon: Users,
        color: "amber",
      },
      {
        title: "Environment",
        desc: "Promoting sustainable practices and environmental enrichment in rural and urban communities.",
        icon: Leaf,
        color: "emerald",
      },
      {
        title: "HIV/AIDS Care",
        desc: "Serving IDUs and FSWs with medical support, ART linkage, and rehabilitation programs across 4 states.",
        icon: Shield,
        color: "indigo",
      },
    ],
    image: "/assets/about-work.jpg",
    imageAlt: "Our work in the field",
  },

  trust: {
    label: "Why Trust Us?",
    title: "Credibility Built on",
    highlight: "Transparency & Results",
    reasons: [
      {
        icon: Award,
        title: "Registered Entity",
        desc: "Registered under Societies Registration Act XXI of 1860 since 2003",
      },
      {
        icon: Calendar,
        title: "20+ Years Experience",
        desc: "Two decades of consistent service and proven impact",
      },
      {
        icon: MapPin,
        title: "Multi-State Presence",
        desc: "Active operations across 4 states of India",
      },
      {
        icon: Users,
        title: "Expert Team",
        desc: "Academicians, lawyers, activists, and management professionals",
      },
    ],
    quote: {
      text: "We not only provide required services and medical support but also link beneficiaries to ART services and vocational training — enabling them to rebuild their lives with dignity.",
      author: "Program Director",
      role: `${ngo_name}`,
    },
  },

  cta: {
    title: "Join Us in Making a Difference",
    subtitle:
      "Your support can help us reach more communities and create lasting change.",
    buttonPrimary: "Donate Now",
    buttonSecondary: "Volunteer With Us",
  },

  gallery: {
    label: "Gallery",
    title: "Moments That",
    highlight: "Matter",
    description:
      "A glimpse into the lives we touch and the communities we serve through our programs.",
    categories: [
      "All",
      "Education",
      "Healthcare",
      "Community",
      "Empowerment",
      "Environment",
    ] as GalleryCategories[],
    images: [
      {
        src: "/assets/bulidingcommunity.png",
        alt: "Community members working together",
        title: "Building Communities",
        description:
          "Local communities coming together to drive their own development.",
        category: "Community",
      },
      {
        src: "/assets/educationForAll.png",
        alt: "Children in a classroom",
        title: "Education For All",
        description:
          "Quality education reaching every child, regardless of background.",
        category: "Education",
      },
      {
        src: "/assets/healthInitiativecamp.png",
        alt: "Health camp volunteers",
        title: "Healthcare Access",
        description:
          "Taking healthcare services to the doorsteps of hard-to-reach communities.",
        category: "Healthcare",
      },
      {
        src: "/assets/volunteerWork.png",
        alt: "Volunteers in action",
        title: "Volunteer Network",
        description:
          "Dedicated volunteers driving change on the ground every day.",
        category: "Community",
      },
      {
        src: "/assets/I6.jpeg",
        alt: "Children receiving school kits",
        title: "Back to School",
        description:
          "Distributing books, uniforms and learning materials to students.",
        category: "Education",
      },
      {
        src: "/assets/I9.jpg",
        alt: "Medical checkup drive",
        title: "Medical Outreach",
        description:
          "Regular health checkups and awareness sessions for families.",
        category: "Healthcare",
      },
      {
        src: "/assets/I11.jpg",
        alt: "Village engagement activity",
        title: "Community Engagement",
        description:
          "Engaging villagers in participatory planning and development.",
        category: "Community",
      },
      {
        src: "/assets/I12.jpg",
        alt: "Women self help group meeting",
        title: "Empowering Women",
        description:
          "Self Help Groups building financial independence and confidence.",
        category: "Empowerment",
      },
      {
        src: "/assets/I13.jpg",
        alt: "Skill training workshop",
        title: "Skill Development",
        description:
          "Vocational training that opens new livelihood opportunities.",
        category: "Empowerment",
      },
      {
        src: "/assets/I14.jpg",
        alt: "Environment plantation drive",
        title: "Green Initiatives",
        description:
          "Plantation drives promoting sustainable environmental practices.",
        category: "Environment",
      },
      {
        src: "/assets/I15.jpeg",
        alt: "Field visit by the team",
        title: "On the Ground",
        description: "Our team visiting communities to understand real needs.",
        category: "Community",
      },
      {
        src: "/assets/I16.jpeg",
        alt: "Celebration with children",
        title: "Moments of Joy",
        description: "Celebrating milestones with the children we serve.",
        category: "Education",
      },
    ] as GalleryItem[],
  },
};

export const offices = [
  {
    city: "New Delhi",
    address: "123 Charity Lane, Connaught Place, New Delhi, 110001",
    phone: "+91 11 2345 6789",
    email: "delhi@ngoname.org",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.209!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjEiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1",
    coordinates: { lat: 28.6139, lng: 77.209 },
  },
  {
    city: "Mumbai",
    address: "456 Hope Street, Bandra West, Mumbai, 400050",
    phone: "+91 22 3456 7890",
    email: "mumbai@ngoname.org",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.82!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1",
    coordinates: { lat: 19.076, lng: 72.82 },
  },
  {
    city: "Bangalore",
    address: "789 Impact Road, Koramangala, Bangalore, 560034",
    phone: "+91 80 4567 8901",
    email: "bangalore@ngoname.org",
    hours: "Mon - Sat: 9:00 AM - 5:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.62!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1",
    coordinates: { lat: 12.97, lng: 77.62 },
  },
];

export const privacyPolicydummy = {
  title: "Privacy Policy",
  lastUpdated: "August 3, 2026",

  introduction: [
    `Welcome to ${ngo_name}. We value your privacy and are committed to protecting any information you choose to share while using this website. This Privacy Policy explains how information is collected, used, stored, and protected.`,

    `Important Notice: ${ngo_name} is a fictional organization created solely for educational and software development purposes. This website does not represent an officially registered NGO or charitable institution. Any references to donations, volunteers, campaigns, beneficiaries, or events are provided only as sample content.`,
  ],

  sections: [
    {
      id: 1,
      title: "Information We Collect",
      description:
        "We may collect information that you voluntarily provide, including your name, email address, phone number, and any details submitted through contact forms or other interactive features available on this website.",
    },

    {
      id: 2,
      title: "How We Use Your Information",
      description:
        "Information submitted through this website may be used to improve user experience, respond to inquiries, evaluate website functionality, and enhance application performance. No personal information is sold or intentionally shared with third parties.",
    },

    {
      id: 3,
      title: "Cookies",
      description:
        "This website may use cookies or similar technologies to remember preferences, improve functionality, maintain user sessions, and enhance the browsing experience.",
    },

    {
      id: 4,
      title: "Third-Party Services",
      description:
        "The website may integrate services such as Google Maps, Google Places API, analytics providers, authentication services, or other third-party tools. These services operate according to their own privacy policies.",
    },

    {
      id: 5,
      title: "Data Security",
      description:
        "Reasonable measures are taken to protect information processed through this website. However, no internet-based system can guarantee absolute security, and users should avoid submitting confidential or sensitive information.",
    },

    {
      id: 6,
      title: "Children's Privacy",
      description:
        "This website is not intended for children under the age of 13, and we do not knowingly collect personal information from minors.",
    },

    {
      id: 7,
      title: "Images, Content & Copyright",
      description:
        "Certain images, illustrations, icons, and other visual assets displayed on this website may belong to their respective copyright owners or originate from publicly available sources. They are used solely for illustrative purposes. No ownership is claimed over third-party intellectual property unless explicitly stated.",
    },

    {
      id: 8,
      title: "Your Rights",
      description:
        "You may request correction or deletion of information you have voluntarily submitted through this website by contacting the website owner where applicable.",
    },

    {
      id: 9,
      title: "Policy Changes",
      description:
        "This Privacy Policy may be updated periodically to reflect changes in website functionality or legal requirements. Continued use of the website constitutes acceptance of the updated policy.",
    },

    {
      id: 10,
      title: "Contact",
      description:
        "If you have any questions regarding this Privacy Policy, please contact the website administrator using the contact information provided on the website.",
    },
  ],

  importantNotice: [
    `${ngo_name} is a fictional organization and is not an officially registered NGO or charitable institution.`,
    "The website has been created for educational, design, and software development purposes.",
    "Any donation forms, campaigns, volunteer registrations, or similar features are non-operational and included only to represent application functionality.",
    "Images, logos, and other media may belong to their respective copyright owners.",
    "If you own any copyrighted material displayed on this website and would like it removed, please contact the website owner.",
    "No content from this website may be reproduced, distributed, or used for promotional, fundraising, or commercial purposes without appropriate permission.",
  ],
};

export const termsAndConditionsdummy = {
  title: "Terms & Conditions",
  lastUpdated: "August 3, 2026",

  introduction: [
    `Welcome to ${ngo_name}. By accessing or using this website, you agree to comply with these Terms & Conditions. Please read them carefully before using any part of the website.`,

    `${ngo_name} is a fictional organization created for educational, software development, and design purposes. This website does not represent an officially registered NGO, charitable trust, or non-profit organization. Any campaigns, donations, volunteer registrations, events, or similar features displayed on this website are included solely for illustrative purposes.`,
  ],

  sections: [
    {
      id: 1,
      title: "Acceptance of Terms",
      description:
        "By accessing this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should discontinue using the website.",
    },

    {
      id: 2,
      title: "Use of the Website",
      description:
        "You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their ability to use and enjoy the website.",
    },

    {
      id: 3,
      title: "User Responsibilities",
      description:
        "Users are responsible for ensuring that any information submitted through the website is accurate and does not violate any applicable laws or the rights of third parties.",
    },

    {
      id: 4,
      title: "Intellectual Property",
      description:
        "Unless otherwise stated, the website's design, layout, source code, and original content are protected by applicable intellectual property laws. Third-party trademarks, logos, images, and other copyrighted materials remain the property of their respective owners.",
    },

    {
      id: 5,
      title: "Images & Third-Party Content",
      description:
        "Certain images, illustrations, icons, and other visual assets used on this website may originate from publicly available sources or belong to their respective copyright owners. They are included solely for illustrative purposes. No ownership is claimed unless explicitly stated.",
    },

    {
      id: 6,
      title: "Prohibited Activities",
      description:
        "Users must not misuse the website, attempt unauthorized access, interfere with website operations, distribute malicious software, or use the content for unlawful, fraudulent, promotional, or misleading purposes.",
    },

    {
      id: 7,
      title: "External Links",
      description:
        "This website may contain links to third-party websites or services. We are not responsible for the content, availability, or privacy practices of external websites.",
    },

    {
      id: 8,
      title: "Disclaimer of Warranties",
      description:
        "The website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. We do not guarantee that the website will always be available, secure, accurate, or free from errors.",
    },

    {
      id: 9,
      title: "Limitation of Liability",
      description:
        "To the fullest extent permitted by law, the creators of this website shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use of or inability to use this website.",
    },

    {
      id: 10,
      title: "Termination",
      description:
        "We reserve the right to restrict, suspend, or terminate access to the website at any time without prior notice if these Terms & Conditions are violated.",
    },

    {
      id: 11,
      title: "Changes to the Terms",
      description:
        "These Terms & Conditions may be updated periodically. Continued use of the website after any modifications constitutes acceptance of the revised terms.",
    },

    {
      id: 12,
      title: "Contact",
      description:
        "For questions regarding these Terms & Conditions, please contact the website administrator using the contact information available on the website.",
    },
  ],

  importantNotice: [
    `${ngo_name} is a fictional organization and is not an officially registered NGO or charitable institution.`,
    "This website has been created for educational, design, and software development purposes only.",
    "Any donation pages, campaigns, volunteer registrations, beneficiary information, or event details are illustrative and do not represent real-world charitable activities.",
    "Images, logos, icons, and other media may belong to their respective copyright owners and are used solely for illustrative purposes.",
    "No content from this website may be copied, reproduced, distributed, modified, or used for commercial, promotional, fundraising, or public representation without appropriate permission from the respective copyright owner.",
    "If you believe any material displayed on this website infringes your intellectual property rights, please contact the website owner so appropriate action can be taken.",
  ],
};
