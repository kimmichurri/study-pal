import React, { Component } from 'react';
import DisplayQuestionsAndAnswers from './DisplayQuestionsAndAnswers';

export default class Flashcard extends Component {
    constructor() {
        super();
        this.state = {
            correctAnswer: null,
            currentFlashcardIndex: 0
        }
    }

    validateAnswer =(e) => {
        if (e.target.innerText === this.props.flashcards[0].correctAnswer) {
            console.log("You're Right!")
            this.setState({
                correctAnswer: true
            })
        } else {
            console.log("Sorry, that is incorrect!")
            this.setState({
                correctAnswer: false
            })
        }
    }

    showNextFlashcard = (e) => {
        this.setState({
            correctAnswer: null,
            currentFlashcardIndex: this.state.currentFlashcardIndex + 1
        })
        if (e.target.innerText === "Keep Trying!") {
            console.log("put this into study bank")
        } 
    }
    

    render() {
        return (
            <article className="flashcard-container">
                <DisplayQuestionsAndAnswers 
                    flashcard={this.props.flashcards[this.state.currentFlashcardIndex]} 
                    validateAnswer={this.validateAnswer}
                    correctAnswer={this.state.correctAnswer}
                    showNextFlashcard={this.showNextFlashcard}
                    />
            </article>
        )
    }
    
}