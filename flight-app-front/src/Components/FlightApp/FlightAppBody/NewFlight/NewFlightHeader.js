import { useState } from "react";
import NewFlightFilter from "./NewFlightFilter";
import Calendar from "react-calendar";

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

  const [value, onChange] = useState(new Date());
  const calendarHandler = (date) => {
    onChange(date);
    props.filterFlights("day", date);
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
      <Calendar onChange={calendarHandler} value={value} />
    </div>
  );
};

export default NewFlightHeader;
