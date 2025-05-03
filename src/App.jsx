import CardWeather from './components/CardWeather';

export default function App() {
  const cities = [
    "Ambon", "Balikpapan", "Bandung", "Banjarmasin", "Bekasi", "Bogor",
    "Cilegon", "Cirebon", "Denpasar", "Depok", "Jakarta", "Jayapura", "Kupang", "Makassar",
    "Malang", "Manado", "Medan", "Padang", "Palembang", "Palu", "Pekanbaru",
    "Pontianak", "Semarang", "Solo", "Samarinda", "Surabaya", "Tangerang",
    "Tasikmalaya", "Tegal", "Yogyakarta"
  ];

  const sortedCities = cities.sort((a, b) => a.localeCompare(b));
  return (
    <div className='bg-cream h-svh'>
      <div className='px-5 sm:px-10 lg:px-20 py-8'>
        <div className='flex justify-between items-center h-12'>
          <h1 className='text-3xl font-bold'>weather indonesia</h1>
        </div>

        {/* <div className='mt-1 mb-6'>
          <div className='bg-breeze rounded-lg px-3 h-10 flex items-center'>search</div>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5'>
          {sortedCities.map((city) => (
            <CardWeather key={city} city={city} />
          ))}
        </div>
      </div>  
    </div>
  )
}