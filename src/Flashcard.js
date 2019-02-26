import React, { Component } from 'react';
import DisplayQuestionsAndAnswers from './DisplayQuestionsAndAnswers';

export default class Flashcard extends Component {
    constructor() {
        super();
        this.state = {
            correctAnswer: null,
        }
    }

    validateAnswer =(e) => {
        if (e.target.innerText === this.props.flashcards[this.props.currentIndex].correctAnswer) {
            this.setState({
                correctAnswer: true
            })
        } else {
            this.setState({
                correctAnswer: false
            }) 
            this.sendToStudyBank() 
        }
    }

    sendToStudyBank() {
        let incorrectlyAnsweredCard = this.props.flashcards[this.props.currentIndex];
        this.props.studyBank.push(incorrectlyAnsweredCard);
        localStorage.setItem("study bank cards", JSON.stringify(this.props.studyBank));
    }

    showNextFlashcard = () => {
        this.setState({
            correctAnswer: null,
        })
        this.props.incrementCurrentIndex()
    }
    

    render() {
        return (
            <article className="flashcard-container">
                <DisplayQuestionsAndAnswers 
                    flashcard={this.props.flashcards[this.props.currentIndex]} 
                    validateAnswer={this.validateAnswer}
                    correctAnswer={this.state.correctAnswer}
                    showNextFlashcard={this.showNextFlashcard}
                    currentIndex={this.props.currentIndex}
                    allFlashcards={this.props.flashcards}
                />
            </article>
        )
    }
}