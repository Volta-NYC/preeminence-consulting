export type NavItem = {
  label: string;
  href: string;
};

export const serviceLinks: NavItem[] = [
  { label: "Services Overview", href: "/services" },
  { label: "Communication Series", href: "/services/communication-series" },
  { label: "PD Presentation Creation", href: "/services/pd-presentation-creation" },
  { label: "Speakers Academy", href: "/services/speakers-academy" },
  { label: "Train the Trainer Academy", href: "/services/train-the-trainer-academy" },
  { label: "Brand Academy", href: "/services/brand-academy" },
];

export const communityLinks: NavItem[] = [
  { label: "Impact Circle", href: "/community/impact-circle" },
  { label: "Events", href: "/community/events" },
  { label: "Groups", href: "/community/groups" },
];

export const contactLinks: NavItem[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Subscriptions", href: "/contact/subscriptions" },
  { label: "Instant Access Downloads", href: "/instant-access-downloads" },
];

export const aboutLinks: NavItem[] = [
  { label: "About Page", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
];

export const programsLinks: NavItem[] = [
  { label: "Speakers Academy", href: "/services/speakers-academy" },
  { label: "Train-The-Trainer", href: "/services/train-the-trainer-academy" },
  { label: "Brand Academy", href: "/services/brand-academy" },
  { label: "Communication Services", href: "/services/communication-series" },
];

export const corporateInstitutionLinks: NavItem[] = [
  { label: "Corporate/Institutions", href: "/corporate-institutions" },
  { label: "PD Presentation Creation Packages", href: "/services/pd-presentation-creation" },
];

export const resourcesLinks: NavItem[] = [
  { label: "Events", href: "/community/events" },
  { label: "Instant Downloads", href: "/instant-access-downloads" },
  { label: "Community/Groups", href: "/community/groups" },
  { label: "Impact Circle", href: "/community/impact-circle" },
];

export const contactBookLinks: NavItem[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Subscriptions", href: "/contact/subscriptions" },
  { label: "Book Online", href: "/book-online" },
];

export const socialLinks: Array<NavItem & { icon: string }> = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/preeminencepros",
    icon:
      "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/PreeminencePros/",
    icon:
      "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png",
  },
  {
    label: "LinkedIn",
    href: "https://il.linkedin.com/company/preeminencepros",
    icon:
      "https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ea5b4a88f0b4f91945b40499aa0af00.png",
  },
];
