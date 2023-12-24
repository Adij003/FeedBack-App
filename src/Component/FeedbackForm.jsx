
import React, {useState, useContext, useEffect} from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackForm() {

    const {AddFeedback, feedBackEdit, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('');
    const [rating, setRating] = useState(0)
    const [btnDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(feedBackEdit.edit === true){
            setBtnDisable(false)
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)

        }
    }, [feedBackEdit])


    const handleOnChange = (e) => {
        // setText(e.target.value)
        
        if( text === ''){
            setBtnDisable(true)
            setMessage(null)
        } else if ( text !== '' && text.trim().length <=10) {
            setBtnDisable(true)
            setMessage('Feedback Must Be of More that 10 letters')
        }
        else {
            setMessage(null)
            setBtnDisable(false)
        }
        setText(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){

            const newFeedback = {
                text: text,
                rating: rating
            }
            // console.log(newFeedback);
            if(feedBackEdit.edit === true){
                updateFeedback(feedBackEdit.item.id, newFeedback)
            }
            else{
                AddFeedback(newFeedback);
            }
        } 

        setText(''); 
             
    }
   

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Would you please share your feedback?</h2>    
            <RatingSelect select={(rating) => {setRating(rating)}} />
            <div className='input-group' >
                <input 
                placeholder='Write feedback here.....'
                onChange={handleOnChange}
                type='text'
                value={text}
                >
                </input>
                <Button type='submit' isDisabled={btnDisable}>
                    Send
                </Button>
            </div>  
                {message && <div className='message'>{message}</div> }
        </form>        
    </Card>
  )
}

export default FeedbackForm