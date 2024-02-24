import "./HomePage.css";
import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import TripList from "../../components/TripList/TripList";
import ForecastList from "../../components/ForecastList/ForecastList";
import ForecastToday from "../../components/ForecastToday/ForecastToday";

const HomePage = () => {
    return (
        <div className="container">
        <div className="side-left">
            <Title/>
            <Search/>
            <TripList/>
            <ForecastList/>
        </div>
            <div className="side-right">
                <ForecastToday/>
        </div>
        </div>
    );
};

export default HomePage;