import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
// import Proptypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  // Extract whatever info we want to take out, like the data that is required

  if (!feedback || feedback.length === 0) {
    console.log("No feedback data");
    return <div className="noFebk">No Feedback Yet</div>
  }

  return (
    <div>
      {feedback.map((item) => (
        <div key={item.id}>
          <FeedbackItem item={item}
          />
        </div>
      ))}
    </div>
  );
}

// FeedbackList.propType s = {
//   feedBack: Proptypes.arrayOf(
//     Proptypes.shape({
//       id: Proptypes.number,
//       text: Proptypes.text,
//       rating: Proptypes.number,
//     })
//   ),
// };

export default FeedbackList;
