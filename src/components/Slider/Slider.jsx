import "./Slider.css";
import TripItem from "../TripItem/TripItem";

const Slider = ({data, currentIndex, setCurrentIndex}) => {
    const goToSlide = (index) => {
        setCurrentIndex(index);
    }


    return (
        <div className={"slider"}>
            <div className={"slider__container"}>
                {data.map((trip, index) => (
                    <TripItem key={index} trip={trip} index={index} currentIndex={currentIndex} goToSlide={goToSlide}/>
                ))}
            </div>

        </div>
    );
};

export default Slider;