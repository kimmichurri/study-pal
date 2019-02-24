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
            flashcards: []
            // studyBank: []
            // in component did mount set the state
        }
    }

    chooseArrayCategory = (e) => {
        if (e.target.innerText === 'Array Prototype Methods') {
            let arrayQuestions = this.state.flashcardData.filter((question) => {
                console.log(question.category)
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
                <img src={brainLogo} className="study-pal-logo" alt="logo" />
                <section className= "study-choice-buttons-container">
                    <button className="study-choice-buttons">Study Bank</button>
                    <button onClick={this.chooseArrayCategory} className="study-choice-buttons">Array Prototype Methods</button>
                    <button onClick={this.chooseStringCategory} className="study-choice-buttons">String Prototype Methods</button>
                </section>
                <Flashcard />
            </div>
        )
    }
}