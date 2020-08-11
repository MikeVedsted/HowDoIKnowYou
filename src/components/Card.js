import React from 'react';

const Card = ({ name, email, position, photo, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img className='br4 h4 dib' alt='profile' src={photo} />
      <div>
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;