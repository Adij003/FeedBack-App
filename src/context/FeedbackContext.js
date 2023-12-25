import { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => { 
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  
  useEffect(()=>{
    FetchData() 
  },[])
  
  const FetchData = async () => {
    const response = await fetch(`/feedback?_sort=rating&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false
  })

  const AddFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      }
    )
    const data = await response.json()

    
    // console.log("App.js wala feedback: ", newFeedback);
    setFeedback([data, ...feedback]);
    // console.log('unique Id: ',newFeedback.id); 
  };

  const feedBackDelete = async (id) => {

    await fetch(`/feedback/${id}`, {method: 'DELETE'})
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

  const updateFeedback = async (id, updatedData) => {

    const response = await fetch(`/feedback/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      }
    )
    const data = await response.json()

    setFeedback(
      feedback.map((item)=>
        item.id === id ? {...item, ...data} : item
      )
    )
    setFeedBackEdit({feedback, edit: false})
    
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedBackEdit,
        isLoading,
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
