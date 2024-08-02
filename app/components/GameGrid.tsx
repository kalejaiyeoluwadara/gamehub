"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../page";
interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
      }}
      spacing={6}
      marginY={4}
    >
      {loading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            {" "}
            <GameCardSkeleton key={skeleton} />{" "}
          </GameCardContainer>
        ))}
      {data.map((game, id) => (
        <GameCardContainer key={id}>
          <GameCard key={id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
