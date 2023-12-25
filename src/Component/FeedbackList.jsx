import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
// import Proptypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  // Extract whatever info we want to take out, like the data that is required

  if (!isLoading && (!feedback || feedback.length === 0)) {
    console.log("No feedback data");
    return <div className="noFebk">No Feedback Yet</div>
  }

  return isLoading ? <Spinner/> : ( <div>
    {feedback.map((item) => (
      <div key={item.id}>
        <FeedbackItem item={item}
        />
      </div>
    ))}
  </div>)

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
