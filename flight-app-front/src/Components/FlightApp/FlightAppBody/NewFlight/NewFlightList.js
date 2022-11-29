import React from 'react';
import NewFlightElement from './NewFlightElement';

const NewFlightList = (props) => {
    return (
      <div>
        {props.flights.map((flight) => (
          <NewFlightElement
            key={flight.flightNumber}
            flight={flight}
            selectFlight={props.selectFlight}
          />
        ))}
      </div>
    );
}

export default NewFlightList;
