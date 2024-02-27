import "./TripList.css";
import {useEffect, useState} from "react";
import TripItem from "../TripItem/TripItem";
import Modal from "../Modal/Modal";
import ArrowRoundPrevious from "../ImgComponents/ArrowRoundPrevious";
import ArrowRoundNext from "../ImgComponents/ArrowRoundNext";

const TripList = ({trips, setTrips, selectedTripId, setSelectedTripId}) => {
    /* State for modal */
    const [isOpen, setIsOpen] = useState(false);

    /* State for pagination */
    const [currentPage, setCurrentPage] = useState(1);
    const tripsPerPage = 3;

    /* Logic for pagination */
    const indexOfLastTrip = currentPage * tripsPerPage;
    const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
    const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);

    /* Function for pagination */
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    /* Reset current page when trips change */
    useEffect(() => {
        setCurrentPage(1)
    }, [trips]);

    return (<>
        <div className={"list-of-trip"}>
            <div className={"list-of-trip__container"}>
                <ul className={"list-of-trip__list"}>
                    {currentTrips.map((trip) => (<TripItem key={trip.id} trip={trip} selectedTripId={selectedTripId}
                                                           setSelectedTripId={setSelectedTripId}/>))}
                </ul>
                <div className={"pagination"}>
                    {currentPage > 1 &&
                        <button className={"pagination__button-previous"} onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}><ArrowRoundPrevious/>
                        </button>}
                    {currentPage < Math.ceil(trips.length / tripsPerPage) &&
                        <button className={"pagination__button-next"} onClick={() => paginate(currentPage + 1)}
                                disabled={indexOfLastTrip >= trips.length}>
                            <ArrowRoundNext/>
                        </button>}
                </div>
            </div>
            <button className={"list-of-trip__add-button"} onClick={() => setIsOpen(true)}>
                <span className={"list-of-trip__add-button-plus"}
                >+</span>
                Add Trip
            </button>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} setTrips={setTrips}/>}
    </>);
};

export default TripList;
