import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputTrim = input.trim();
        if (inputTrim.length <= 1) return;

        onNewCategory(inputTrim);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Search GIF'
                value={input}
                onChange={handleChange}
            />
        </form>
    );
};
