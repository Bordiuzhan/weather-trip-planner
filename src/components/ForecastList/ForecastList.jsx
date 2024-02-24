import "./ForecastList.css";

const ForecastList = () => {
    return (
        <div className={"list-of-weather"}>
            <h2 className={"list-of-weather__title"}>Weekly Weather</h2>
            <ul className={"list-of-weather__list"}>
                <li className={"list-of-weather__item"}>Weather 1</li>
                <li className={"list-of-weather__item"}>Weather 2</li>
                <li className={"list-of-weather__item"}>Weather 3</li>
                <li className={"list-of-weather__item"}>Weather 4</li>
                <li className={"list-of-weather__item"}>Weather 5</li>
                <li className={"list-of-weather__item"}>Weather 6</li>
                <li className={"list-of-weather__item"}>Weather 7</li>
            </ul>

        </div>
    );
};

export default ForecastList;