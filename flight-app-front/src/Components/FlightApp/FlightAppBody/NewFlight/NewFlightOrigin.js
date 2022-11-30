import { useState } from "react";
import NewFlightFilter from "./NewFlightFilter";

const NewFlightOrigin = (props) => {
  var destinationsShow = "";
  if (props.selectedOrigin) {
    const destinations = [];
    console.log(props.flights);
    props.flights.map((flight) => {
      if (props.selectedOrigin === flight.origin) {
        if (destinations.indexOf(flight.destination) === -1) {
          destinations.push(flight.destination);
        }
      }
    });
    console.log(destinations);
    destinationsShow = (
      <NewFlightFilter
        name="Destinies"
        selected={props.selectedDestination}
        onChangeFilter={props.destinationHandler}
        options={destinations}
        none={true}
      />
    );
  }
  console.log(destinationsShow);
  return (
    <div>
      Where do you want to travel?
      <NewFlightFilter
        name="Origins"
        selected={props.selectedOrigin}
        onChangeFilter={props.originHandler}
        options={props.origins}
        none={true}
      />
      {destinationsShow}
    </div>
  );
};

export default NewFlightOrigin;
