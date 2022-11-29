import { useState } from "react";
import BookFlight from "./FlightAppBody/BookFlight/BookFlight";
import BookFlightEnd from "./FlightAppBody/BookFlight/BookFlightEnd";
import FlightAppHome from "./FlightAppBody/FligthAppHome/FlightAppHome";
import NewFlight from "./FlightAppBody/NewFlight/NewFlight";
import UserData from "./UserData/UserData";


const bookFlightSuccess = (flight) => {
  console.log("hola" + flight.flightNumber);
  if(1%2){
    return true;
  }
  return false; 
}
const FlightApp = (props) => {
  const user = props.user;
  const [newFlight, setNewFlight] = useState(false);
  
  const [bookFlight, setBookFlight] = useState(null);
  const bookFlightHandler = (flightNumber) =>{
    setBookFlight(flightNumber);
  }
  
  const [flightBooked, setflightBooked] = useState(null);
  const flightBookedHandler = (flightBooked) => {
    setflightBooked(flightBooked);
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
      }else{

        const flight = props.flights.filter(
          (f) => f.flightNumber === bookFlight
          )[0];
          show = <BookFlight flight={flight} flightBooked ={flightBookedHandler}/>;
      }
    } else {
      if (newFlight) {
        show = (
          <NewFlight
          airlines={props.airlines}
          flights={props.flights}
          selectFlight={bookFlightHandler}
          />
          );
        } else {
          show = <FlightAppHome setNewFlight={setNewFlight} />;
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
