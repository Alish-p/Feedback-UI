import { useState } from 'react';

const Rating = ({ setRating }) => {
  const [selected, setSelected] = useState('10');
  const ratings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const handleChage = (e) => {
    const { value } = e.target;
    setSelected(value);
    setRating(+value);
  };

  return (
    <ul className="rating">
      {ratings.map((i) => (
        <li key={i}>
          <input
            type="radio"
            onChange={handleChage}
            id={i}
            name="rating"
            value={i}
            checked={selected === i}
          />
          <label htmlFor={i}>{i} </label>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
