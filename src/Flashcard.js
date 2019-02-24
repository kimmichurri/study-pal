import React, { Component } from 'react';
import DisplayQuestionsAndAnswers from './DisplayQuestionsAndAnswers'

export default class Flashcard extends Component {

    
    // currentQuestion() {
    //     console.log(this.state.currentFlashcards)
    // }

    render() {
        return (
            <article className="flashcard-container">
                <DisplayQuestionsAndAnswers flashcard = {this.props.flashcards[0]} />
            </article>
        )
    }
    
}