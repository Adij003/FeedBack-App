import PropTypes from 'prop-types'
import React, {useContext} from "react";
import FeedbackContext from '../context/FeedbackContext';


function FeedBackRating() {
  const {feedback} = useContext(FeedbackContext)

    let Average = 
    feedback.reduce((acc, cur) => {
        return acc+cur.rating
    }, 0) / feedback.length

    // console.log('Average: ',Average);

    Average = Average.toFixed(1).replace(/[.,]0$/,'')

  return <div className="feedBack-stats" style={{display: 'flex', justifyContent: 'space-around'}} >
    <h4> Total Feedbacks: {feedback.length} </h4>
    <div>Average Rating: {(feedback.length===0) ? 'No Ratings' : Average}</div>
  </div>;
}

// FeedBackRating.propTypes = {
//   feedback: PropTypes.array.isRequired
// }

export default FeedBackRating;
