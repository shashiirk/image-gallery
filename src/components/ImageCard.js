const ImageCard = ({ image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-full">
      <img
        src={image.webformatURL}
        alt="pixabay"
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="p-4 font-medium text-gray-600">
        <div className="mb-4">By {image.user}</div>
        <ul className=" flex justify-between">
          <li className="flex flex-col justify-center items-center">
            <small className="text-base">Views</small>
            <p className="text-lg font-semibold">{image.views}</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <small className="text-base">Likes</small>
            <p className="text-lg font-semibold">{image.likes}</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <small className="text-base">Downloads</small>
            <p className="text-lg font-semibold">{image.downloads}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
