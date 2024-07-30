import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image height={60} width={60} src={logo} alt="Logo" />
      <Text>NavBar </Text>
    </HStack>
  );
}

export default NavBar;
