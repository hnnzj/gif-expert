import axios from 'axios';

const apiKey = 'T2s3XPmESjuh6b46wfLJQAlY3XocQoYk';
const url = 'https://api.giphy.com/v1/gifs/search?api_key=';

export const getGif = async (category) => {
    const response = await axios(url + apiKey + '&q=' + category + '&limit=8');

    const gifs = response.data.data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium,
    }));
    return gifs;
};
