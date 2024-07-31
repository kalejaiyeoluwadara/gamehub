import React from "react";
import { Game } from "@/app/hooks/useGames";
import { Card, CardBody, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { platform } from "os";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/images-url";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card borderRadius={"10px"} width={"300px"} overflow={"hidden"}>
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="h-[100px] w-full "
        alt=""
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
