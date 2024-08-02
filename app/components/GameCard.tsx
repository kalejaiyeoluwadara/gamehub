import React from "react";
import { Game } from "@/app/hooks/useGames";
import { Card, CardBody, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { platform } from "os";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/images-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="h-[100px] w-full "
        alt=""
      />
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
