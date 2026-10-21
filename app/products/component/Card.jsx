
import React from 'react';

function Card({ img }) {
  return (
    <div
      className="img-box"
      style={{
        display: 'inline-block',
        border: '2px solid green',
        padding: '0',
        lineHeight: 0,
        width: '400px',
        height: 'fit-content',
      }}
    >
      <img
        src={img}
        alt="Oil well drilling"
        style={{
          display: 'block',
          width: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default Card;
