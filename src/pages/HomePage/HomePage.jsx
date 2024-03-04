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
    /* Initial state for trips and selected trip */
    const initialTrip = {
        id: 1,
        city: cities[0].value,
        startDate: "2024-03-15",
        endDate: "2024-03-30",
        img: cities[0].img
    };

    const selectedTripIdFromLocalStorage = localStorage.getItem("selectedTripId") ? JSON.parse(localStorage.getItem("selectedTripId")) : 1;

    /* State for trips */
    const localStorageTrips = localStorage.getItem("trips") ;
    const [trips, setTrips] = useState(() => {
            if (localStorageTrips !== null) {
                return  JSON.parse(localStorageTrips)
            } else {
                return [initialTrip]
            }
        }
    );

    /* State for search */
    const [search, setSearch] = useState("");
    const filteredTrips = trips.filter(trip => trip.city.toLowerCase().includes(search.toLowerCase()));

    /* State for selected trip */
    const [selectedTripId, setSelectedTripId] = useState(selectedTripIdFromLocalStorage);
    const selectedTrip = trips.find(trip => trip.id === selectedTripId)

    /* State for weather */
    const [weather, setWeather] = useState(null);
    const [weatherForecast, setWeatherForecast] = useState([]);

    /* Saving trips to local storage */
    useEffect(() => {
            localStorage.setItem("trips", JSON.stringify(trips))
            localStorage.setItem("selectedTripId", JSON.stringify(selectedTripId))
        }
        , [trips, selectedTripId]);

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
                <Search setSearchData={setSearch}/>
                <TripList trips={filteredTrips} setTrips={setTrips} selectedTripId={selectedTripId}
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