import React from 'react';

const FlightAppBody = (props) => {
    const myFlightsHandler = () => {
        console.log("My Flights");
    }
    const newFlightHandler = () => {
        props.setNewFlight(true);
        console.log("New Flight");
    }
    return (
      <div>
        wqeewqew
        <button onClick={myFlightsHandler}> My Flights</button>
        <button onClick={newFlightHandler}> New Flight </button>
      </div>
    );
}

export default FlightAppBody;
