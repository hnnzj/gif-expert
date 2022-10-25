import React, { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGif = (category) => {
    const [gif, setGif] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await getGif(category);
        setGif(images);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        gif,
        isLoading,
    };
};
