import React from "react";
import { useState } from "react";
import { useFetch } from "../../../../Services";


const BookFlightForm = (props) => {
  const [data, setData] = useState({});

  //var price = useFetch("http://localhost:8080/flights/price/"+ props.flight.id+"/"+ 0)

  const [price, setPrice] = useState();



  const handleSubmit = (event) => {
    props.flightBooked(data);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        />
        Surname:{" "}
        <input
          name="surname"
          value={data.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        Identification:{" "}
        <input
          name="identification"
          value={data.identification}
          onChange={handleChange}
          placeholder="Identification"
        />
        Age:{" "}
        <select
          name="age"
          value={data.age}
          onChange={handleChange}
          defaultValue={"9"}
        >
          <option value="2">less than 2</option>
          <option value="29">between 2 and 9</option>
          <option value="9">more than 9</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default BookFlightForm;
