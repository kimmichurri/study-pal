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
                <h1>Study Pal</h1>
                <img src={brainLogo} alt="logo" />
            </div>
        )
    }
}