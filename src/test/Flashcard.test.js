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

let mockCorrectAnswer;

describe('Flashcard', () => {
    
    let wrapper;

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

    it.skip('should change the state of correct answer to true if correct answer is selected', () => {

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
        );
        mockCorrectAnswer = true;
        wrapper.instance().validateAnswer();
        wrapper.instance().state.correctAnswer = mockCorrectAnswer;
        expect(wrapper.state()).toEqual({
            correctAnswer: true
        });
    });

    it('should change the state of correct answer to false if correct answer is not selected', () => {
        
        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
    });

    it('should push an incorrectly answered flashcard into the study bank', () => {

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
    });

    it('should reset correct answer to null and call incrementCurrentIndex function', () => {

        const wrapper = shallow(
            <Flashcard 
                flashcards={mockFlashcards}
            />
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