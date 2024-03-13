import React, { useState } from "react";

function ImageContainer({ src }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      className={`aspect-video rounded-lg flex flex-wrap object-cover ${
        loaded ? "fade-in-loaded" : "fade-in"
      }`}
      onLoad={handleImageLoad}
    />
  );
}

export default ImageContainer;
