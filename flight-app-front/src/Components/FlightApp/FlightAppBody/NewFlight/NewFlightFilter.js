import React from "react";

const NewFlightFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(props.name + "--" + event.target.value);
    props.onChangeFilter(event.target.value);
  };
  var show = "";
  if(props.none){
    show = <option value={"None"} >None</option>;
  }
  return (
    <div>
      <label>Filter by {props.name}: </label>
      <select onChange={dropdownChangeHandler} value={props.selected}>
        {show}     
        {props.options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default NewFlightFilter;
