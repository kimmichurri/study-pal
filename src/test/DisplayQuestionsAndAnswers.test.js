import React from 'react';
import DisplayQuestionsAndAnswers from '../DisplayQuestionsAndAnswers';
import { shallow } from 'enzyme';

const mockAllFlashcards = [
    {
        "id": "a257e858-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "Which method allows you to remove whitespace from either end of a string?",
        "answerChoices": [".trim()", ".slim()", ".clip()"],
        "correctAnswer": ".trim()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"
    }
]

let mockIndex = 1;

let mockCorrectAnswer;

describe('DisplayQuestionsAndAnswers', () => {

    let wrapper;

    it('should match the snapshot if props.currentIndex === props.allFlashcards.length', () => {
        const wrapper = shallow( 
            <DisplayQuestionsAndAnswers 
                flashcard={mockAllFlashcards[mockIndex]} 
                currentIndex={mockIndex}
                allFlashcards={mockAllFlashcards}
            /> 
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot if props.correct answer', () => {
        mockCorrectAnswer = true;
        mockIndex = 2;

        const wrapper = shallow(
            <DisplayQuestionsAndAnswers 
                flashcard={mockAllFlashcards[mockIndex]} 
                correctAnswer={mockCorrectAnswer}
                currentIndex={mockIndex}
                allFlashcards={mockAllFlashcards}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot if props.correct answer === false', () => {
        mockCorrectAnswer = false;
        mockIndex = 2;

        const wrapper = shallow(
            <DisplayQuestionsAndAnswers 
                flashcard={mockAllFlashcards[mockIndex]} 
                correctAnswer={mockCorrectAnswer}
                currentIndex={mockIndex}
                allFlashcards={mockAllFlashcards}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should return a flashcard', () => {
        mockIndex = 0;

        const wrapper = shallow(
            <DisplayQuestionsAndAnswers 
                flashcard={mockAllFlashcards[mockIndex]} 
                currentIndex={mockIndex}
                allFlashcards={mockAllFlashcards}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
});