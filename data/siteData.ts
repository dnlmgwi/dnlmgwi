import React from 'react';
import { Cube, Circle, Xmark, ChatBubbleEmpty, NavArrowRight } from 'iconoir-react';
import * as SimpleIcons from 'simple-icons';
import type { HeroVideoConfig } from '../types';

// --- PORTFOLIO DATA ---
export interface PortfolioItem {
  id: number;
  year: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  details: string[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  figmaEmbedUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'E-commerce Platform',
    category: 'Web Design',
    imageUrl: 'https://i.imgur.com/8f2kDBc.png',
    description: 'A modern e-commerce platform with a focus on user experience and performance.',
    details: [
      'Developed a responsive and intuitive user interface using React and Tailwind CSS.',
      'Integrated with Stripe for secure payment processing.',
      'Implemented a custom CMS for easy product management.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 2,
    year: '2022',
    title: 'Mobile Banking App',
    category: 'UI/UX',
    imageUrl: 'https://i.imgur.com/C532s5n.png',
    description: 'Designed a user-friendly mobile banking application from scratch.',
    details: [
      'Conducted user research to identify pain points and opportunities.',
      'Created wireframes, prototypes, and high-fidelity mockups in Figma.',
      'Focused on security, accessibility, and a seamless user flow.'
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'User Research'],
    liveUrl: '#',
  },
  {
    id: 3,
    year: '2022',
    title: 'Tech Interface Branding',
    category: 'Branding',
    imageUrl: 'https://i.imgur.com/rAD1yXg.png',
    description: 'Complete brand identity design for a tech startup, including an interactive UI prototype.',
    details: [
      'Designed a memorable logo and a comprehensive brand style guide.',
      'Created marketing materials including business cards, brochures, and social media assets.',
      'Ensured brand consistency across all digital and print platforms.',
      'Developed an interactive prototype to showcase the user interface in action.'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Brand Strategy'],
    liveUrl: '#',
    figmaEmbedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLM2lqg2u3Bw3pAvv0ZX9vG%2FTech-Dashboard-UI-Kit-(Community)%3Fpage-id%3D1%253A2%26node-id%3D2-2192%26viewport%3D1164%252C288%252C0.06%26t%3DrgHFF62a4x09en9u-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D2%253A2192'
  },
  {
    id: 4,
    year: '2021',
    title: 'Project Management Tool',
    category: 'Web Design',
    imageUrl: 'https://i.imgur.com/mO3hP5N.png',
    description: 'A web application to help teams manage projects and collaborate effectively.',
    details: [
      'Designed and built a feature-rich dashboard with real-time updates.',
      'Integrated with third-party services like GitHub and Slack.',
      'Used Node.js and Supabase for the backend infrastructure.'
    ],
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind CSS', 'WebSockets'],
    liveUrl: '#',
  },
  {
    id: 5,
    year: '2021',
    title: 'Fitness Tracker App',
    category: 'UI/UX',
    imageUrl: 'https://i.imgur.com/k2eJO7m.png',
    description: 'UI/UX design for a mobile app that helps users track their fitness goals.',
    details: [
      'Designed an engaging and motivational user interface.',
      'Created a gamified experience with achievements and social sharing.',
      'Focused on data visualization to make progress easy to understand.'
    ],
    technologies: ['Figma', 'Principle', 'User Testing'],
    liveUrl: '#',
  },
  {
    id: 6,
    year: '2020',
    title: 'SaaS Website Redesign',
    category: 'Web Design',
    imageUrl: 'https://i.imgur.com/5O2Gb3W.png',
    description: 'Redesigned the marketing website for a B2B SaaS company.',
    details: [
      'Improved information architecture and user navigation.',
      'Created a modern and professional design that reflects the brand\'s value.',
      'Optimized for conversions and search engine visibility (SEO).'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'SEO'],
    liveUrl: '#',
  }
];

// --- HERO VIDEO DATA ---
export const heroVideoConfig: HeroVideoConfig = {
  videoUrl: 'https://www.pexels.com/download/video/34268861/',
  posterUrl: 'https://i.imgur.com/k2A4V0i.png',
  title: 'Crafting Meaningful Digital Experiences',
  description: 'Hi, I\'m Daniel Mgawi - a Developer & Designer (Brand & UI/UX) passionate about building seamless applications that connect, convert, and inspire.',
};


// --- TOOLKIT DATA ---
export interface ToolkitItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const SimpleIcon: React.FC<{ icon: any }> = ({ icon }) => (
  React.createElement('svg', {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    style: { width: '24px', height: '24px' }
  },
    React.createElement('title', null, icon.title),
    React.createElement('path', { d: icon.path })
  )
);

export const toolkitItems: ToolkitItem[] = [
  { id: 1, name: 'JavaScript', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siJavascript }) },
  { id: 2, name: 'TypeScript', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siTypescript }) },
  { id: 3, name: 'React Router', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siReactrouter }) },
  { id: 4, name: 'Next.js', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siNextdotjs }) },
  { id: 5, name: 'Tailwind CSS', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siTailwindcss }) },
  { id: 6, name: 'Figma', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siFigma }) },
  { id: 7, name: 'Svelte', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siSvelte }) },
  { id: 8, name: 'Supabase', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siSupabase }) },
  { id: 9, name: 'Flutter', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siFlutter }) },
  { id: 10, name: 'Vercel', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siVercel }) },
  { id: 11, name: 'Docker', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siDocker }) },
  { id: 12, name: 'Git', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siGit }) },
  { id: 13, name: 'C#', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siSharp }) },
  { id: 14, name: 'Hono', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siHono }) },
  { id: 15, name: 'PostgreSQL', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siPostgresql }) },
  { id: 16, name: 'Dart', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siDart }) },
  { id: 17, name: 'CSS3', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siCss }) },
  { id: 18, name: 'HTML5', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siHtml5 }) },
  { id: 19, name: 'Strapi', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siStrapi }) },
  { id: 20, name: 'Payload CMS', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siPayloadcms }) },
  { id: 21, name: 'GraphQL', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siGraphql }) },
  { id: 22, name: '.NET', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siDotnet }) },
  { id: 23, name: 'WebStorm', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siWebstorm }) },
  { id: 24, name: 'GoLang', icon: React.createElement(SimpleIcon, { icon: SimpleIcons.siGo }) },
];


// --- EXPERIENCE DATA ---
export interface LinkItem {
  label: string;
  value: string;
  href: string;
}

export const contactLinks: LinkItem[] = [
  { label: 'Website', value: 'dnlmgwi-cv.vercel.app', href: 'https://dnlmgwi-cv.vercel.app/' },
  { label: 'GitHub', value: 'dnlmgwi', href: 'https://github.com/dnlmgwi' },
  { label: 'LinkedIn', value: 'danielmgawi', href: 'https://linkedin.com/in/danielmgawi' },
  { label: 'Email', value: 'pdmgawi@gmail.com', href: 'mailto:pdmgawi@gmail.com' },
];

export const socialLinks: LinkItem[] = [
  { label: 'Instagram', value: '@dnlmgwi', href: 'https://instagram.com/dnlmgwi' },
  { label: 'TikTok', value: '@danielmgawi', href: 'https://tiktok.com/@dnlmgwi' },
  { label: 'X (Twitter)', value: '@dnlmgwi', href: 'https://x.com/dnlmgwi' },
  { label: 'Instagram', value: '@dnlmgwi', href: 'https://instagram.com/dnlmgwi' },
];

export interface ExperienceItem {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  attachments?: { type: string, url: string }[];
}

export const workExperience: ExperienceItem[] = [
  { date: '2024 — Now', title: 'Fullstack Engineering Intern at Doorbell Services Malawi', subtitle: 'Lilongwe, Central Region, Malawi', href: 'https://doorbell.mw/' },
  { date: '2021 — Now', title: 'Chief Technology Officer at Newwave Group', subtitle: 'Lilongwe, Malawi', href: 'http://newwave.mw/' },
  { date: '2024 — 2025', title: 'Support Engineer at Earn Mwachangu Ltd.', subtitle: 'Lilongwe, Central Region, Malawi', href: 'https://earnmwachangu.com/' },
  { date: '2024 — 2024', title: 'UI/UX Designer at Werkix Limited', subtitle: 'Blantyre, Malawi', href: 'https://www.werkix.io/' },
  { date: '2022 — 2023', title: 'Digital Media Specialist at Field Scope International', subtitle: 'Blantyre, Malawi', href: 'https://fieldscopeint.com/' },
  { date: '2020 — 2020', title: 'Information Communication Technology Executive at Sycamore Consult Ltd.', subtitle: 'Blantyre, Malawi', href: 'https://sycamoreconsult.org/' },
  { date: '2016 — 2016', title: 'Graphic Design Intern at Namibia University of Science and Technology', subtitle: 'Windhoek, Namibia', href: 'https://www.nust.na/' },
];

export const sideProjects: ExperienceItem[] = [
  { date: '2023', title: 'Logo Competition at Malawi School of Goverment', href: 'https://www.figma.com/proto/FOJkboPYTUddaHt5UvN5wv/Logo-Design-Competition?page-id=0%3A1&node-id=235-973&mode=design&t=ObmP26LX7GK3dEvr-1' },
  { date: '2019', title: 'KinoNamia Film Festival at Kino Namibia', href: 'https://www.namibiansun.com/news/kino-namibia-gets-n148-000-boost2019-05-30/' },
];

export const speaking: ExperienceItem[] = [
  { date: '2024', title: 'Newwave Xpress at App Factory Pitch Night', subtitle: 'Lilongwe', href: 'https://nxtgenlabs.mw/' },
  { date: '2019', title: 'Homeless App Presetation at 6th National ICT Summit', subtitle: 'Namibia', href: 'http://ictsummit.gov.na/' },
];

export const volunteering: ExperienceItem[] = [
  { date: '2016 — 2018', title: 'Freelance Graphic Designer at UKANI Malawi', subtitle: 'Blantyre, Malawi', href: 'https://www.ukanimw.com/' },
  { date: '2015 — 2015', title: 'Graphic Design Intern at Global Hope Mobilization', subtitle: 'Lilongwe, Malawi', href: 'https://www.glohomo.org/' },
];

export const education: ExperienceItem[] = [
  { date: '2024 — Now', title: 'L5 Diploma in Computing at National College of Information Technology (NACIT)', subtitle: 'Lilongwe, Malawi', href: 'https://www.nccedu.com/qualifications/computing/ncc-education-level-5-diploma-in-computing-l5dc/' },
  { date: '2023 — 2024', title: 'L4 Diploma in Computing at National College of Information Technology (NACIT)', subtitle: 'Lilongwe, Malawi', href: 'https://www.nccedu.com/qualifications/computing/ncc-education-level-4-diploma-in-computing-l4dc/' },
  { date: '2016 — 2019', title: 'Bachelor Of Computer Science (Incomplete) at Namibia University of Science and Technology', subtitle: 'Windhoek, Namibia', href: 'https://www.nust.na/programmes/bachelor-computer-science' },
];

export const awards: ExperienceItem[] = [
  { date: '2024', title: 'Best Innovative Business | App Factory from NxtGen Labs', description: 'NxtGen Labs is specifically focused on education and innovation around emerging technologies such as Internet-of-things, Machine Learning, Artificial and Robotics.', href: 'https://nxtgenlabs.mw/' },
  { date: '2017', title: 'Logo Design for the MARIBILIS Project from Higher Education Institutions - Institutional Cooperation Instrument', href: 'https://www.linkedin.com/pulse/maribilis-project-logo-competition-daniel-pemphero-mgawi/' },
  { date: '2017', title: 'Certificate of Appreciation from Namibia University of Science and Technology: Faculty of Computing & Informatics', description: 'Certificate of Appreciation for innovation and prototype development at the Faculty Research Day' },
  { date: '2015', title: 'Certificate of Recognition from Global Hope Mobilization', description: 'In recognition of outstanding efforts, towards the Narrowing the Gap Project.', href: 'https://web.facebook.com/globalhopemobilization/posts/737573773008895/?_rdc=1&_rdr=' },
];

export const features: ExperienceItem[] = [
  { date: '2021', title: 'Africa innovates on UNDP', description: '50 homegrown African innovations tackling COVID-19', href: 'https://fliphtml5.com/qylax/bxfl/Africa_innovates_-_50_homegrown_African_innovations_tackling_COVID-19_%28Compressed%29/' },
  { date: '2021', title: 'App aiding homeless people on United Nations Development Programme', href: 'https://ai4dev.africa.undp.org/daniel-mgawi/' },
  { date: '2021', title: 'THE 100th ISSUE: 100 Innovations, Inventions & Icons From Africa - Forbes Africa on Forbes Africa', href: 'https://www.forbesafrica.com/cover-story/2021/04/01/the-100th-issue-100-innovations-inventions-icons-from-africa/' },
  { date: '2021', title: 'Daniel Mgawi – App Aiding Homeless People (Namibia) on Africa Practice', href: 'https://storiesafrica.org/?p=1418' },
  { date: '2020', title: 'Consular Corps College Covid International Ingenuity Report on Consular Corps College', href: 'https://static1.squarespace.com/static/609427f6f619fe3a7f5ad02c/t/60abddf51ecd7429fce8fd8c/1621876214952/CCC+CIIR.2.pdf' },
  { date: '2019', title: 'Local Innovators: Daniel Mgawi and Walvis Team on Inclusive and Collaborative Local Tech Innovation Hub Namibia University of Science and Technology', href: 'https://ictechhub.com/inventions/' },
];

export const certifications: ExperienceItem[] = [
  // {
  //   date: '2024 — 2024',
  //   title: 'Webflow 101 Certification from Webflow, Inc.',
  //   description: 'Test your web design and development knowledge learned in the Webflow 101 course with questions about the principles of the web, like the box model, HTML and CSS.',
  //   href: 'https://university.webflow.com',
  //   attachments: [{ type: 'image', url: 'https://i.imgur.com/8QpYR8S.png' }],
  // },
];

// --- BRANDS DATA ---
export interface Brand {
  name: string;
  imageUrl: string;
}

export const brands: Brand[] = [
  { name: 'Ultra Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ultra+Blox' },
  { name: 'Frame Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Frame+Blox' },
  { name: 'Hype Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Hype+Blox' },
  { name: 'Supa Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Supa+Blox' },
  { name: 'Ship Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ship+Blox' },
  { name: 'Ultra Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ultra+Blox' },
  { name: 'Frame Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Frame+Blox' },
  { name: 'Hype Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Hype+Blox' },
  { name: 'Supa Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Supa+Blox' },
  { name: 'Ship Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ship+Blox' },
  { name: 'Ultra Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ultra+Blox' },
  { name: 'Frame Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Frame+Blox' },
  { name: 'Hype Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Hype+Blox' },
  { name: 'Supa Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Supa+Blox' },
  { name: 'Ship Blox', imageUrl: 'https://via.placeholder.com/120x40/000000/FFFFFF?text=Ship+Blox' },
];
