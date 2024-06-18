import './App.css';
import { Link } from 'react-router-dom';

function About() {
    return (
       <div className="App">
         <header className="App-header">
            <p> This is the ABOUT page of Skillathon </p>
            <p><Link to="/" >Go to HOME Page 🏯   </Link> </p>
            </header>
      </div>
    );
}
export default About;