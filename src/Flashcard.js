import React, { Component } from 'react';
import DisplayQuestionsAndAnswers from './DisplayQuestionsAndAnswers';
import Feedback from './Feedback'

export default class Flashcard extends Component {
    constructor() {
        super();
        this.state = {
            correctAnswer: null
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
    
    // currentQuestion() {
    //     console.log(this.state.currentFlashcards)
    // }

    render() {
        return (
            <article className="flashcard-container">
                <DisplayQuestionsAndAnswers 
                    flashcard={this.props.flashcards[0]} 
                    validateAnswer={this.validateAnswer}
                    correctAnswer={this.state.correctAnswer}
                    />
                {/* <Feedback correctAnswer={this.state.correctAnswer}/> */}
            </article>
        )
    }
    
}