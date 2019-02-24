import React, { Component } from 'react';
import brainLogo from './assets/brainimg.png';
import Header from './Header'
import Flashcard from './Flashcard'
import PrototypeMethodsData from './PrototypeMethodsData'


export default class StudyApp extends Component {
    constructor() {
        super();
        this.state = {
            questionCategory: null,
            flashcards: [],
            studyBank: [],
            showButtonsAndLogo: true,
            showFlashCard: false
        }
    }

    // chooseStudyCategory = () => {
    //      user clicks on either string, array, or archive 
    //      set state this.showButtonsAndLogo: false;
    // }

    render() {
        return (
            <div>
                <Header />
                <img src={brainLogo} className="study-pal-logo" alt="logo" />
                <section className= "study-choice-buttons-container">
                    <button className="study-choice-buttons">Study Bank</button>
                    <button className="study-choice-buttons">Array Prototype Methods</button>
                    <button className="study-choice-buttons">String Prototype Methods</button>
                </section>
                <Flashcard />
            </div>
        )
    }
}