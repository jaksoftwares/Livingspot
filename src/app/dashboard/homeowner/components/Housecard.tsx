import Image from "next/image";

interface House {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  status: "Available" | "Occupied";
}

export default function HouseCard({ house }: { house: House }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="relative w-full h-40">
        <Image 
          src={house.image} 
          alt={house.title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md" 
          priority
        />
      </div>
      <h3 className="text-lg font-semibold mt-2">{house.title}</h3>
      <p className="text-gray-600">{house.location}</p>
      <p className="text-blue-600 font-bold">{house.price}</p>
      <p className={`text-sm font-medium mt-1 ${house.status === "Available" ? "text-green-600" : "text-gray-500"}`}>
        {house.status}
      </p>
    </div>
  );
}
