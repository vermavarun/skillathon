import React, { useState, useEffect } from 'react'; // Import useState and useEffect from react package
import './App.css';
//require('dotenv').config()


function App() {
  const [message, setMessage] = useState("");
  console.log("API URL", process.env.REACT_APP_API_URL);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL, {
      headers:{
        accept: 'application/json',
        'User-agent': 'learning app',
      }
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message)
      console.log(data)
  })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       <p>Welcome to SKillathon 2024</p>
        Message from API :: <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
