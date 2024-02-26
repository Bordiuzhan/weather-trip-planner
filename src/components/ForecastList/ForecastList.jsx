import "./ForecastList.css";
import ForecastItem from "../ForecastItem/ForecastItem";

const ForecastList = ({weatherForecast}) => {

    return (<div className={"list-of-weather"}>
        <h2 className={"list-of-weather__title"}>Week</h2>
        <div className={"list-of-weather__container"}>
        <ul className={"list-of-weather__list"}>
            {weatherForecast.map((forecast, index) => {
                return <ForecastItem key={index} forecast={forecast}/>
            })}
        </ul>
        </div>
    </div>);
};

export default ForecastList;