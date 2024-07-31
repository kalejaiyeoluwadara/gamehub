import React from "react";
import { Game } from "@/app/hooks/useGames";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { platform } from "os";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <img src={game.background_image} className="h-[100px] w-full " alt="" />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
