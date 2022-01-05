import { useState, useContext } from 'react';
import data from './data/data';
import Feedback from './Feedback';
import FeedbackForm from './FeedbackForm';
import FeedbackStats from './FeedbackStats';
import { motion, AnimatePresence } from 'framer-motion';
import feedbackContext from '../Context/FeedbackContext';

const FeedbackList = () => {
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);

  const handleRemove = (id) => {
    setFeedbacks((prev) => prev.filter((i) => i.id !== id));
  };

  const handleAdd = ({ id, text, rating }) => {
    setFeedbacks([{ id, text, rating }, ...feedbacks]);
  };

  return (
    <div>
      <FeedbackForm addFeedback={handleAdd} />
      <FeedbackStats feedbacks={feedbacks} />
      <AnimatePresence>
        {feedbacks.map((f) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedback key={f.id} item={f} handleRemove={handleRemove} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
