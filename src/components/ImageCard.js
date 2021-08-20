const bgColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500'];

const ImageCard = ({ image }) => {
  return (
    <div className="bg-white rounded-lg shadow w-full">
      <a
        href={image.pageURL}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-t-lg"
      >
        <img
          src={image.webformatURL}
          alt="pixabay"
          className="block overflow-hidden w-full h-60 object-cover rounded-t-lg hover-hover:transition hover-hover:duration-500 hover-hover:ease-in-out hover-hover:transform hover-hover:hover:scale-110 "
        />
      </a>
      <div className="p-4 text-gray-600">
        <div className="mb-4 text-sm">
          BY <span className="font-medium">{image.user}</span>
        </div>
        <ul className="flex justify-between mb-4">
          <li className="flex flex-col justify-center items-center">
            <small className="text-sm">Views</small>
            <p className="font-semibold">{image.views}</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <small className="text-sm">Likes</small>
            <p className="font-semibold">{image.likes}</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <small className="text-sm">Downloads</small>
            <p className="font-semibold">{image.downloads}</p>
          </li>
        </ul>
        <ul className="flex text-xs">
          {image.tags.split(',').map((value, index) => (
            <li
              className={`${
                bgColors[index]
              } text-white px-2 py-1 rounded-full ${index === 2 ? '' : 'mr-1'}`}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
