import "./ForecastItem.css";
import {week} from "../../utils/week.js";
import {icons} from "../../utils/icons.js";

const ForecastItem = ({forecast}) => {
    /* Destructuring the forecast object */
    const {tempmax = 0, tempmin = 0, datetime = "Sunday", icon} = forecast;

    /* Getting the day of the week */
    const weekDay = week.find((day) => day.id === new Date(datetime).getDay());

    /* Round the temperature */
    const tempMax = Math.round(tempmax);
    const tempMin = Math.round(tempmin);

    /* Find the icon for the weather */
    const weatherIcon = icons.find((iconItem) => iconItem.name === icon);

    return (<li className={"forecast-item"}>
        <h3 className={"forecast-item__day"}
        >{weekDay.day}</h3>
        <img className={"forecast-item__icon"}
             src={weatherIcon.icon} alt={icon}/>
        <div className={"forecast-item__temp-container"}>
            <p>{tempMax}°</p>/<p>{tempMin}°</p>
        </div>
    </li>);
};

export default ForecastItem;

