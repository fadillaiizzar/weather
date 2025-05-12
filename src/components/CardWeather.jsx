import axios from "axios";
import { useEffect, useState } from "react";

export default function CardWeather({ city }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const apiKey = "a6742989c23a7adbf26d801f4a2517f2";
        const fetchWeather = async () => {
            try {
                setLoading(true); 
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                );
                setWeather(res.data); 
            } catch (err) {
                console.error("Gagal fetch cuaca: ", err);
            } finally {
                setLoading(false); 
            }
        };
        fetchWeather();
    }, [city]);

    if (loading) {
        return (
            <div className="bg-breeze h-36 rounded-3xl flex items-center justify-center text-center">
                Loading...
            </div>
        );
    }

    if (!weather) {
        return (
            <div className="bg-breeze h-36 rounded-3xl flex items-center justify-center text-center">
                No data available.
            </div>
        );
    }

    const temp = weather.main.temp;
    const status = getStatus(temp);
    const Icon = getIcon(status);
    const bgColor = getBgColor(status);

    return (
        <div className={`${bgColor} h-36 rounded-3xl cursor-pointer`}>
            <div className="flex justify-around py-6 items-center h-full">
                <div>
                    <p className="text-lg font-bold">{weather.name}</p>
                    <p className="mb-2">{status}</p>
                    <p className="text-4xl font-bold">{Math.round(temp)}°</p>
                </div>
                <div>
                    <img src={Icon} alt={status} className="w-28 h-28" />
                </div>
            </div>
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
            return "/image/rainy.png";
        case "Sunny":
            return "/image/sun.png";
        default:
            return "/image/cloudy.png";
    }
}

function getBgColor(status) {
    switch (status) {
        case "Rainy":
            return "bg-breeze";
        case "Sunny":
            return "bg-sun";
        default:
            return "bg-butter";
    }
}
