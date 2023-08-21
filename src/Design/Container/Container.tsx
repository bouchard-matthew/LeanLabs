import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const Container = (props: Props) => {
  return (
    <Box
      {...props}
      marginTop="150px"
      display="flex"
      width="100%"
      justifyContent="center"
      textAlign="center"
      alignItems="center"
    />
  );
};

export default Container;
