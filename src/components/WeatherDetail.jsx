import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function WeatherDetail() {
    const { city } = useParams();
    const navigate = useNavigate();
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const apiKey = 'a6742989c23a7adbf26d801f4a2517f2';
        const fetchWeather = async () => {
            try {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                );
                setWeather(res.data);
            } catch (err) {
                console.error('gagal fetch detail cuaca:', err);
            }
        };
        fetchWeather();
    }, [city]);

    if (!weather) return <div className='p-10'>Loading...</div>;

    const temp = weather.main.temp;
    const status = getStatus(temp);  
    const Icon = getIcon(status); 

    const date = new Date(weather.dt * 1000).toLocaleDateString();
    const time = new Date(weather.dt * 1000).toLocaleTimeString();
    const humidity = weather.main.humidity;
    const desc = weather.weather[0].description;

    return (
        <div className='px-5 sm:px-10 lg:px-20 py-8 bg-cream font-poppins min-h-screen'>
            <div className='flex items-center mb-6'>
                <button onClick={() => navigate(-1)} className='mr-3 text-blue-700'>
                    <ArrowLeft />
                </button>
                <h1 className='text-xl font-semibold'>indonesian weather</h1>
            </div>

            <div className='text-center mb-6'>
                <img
                    src={`/image/${Icon}`}  // Ganti dengan ikon berdasarkan status
                    alt={status}
                    className="w-40 h-40 mx-auto"
                />
                <h2 className='text-3xl font-bold mt-2'>{city}</h2>
                <p className='capitalize text-gray-600'>{status}</p> {/* Menampilkan status berdasarkan suhu */}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <Info label="Temperature" value={`${Math.round(temp)}°C`} />
                <Info label="Humidity" value={`${humidity}%`} />
                <Info label="Date" value={date} />
                <Info label="Time" value={time} />
            </div>
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div className='bg-white rounded-xl p-5 shadow'>
            <p className='text-gray-500 text-sm'>{label}</p>
            <p className='text-xl font-bold'>{value}</p>
        </div>
    );
}

function getStatus(temp) {
    if (temp <= 23) return "Rainy";
    if (temp >= 31) return "Sunny";
    return "Cloudy";
}

function getIcon(status) {
    switch (status) {
        case "Rainy":
            return 'rainy.png'; 
        case "Sunny":
            return 'sun.png'; 
        default:
            return 'cloudy.png';  
    }
}
