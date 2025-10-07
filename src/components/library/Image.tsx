interface IProps {
  alt: string;
  aspectRatio?: "square" | "video";
  rounded?: boolean;
  src: string;
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
};

function Image({ alt, aspectRatio, rounded = false, src }: IProps) {
  return (
    <img
      alt={alt}
      className={`inline-block ${aspectRatio ? aspectRatios[aspectRatio] : ""} ${rounded ? "rounded-lg" : ""}`}
      src={src}
    />
  );
}

export default Image;
