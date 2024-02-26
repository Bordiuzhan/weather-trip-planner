import "./Modal.css";
import Select from "react-select";
import {useEffect, useRef, useState} from "react";
import {cities} from "../../utils/cities";

const Modal = ({setIsOpen, setTrips}) => {
    /* State variables to hold the options for the select input and the selected option */
    const [options, setOptions] = useState(cities)
    const [selectedOption, setSelectedOption] = useState(null);

    /* State variables to hold the error status of the inputs */
    const [errorCity, setErrorCity] = useState(false);
    const [errorStartDate, setErrorStartDate] = useState(false);
    const [errorEndDate, setErrorEndDate] = useState(false);

    /* State variables to hold the selected START and END dates */
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    /* Calculate the min and max dates for the START date input */
    const minDate = new Date();
    const maxDate = new Date(minDate.getTime() + 15 * 24 * 60 * 60 * 1000)
    /* Calculate the min and max dates for the END date input */
    const minEndDate = startDate ? new Date(startDate) : null;
    const maxEndDate = minEndDate ? new Date(minEndDate.getTime() + 15 * 24 * 60 * 60 * 1000) : null;

    /* Function to handle changes in the START date input */
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    /* Function to handle changes in the END date input */
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    /* Set the error status of the inputs */
    useEffect(() => {
        if (selectedOption) {
            setErrorCity(false);
        }
        if (startDate) {
            setErrorStartDate(false);
        }
        if (endDate) {
            setErrorEndDate(false);
        }
    }, [selectedOption, startDate, endDate]);

    /* Function to handle the form submission */
    const onSubmit = (e) => {
        e.preventDefault();
        if (!selectedOption) {
            setErrorCity(true);
        }
        if (!startDate) {
            setErrorStartDate(true);
        }
        if (!endDate) {
            setErrorEndDate(true);
        }
        if (!selectedOption || !startDate || !endDate) {
            return;
        }
        console.log("City: ", selectedOption);
        console.log("Start Date: ", startDate);
        console.log("End Date: ", endDate);

        setTrips((prev) => {
            const newId = prev.length > 0 ? Math.max(...prev.map((item) => item.id)) + 1 : 1;
            return [{
                id: newId, city: selectedOption.value, startDate: startDate, endDate: endDate, img: selectedOption.img
            }, ...prev,];
        });

        setIsOpen(false);
    }
    /* Function to handle the focus of the visible input */
    const hiddenInputStartRef = useRef(null);
    const hiddenInputEndRef = useRef(null);
    const handleVisibleInputEndFocus = () => {
        hiddenInputEndRef.current.focus();
    }
    const handleVisibleInputStartFocus = () => {
        hiddenInputStartRef.current.focus();
    }


    return (<div className={"modal"}>
        <div className={"modal__center"}>
            <div className={"modal__content"}>
                {/* Title */}
                <div className={"modal__header"}>
                    <div className={"modal__title-container"}>
                        <h2 className={"modal__title"}>
                            Create trip
                        </h2>
                    </div>
                    <div className={"modal__close-container"}>
                        <button type={"button"} className={"modal__close"} onClick={() => setIsOpen(false)}>
                            X
                        </button>
                    </div>
                </div>
                {/* Body */}
                <form className={"modal__body"}>
                    {/* City input */}
                    <div className={"modal__input-container"}>
                        <label className={"modal__label"}>
                            <span className={"modal__required"}>*</span>
                            Ciy
                        </label>
                        <Select className={`modal__input-select ${errorCity ? "modal__input--error" : ""}`}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles, border: "none",
                                    }),
                                }}
                                options={options}
                                placeholder={"Please select a city"}
                                value={selectedOption}
                                onChange={setSelectedOption}/>
                    </div>
                    {/* Date Start input */}
                    <div className={"modal__input-container"}>
                        <label className={"modal__label"}>
                            <span className={"modal__required"}>*</span>
                            Start Date
                        </label>
                        <input className={`modal__input ${errorStartDate ? "modal__input--error" : ""}`}
                               readOnly={true}
                               type={"text"}
                               name={"startDate"}
                               value={startDate}
                               placeholder={"Please select date"}
                               onFocus={handleVisibleInputStartFocus}


                        />
                        <input ref={hiddenInputStartRef}
                               className={"modal__input--hidden"}
                               type="date"
                               name={"startDate"}
                               value={startDate}
                               placeholder={"Please select date"}
                               min={minDate.toISOString().split('T')[0]}
                               max={maxDate.toISOString().split('T')[0]}
                               onFocus={(e) => e.target.showPicker()}
                               onChange={handleStartDateChange}/>
                    </div>
                    {/* Date End input */}
                    <div className={"modal__input-container"}>
                        <label className={"modal__label"}>
                            <span className={"modal__required"}>*</span>
                            End Date
                        </label>
                        <input
                            className={`modal__input ${startDate ? "" : "modal__input--disabled"} ${errorEndDate ? "modal__input--error" : ""}`}
                            readOnly={true}
                            disabled={!startDate}
                            type={"text"}
                            name={"endDate"}
                            value={endDate}
                            placeholder={"Please select date"}
                            onFocus={handleVisibleInputEndFocus}


                        />
                        <input ref={hiddenInputEndRef}
                               className={"modal__input--hidden"}
                               type="date"
                               name={"endDate"}
                               value={endDate}
                               min={minEndDate ? minEndDate.toISOString().split('T')[0] : ''}
                               max={maxEndDate ? maxEndDate.toISOString().split('T')[0] : ''}
                               onFocus={(e) => e.target.showPicker()}
                               onChange={handleEndDateChange}
                        />
                    </div>
                </form>
                {/* Buttons */}
                <div className={"modal__footer"}>
                    <div className={"modal__buttons-container"}>
                        <button type={"button"} className={"button button__cancel"} onClick={() => setIsOpen(false)}>
                            Cancel
                        </button>
                        <button type={"submit"} className={"button button__save"} onClick={onSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Modal;