"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useProduct } from "../../Hooks/useProduct";
import { ImageSlider } from "../../Design";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "../../Design/Container"
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';



const ProductPage = () => {

    const params = useParams();
    const product = useProduct(decodeURI(params.product));

    const [alignment, setAlignment] = useState('1');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    console.log(product);
    
    return (
        <Container>
            <Grid sx={{ display:'flex', justifyContent:'center'}} container spacing={0} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item>
                    <Box sx={{ maxHeight: '70vh', width:'70vh', textAlign: 'left', flexDirection: 'column', overflow: 'auto', justifyContent:'center', border: 1, borderColor: 'grey.500', borderRadius: 1}}>
                        <Typography fontWeight='bold' fontSize={30} margin={5}>
                            {product.title}
                        </Typography>

                        <ImageSlider height={400}  width={400} images={["https://picsum.photos/400/400", "https://picsum.photos/400/400", "https://picsum.photos/400/400"]} />

                        <Typography fontWeight='bold' fontSize={20} margin={5}>
                            Description:
                        </Typography>

                        <Typography margin={5}>
                            {product.longDescription}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ maxHeight: '70vh', width:'70vh', textAlign: 'left', flexDirection: 'column', display:'flex'}}>
                        <Typography margin={5} fontWeight='bold' fontSize={20}>
                            {product.price}
                        </Typography>

                        <FormControl fullWidth sx={{m:5}}>
                            <Typography fontWeight='bold' fontSize={20}>
                                Flavor:
                            </Typography>
                            <Select defaultValue={10}>
                            <MenuItem >10</MenuItem>
                            <MenuItem >20</MenuItem>
                            <MenuItem >30</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography fontWeight='bold' fontSize={20} marginLeft={5} marginBottom={2}>
                            Quantity:
                        </Typography>

                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            sx={{ml:5}}
                        >
                            <ToggleButton value="1">1</ToggleButton>
                            <ToggleButton value="2">2</ToggleButton>
                            <ToggleButton value="3">3</ToggleButton>
                        </ToggleButtonGroup>

                        <Button variant="contained" sx={{m:5}}>Add to cart</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductPage;