import React from 'react';

const NewFlightElement = (props) => {
    const selectflight = () =>{
        props.selectFlight(props.flight.flightNumber); 
        console.log(props.flight.flightNumber);
    }
    return (
      <div>
        {props.flight.origin} to {props.flight.destination}
        <p>Flight Nº: {props.flight.flightNumber}</p>
        <button onClick={selectflight}>Book</button>
      </div>
    );
}

export default NewFlightElement;
