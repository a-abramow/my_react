import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainContent from "../MainContent";

function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
            <h1 style={{color: "#FF8C00"}}> Good {timeOfDay}!</h1>
            <p>It is currently about {date.getHours() % 12} o'clock!</p>
        </div>
    )
}

export default App