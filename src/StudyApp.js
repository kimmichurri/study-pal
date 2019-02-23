import React, { Component } from 'react';
import brainLogo from './assets/brainimage.png';
import Header from './Header'
import Flashcard from './Flashcard'


export default class StudyApp extends Component {
    constructor() {
        super();
        this.state = {
            questionCategory: null,
            flashcards: [],
            incorrectlyAnsweredFlashcards: [],
            showButtonsAndLogo: true
        }
    }

    // chooseStudyCategory = () => {
    //    user clicks on either string, array, or archive 
    // }

    render() {
        return (
            <div>
                <Header />
                <img src={brainLogo} className="study-pal-logo" alt="logo" />
                <section className= "study-choice-buttons-container">
                    <button className="study-choice-buttons">Would you like to pick up where you left off?</button>
                    <button className="study-choice-buttons">Let's Go!(Array Prototype Methods)</button>
                    <button className="study-choice-buttons">Let's Go!(String Prototype Methods)</button>
                </section>
                <Flashcard />
            </div>
        )
    }
}