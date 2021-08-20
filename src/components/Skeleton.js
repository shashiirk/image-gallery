const Skeleton = () => {
  return (
    <>
      {Array(12)
        .fill(1)
        .map((value, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg h-skeleton w-full animate-pulse"
          ></div>
        ))}
    </>
  );
};

export default Skeleton;
