import { Grid, GridItem, Show } from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import GameGrid from "./components/GameGrid";
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
        <GridItem area={"aside"}>aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
