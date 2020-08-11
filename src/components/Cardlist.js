import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  return (
    <div className="pt7">   
      {users.map((user, i) => {
        return (
          <Card 
            key={users[i].id} 
            id={users[i].id} 
            name={users[i].name} 
            email={users[i].email} 
            position={users[i].position} 
            photo={users[i].photo} 
          />)
      })}
    </div>
  );
}

export default CardList;