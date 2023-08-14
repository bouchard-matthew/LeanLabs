import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";


interface Props {
  images: string[];
  width?: number;
  height?: number;
}

const ImageSlider = ({ images, width=200, height=200 }: Props) => {
  return (
    <Carousel
      IndicatorIcon={<HorizontalRuleIcon />}
      cycleNavigation={true}
      navButtonsAlwaysInvisible = {true}
      autoPlay={false}
      sx={{ textAlign: "center", mt: "20px", width: "100%", objectFit: "contain", height: "100%" }}
    >
      {images.map((item, i) => (
        <Image width={width} height={height} key={i} src={item} alt={item} />
      ))}
    </Carousel>
  );
};

export default ImageSlider;