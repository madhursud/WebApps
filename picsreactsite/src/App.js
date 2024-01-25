import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImags from './api';
import ImageList  from './components/ImageList';

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const results = await searchImags(term);
        setImages(results);
    };

    return <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images} />
        </div>;
}

export default App;