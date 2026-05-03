export type PortfolioCategory = "All" | "Residential" | "Commercial" | "Kitchen" | "Bedroom";

export interface PortfolioProject {
  title: string;
  tag: string;
  location: string;
  year: string;
  category: Exclude<PortfolioCategory, "All">;
  gradient: string;
}

export const portfolioFilters: PortfolioCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Kitchen",
  "Bedroom",
];

export const portfolioProjects: PortfolioProject[] = [
  { title: "The Ivory Pavilion", tag: "Residential", location: "Sindhu Bhavan, Ahmedabad", year: "2024", category: "Residential", gradient: "from-[#2a2010] to-[#111008]" },
  { title: "The Mercer Suite", tag: "Bedroom", location: "Prahladnagar, Ahmedabad", year: "2024", category: "Bedroom", gradient: "from-[#1a1a14] to-[#0e0e0a]" },
  { title: "Sunstone Kitchen", tag: "Kitchen", location: "Satellite, Ahmedabad", year: "2023", category: "Kitchen", gradient: "from-[#241c08] to-[#111008]" },
  { title: "Elite Business Hub Office", tag: "Commercial", location: "Sola, Ahmedabad", year: "2023", category: "Commercial", gradient: "from-[#12120e] to-[#0a0a08]" },
  { title: "Oakwood Residence", tag: "Residential", location: "Bopal, Ahmedabad", year: "2024", category: "Residential", gradient: "from-[#201808] to-[#111008]" },
  { title: "The Serenity Suite", tag: "Bedroom", location: "Thaltej, Ahmedabad", year: "2023", category: "Bedroom", gradient: "from-[#181410] to-[#0e0c0a]" },
  { title: "Gota Villa Kitchen", tag: "Kitchen", location: "Gota, Ahmedabad", year: "2024", category: "Kitchen", gradient: "from-[#1c1a08] to-[#111008]" },
  { title: "Bodakdev Penthouse", tag: "Residential", location: "Bodakdev, Ahmedabad", year: "2024", category: "Residential", gradient: "from-[#221c0c] to-[#111008]" },
  { title: "Navrangpura Clinic", tag: "Commercial", location: "Navrangpura, Ahmedabad", year: "2023", category: "Commercial", gradient: "from-[#141414] to-[#0a0a0a]" },
];
