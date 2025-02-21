import { useState } from "react";

interface House {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  status: "Available" | "Occupied";
}

export default function UploadHouseForm({ setHouses }: { setHouses: React.Dispatch<React.SetStateAction<House[]>> }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<"Available" | "Occupied">("Available");

  const handleUpload = () => {
    if (!title || !location || !price || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const newHouse: House = {
      id: Date.now(),
      title,
      location,
      price,
      image: URL.createObjectURL(image),
      status,
    };

    setHouses((prevHouses) => [...prevHouses, newHouse]);

    // Reset form
    setTitle("");
    setLocation("");
    setPrice("");
    setImage(null);
    setStatus("Available");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Upload a New House</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-md mb-3"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded-md mb-3"
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded-md mb-3"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full p-2 border rounded-md mb-3"
      />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Upload
      </button>
    </div>
  );
}
