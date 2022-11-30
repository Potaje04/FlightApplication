import React from "react";
import { useState } from "react";
import { useFetch } from "../../../../Services";

const BookFlightForm = (props) => {
  const [data, setData] = useState({name: null, surname: null, identification: null, luggage:false, });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  
  
  //var price = useFetch("http://localhost:8080/flights/price/"+ props.flight.id+"/"+ 0)

  const [price, setPrice] = useState();
  
  const handleSubmit = () => {
    if (data.name != null && data.surname != null && data.identification != null ){
      props.flightBooked(data);
    }else{
      error = setError(<p>You must fill all the data.</p>);
    }
  };

  const handleCheckBox = (event) => {
    setIsChecked(!isChecked);
    setData({...data, luggage:!isChecked});
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  };

  var luggage = "";
  if (props.flight.luggage === true) {
    luggage = (
      <div className="topping">
        <input
          type="checkbox"
          name="luggage"
          value="Luggage"
          checked={data.Luggage}
          onChange={handleCheckBox}
        />
        Luggage
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div>
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
        {luggage}
        {error}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default BookFlightForm;
