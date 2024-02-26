import "./TripItem.css";
import React from "react";

const TripItem = ({trip, selectedTripId, setSelectedTripId}) => {
    /* Destructuring the trip object */
    const {id, city, startDate, endDate, img} = trip;





    return (
        <li className={`trip-item ${id === selectedTripId ? "trip-item--selected" : ""}`}
            onClick={() => setSelectedTripId(id)}
        >
            <div className="image-container">
                <img src={img} alt="Trip" width={200}/>
            </div>
            <div className="trip-item__description">
                <h2 className="trip-item__city">{city}</h2>
                <p className="trip-item__date">{startDate} - {endDate}</p>
            </div>
        </li>

    );
};

export default TripItem;