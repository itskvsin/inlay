export const ratingBreakdown = [
  { label: "5 Star", percent: 94 },
  { label: "4 Star", percent: 6 },
  { label: "3 Star", percent: 0 },
  { label: "2 Star", percent: 0 },
  { label: "1 Star", percent: 0 },
] as const;

export const allReviews = [
  { quote: "Inlay didn't just design a house — they curated an experience. Every corner reflects our journey. Their attention to material textures is unparalleled.", author: "Rahul & Ananya S.", location: "Adani Shantigram Estate, Ahmedabad", service: "Full Home Interiors", rating: 5 },
  { quote: "Precision in every detail. The kitchen installation was flawless, and the team managed the entire process without a single delay.", author: "Aarav Shah", location: "Bungalow Project, Thaltej", service: "Kitchen Design", rating: 5 },
  { quote: "A seamless experience from start to finish. As an NRI, I was worried about managing the project remotely, but the communication was exceptional.", author: "Priya & Vikram Joshi", location: "NRI Villa, Gota", service: "Full Home Interiors", rating: 5 },
  { quote: "Pure aesthetic joy. They transformed our living room into something that tells our story — with warmth, gold accents, and textures we never knew we needed.", author: "Dr. Anjali Desai", location: "Luxury Flat, Bodakdev", service: "Living Room Design", rating: 5 },
  { quote: "Inlay transformed our sprawling Ahmedabad penthouse into a sanctuary that feels both grand and incredibly intimate. Their attention to material narrative is unparalleled.", author: "The Mehra Family", location: "Skyline Residences, Ahmedabad", service: "Full Home Interiors", rating: 5 },
  { quote: "We gave them a tight budget and they delivered beyond expectations. The bedroom feels luxurious without being excessive. Exactly what we asked for.", author: "Sneha & Karan Patel", location: "Prahladnagar, Ahmedabad", service: "Bedroom Design", rating: 5 },
  { quote: "The modular kitchen they designed is exactly what we imagined — functional, clean, and with that signature warmth Inlay brings to everything.", author: "Neeraj Thakkar", location: "Satellite, Ahmedabad", service: "Kitchen Design", rating: 5 },
  { quote: "From the first consultation to the final walkthrough, everything was transparent. No hidden costs, no surprises. That trust is rare.", author: "Heena & Dhruv Shah", location: "Vastrapur, Ahmedabad", service: "Bedroom & Living Room", rating: 5 },
  { quote: "The office interior they created for our clinic is professional, calming, and gets compliments from every patient who walks in.", author: "Dr. Ravi Patel", location: "Navrangpura, Ahmedabad", service: "Office & Commercial", rating: 5 },
] as const;

export const featuredReview = allReviews[0];
