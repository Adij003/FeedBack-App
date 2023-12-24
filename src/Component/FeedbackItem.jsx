import React, { useContext } from "react";
import { useState } from 'react'
import Card from './Shared/Card'
import Proptypes from 'prop-types'
import { AiFillDelete } from 'react-icons/ai'; 
import FeedbackContext from "../context/FeedbackContext";
import { FaEdit } from "react-icons/fa";




function FeedbackItem({item}) {
    // const [rating, setrating] = useState(5)
    // const [text, settext] = useState('This stuff is good, need to build it')

    // const handleOnClick = () => {
    //     setrating((prev) => {
    //         return prev+1
    //     })
    // }

    // const handleDel = (id) => {
    //   console.log(id);
    // }
    
    const { feedback, feedBackDelete, editFeedback } = useContext(FeedbackContext)

  return (
   <Card >

    <div className="num-display">{item.rating}</div>
    <button className="close" onClick={() => feedBackDelete(item.id)}>
    <AiFillDelete  color='black' />
    </button>
    <button onClick={() => editFeedback(item)} className="edit">
      <FaEdit color='purple' />
    </button>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleOnClick} >click</button> */}
   
   </Card>
  )
}

FeedbackItem.propTypes = {
  item: Proptypes.object,
  handleDelete: Proptypes.func.isRequired,
}

export default FeedbackItem