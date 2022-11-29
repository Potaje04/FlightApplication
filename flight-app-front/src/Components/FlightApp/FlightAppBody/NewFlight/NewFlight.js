import { useState } from "react";
import NewFlightHeader from "./NewFlightHeader";
import NewFlightList from "./NewFlightList";

const NewFlight = (props) => {
  const [filter, setFilter] = useState({
    airline: "None",
    scales: "None",
    day: "None",
    luggage: "None",
  });
  var filteredFlights = props.flights;
  
  if (filter.airline !== "None") {
    filteredFlights = filteredFlights.filter(
      (flight) => flight.airline === filter.airline
    );
  }
  
  if (filter.scales !== "None") {
    filteredFlights = filteredFlights
      .map((flight) => {
        console.log(flight.scales);
        if (flight.scales > 0 || flight.scales === "Yes") {
          flight.scales = "Yes";
        } else {
          flight.scales = "No";
        }
        return flight;
      })
      .filter((flight) => flight.scales === filter.scales);
  }

  if (filter.luggage !== "None") {
    
    filteredFlights = filteredFlights
      .map((flight) => {
        if (flight.luggage === true || flight.luggage === "Yes") {
          flight.luggage = "Yes";
        } else {
          flight.luggage = "No";
        }
        return flight;
      })
      .filter((flight) => flight.luggage === filter.luggage);
  
  }
  if (filter.day !== "None") {
    filteredFlights = filteredFlights.filter(
      (flight) => Math.abs(flight.date.getDate() - filter.day.getDate()) < 4
    );
  }
    console.log(filter.day);
  const filterFlights = (option, data) => {
    switch (option) {
      case "airline":
        setFilter({ ...filter, airline: data });
        break;
      case "scales":
        setFilter({ ...filter, scales: data });
        break;
      case "day":
        setFilter({ ...filter, day: data });
        break;
      case "luggage":
        setFilter({ ...filter, luggage: data });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <NewFlightHeader
        airlines={props.airlines}
        filterFlights={filterFlights}
      />
      <NewFlightList
        flights={filteredFlights}
        selectFlight={props.selectFlight}
      />
    </div>
  );
};

export default NewFlight;
