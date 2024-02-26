import "./ForecastToday.css";
import {snow} from "../../img/icons/index.js";
import Timer from "../Timer/Timer";

const ForecastToday = () => {


    return (
        <div className="forecast">
            <div className="forecast__background">
            <div className="forecast-today">
                <h2>Today</h2>
                <div className="forecast-today__weather">

                    <img src={snow} alt={"icon"} />
                    <div>
                        <h3>20°C</h3>
                        <p>Cloudy</p>
                    </div>
                </div>
                        <Timer endDate={new Date("2024-02-26")} />
            </div>
            <div className="timer">
                <div className="timer__item">
                </div>
            </div>
            </div>
        </div>
    );
};

export default ForecastToday;