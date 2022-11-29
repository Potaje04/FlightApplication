import React from 'react';
import BookFlightForm from './BookFlightForm';

const BookFlight = (props) => {
    return (
      <div>
        {props.flight.flightNumber}
        <BookFlightForm flightBooked={props.flightBooked} />
      </div>
    );
}

export default BookFlight;
