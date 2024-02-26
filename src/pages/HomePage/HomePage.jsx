import "./HomePage.css";
import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import TripList from "../../components/TripList/TripList";
import ForecastList from "../../components/ForecastList/ForecastList";
import ForecastToday from "../../components/ForecastToday/ForecastToday";
import {useEffect, useState} from "react";
import {cities} from "../../utils/cities";
import {getWeather, getWeatherForecastPeriod} from "../../services/getWeather";


const HomePage = () => {
    const [trips, setTrips] = useState([
        {
            id: 1,
            city: cities[0].value,
            startDate: "2024-03-02",
            endDate: "2024-03-17",
            img: cities[0].img
        },
    ]);
    console.log(trips)
    const [selectedTripId, setSelectedTripId] = useState(0);
    const selectedTrip = trips.find(trip => trip.id === selectedTripId)

    const [weather, setWeather] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState([]);

    /* Fetching weather utils for the selected trip */
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weather = await getWeather({city: selectedTrip.city})
                setWeather(weather.days[0])
            } catch (error) {
                console.log(error)
            }
        }

        const fetchWeatherForecastPeriod = async () => {
            try {
                const weatherForecast = await getWeatherForecastPeriod({
                    city: selectedTrip.city,
                    startDate: selectedTrip.startDate,
                    endDate: selectedTrip.endDate
                })
                setWeatherForecast(weatherForecast.days)
            } catch (error) {
                console.log(error)
            }
        }

        if (selectedTrip) {
            fetchWeather()
            fetchWeatherForecastPeriod()
        }
    }, [selectedTripId]);

    return (
        <div className="container">
            <div className="side-left">
                <Title/>
                <Search/>
                <TripList trips={trips} setTrips={setTrips} selectedTripId={selectedTripId}
                          setSelectedTripId={setSelectedTripId}/>
                <ForecastList weatherForecast={weatherForecast}/>
            </div>
            <div className="side-right">
                <ForecastToday weather={weather} selectedTrip={selectedTrip}/>
            </div>
        </div>
    );
};

export default HomePage;