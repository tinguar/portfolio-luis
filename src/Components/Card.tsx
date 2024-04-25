import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

function Card({ imageUrl, title, description }: CardProps) {
  return (
    <div className="card w-75 mb-3" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;