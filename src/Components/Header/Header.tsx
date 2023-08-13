"use client";

import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Flex, Container } from "../../Design";
import { Typography, AppBar, Button, Toolbar, Menu } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Container color="black">
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
        </Container>
      </Toolbar>

      <Toolbar sx={{ backgroundColor: "#006241" }}>
        <Container>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", "&:hover": { borderColor: "white" } }}>
            <Link href="/shop">Shop</Link>
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
