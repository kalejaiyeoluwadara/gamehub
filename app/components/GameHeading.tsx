import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../page";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games `;
  return (
    <Heading fontSize={"5xl"} marginY={5} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
