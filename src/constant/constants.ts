import type { NavItem, Slide } from "./constants-types";
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
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const logo = "/assets/logo.png";

export const ngo_name = "Bright Futures Foundation";
export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    children: [
      { title: "About Bright", href: "/aboutus" },
      {
        title: "Profile of NGO",
        href: "/profile",
      },
      {
        title: "Vision & Mission",
        href: "/vision-mission",
      },
      // {
      //   title: "Chairman's speak",
      //   href: "/chairman",
      // },
      // {
      //   title: "Our Partners",
      //   href: "/our-partners",
      // },
      // {
      //   title: "Intervention",
      //   href: "/intervention",
      // },
      // {
      //   title: "Join with us",
      //   href: "/joinwithus",
      // },
      // {
      //   title: "FCRA Details",
      //   href: "/fcra",
      // },
      // {
      //   title: "Annual Reports",
      //   href: "/annual-reports",
      // },
    ],
  },
  { title: "Projects", href: "/projects" },
  { title: "Contact Us", href: "/contact-us" },
  // { title: "Gallery", href: "/gallery" },
  // { title: "Media", href: "/media" },
  // { title: "Enquiry", href: "/enquiry" },
  // { title: "Latest News", href: "/latest-news" },
  // { title: "Live Stream", href: "/live-stream" },
];

export const slides: Slide[] = [
  { image: "/assets/I11.jpg" },
  { image: "/assets/I6.jpeg" },
  { image: "/assets/I1.jpeg" },
  { image: "/assets/I12.jpg" },
  // { image: "/assets/I5.webp" },
];

export const HomeAbout = {
  paragraphs: [
    `${ngo_name} is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, skill development, and social welfare initiatives.`,

    "Established with a vision to create sustainable social impact, the foundation works closely with volunteers, educators, healthcare professionals, and community leaders to improve lives and build a brighter future for all.",
  ],
  ctaText: "read more >",
  ctaLink: "/aboutus",
};

export const programs = [
  {
    title: "Education",
    image: "/assets/I6.jpeg",
    description: "Education, nutrition and holistic development of children",
    icon: BookOpen,
    color: "text-yellow-500",
    link: "/about",
    bg: "bg-yellow-100",
  },
  {
    title: "Healthcare",
    description:
      "Taking healthcare services to doorsteps of hard to reach communities",
    link: "/about",
    icon: HeartPulse,
    color: "text-purple-400",
    bg: "bg-purple-100",
  },
  {
    title: "Women Empowerment",
    description:
      "Empowering adolescent girls & women through community engagement",
    link: "/about",
    icon: HandHelping,
    color: "text-cyan-400",
    bg: "bg-cyan-100",
  },
  {
    title: "Livelihood",
    description:
      "Skill training and placement support for underprivileged youth",
    icon: BriefcaseBusiness,
    link: "/about",
    color: "text-orange-300",
    bg: "bg-orange-100",
  },
  {
    title: "Empowering Grassroots",
    link: "/about",
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
    link: "/about",
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

export const CONTACT_INFO = {
  email: "ganga_org@rediffmail.com",
  phone: "+91-11-22580479",
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

export const partners = [
  { name: "Suzlon", logo: "assets/suzlon.webp" },
  { name: "Aditya Birla", logo: "assets/adityabirla.webp" },
  { name: "Ather", logo: "assets/ather.webp" },
  { name: "Blue Star", logo: "assets/bluestar.webp" },
  { name: "HDFC", logo: "assets/hdfc.webp" },
  { name: "Vedanta", logo: "assets/vedanta.webp" },
  { name: "Vedanta", logo: "assets/Mitsubishi_Electric.webp" },
  { name: "Vedanta", logo: "assets/habshifa.webp" },
];

export const DONATION_AMOUNTS = [
  { amount: 500, label: "Supplies", impact: "Books for 2 kids" },
  { amount: 1000, label: "Nutrition", impact: "Meals for 1 month" },
  { amount: 2500, label: "School Kit", impact: "Kit for 5 kids" },
  { amount: 5000, label: "Sponsor", impact: "1 year education" },
  { amount: 10000, label: "Classroom", impact: "Digital tools" },
  { amount: 0, label: "Custom", impact: "Any amount helps", isCustom: true },
];

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
  { label: "About Us", href: "#about" },
  { label: "Our Programs", href: "#programs" },
  { label: "Success Stories", href: "#stories" },
  { label: "Annual Reports", href: "#reports" },
  { label: "Contact", href: "#contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Use", href: "#terms" },
  { label: "80G Certificate", href: "#certificate" },
];

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
      `${ngo_name}, a voluntary organization, came into existence in 2003 (registered under Societies Registration Act XXI of 1860). It was established by a group of people representing diverse social and professional communities — Academicians, Lawyers, Social Activists, and Management Professionals.`,
      `This organization was born with the vision of working towards the overall development of the marginalized section of society in all spheres. It is this understanding which prompted us to focus our attention on areas of Health & Hygiene, Environment, Livelihood, Elementary Education, and HIV/AIDS awareness.`,
      `${ngo_name} has evolved robust management systems and data analysis frameworks for its projects. Our volunteers bring experience in both field-level execution and technical managerial skills for project implementation.`,
    ],
    quote: {
      text: "Every act of kindness, no matter how small, creates a ripple of change that transforms communities.",
      author: "Founding Members",
      role: "Ganga Social Foundation",
    },
    image: "/assets/about-story.jpg",
    imageAlt: "Our journey beginning",
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
    image: "/assets/about-vision.jpg",
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
    image: "/assets/about-mission.jpg",
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
};
