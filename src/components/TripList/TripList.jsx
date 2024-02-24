import "./TripList.css";
import {useState} from "react";
import TripItem from "../TripItem/TripItem";

const TripList = () => {
    const [trips, setTrips] = useState([{
        id: 1,
        city: "New York",
        startDate: "22-12-2021",
        endDate: "25-12-2021",
        img: "https://pixabay.com/get/gf1edd481f773dec0a5202ee47b87c95d300f51a887e17cbe663962335711b5b0d5fc8d6e53079a61bd8a0098d922ea686bfb974f8c05e7f3038b62658c4490b268d6602c6cf2538b32381d1be10bf8a9_640.jpg"
    }, {
        id: 2,
        city: "Paris",
        startDate: "22-12-2021",
        endDate: "25-12-2021",
        img: "https://pixabay.com/get/gf1edd481f773dec0a5202ee47b87c95d300f51a887e17cbe663962335711b5b0d5fc8d6e53079a61bd8a0098d922ea686bfb974f8c05e7f3038b62658c4490b268d6602c6cf2538b32381d1be10bf8a9_640.jpg"
    },
        {
            id: 3,
            city: "London",
            startDate: "22-12-2021",
            endDate: "25-12-2021",
            img: "https://pixabay.com/get/gf1edd481f773dec0a5202ee47b87c95d300f51a887e17cbe663962335711b5b0d5fc8d6e53079a61bd8a0098d922ea686bfb974f8c05e7f3038b62658c4490b268d6602c6cf2538b32381d1be10bf8a9_640.jpg"
        }
    ]);
    const [selectedTrip, setSelectedTrip] = useState(1);

    console.log(selectedTrip)

    return (<div className={"list-of-trip"}>
        <ul className={"list-of-trip__list"}>
            {trips.map((trip) => {
                return <TripItem key={trip.id} trip={trip} setSelectedTrip={setSelectedTrip} selectedTrip={selectedTrip} />;
            })}
        </ul>
        <button className={"list-of-trip__add-button"}>Add Trip</button>
    </div>);
};

export default TripList;