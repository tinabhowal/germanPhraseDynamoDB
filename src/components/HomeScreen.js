import React, { useState } from 'react'

export const HomeScreen = () => {

    const [email, setEmail] = useState("");
    // const [error, setError] = useState("");
    //const [unsub, setUnsub] = useState("");

    const handleEmailSubmission = (e) => {
        e.preventDefault();

          fetch('https://2rigyfac4b.execute-api.eu-central-1.amazonaws.com/dev/germanPhraseSubscriber',{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({email})
          })
          .then(response => {
            if(!response.ok){
                throw new Error('Failed to subscribe.');
            }
            return response.json();
          })
          .then(data => {
            alert('You have successfully subscribed to Daily German Phrases')
          })
          .catch(error => {
            alert('Subscription failed.Please try again.')
            console.log('Error', error.message)})
          
    }

    // const handleUnsubscribe = () => {
    //   fetch('https://2rigyfac4b.execute-api.eu-central-1.amazonaws.com/dev/unsubscribe', {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body:JSON.stringify({email}),
    //   }) 
    //   .then(response => {
    //     if(!response.ok){
    //       throw new Error('Failed to unsubscribe.');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     alert('You have successfully unsubscribed from Daily German Phrases');
    //   })
    //   .catch(error => {
    //     alert('Unsubscription failed. Please try again.');
    //     console.log('Error', error.message);
    //   })
    // }

  return (
    <div>
        <h1>Learn a German phrase every day!</h1>
        <form onSubmit={handleEmailSubmission}>
            <input 
            value={email}
            type='email'
            name='email'
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your email address'
            style={{border:'#EDEDED', borderStyle:'solid', borderRadius:'4px', margin: '10px', textAlign:'center', width:'fit-content'}}
            />
            <button style={{border:'#197755', borderStyle:'solid', borderRadius:'4px'}} type="submit">Subscribe</button>
            
            {/* {error && <p style={{color:"red"}}>{error}</p>} */}
        </form>
{/* 
        <form onSubmit={handleUnsubscribe}>
            <input 
            value={unsub}
            type='email'
            onChange={(e)=>setUnsub(e.target.value)}
            placeholder='Enter your email address'
            />
            <button type="submit">Unsubscribe</button>
            
        </form> */}
        
        </div>
  )
}

export default HomeScreen;