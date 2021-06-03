const Header = () => {
  return (
    <h1 className="text-center text-gray-800 mt-6 mb-14 text-6xl font-bold font-sans">
      Images by{' '}
      <a
        href="https://pixabay.com"
        target="_blank"
        rel="noreferrer"
        className="text-green-400 hover-hover:hover:text-green-600 hover-hover:transition hover-hover:duration-500"
      >
        Pixabay
      </a>
    </h1>
  );
};

export default Header;
