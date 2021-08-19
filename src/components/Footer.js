const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center px-4 py-6 flex justify-center items-center">
      <p>
        Powered by{' '}
        <a
          href="https://pixabay.com"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 hover-hover:hover:underline  hover-hover:focus:border-dotted hover-none:active:underline"
        >
          Pixabay
        </a>
      </p>
      <div className="bg-white w-1 h-1 rounded-full mx-2"></div>
      <p>
        Built by{' '}
        <a
          href="https://shashiirk.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 hover-hover:hover:underline  hover-hover:focus:border-dotted hover-none:active:underline"
        >
          Shashikanth
        </a>
      </p>
    </div>
  );
};

export default Footer;
