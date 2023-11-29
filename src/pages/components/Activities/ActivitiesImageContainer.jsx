import React, { useState } from "react";

function ActivitiesImageContainer({ src }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      className={`aspect-video sm:aspect-square  rounded-lg md:w-full lg:w-4/5 lg:aspect-video object-cover ${
        loaded ? "fade-in-loaded" : "fade-in"
      }`}
      onLoad={handleImageLoad}
    />
  );
}

export default ActivitiesImageContainer;
