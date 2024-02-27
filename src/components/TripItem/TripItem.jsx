import "./TripItem.css";
import React from "react";

const TripItem = ({trip, selectedTripId, setSelectedTripId}) => {
    /* Destructuring the trip object */
    const {id, city, startDate, endDate, img} = trip;

    /* Formatting the date */
    const formattedStartDate = startDate.split('-').join('.')
    const formattedEndDate = endDate.split('-').join('.')

    return (
        <li className={`trip-item ${id === selectedTripId ? "trip-item--selected" : ""}`}
            onClick={() => setSelectedTripId(id)}
        >
            <div className="trip-item__image-container">
                <img src={img}
                     className="trip-item__image"
                     alt="Trip"/>
            </div>
            <div className="trip-item__description">
                <h3 className="trip-item__city">{city}</h3>
                <p className="trip-item__date">{formattedStartDate} - {formattedEndDate}</p>
            </div>
        </li>

    );
};

export default TripItem;