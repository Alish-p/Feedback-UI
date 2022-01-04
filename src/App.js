import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
const App = () => (
  <>
    <Header text="Feedback Ui" />
    <div className="container">
      <FeedbackList />
    </div>
  </>
);

export default App;
