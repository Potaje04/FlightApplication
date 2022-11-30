import { useState } from "react";
import BookFlight from "./FlightAppBody/BookFlight/BookFlight";
import BookFlightEnd from "./FlightAppBody/BookFlight/BookFlightEnd";
import FlightAppHome from "./FlightAppBody/FligthAppHome/FlightAppHome";
import MyFlights from "./FlightAppBody/MyFlights/MyFlights";
import NewFlight from "./FlightAppBody/NewFlight/NewFlight";
import NewFlightOrigin from "./FlightAppBody/NewFlight/NewFlightOrigin";
import UserData from "./UserData/UserData";

const bookFlightSuccess = (flight) => {
  console.log("hola" + flight.flightNumber);
  if (1 % 2) {
    return true;
  }
  return false;
};

const FlightApp = (props) => {
  const user = props.user;
  const [newFlight, setNewFlight] = useState(false);
  
  const [myFlights, setMyFlights] = useState(false);
  const myFlightsHandler = () => {
    setMyFlights(!myFlights);
  };
  
  const [bookFlight, setBookFlight] = useState(null);
  const bookFlightHandler = (flightNumber) => {
    setBookFlight(flightNumber);
  };

  const [flightBooked, setflightBooked] = useState(null);
  const flightBookedHandler = (flightBooked) => {
    setflightBooked(flightBooked);
  };

  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const selectedOriginHandler = (value) => {
    setSelectedOrigin(value);
  };
  const [selectedDestination, setSelectedDestination] = useState(null);
  const selectedDestinationHandler = (value) => {
    setSelectedDestination(value);
  };

  var show = "";

  if (bookFlight) {
    if (flightBooked) {
      show = (
        <BookFlightEnd
          flight={bookFlight}
          success={bookFlightSuccess(bookFlight)}
        />
      );
    } else {
      const flight = props.flights.filter(
        (f) => f.flightNumber === bookFlight
      )[0];
      console.log(flight);

      show = <BookFlight flight={flight} flightBooked={flightBookedHandler} />;
    }
  } else {
    if (myFlights) {
      show = <MyFlights setMyFlights={myFlightsHandler} />;
    } else if (newFlight && selectedOrigin && selectedDestination) {
      const flights = props.flights.filter(
        (f) => f.origin === selectedOrigin && f.destination === selectedDestination
      );
      show = (
        <NewFlight
          airlines={props.airlines}
          flights={flights}
          selectFlight={bookFlightHandler}
        />
      );
    } else if (newFlight) {
      show = (
        <NewFlightOrigin
          flights={props.flights}
          origins={props.origins}
          originHandler={selectedOriginHandler}
          destinationHandler={selectedDestinationHandler}
          selectedOrigin={selectedOrigin}
          selectedDestination={selectedDestination}
        />
      );
    } else {
      show = <FlightAppHome setNewFlight={setNewFlight} setMyFlights={setMyFlights}/>;
    }
  }

  return (
    <div>
      <UserData name={user.name} identification={user.identification} />
      {show}
    </div>
  );
};

export default FlightApp;
