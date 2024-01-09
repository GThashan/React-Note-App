import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';





const App = () => {
    return (
		
       
        <div className="main-content">
            <div className="content-overlay">
                <h1>Daily Notes</h1>
				<p>"Welcome to our note-taking website, Whether you're a student, professional, or anyone looking to capture and organize thoughts, ideas, and tasks seamlessly, our platform provides an intuitive and user-friendly experience, Start your note-taking journey with us and unlock the power of efficient and accessible information management."</p>
                <Link to="/Blog" className="main-btn">
                    Let's Start
                </Link>
				  
				

            </div>
            <img className="full-image" src="https://img.freepik.com/free-vector/circles-background-dark-tones_60389-166.jpg?size=626&ext=jpg&ga=GA1.2.777846729.1697434022&semt=ais" alt="Notepad"></img>
        </div>
		
    );
};

export default App;
