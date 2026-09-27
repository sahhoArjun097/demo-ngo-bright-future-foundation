export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};
export type Slide = {
  image: string;
};

export type GalleryCategories =
  | "Education"
  | "Healthcare"
  | "Community"
  | "Empowerment"
  | "Environment";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: GalleryCategories;
};

export type EventCategories =
  | "Education"
  | "Healthcare"
  | "Community"
  | "Empowerment"
  | "Environment";

export type EventStatus = "Upcoming" | "Completed";

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: EventCategories;
  status: EventStatus;
  attendees: number;
};

export type VolunteerBenefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

import type { LucideIcon } from "lucide-react";

export type VolunteerRole = {
  title: string;
  desc: string;
  commitment: string;
};

export type InterestArea = string;
