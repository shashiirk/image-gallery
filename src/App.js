import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import img from './assets/empty.svg';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const perPage = 24;

  useEffect(() => {
    const request = async () => {
      setIsLoading(true);
      setHasMore(true);
      setPage(1);
      const response = await fetch(
        `/.netlify/functions/getImages?q=${searchTerm}&per_page=${perPage}&page=${1}`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        setIsLoading(false);
        return;
      }

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

  const fetchImages = () => {
    return;
    if (images.length + perPage > 500) {
      setHasMore(false);
      return;
    }

    fetch(
      `/.netlify/functions/getImages?q=${searchTerm}&per_page=${perPage}&page=${
        page + 1
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              statusText: response.statusText,
            })
          );
        }
        return response.json();
      })
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
      })
      .catch((error) => {
        console.log(JSON.parse(error.message));
      })
      .finally(() => setPage((prevPage) => prevPage + 1));
  };

  const searchTermHandler = (value) => {
    setSearchTerm(value);
  };

  let mainContent;

  if (isLoading) {
    mainContent = (
      <div className="my-16">
        <p className="text-center text-gray-800 font-medium">Searching...</p>
      </div>
    );
  } else {
    if (images.length > 0) {
      mainContent = (
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>You have reached the end!</h4>}
          className="my-16 grid gap-4 justify-items-stretch sm:grid-cols-2 md:grid-cols-3"
        >
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      );
    } else {
      mainContent = (
        <div className="my-16 flex flex-col items-center">
          <p className="text-center text-gray-800 font-medium mb-4">
            Oops! No results were found
          </p>
          <img className="block" src={img} alt="a man looking at void" />
        </div>
      );
    }
  }

  return (
    <div className="app bg-gray-50">
      <Header />
      <div className="p-4 m-auto flex-1 max-w-5xl w-full">
        <SearchBar onInputSubmit={searchTermHandler} />
        {mainContent}
      </div>
      <Footer />
    </div>
  );
}

export default App;
