import React, {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({select}) {
  const {feedBackEdit} = useContext(FeedbackContext)
    const [selected, setSelected] = useState(0);
    useEffect(()=>{
      if(feedBackEdit.edit === true){
        setSelected(feedBackEdit.item.rating)
      }
    }, [feedBackEdit])
   
    // setSelected(resetRating)
    const handleOnChange = (e) => {
      setSelected(+e.currentTarget.value);
      // select(selected); if we useselected it will show the previous selected value, we need the current actual value so we need to use +e.currentTarget.value
      select(+e.currentTarget.value)
    }

    // const update=()=>{
    //   setSelected(0);
    // }

  return (
    <ul className='rating'>
      
  <li>
    <input
      type='radio'
      id='num1'
      name='rating'
      value='1'
      onChange={ handleOnChange}
      checked={selected === 1}
    />
    <label htmlFor="num1">1</label>
  </li>
  <li>
    <input
      type='radio'
      id='num2'
      name='rating'
      value='2'
      onChange={ handleOnChange}
      checked={selected === 2}
    />
    <label htmlFor="num2">2</label>
  </li>
  <li>
    <input
      type='radio'
      id='num3'
      name='rating'
      value='3'
      onChange={ handleOnChange}
      checked={selected === 3}
    />
    <label htmlFor="num3">3</label>
  </li>
  <li>
    <input
      type='radio'
      id='num4'
      name='rating'
      value='4'
      onChange={ handleOnChange}
      checked={selected === 4}
    />
    <label htmlFor="num4">4</label>
  </li>
  <li>
    <input
      type='radio'
      id='num5'
      name='rating'
      value='5'
      onChange={ handleOnChange}
      checked={selected === 5}
    />
    <label htmlFor="num5">5</label>
  </li>
  <li>
    <input
      type='radio'
      id='num6'
      name='rating'
      value='6'
      onChange={ handleOnChange}
      checked={selected === 6}
    />
    <label htmlFor="num6">6</label>
  </li>
  <li>
    <input
      type='radio'
      id='num7'
      name='rating'
      value='7'
      onChange={ handleOnChange}
      checked={selected === 7}
    />
    <label htmlFor="num7">7</label>
  </li>
  <li>
    <input
      type='radio'
      id='num8'
      name='rating'
      value='8'
      onChange={ handleOnChange}
      checked={selected === 8}
    />
    <label htmlFor="num8">8</label>
  </li>
  <li>
    <input
      type='radio'
      id='num9'
      name='rating'
      value='9'
      onChange={ handleOnChange}
      checked={selected === 9}
    />
    <label htmlFor="num9">9</label>
  </li>
  <li>
    <input
      type='radio'
      id='num10'
      name='rating'
      value='10'
      onChange={ handleOnChange}
      checked={selected === 10}
    />
    <label htmlFor="num10">10</label>
  </li>
</ul>

    
  )
}

export default RatingSelect