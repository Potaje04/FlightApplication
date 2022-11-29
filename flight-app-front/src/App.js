import "./App.css";
import { useState } from "react";
import Logging from "./Components/Loggin/Logging";
import FlightApp from "./Components/FlightApp/FlightApp";


const user = {name: "Name", identification: "83913298273FQW"}

function App() {
  let show = "";
  const [logged, setlogged] = useState(false);

  if (!logged) {
    show = <Logging setlogged={setlogged} />;
  } else {
    show = <FlightApp user={user}/>
  }
  return <div className="App">{show}</div>;
}

export default App;
