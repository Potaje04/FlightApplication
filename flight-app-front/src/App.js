import "./App.css";
import { useState } from "react";
import { useFetch } from "./Services";
import Logging from "./Components/Loggin/Logging";
import FlightApp from "./Components/FlightApp/FlightApp";

const user = { name: "Name", identification: "83913298273FQW" };
const airlines = ["Iberia", "Flight Emirates", "British Airlines", "Ryanair"];
 const flights = [
{
origin: "Madrid",
destination: "Barcelona",
price: "price_not_implemented",
scales: 0,
luggage: true,
airline: "Iberia",
date: new Date(2022, 2, 12),
flightNumber: "29836132",
transitTime: 2,
layover: false,
},
{
origin: "Madrid",
destination: "Paris",
price: "price_not_implemented",
scales: 0,
luggage: true,
airline: "Ryanair",
date: new Date(2022, 2, 13),
flightNumber: "29836133",
transitTime: 3,
layover: false,
},
{
origin: "Madrid",
destination: "London",
price: "price_not_implemented",
scales: 1,
luggage: true,
airline: "Ryanair",
date: new Date(2022, 2, 13),
flightNumber: "29836134",
transitTime: 3.5,
layover: false,
},
{
origin: "Madrid",
destination: "Firenze",
price: "price_not_implemented",
scales: 0,
luggage: false,
airline: "Ryanair",
date: new Date(2022, 2, 13),
flightNumber: "29836135",
transitTime: 3.5,
layover: false,
},
{
origin: "Madrid",
destination: "New York",
price: "price_not_implemented",
scales: 2,
luggage: true,
airline: "Flight Emirates",
date: new Date(2022, 2, 13),
flightNumber: "29836136",
transitTime: 6.5,
layover: false,
},
];
function App() {
  let show = "";
  const [logged, setlogged] = useState(false);
  //const flights = useFetch("http://localhost:8080/flights/").data
  console.log(flights);
  if (!logged) {
    show = <Logging setlogged={setlogged} />;
  } else {
    show = <FlightApp user={user} airlines={airlines} flights={flights} />;
  }
  return <div className="App">{show}</div>;
}

export default App;
