type PropsType = {
  alt: string;
  aspectRatio?: "square" | "video";
  src: string;
};

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
};

function Image({ alt, aspectRatio, src }: PropsType) {
  return (
    <img
      alt={alt}
      className={`inline-block ${aspectRatio ? aspectRatios[aspectRatio] : ""}`}
      src={src}
    />
  );
}

export default Image;
