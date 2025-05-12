import { Routes, Route } from 'react-router-dom';
import CardListWeather from './components/CardListWeather';
import WeatherDetail from './components/WeatherDetail';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<CardListWeather />} />
            <Route path="/detail/:city" element={<WeatherDetail />} />
        </Routes>
    );
}
