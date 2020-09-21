import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MyApp() {
    return(
        <div>
            <h1>Andrey Abramov</h1>
            <p> Some lifestory about me...</p>
            <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
                <li>Chapter 3</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    MyApp(),
    document.getElementById('root')
);
