import React  from 'react';
import './Card.css';
import Message from './message/Message';
import Button from './button/Button';
import { useState } from 'react';
 
const Card = () => {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
      setCounter(counter+1)
    }
    const decrement = ()=>{
      setCounter(counter-1)
    }

  return (
      <div className="card">
      <Message label = "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js." />
      <h1>Counter: {counter}</h1>
      <div className='button-container'>
        <Button title = "Increment" onClick = {increment}/>
        <Button title = "Decrement" onClick = {decrement}/>
      </div>
      </div>
  );
};

export default Card;