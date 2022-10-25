import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const { gif, isLoading } = useFetchGif(category);

    return (
        <>
            {isLoading ? (
                <h2>Cargando...</h2>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3>{category}</h3>
                    <div className='card-grid'>
                        {gif?.map((ele) => (
                            <GifItem key={ele.id} {...ele} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
