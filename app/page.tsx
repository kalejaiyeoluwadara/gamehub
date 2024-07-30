import { Grid, GridItem, Show } from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
export default function Home() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
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
