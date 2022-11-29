import { useState } from "react";
import FlightAppBody from "./FlightAppBody/FlightAppBody";
import NewFlight from "./FlightAppBody/NewFlight/NewFlight";
import UserData from "./UserData/UserData";

const FlightApp = (props) => {
  const user = props.user;
  const [newFlight, setNewFlight] = useState(false);
  var show = "";

  if (newFlight) {
    show = <NewFlight />;
  } else {
    show = <FlightAppBody setNewFlight={setNewFlight} />;
  }

  return (
    <div>
      <UserData name={user.name} identification={user.identification} />
      {show}
    </div>
  );
};

export default FlightApp;
