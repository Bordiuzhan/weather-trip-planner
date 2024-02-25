import "./TripList.css";
import {useState} from "react";
import cities from "../../data/cities.js"
import TripItem from "../TripItem/TripItem";
import Modal from "../Modal/Modal";


const TripList = () => {
    const [trips, setTrips] = useState([
        {
            id: 1,
            city: cities[0].value,
            startDate: "22-12-2021",
            endDate: "25-12-2021",
            img: cities[0].img
        }, {
            id: 2,
            city: cities[0].value,
            startDate: "22-12-2021",
            endDate: "25-12-2021",
            img: cities[0].img
        },
        {
            id: 3,
            city: cities[1].value,
            startDate: "22-12-2021",
            endDate: "25-12-2021",
            img: cities[1].img
        },
        {
            id: 4,
            city: cities[2].value,
            startDate: "22-12-2021",
            endDate: "25-12-2021",
            img: cities[2].img
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);



    return (<>
            <div className={"list-of-trip"}>
                <ul className={"list-of-trip__list"}>
                    {trips.map((trip, index) => (
                        <TripItem key={index} trip={trip} index={index} currentIndex={currentIndex}
                                  setCurrentIndex={setCurrentIndex}/>
                    ))}
                </ul>
                <button className={"list-of-trip__add-button"}
                        onClick={() => setIsOpen(true)}
                >Add Trip
                </button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </>
    );
};

export default TripList;