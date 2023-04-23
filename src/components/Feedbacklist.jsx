import Feedbackitem from "./Feedbackitem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function Feedbacklist() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Feedbacklist;
