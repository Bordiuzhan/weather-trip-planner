
const API_KEY=process.env.REACT_APP_WEATHER_API_KEY
export async function getWeather({city}) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getWeatherForecastPeriod({city,startDate,endDate}) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}