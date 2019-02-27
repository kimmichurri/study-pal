import React from 'react';
import StudyApp from '../StudyApp';
import { shallow } from 'enzyme';

describe('StudyApp', () => {

    let wrapper;

    const chooseArrayCategoryMock = jest.fn();

    beforeEach(() => {

        wrapper = shallow(
            <StudyApp 
            chooseArrayCategory={chooseArrayCategoryMock}
            />
        )
    });

    it('should have the proper default state', () => {
        expect(wrapper.state()).toEqual({
            flashcardData: [],
            flashcards: [],
            studyBank: [],
            currentFlashcardIndex: 0
        })
    });

    it('should reassign flashcards to study bank when chooseStudyBank function is invoked', () => {
        const mockStudyBank = [
            {
                "id": "a257d840-36c6-11e9-b210-d663bd873d93",
                "category": "String Methods",
                "question": "In the following code what does 'gi' indicate?: var newstr = str.replace(/apples/gi, 'oranges')",
                "answerChoices": ["Replace all 'g' and 'i' characters in the string", "Replace 'apples' with 'oranges'", "Replace all 'apples' with 'oranges' and ignore letter case"],
                "correctAnswer": "Replace all 'apples' with 'oranges'",
                "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
            }
        ]
        expect(wrapper.state('flashcards')).toEqual([]);
        wrapper.instance().state.studyBank = mockStudyBank;
        wrapper.instance().chooseStudyBank();
        expect(wrapper.state('flashcards')).toEqual(mockStudyBank);
    });

    it('should filter an array of string method flashcards when chooseStringCategory is invoked', () => {
        const mockFlashcards = [
            {
                "id": "a257df02-36c6-11e9-b210-d663bd873d93",
                "category": "String Methods",
                "question": "I am given the string 'Turing School of Software and Design' and I need to return an array with each word as an element. Which syntax of .split() will accomplish this?",
                "answerChoices": [".split(' ')", ".split('')", ".split()"],
                "correctAnswer": ".split(' ')",
                "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
            },
            {
                "id": "a257e1aa-36c6-11e9-b210-d663bd873d93",
                "category": "Array Methods",
                "question": "I typed in 'Kim Myers'.join() to join these two words into one and received an error message. Why is that?",
                "answerChoices": [".join() is an array method and cannot be used on a string", ".join() is missing quotation marks within the parenthesis", "You need to store the string in a variable before using .join()"],
                "correctAnswer": ".join() is an array method and cannot be used on a string",
                "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
            }
        ]
        expect(wrapper.state('flashcards')).toEqual([]);
        wrapper.instance().state.flashcardData = mockFlashcards;
        wrapper.instance().chooseStringCategory();
        expect(wrapper.state('flashcards')).toEqual([mockFlashcards[0]]);
    });

    it('should increment flashcard index by 1 when incrementCurrentIndex is invoked', () => {
        expect(wrapper.state('currentFlashcardIndex')).toEqual(0);
        wrapper.instance().incrementCurrentIndex();
        expect(wrapper.state('currentFlashcardIndex')).toEqual(1);
    });

    it('should display header and greeting by default', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should display flashcard if the user has selected flashcards', () => {
        const mockFlashcards = [
            {
                "id": "a257e1aa-36c6-11e9-b210-d663bd873d93",
                "category": "Array Methods",
                "question": "I typed in 'Kim Myers'.join() to join these two words into one and received an error message. Why is that?",
                "answerChoices": [".join() is an array method and cannot be used on a string", ".join() is missing quotation marks within the parenthesis", "You need to store the string in a variable before using .join()"],
                "correctAnswer": ".join() is an array method and cannot be used on a string",
                "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
            }
        ]
        wrapper.find('.array-button').simulate('click');
        expect(chooseArrayCategoryMock).toBeCalled();
        wrapper.instance().state.flashcards = mockFlashcards;
        expect(wrapper).toMatchSnapshot();
    })



});