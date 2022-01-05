import { createContext, useState } from 'react';
import data from '../components/data/data';

const feedbackContext = createContext({});

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(data);
  return (
    <feedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
