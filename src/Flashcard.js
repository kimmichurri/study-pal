import React, { Component } from 'react';
import DisplayQuestionsAndAnswers from './DisplayQuestionsAndAnswers'

export default class Flashcard extends Component {

    validateAnswer =(e) => {
        if (e.target.innerText === this.props.flashcards[0].correctAnswer) {
            console.log("You're Right!")
        } else {
            console.log("Sorry, that is incorrect!")
        }
    }
    
    // currentQuestion() {
    //     console.log(this.state.currentFlashcards)
    // }

    render() {
        return (
            <article className="flashcard-container">
                <DisplayQuestionsAndAnswers 
                    flashcard={this.props.flashcards[0]} 
                    validateAnswer={this.validateAnswer}
                    />
            </article>
        )
    }
    
}