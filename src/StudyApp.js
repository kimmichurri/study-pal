import React, { Component } from 'react';
import brainLogo from './assets/brainimg.png';
import Header from './Header'
import Flashcard from './Flashcard'
import Greeting from './Greeting'


export default class StudyApp extends Component {
    constructor() {
        super();
        this.state = {
            flashcardData: [],
            flashcards: [],
            studyBank: JSON.parse(localStorage.getItem("study bank cards")) || [],
            currentFlashcardIndex: 0
        }
    }

    componentDidMount() {
        fetch('http://memoize-datasets.herokuapp.com/api/v1/KMstringAndArrayPrototypeMethods')
            .then(response => response.json())
            .then(PrototypeMethodsData => this.setState({
                flashcardData: PrototypeMethodsData.KMstringAndArrayPrototypeMethods,
            }))
            .catch(error => {throw new Error(error)})
    }

    chooseStudyBank = (e) => {
            this.setState({
                flashcards: this.state.studyBank,
                currentFlashcardIndex: 0
            })
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

    incrementCurrentIndex = () => {
        this.setState({
            currentFlashcardIndex: this.state.currentFlashcardIndex + 1
        })
    }

    render() {
        let numberOfStudyQuestions = this.state.studyBank.length;
        return (
            <div>
                <Header />
                <img src={brainLogo} className="study-pal-logo" alt="brain-logo" />
                <section className= "study-choice-buttons-container">
                    <button onClick={this.chooseArrayCategory} className="study-choice-buttons">Array Prototype Methods</button>
                    <button onClick={this.chooseStringCategory} className="study-choice-buttons">String Prototype Methods</button>
                    <button onClick={this.chooseStudyBank} className="study-choice-buttons">Study Bank ({numberOfStudyQuestions})</button>
                </section>
                {!this.state.flashcards.length && (
                    <Greeting />
                )}
                {this.state.flashcards.length > 0 && (
                    <Flashcard 
                        flashcards={this.state.flashcards}
                        studyBank={this.state.studyBank}
                        currentIndex={this.state.currentFlashcardIndex}
                        incrementCurrentIndex={this.incrementCurrentIndex}
                />
                )}
            </div>
        )
    }
}