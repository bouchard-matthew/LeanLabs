"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useProduct } from "../../Hooks/useProduct";
import { ImageSlider } from "../../Design";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "../../Design/Container";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import { ProductGrid } from "../../Design/ProductGrid";
import { useRandomProducts } from "../../Hooks/useRandomProducts";

const ProductPage = () => {
  const params = useParams();
  const product = useProduct(decodeURI(params.product));
  const randomProducts = useRandomProducts(params.category);
  const [flavor, setFlavor] = useState("");

  const [quantity, setQuantity] = useState(1);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ) => {
    setQuantity(newAlignment);
  };

  return (
    <>
      {product && (
        <Container flexDirection={"column"}>
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            container
            spacing={0}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item>
              <Box
                sx={{
                  maxHeight: "90vh",
                  width: "70vh",
                  textAlign: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: 1,
                  borderLeft: 1,
                  borderColor: "grey.500",
                  marginBottom: 5,
                }}
              >
                <Typography fontWeight="bold" fontSize={30} margin={5}>
                  {product.title}
                </Typography>

                <ImageSlider
                  height={400}
                  width={400}
                  images={[
                    "https://picsum.photos/400/400",
                    "https://picsum.photos/400/400",
                    "https://picsum.photos/400/400",
                  ]}
                />

                <Typography fontWeight="bold" fontSize={20} margin={5}>
                  Description:
                </Typography>

                <Typography margin={5}>{product.longDescription}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  maxHeight: "90vh",
                  width: "70vh",
                  textAlign: "left",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Typography margin={5} fontWeight="bold" fontSize={20}>
                  {product.price}
                </Typography>

                <FormControl sx={{ m: 5 }}>
                  <Typography fontWeight="bold" fontSize={20}>
                    Flavor:
                  </Typography>
                  <Select
                    value={flavor}
                    onClick={(event) => setFlavor(event.target.textContent)}
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                  >
                    {product &&
                      product.flavors.map((flavor) => {
                        return (
                          <MenuItem value={flavor} key={flavor}>
                            {flavor}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>

                <Typography fontWeight="bold" fontSize={20} marginLeft={5}>
                  Quantity:
                </Typography>

                <ToggleButtonGroup
                  color="primary"
                  value={quantity}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  sx={{ ml: 5, mb: 5 }}
                >
                  {product &&
                    product.quantity.map((quantity) => {
                      return (
                        <ToggleButton key={quantity} value={quantity}>
                          {quantity}
                        </ToggleButton>
                      );
                    })}
                </ToggleButtonGroup>

                <Button
                  variant="contained"
                  sx={{ m: 5, backgroundColor: "#006241" }}
                >
                  Add to cart
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 10,
              flexDirection: "column",
              fontWeight: "bold",
            }}
            container
            spacing={0}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            Customers Have Also Bought:
            <Grid sx={{ m: 5 }} item>
              <ProductGrid products={randomProducts} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
