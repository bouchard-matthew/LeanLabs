import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const Flex = (props: Props) => {
  return <Box {...props} display="flex" mx={3} textAlign="center" alignItems="center" />;
};

export default Flex;
