import React, { useState } from 'react';

import { AddCategory, GifGrid } from './components';

function GifExpertApp() {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories((cat) => [newCategory, ...cat]);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {categories?.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </div>
    );
}

export default GifExpertApp;
