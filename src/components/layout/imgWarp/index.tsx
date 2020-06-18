import React, { Fragment, useState, memo } from "react";
import defaultImg from "../../../assets/default_album.jpg";

interface Iprops {
  src: string;
  alt: string;
}

function Img(props: Iprops) {
  const [imgSrc, handleImageErrored] = useState<string>(defaultImg);
  const handleOnLoad = () => {
    const image = new Image();
    image.src = props.src;
    image.onload = () => handleImageErrored(props.src);
  };
  return (
    <Fragment>
      <img
        src={imgSrc}
        onError={() => handleImageErrored(defaultImg)}
        onLoad={() => handleOnLoad()}
        alt={props.alt}
      />
    </Fragment>
  );
}

export default memo(Img);
