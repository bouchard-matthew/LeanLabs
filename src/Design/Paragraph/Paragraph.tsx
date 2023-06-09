import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {}

const Paragraph = (props: Props) => {
  return <Typography {...props} />;
};

export default Paragraph;
