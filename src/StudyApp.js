import React, { Component } from 'react';
import brainLogo from './assets/brainimg.png';
import Header from './Header'
import Flashcard from './Flashcard'
import { stringAndArrayPrototypeMethods } from './PrototypeMethodsData'


export default class StudyApp extends Component {
    constructor() {
        super();
        this.state = {
            flashcardData: stringAndArrayPrototypeMethods,
            // in component did mount set the value of flashcardData to the whole dataset
            flashcards: [],
            studyBank: JSON.parse(localStorage.getItem("study bank cards")) || []
            // if study bank is empty disable the button, if study bank has length we will pull flashcards from local storage when the button is clicked
        }
    }

    chooseStudyBank = (e) => {
        console.log('click', e.target)
        console.log(this.state.flashcards)
        if (e.target.innerText === 'Study Bank') {
            this.setState({
                flashcards: this.state.studyBank
            })
        }
    }

    chooseArrayCategory = (e) => {
        if (e.target.innerText === 'Array Prototype Methods') {
            let arrayQuestions = this.state.flashcardData.filter((question) => {
                return question.category === "Array Methods"
            })
            this.setState({
                flashcards: arrayQuestions
            })
        }   
    }

    chooseStringCategory = (e) => {
        if (e.target.innerText === 'String Prototype Methods') {
            let stringQuestions = this.state.flashcardData.filter((question) => {
                return question.category === "String Methods"
            })
            this.setState({
                flashcards: stringQuestions
            })
        }   
    }

    render() {
        return (
            <div>
                <Header />
                <img src={brainLogo} className="study-pal-logo" alt="brain-logo" />
                <section className= "study-choice-buttons-container">
                    <button onClick={this.chooseStudyBank} className="study-choice-buttons">Study Bank</button>
                    <button onClick={this.chooseArrayCategory} className="study-choice-buttons">Array Prototype Methods</button>
                    <button onClick={this.chooseStringCategory} className="study-choice-buttons">String Prototype Methods</button>
                </section>
                <Flashcard 
                    flashcards={this.state.flashcards}
                    studyBank={this.state.studyBank}
                />
            </div>
        )
    }
}