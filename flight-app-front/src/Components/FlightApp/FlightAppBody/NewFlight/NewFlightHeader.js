import { useState } from "react";
import NewFlightFilter from "./NewFlightFilter";

const NewFlightHeader = (props) => {
  const [filteredAirLine, setfilteredAirLine] = useState("None");
  const filteredAirLineHandler = (newAirLine) => {
    setfilteredAirLine(newAirLine);
    props.filterFlights("airline", newAirLine);
  };

  const [scales, setScales] = useState(false);
  const scalesHandler = (scales) => {
    setScales(scales);
    props.filterFlights("scales", scales);
  };

  const [luggage, setLuggage] = useState(false);
  const luggageHandler = (luggage) => {
    setLuggage(luggage);
    props.filterFlights("luggage", luggage);
  };

  const [day, setDay] = useState("None");
  const dayHandler = (day) => {
    setDay(day);
    props.filterFlights("day", day);
  };
  return (
    <div>
      <NewFlightFilter
        name="Air Line"
        selected={filteredAirLine}
        onChangeFilter={filteredAirLineHandler}
        options={props.airlines}
        none={true}
      />
      <NewFlightFilter
        name="Scales"
        selected={scales}
        onChangeFilter={scalesHandler}
        options={["No", "Yes"]}
        none={true}
      />
      <NewFlightFilter
        name="Luggage"
        selected={luggage}
        onChangeFilter={luggageHandler}
        options={["No", "Yes"]}
        none={true}
      />
      <NewFlightFilter
        name="Day"
        selected={day}
        onChangeFilter={dayHandler}
        options={["Today", "Tomorrow", "In Two Days"]}
        none={true}
      />
    </div>
  );
};

export default NewFlightHeader;
