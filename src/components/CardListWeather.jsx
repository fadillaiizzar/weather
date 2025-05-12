import { useRef, useState } from 'react';
import Hero from './Hero';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CardWeather from './CardWeather'; // Pastikan impor CardWeather yang benar
import { Link } from 'react-router-dom'; // Perbaikan untuk navigasi

export default function CardListWeather() {
    const cities = [
        "Ambon", "Balikpapan", "Bandung", "Banjarmasin", "Bekasi", "Bogor",
        "Cilegon", "Cirebon", "Denpasar", "Depok", "Jakarta", "Jayapura", "Kupang", "Makassar",
        "Malang", "Manado", "Medan", "Padang", "Palembang", "Palu", "Pekanbaru",
        "Pontianak", "Semarang", "Solo", "Samarinda", "Surabaya", "Tangerang",
        "Tasikmalaya", "Tegal", "Yogyakarta"
    ];

    const inputRef = useRef(null);
    const [search, setSearch] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
        setIsExpanded(false);
    };

    const filteredCities = cities
        .filter(city => city.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.localeCompare(b));

    const visibleCities = isExpanded ? filteredCities : filteredCities.slice(0, 12);

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="bg-cream font-poppins">
            <div className="px-5 sm:px-10 lg:px-20 py-8">
                <div className="flex justify-between items-center h-12">
                    <h1 className="text-xl font-semibold">indonesian weather</h1>
                </div>

                <Hero
                    handleClick={handleClick}
                    inputRef={inputRef}
                    search={search}
                    handleChange={handleChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
                    {visibleCities.length > 0 ? (
                        visibleCities.map((city) => (
                            <Link key={city} to={`/detail/${city}`}>
                                <CardWeather city={city} /> {/* Memanggil CardWeather */}
                            </Link>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No cities found.</p>
                    )}
                </div>

                {filteredCities.length > 12 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleToggle}
                            className="flex items-center gap-2 text-blue-700 font-medium transition-all"
                        >
                            <span>{isExpanded ? "Show less" : "See more"}</span>
                            {isExpanded ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
