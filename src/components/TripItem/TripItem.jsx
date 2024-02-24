import "./TripItem.css";

const TripItem = ({trip,setSelectedTrip,selectedTrip}) => {
    return (

        <li className={`trip-item ${selectedTrip === trip.id ? "trip-item--selected" : ""}`}
            onClick={()=>setSelectedTrip(trip.id)}>
            <div className={"image-container"}>
                <img src={trip.img} alt="Trip" width={200} />
            </div>
            <div className={"trip-item__description"}>
                <h2 className={"trip-item__city"}>{trip.city}</h2>
                <p className={"trip-item__date"}>{trip.startDate} - {trip.endDate}</p>
            </div>

        </li>

    );
};

export default TripItem;