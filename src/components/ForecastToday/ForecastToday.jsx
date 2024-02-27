import "./ForecastToday.css";
import Timer from "../Timer/Timer";
import {week} from "../../utils/week";
import {icons} from "../../utils/icons";

const ForecastToday = ({weather, selectedTrip}) => {
    /* Get the day of the week */
    const today = week.find(day => day.id === new Date().getDay()).day

    /* Get the start date of the selected trip and convert it to the correct format */
    const startDate = selectedTrip ? new Date(selectedTrip.startDate) : new Date(new Date().toISOString().split('T')[0]);

    /* Get the weather icon */
    const weatherIcon = weather ? icons.find(icon => icon.name === weather.icon).icon : icons.find(icon => icon.name === "clear-day").icon;

    /* Get the temperature */
    const temperature = weather ? Math.round(weather.temp) : 0;

    /* Get the City */
    const city = selectedTrip ? selectedTrip.city : "No city selected";


    return (<div className="forecast">
        <div className="forecast-today">
            <div className={"forecast-today__info"}>
                <h2 className={"forecast-today__week-day"}>{today}</h2>
                <div className="forecast-today__weather">
                    <p className={"forecast-today__weather__temperature"}>
                        {temperature}
                    </p>
                    <p className={"forecast-today__weather__unit-celsius"}>°</p>
                    <span className={"forecast-today__weather__unit-temp"}>C</span>
                </div>
                <div className={"forecast-today__city"}>
                    <p className={"forecast-today__city-name"}>{city}</p>
                </div>
            </div>
            <div>
                <img className={"forecast-today__icon"}
                     src={weatherIcon} alt={"icon"}/>
            </div>
        </div>
        <Timer endDate={startDate}/>
    </div>);
};

export default ForecastToday;