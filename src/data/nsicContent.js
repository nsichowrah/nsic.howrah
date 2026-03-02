import image2 from "../assets/images/2.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";
import logoMain from "../assets/logos/NSIC01.logo.jpg";
import logoMark from "../assets/logos/logo01.png";

export const siteInfo = {
  title: "NSIC Technical Services Centre - Howrah",
  shortTitle: "NSIC TSC Howrah",
  subTitle: "National Small Industries Corporation Ltd.",
  logoMain,
  logoMark,
  address: "P-83A, Lake Road, Belgachia, Howrah - 711103, West Bengal, India",
  phone: "+91 33 2653 2304 / 2653 1413",
  email: "ntsc.howrah@nsic.co.in",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14732.395119479932!2d88.29630739999999!3d22.6127862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8829d1731a8c7%3A0x9ad22e14acbf8a2a!2sNSIC%20Technical%20Services%20Centre%2C%20Howrah!5e0!3m2!1sen!2sin!4v1772255563784!5m2!1sen!2sin",
};

export const importantLinks = [
  { label: "NSIC Main Website", href: "https://www.nsic.co.in/" },
  { label: "NSIC Howrah Centre", href: "https://www.nsic.co.in/NTSC/Howrah" },
  { label: "MSME Ministry", href: "https://msme.gov.in/" },
  { label: "GeM Portal", href: "https://gem.gov.in/" },
  { label: "Udyam Registration", href: "https://udyamregistration.gov.in/" },
];

export const carouselSlides = [
  { image: image2, title: "Welcome to NSIC TSC Howrah", caption: "Empowering MSMEs through skill and technology support." },
  { image: image4, title: "Advanced Classroom Training", caption: "Industry-ready technical and entrepreneurship programs." },
  { image: image5, title: "Practical Skill Development", caption: "Hands-on learning across manufacturing and service sectors." },
  { image: image9, title: "Safety and Quality Exposure", caption: "Capacity building through practical industrial modules." },
  { image: image10, title: "Testing and Technical Facilities", caption: "Support services for quality assurance and product development." },
];

export const fallbackProjects = [
  {
    _id: "local-1",
    title: "Entrepreneurship Development Program",
    category: "Skill Development",
    year: "2025",
    summary:
      "Conducted focused EDP sessions for aspiring entrepreneurs with project report preparation and business planning.",
    status: "Completed",
    imageUrl: image4,
    location: "NSIC TSC Howrah",
  },
  {
    _id: "local-2",
    title: "Industrial Safety Awareness Initiative",
    category: "Industrial Training",
    year: "2025",
    summary:
      "Organized practical awareness modules on industrial safety practices, fire systems, and preventive maintenance.",
    status: "Completed",
    imageUrl: image9,
    location: "NSIC TSC Howrah",
  },
  {
    _id: "local-3",
    title: "Machine Shop Skill Upgradation",
    category: "Technical Support",
    year: "2024",
    summary:
      "Hands-on skill upgradation sessions for machine operation, maintenance workflow, and process quality controls.",
    status: "Ongoing",
    imageUrl: image10,
    location: "NSIC TSC Howrah",
  },
];

export const fallbackDownloads = [
  {
    _id: "doc-1",
    title: "Training Calendar",
    category: "Training",
    description: "Latest month-wise schedule for NSIC training programs.",
    fileUrl: "https://drive.google.com/",
  },
  {
    _id: "doc-2",
    title: "Application Form",
    category: "Admissions",
    description: "Form for registration in NSIC skill development courses.",
    fileUrl: "https://drive.google.com/",
  },
  {
    _id: "doc-3",
    title: "Centre Brochure",
    category: "General",
    description: "Overview of facilities and services available at NSIC TSC Howrah.",
    fileUrl: "https://drive.google.com/",
  },
];

export const trainingPrograms = [
  {
    id: 1,
    title: "CNC Machine Operator Training",
    duration: "3 Months",
    category: "Technical",
    description: "Practical exposure in CNC operation, programming basics, and production workflow.",
  },
  {
    id: 2,
    title: "Electrical Technician Program",
    duration: "3 Months",
    category: "Technical",
    description: "Applied electrical maintenance, wiring standards, and shop-floor troubleshooting skills.",
  },
  {
    id: 3,
    title: "Computer Hardware & Networking",
    duration: "6 Months",
    category: "IT",
    description: "Foundation-to-advanced modules in hardware diagnostics, networking, and system support.",
  },
  {
    id: 4,
    title: "Entrepreneurship and MSME Setup",
    duration: "6 Weeks",
    category: "Entrepreneurship",
    description: "Support for business planning, compliance basics, and MSME growth pathways.",
  },
];
