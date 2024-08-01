import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  //   const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyItems={"center"} alignItems={"center"}>
      <Switch />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
