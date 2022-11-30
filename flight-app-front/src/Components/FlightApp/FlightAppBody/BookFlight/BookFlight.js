import React from 'react';
import BookFlightForm from './BookFlightForm';

const BookFlight = (props) => {
    return (
      <div>
        {props.flight.flightNumber}
        <BookFlightForm flight={props.flight}  flightBooked={props.flightBooked} />
      </div>
    );
}

export default BookFlight;
