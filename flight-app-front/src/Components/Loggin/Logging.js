import React from 'react';

const Logging = (props) => {

    const loggingHandler = () => {
        props.setlogged(true);
    }
    return (
      <div>
        <imput>user: </imput>
        <imput>password: </imput>
        <button onClick={loggingHandler}>Log!</button>
      </div>
    );
}

export default Logging;
