import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image height={60} width={60} src={logo} alt="Logo" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
