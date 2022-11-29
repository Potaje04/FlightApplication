import React from 'react';

const BookFlightEnd = (props) => {
    var show; 
    console.log(props.success);
    if(props.success){
        show = "Succesful"
    }else{
        show = "Error while resevirng the flight"
    }
    return (
        <div>
            {show}
        </div>
    );
}

export default BookFlightEnd;
