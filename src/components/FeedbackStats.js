const FeedbackStats = ({ feedbacks }) => {
  const average =
    feedbacks.reduce((acc, cv) => acc + cv.rating, 0) / feedbacks.length || 0;

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1)}</h4>
    </div>
  );
};

export default FeedbackStats;
