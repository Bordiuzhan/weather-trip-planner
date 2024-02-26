import "./TripItem.css";
import React from "react";

const TripItem = ({index, trip,selectedTripIndex,setSelectedTripIndex}) => {
    return (

        <li
            key={trip.id}
            className={`trip-item ${index === selectedTripIndex ? "trip-item--selected" : ""}`}
            onClick={() => setSelectedTripIndex(index)}
        >
            <div className="image-container">
                <img src={trip.img} alt="Trip" width={200}/>
            </div>
            <div className="trip-item__description">
                <h2 className="trip-item__city">{trip.city}</h2>
                <p className="trip-item__date">{trip.startDate} - {trip.endDate}</p>
            </div>
        </li>

    );
};

export default TripItem;