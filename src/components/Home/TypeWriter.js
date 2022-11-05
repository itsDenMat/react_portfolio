import React from 'react';
import TypeWriter from 'typwriter-effect';

function TypeWriter() {
    return (
        <TypeWriter options={{
            strings: [
                'Former Psych Nurse',
                'Front End Developer',
                'Back End Developer',
                'Full Stack Developer',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }} />
    );
}

export default TypeWriter;