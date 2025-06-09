import React, { useEffect, useState } from 'react';
import './forms.css'

const Child = ({onChange}) => {
    return (
        <div>
            <button onClick={onChange}>click me</button>
        </div>
    )
}

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input[type=text]');
    console.log('Name:', name);
    console.log('Email:', email);
  };

  const handleOnChange = () => {
    console.log("from child")
  }

  useEffect(() => {

    for(var i = 0; i < 5; i++) {
        const fun = (function(input){
            console.log(input)
        })(i)
        setTimeout(() => fun , 300)
    }

    // fetch('https://api.example.com/posts', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ title: 'Hello', content: 'World' })
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log('Success:', data))
    //     .catch(error => console.error('Error:', error));

    return () => null

  },[])

  return (
    <>
    <Child onChange={handleOnChange}></Child>
    <form className='container' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
    
  );
}

export default MyForm;