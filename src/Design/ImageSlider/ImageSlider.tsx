import Image from "next/image";
import Carousel from "react-material-ui-carousel";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  return (
    <Carousel
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "black",
          borderRadius: 0,
        },
      }}
      sx={{ margin: "20px", width: "100%", objectFit: "contain", height: "100%" }}
    >
      {images.map((item, i) => (
        <Image width={200} height={200} key={i} src={item} alt={item} />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
