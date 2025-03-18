"use client";

import HouseCard from "./HouseCard";

interface House {
    id: number;
    title: string;
    location: { city: string; area: string };
    price: number;
    liked: boolean;
    houseType: string;
    bedrooms: number;
    bathrooms: number;
    size: number; // in square meters
    furnishing: string;
    condition: string;
    images: string[];
    description: string;
    amenities: string[];
    owner: {
      name: string;
      phone: string;
      email: string;
    };
  }
  

interface Filters {
  location: string;
  priceRange: [number, number];
  bedrooms: number;
  bathrooms: number;
  houseType: string;
}

interface HouseListProps {
  searchQuery: string;
  filters: Filters;
}

// Sample house data
const sampleHouses: House[] = [
    {
      id: 1,
      title: "Luxury Penthouse with City View",
      location: { city: "Nairobi", area: "Westlands" },
      price: 120000,
      liked: false,
      houseType: "Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      size: 250,
      furnishing: "Fully Furnished",
      condition: "New",
      images: ["/house1.jpg", "/house2.jpg", "/house3.jpg"],
      description:
        "A modern and luxurious penthouse with breathtaking city views, high-end finishes, and world-class amenities.",
      amenities: ["Gym", "Swimming Pool", "24/7 Security", "High-Speed Elevator", "Smart Home System"],
      owner: { name: "David Kimani", phone: "+254 722 345678", email: "david.k@example.com" },
    },
    {
      id: 2,
      title: "Beachfront Bungalow with Ocean View",
      location: { city: "Mombasa", area: "Nyali" },
      price: 95000,
      liked: false,
      houseType: "Bungalow",
      bedrooms: 4,
      bathrooms: 3,
      size: 300,
      furnishing: "Semi-Furnished",
      condition: "Renovated",
      images: ["/house1.jpg", "/house2.jpg", "/house3.jpg"],
      description:
        "Enjoy the peaceful sound of the ocean waves in this stunning beachfront bungalow, perfect for family living.",
      amenities: ["Private Beach Access", "Swimming Pool", "Spacious Garden", "Secure Parking"],
      owner: { name: "Aisha Hassan", phone: "+254 710 987654", email: "aisha.h@example.com" },
    },
    {
      id: 3,
      title: "Modern Studio Apartment in CBD",
      location: { city: "Nakuru", area: "Milimani" },
      price: 30000,
      liked: false,
      houseType: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      size: 50,
      furnishing: "Fully Furnished",
      condition: "New",
      images: ["/house3.jpg", "/house2.jpg"],
      description:
        "A stylish and compact studio apartment in the heart of Nakuru, ideal for young professionals and students.",
      amenities: ["24/7 Security", "Backup Generator", "High-Speed Internet", "Rooftop Lounge"],
      owner: { name: "Kelvin Otieno", phone: "+254 723 567890", email: "kelvin.o@example.com" },
    },
    {
      id: 4,
      title: "Spacious 3-Bedroom Townhouse",
      location: { city: "Kisumu", area: "Riat Hills" },
      price: 60000,
      liked: false,
      houseType: "Townhouse",
      bedrooms: 3,
      bathrooms: 2,
      size: 180,
      furnishing: "Unfurnished",
      condition: "Good",
      images: ["/house2.jpg", "/houses/townhouse2.jpg"],
      description:
        "A spacious and elegant townhouse with modern fittings, located in a secure and serene neighborhood.",
      amenities: ["Gated Community", "Children's Playground", "Borehole Water", "CCTV Security"],
      owner: { name: "James Mwangi", phone: "+254 700 123456", email: "james.m@example.com" },
    },
    {
      id: 5,
      title: "Fully Furnished 2-Bedroom Apartment",
      location: { city: "Nairobi", area: "Kilimani" },
      price: 45000,
      liked: false,
      houseType: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      size: 120,
      furnishing: "Fully Furnished",
      condition: "New",
      images: ["/house4.jpg", "/houses/apartment2.jpg"],
      description:
        "A modern 2-bedroom apartment with elegant interiors, perfect for small families and working professionals.",
      amenities: ["Swimming Pool", "Gym", "Balcony", "Parking Lot"],
      owner: { name: "Nancy Wanjiru", phone: "+254 725 789012", email: "nancy.w@example.com" },
    },
    {
      id: 6,
      title: "Classic Colonial-Style Villa",
      location: { city: "Karen", area: "Hardy" },
      price: 150000,
      liked: false,
      houseType: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      size: 400,
      furnishing: "Semi-Furnished",
      condition: "New",
      images: ["/luxury2.jpg", "/houses/villa2.jpg"],
      description:
        "A grand colonial-style villa with a beautiful garden, spacious rooms, and top-tier security.",
      amenities: ["Private Garden", "Security Guard", "Fireplace", "Spacious Parking"],
      owner: { name: "Peter Kariuki", phone: "+254 731 987654", email: "peter.k@example.com" },
    },
    {
      id: 7,
      title: "Affordable Bedsitter Near University",
      location: { city: "Thika", area: "Juja" },
      price: 15000,
      liked: false,
      houseType: "Bedsitter",
      bedrooms: 1,
      bathrooms: 1,
      size: 35,
      furnishing: "Unfurnished",
      condition: "Good",
      images: ["/house1.jpg", "/houses/bedsitter2.jpg"],
      description:
        "A budget-friendly bedsitter located near JKUAT University, ideal for students and young professionals.",
      amenities: ["24/7 Water Supply", "Close to Public Transport", "Secure Neighborhood"],
      owner: { name: "Emily Akinyi", phone: "+254 799 654321", email: "emily.a@example.com" },
    },
  ];
  

export default function HouseList({ searchQuery, filters }: HouseListProps) {
  const filteredHouses = sampleHouses.filter((house) => {
    const matchesSearch = house.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = filters.location === "" || (`${house.location.city}, ${house.location.area}`.toLowerCase() === filters.location.toLowerCase());
    const matchesPrice = house.price >= filters.priceRange[0] && house.price <= filters.priceRange[1];
    const matchesBedrooms = filters.bedrooms === 0 || house.bedrooms === filters.bedrooms;
    const matchesBathrooms = filters.bathrooms === 0 || house.bathrooms === filters.bathrooms;
    const matchesType = filters.houseType === "" || house.houseType === filters.houseType;

    return matchesSearch && matchesLocation && matchesPrice && matchesBedrooms && matchesBathrooms && matchesType;
  });

  return (
    <div>
      {filteredHouses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {filteredHouses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
      ) : (
        <p className="text-gray-600 text-center mt-6">No houses found matching your search criteria.</p>
      )}
    </div>
  );
}
