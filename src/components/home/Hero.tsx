import { FaSearch } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
        >
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            <div className="relative z-10 max-w-4xl w-full mx-auto text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    Find Your Perfect Space
                    <span className="block text-red-500 text-2xl md:text-4xl mt-2 font-medium">in Nairobi & Beyond</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                    Discover verified apartments, offices, and commercial spaces tailored to your needs.
                </p>

                {/* Search Bar */}
                <div className="mt-8 p-2 bg-white/10 backdrop-blur-md rounded-xl max-w-2xl mx-auto border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Enter location, property type, or keyword..."
                            className="flex-1 p-3.5 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                        />
                        <button className="bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg">
                            <FaSearch />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                {/* Quick Stats or Trust Indicators could go here */}
                <div className="pt-8 flex justify-center gap-6 text-sm text-gray-300 font-medium">
                    <span>✓ 1,000+ Verified Spaces</span>
                    <span>✓ Direct Agent Contact</span>
                    <span>✓ Best Prices</span>
                </div>
            </div>
        </section>
    );
}
