import React from 'react';
import Greeting from './Greeting'

export default function DisplayQuestionsAndAnswers (props) {

   if (props.flashcard === undefined) {
    return <Greeting />
   } 
   if (props.correctAnswer === true) {
    return (
        <p>That's right!</p>
    )
} else if (props.correctAnswer === false) {
    return (
        <p>Nice try, but wrong!</p>
    )
} 
   
    return (
        <section>
            <p className="question-text">{props.flashcard.question}</p>
            <section className="answer-choice-buttons-container">
                <button onClick={props.validateAnswer} className="answer-text">{props.flashcard.answerChoices[0]}</button>
                <button onClick={props.validateAnswer} className="answer-text">{props.flashcard.answerChoices[1]}</button>
                <button onClick={props.validateAnswer} className="answer-text">{props.flashcard.answerChoices[2]}</button>
            </section>
        </section>
    )
}