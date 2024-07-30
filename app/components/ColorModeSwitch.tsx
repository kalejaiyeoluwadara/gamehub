import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function ColorModeSwitch() {
  //   const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {/* <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text> */}
      <Switch />
    </HStack>
  );
}

export default ColorModeSwitch;
