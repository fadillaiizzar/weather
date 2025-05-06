import { useRef, useState } from 'react';
import CardWeather from './components/CardWeather';
import Hero from './components/Hero';

export default function App() {
  const cities = [
    "Ambon", "Balikpapan", "Bandung", "Banjarmasin", "Bekasi", "Bogor",
    "Cilegon", "Cirebon", "Denpasar", "Depok", "Jakarta", "Jayapura", "Kupang", "Makassar",
    "Malang", "Manado", "Medan", "Padang", "Palembang", "Palu", "Pekanbaru",
    "Pontianak", "Semarang", "Solo", "Samarinda", "Surabaya", "Tangerang",
    "Tasikmalaya", "Tegal", "Yogyakarta"
  ];

  const inputRef = useRef(null);

  const [search, setSearch] = useState('');

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCities = cities
    .filter(city => city.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className='bg-cream font-poppins'>
      <div className='px-5 sm:px-10 lg:px-20 py-8'>
        <div className='flex justify-between items-center h-12'>
            <h1 className='text-xl font-semibold'>weather indonesia</h1>
        </div>

        <Hero 
          handleClick={handleClick}
          inputRef={inputRef}
          search={search}
          handleChange={handleChange}
        />


        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5'>
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <CardWeather key={city} city={city} />
            ))
          ) : (
            <p className='text-center col-span-full text-gray-500'>No cities found.</p>
          )}
        </div>
      </div>  
    </div>
  )
}