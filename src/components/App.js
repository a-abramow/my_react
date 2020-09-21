import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainContent from "../MainContent";

function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"

    }
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
            <h1 style={styles}> Good {timeOfDay}!</h1>
            <p>It is currently about {date.getHours() % 12} o'clock!</p>
        </div>
    )
}

export default App