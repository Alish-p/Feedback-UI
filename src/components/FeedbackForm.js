import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import Rating from './Rating';
import { v4 as uuidv4 } from 'uuid';

const FeedbackForm = ({ addFeedback }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    setDisabled(value.length > 10 ? false : true);
    setMessage(value.length > 10 ? '' : 'Please add atleast 10 characters');
    setText(value);
  };

  const handleSubmit = (e) => {
    addFeedback({ text, rating, id: uuidv4() });
    setText('');
    setRating(10);
    setDisabled(true);
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service ?</h2>
        <Rating setRating={setRating} />

        <div className="input-group">
          <input type="text" onChange={handleChange} value={text} />
          <Button type="submit" isDisabled={disabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
