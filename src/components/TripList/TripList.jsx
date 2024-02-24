import "./TripList.css";

const TripList = () => {
    return (<div className={"list-of-trip"}>
        <ul className={"list-of-trip__list"}>
            <li className={"list-of-trip__list-item"}>
                Trip to Murree
            </li>
            <li className={"list-of-trip__list-item"}>Trip to Nathiagali</li>
            <li className={"list-of-trip__list-item"}>Trip to Swat</li>
        </ul>
        <button className={"list-of-trip__add-button"}>Add Trip</button>
    </div>);
};

export default TripList;