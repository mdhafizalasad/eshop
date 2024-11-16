// RatingStars.jsx
import React from 'react';

const RatingStars = ({ rating, onRate }) => {
  // Create an array of 5 stars
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)} // Set the rating when a star is clicked
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray', // Change color based on rating
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
