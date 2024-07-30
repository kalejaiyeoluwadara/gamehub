import { Grid, GridItem, Show } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"blue"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"red"}>
        main
      </GridItem>
    </Grid>
  );
}
