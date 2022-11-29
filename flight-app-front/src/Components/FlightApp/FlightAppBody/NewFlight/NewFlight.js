import { useState } from "react";
import NewFlightHeader from "./NewFlightHeader";
import NewFlightList from "./NewFlightList";

const NewFlight = (props) => {
  const filteredFlights = props.flights;
  const [filter, setFilter] = useState({
    airline: "None",
    scales: "None",
    day: "None",
    luggage: "None",
  });

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
