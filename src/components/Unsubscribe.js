import React, { useState } from 'react';

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleUnsubscribe = async () => {
    try {
      const response = await fetch('https://2rigyfac4b.execute-api.eu-central-1.amazonaws.com/dev/unsubscribe', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        alert('You have unsubscribed successfully.')
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Internal Server Error');
    }
  };

  return (
    <div>
      <h1>Want to unsubscribe from "Daily German Phrase"?</h1>
      
        <input 
        type="email" 
        value={email} 
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email address' 
        style={{border:'#EDEDED', borderStyle:'solid', borderRadius:'4px', margin: '10px', textAlign:'center', width:'fit-content'}}/>
      
      <button style={{border:'#197755', borderStyle:'solid', borderRadius:'4px'}} onClick={handleUnsubscribe}>Unsubscribe</button>
      <p>{message}</p>
    </div>
  );
};

export default Unsubscribe;



