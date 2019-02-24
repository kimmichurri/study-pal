import React from 'react';

export default function DisplayQuestionsAndAnswers (props) {

   
    return (
        <section>
            <p className="question-text">{props.flashcard.question}</p>
            <p className="answer-text">{props.flashcard.answerChoices[0]}</p>
            <p className="answer-text">{props.flashcard.answerChoices[1]}</p>
            <p className="answer-text">{props.flashcard.answerChoices[2]}</p>
        </section>
    )
}