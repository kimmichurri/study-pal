import React from 'react';
import Flashcard from '../Flashcard';
import { shallow } from 'enzyme';

const mockFlashcards = [
    {
        "id": "a257e858-36c6-11e9-b210-d663bd873d93",
        "category": "String Methods",
        "question": "Which method allows you to remove whitespace from either end of a string?",
        "answerChoices": [".trim()", ".slim()", ".clip()"],
        "correctAnswer": ".trim()",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"
    }
]


const mockCurrentIndex = 0;

describe('Flashcard', () => {
    
    it('should have the proper default state', () => {

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
        );
        expect(wrapper.state()).toEqual({
            correctAnswer: null
        });
    });

    it('should change the state of correct answer to true if correct answer is selected', () => {
        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
                currentIndex={mockCurrentIndex}
            />
        );
        let mockInnerText = {target: {innerText: ".trim()" }}
        wrapper.instance().validateAnswer(mockInnerText);
        expect(wrapper.state()).toEqual({
            correctAnswer: true
        });
    });

    it('should change the state of correct answer to false if correct answer is not selected', () => {
        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
                currentIndex={mockCurrentIndex}
            />
        );
        let mockInnerText = {target: {innerText: ".slim()" }}
        //mock sendToStudyBank
        wrapper.instance().sendToStudyBank = () => { return true }
        wrapper.instance().validateAnswer(mockInnerText);
        expect(wrapper.state()).toEqual({
            correctAnswer: false
        });
    });

    it('should reset correct answer to null and call incrementCurrentIndex function', () => {

        const mockIncrementCurrentIndex = jest.fn();

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
                incrementCurrentIndex={mockIncrementCurrentIndex}
            />
        );
        wrapper.instance().showNextFlashcard();
        expect(wrapper.state()).toEqual({
            correctAnswer: null
        });
        expect(mockIncrementCurrentIndex).toBeCalled();
    });

    it('should match the snapshot when rendering', () => {

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});