import React from 'react';

const Logging = (props) => {

    const loggingHandler = () => {
        props.setlogged(true);
    }
    return (
      <div>
        <p>user: </p>
        <p>password: </p>
        <button onClick={loggingHandler}>Log!</button>
      </div>
    );
}

export default Logging;
