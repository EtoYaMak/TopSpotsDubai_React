import React, { useState } from "react";

function HotelImageContainer({ src }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      className={`aspect-video rounded-lg md:w-full lg:w-4/5  object-cover ${
        loaded ? "fade-in-loaded" : "fade-in"
      }`}
      onLoad={handleImageLoad}
    />
  );
}

export default HotelImageContainer;
