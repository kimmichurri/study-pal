import React from 'react';


export default function Feedback (props) {
    if (props.correctAnswer === true) {
        return (
            <p>That's right!</p>
        )
    } else if (props.correctAnswer === false) {
        return (
            <p>Nice try, but wrong!</p>
        )
    } else {
        return (
            <p></p>
        )
    }
}