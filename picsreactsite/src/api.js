import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aNZaMFCHMq2QBkmvFBNcgqpVJERys0U7UgY9wSJ8BB8',
        },
        params: {
            query: term,
        }
    });

    console.log(response);

    return response.data.results;
}

export default searchImages;