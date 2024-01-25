import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('http://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aNZaMFCHMq2QBkmvFBNcgqpVJERys0U7UgY9wSJ8BB8',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};