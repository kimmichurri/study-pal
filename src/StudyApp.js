import React, { Component } from 'react';
import brainLogo from './assets/brainimage.png';
//import css for studyApp


export default class StudyApp extends Component {
    constructor() {
        super();
        this.state = {
            questionCategory: null,
            flashcards: [],
            incorrectlyAnsweredFlashcards: [],
        }
    }

    // chooseStudyCategory = () => {
    //    user clicks on either string, array, or archive 
    // }

    render() {
        return (
            <div>
                <h1 className="app-name">Study Pal</h1>
                <img src={brainLogo} className="study-pal-logo" alt="logo" />
                <button className="study-choice-buttons">Would you like to pick up where you left off?</button>
                <button className="study-choice-buttons">Let's Go!(Array Prototype Methods)</button>
                <button className="study-choice-buttons">Let's Go!(String Prototype Methods)</button>
            </div>
        )
    }
}