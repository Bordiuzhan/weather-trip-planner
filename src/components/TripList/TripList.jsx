import "./TripList.css";
import {useState} from "react";
import TripItem from "../TripItem/TripItem";
import Modal from "../Modal/Modal";


const TripList = ({trips,setTrips,selectedTripId, setSelectedTripId}) => {
    const [isOpen, setIsOpen] = useState(false);


    return (<>
            <div className={"list-of-trip"}>
                <ul className={"list-of-trip__list"}>
                    {trips.map((trip, index) => (
                        <TripItem key={trip.id} trip={trip} selectedTripId={selectedTripId}
                                  setSelectedTripId={setSelectedTripId}/>
                    ))}
                </ul>
                <button className={"list-of-trip__add-button"}
                        onClick={() => setIsOpen(true)}
                >Add Trip
                </button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} setTrips={setTrips}/>}
        </>
    );
};

export default TripList;