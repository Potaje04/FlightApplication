import React from 'react';

const MyFlights = (props) => {
    const myFlightsHandler = () => {
        props.setMyFlights();
    }
    return (
        <div>
            You have no flights. 
            not_implemented
            <button onClick={myFlightsHandler} >Back</button>
        </div>
    );
}

export default MyFlights;
