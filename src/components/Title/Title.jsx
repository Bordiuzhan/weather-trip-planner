import "./Title.css";
import {getWeather, getWeatherForecastPeriod} from "../../services/getWeather";

const Title = () => {
 const fetchWeather = async () => {
          const weather=  await getWeather({city: 'London'})
     console.log(weather)

     }
     const fetchWeatherForecastPeriod = async () => {
        const weather=  await getWeatherForecastPeriod({city:'London',startDate:'2022-01-01',endDate:'2022-01-07'})
         console.log(weather)
     }

fetchWeatherForecastPeriod()
    return (
        <div className={'hero-title'}>
            <h1 className={"hero-title__text"} >Weather <span className={"hero-title__text_bold"}>Forecast</span></h1>
        </div>
    );
};

export default Title;