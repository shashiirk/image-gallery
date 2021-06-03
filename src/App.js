import { useEffect, useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const request = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}`
      );
      const data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    };

    try {
      request();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  const searchTermHandler = (value) => {
    setSearchTerm(value);
  };

  let mainContent;

  if (isLoading) {
    mainContent = <p>Searching...</p>;
  } else {
    if (images.length > 0) {
      mainContent = (
        <div className="my-16 grid gap-4 justify-items-stretch sm:grid-cols-2 md:grid-cols-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      );
    } else {
      mainContent = <p>Not found</p>;
    }
  }

  return (
    <div className="app bg-gray-50">
      <div className="p-4 m-auto flex-1 max-w-5xl w-full">
        <Header />
        <SearchBar onInputSubmit={searchTermHandler} />
        {mainContent}
      </div>
      <Footer />
    </div>
  );
}

export default App;
