import React from 'react';

export default function DisplayQuestionsAndAnswers (props) {

   
    return (
        <section>
            <p className="question-text">{props.flashcard.question}</p>
            <section className="answer-choice-buttons-container">
                <button className="answer-text">{props.flashcard.answerChoices[0]}</button>
                <button className="answer-text">{props.flashcard.answerChoices[1]}</button>
                <button className="answer-text">{props.flashcard.answerChoices[2]}</button>
            </section>
        </section>
    )
}