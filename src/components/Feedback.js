import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

const Feedback = ({ item: { text, rating, id }, handleRemove }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        className="close"
        onClick={() => {
          handleRemove(id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

Feedback.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default Feedback;
