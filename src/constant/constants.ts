import type { NavItem, Slide } from "./constants-types";
import {
  BookOpen,
  HeartPulse,
  HandHelping,
  BriefcaseBusiness,
  Trees,
  ShieldAlert,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const logo = "/assets/logo.png";

export const ngo_name = "Bright Futures Foundatio";
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
      {
        title: "Our Partners",
        href: "/our-partners",
      },
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
  // { title: "Media", href: "/media" },
  { title: "Gallery", href: "/gallery" },
  // { title: "Enquiry", href: "/enquiry" },
  { title: "Contact Us", href: "/contact-us" },
  // { title: "Latest News", href: "/latest-news" },
  // { title: "Live Stream", href: "/live-stream" },
];

export const slides: Slide[] = [
  { image: "/assets/I6.webp" },
  { image: "/assets/I1.webp" },
  { image: "/assets/I2.webp" },
  { image: "/assets/I7.webp" },
];

export const HomeAbout = {
  paragraphs: [
    "Bright Futures Foundation is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, skill development, and social welfare initiatives.",

    "Established with a vision to create sustainable social impact, the foundation works closely with volunteers, educators, healthcare professionals, and community leaders to improve lives and build a brighter future for all.",
  ],
  ctaText: "read more >",
  ctaLink: "/about",
};

export const programs = [
  {
    title: "Education",
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
