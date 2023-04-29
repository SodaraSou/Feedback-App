import { motion, AnimatePresence } from "framer-motion";
import Feedbackitem from "./Feedbackitem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./shared/Spinner";

function Feedbacklist() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.lenght === 0)) {
    return <p>No Feedback</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <Feedbackitem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (

  // );
}

export default Feedbacklist;
