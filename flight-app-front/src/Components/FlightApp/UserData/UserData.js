import React from 'react';

const UserData = (props) => {
    return (
      <div>
        {props.name} {props.identification}
      </div>
    );
}

export default UserData;
