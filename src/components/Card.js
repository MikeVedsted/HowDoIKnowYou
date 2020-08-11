import React from 'react';

const Card = ({ name, email, position, photo, id }) => {
  return (
    <div className='tc grow bg-navy br3 pa3 ma2 dib bw2 shadow-5'>
      <img className='br4 h4 dib' alt={name} src={photo} />
      <div>
        <h2 className='dark-green mb0'>{name}</h2>
        <p className='mt1 green'>{position}</p>
        <p className='green'>{email}</p>
      </div>
    </div>
  );
}

export default Card;