"use client";

import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { Flex, Container } from "../../Design";
import Box from "@mui/material/Box";
import { Typography, AppBar, Button, Toolbar, Menu } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar style={{ position: "fixed" }}>
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          color="Black"
        >
          <Typography variant="h4">
            <Link href="/">
              <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                LeanLabs
              </Typography>
              <HomeIcon sx={{ display: { xs: "block", md: "none" } }} />
            </Link>
          </Typography>
          <Flex>
            <Input placeholder={"Search"} endAdornment={<SearchIcon />} />
          </Flex>
          <Flex>
            <Typography sx={{ display: { xs: "none", md: "block" } }}>
              Account
            </Typography>
            <PersonIcon />
          </Flex>
          <Flex>
            <Typography sx={{ display: { xs: "none", md: "block" } }}>
              Cart
            </Typography>
            <ShoppingCartIcon />
          </Flex>
        </Box>
      </Toolbar>

      <Toolbar sx={{ backgroundColor: "#006241" }}>
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          color="Black"
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": { borderColor: "white" },
            }}
          >
            <Link href="/shop">Shop</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
