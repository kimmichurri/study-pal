import React from 'react';
import StartOverNotice from './StartOverNotice';

export default function DisplayQuestionsAndAnswers(props) {
    
        if (props.currentIndex === props.allFlashcards.length) {
            return (
            <StartOverNotice />
            )
        }

        if (props.correctAnswer) {
            return (
                <section>
                    <p className="question-text">That's right!</p>
                    <button onClick={props.showNextFlashcard} className="answer-text correct-answer">Crushed it! Keep Going!</button>
                </section>
            )
         } else if (props.correctAnswer === false) {
            return (
                <section>
                    <p className="question-text">Nice try, but incorrect. Let's add this question to your Study Bank for later!</p>
                    <button onClick={props.showNextFlashcard} className="answer-text incorrect-answer">Keep Trying!</button>
                </section>
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