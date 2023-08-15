import Image, { StaticImageData } from "next/image";
import Carousel from "react-material-ui-carousel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface Props {
  images: StaticImageData[] | string[];
  width?: number;
  height?: number;
}

const ImageSlider = ({ images, width = 200, height = 300 }: Props) => {
  return (
    <Carousel
      IndicatorIcon={<HorizontalRuleIcon />}
      cycleNavigation={true}
      navButtonsAlwaysInvisible={true}
      autoPlay={false}
      sx={{
        textAlign: "center",
      }}
    >
      {images.map((item, i) => (
        <Image
          style={{
            objectFit: "contain",
            width: "100%",
          }}
          width={width}
          height={height}
          key={i}
          src={item}
          alt={"Photo"}
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
