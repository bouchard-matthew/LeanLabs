"use client";

import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Flex, Container } from "../../Design";
import Box from '@mui/material/Box';
import { Typography, AppBar, Button, Toolbar, Menu } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar style={{position: 'fixed'}}>
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Box display="flex" width="100%" justifyContent="center" textAlign="center" alignItems="center" color="Black" >
          <Typography variant="h4">
            <Link href="/">LeanLabs</Link>
          </Typography>
          <Flex>
            <Input placeholder={"Search"} endAdornment={<SearchIcon />} />
          </Flex>
          <Flex>
            Account <PersonIcon />
          </Flex>
          <Flex>
            Cart <ShoppingCartIcon />
          </Flex>
        </Box>
      </Toolbar>

      <Toolbar sx={{ backgroundColor: "#006241" }}>
        <Box display="flex" width="100%" justifyContent="center" textAlign="center" alignItems="center" color='Black' >
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", "&:hover": { borderColor: "white" } }}>
            <Link href="/shop">Shop</Link>
          </Button>
        </Box >
      </Toolbar>
    </AppBar>
  );
};

export default Header;
