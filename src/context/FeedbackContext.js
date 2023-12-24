import { createContext, useState } from "react";
import uuid from "react-uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => { 
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "111 This is passed from context ",
      rating: 10
    },
    {
      id: 2,
      text: "222 This is passed from context ",
      rating: 8
    },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false
  })

  const AddFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    console.log("App.js wala feedback: ", newFeedback);
    setFeedback([newFeedback, ...feedback]);
    // console.log('unique Id: ',newFeedback.id); 
  };

  const feedBackDelete = (id) => {
    // if(window.confirm('Are you sure you want to Delete')){
    //   setFeedBack(feedBack.filter((item) => item.id !== id))
    // }
    setFeedback(feedback.filter((item) => item.id !== id));
    console.log("Deleted using context")
  }; 

  const editFeedback = (item) => {
    setFeedBackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedData) => {
    setFeedback(
      feedback.map((item)=>
        item.id === id ? {...item, ...updatedData} : item
      )
    )
    setFeedBackEdit({feedback, edit: false})
    
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedBackEdit,
        feedBackDelete,
        AddFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
