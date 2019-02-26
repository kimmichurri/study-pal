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

const mockIndex = 1;

describe('DisplayQuestionsAndAnswers', () => {
    let wrapper;

    beforeEach(() => {

        wrapper = shallow (
            <DisplayQuestionsAndAnswers />
        )
    });

    it('should match the snapshot if props.currentIndex === props.allFlashcards.length', () => {
        let props.currentIndex = mockIndex;
        let props.allFlashcards = mockAllFlashcards;
        expect(wrapper).toMatchSnapshot();
    });

});