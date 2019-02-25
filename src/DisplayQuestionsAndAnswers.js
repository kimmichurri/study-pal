import React from 'react';

export default function DisplayQuestionsAndAnswers (props) {
   
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