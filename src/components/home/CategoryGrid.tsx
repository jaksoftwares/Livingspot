import Link from "next/link";
import { FaBuilding, FaStore, FaWarehouse, FaHome, FaLandmark, FaBed } from "react-icons/fa";

const categories = [
    { icon: FaHome, label: "Houses", count: "150+", href: "/search?type=house", color: "bg-blue-50 text-blue-600" },
    { icon: FaBed, label: "Apartments", count: "300+", href: "/search?type=apartment", color: "bg-green-50 text-green-600" },
    { icon: FaBuilding, label: "Offices", count: "80+", href: "/search?type=office", color: "bg-purple-50 text-purple-600" },
    { icon: FaStore, label: "Shops", count: "45+", href: "/search?type=shop", color: "bg-orange-50 text-orange-600" },
    { icon: FaLandmark, label: "Business Halls", count: "20+", href: "/search?type=hall", color: "bg-red-50 text-red-600" },
    { icon: FaWarehouse, label: "Warehouses", count: "30+", href: "/search?type=warehouse", color: "bg-yellow-50 text-yellow-600" },
];

export default function CategoryGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={idx}
                                href={cat.href}
                                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg transition-all duration-300 text-center group"
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                                    <Icon />
                                </div>
                                <span className="font-semibold text-gray-800">{cat.label}</span>
                                <span className="text-xs text-gray-400 mt-1">{cat.count} listings</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
