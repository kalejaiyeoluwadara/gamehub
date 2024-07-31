"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        spacing={10}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              {" "}
              <GameCardSkeleton key={skeleton} />{" "}
            </GameCardContainer>
          ))}
        {games.map((game, id) => (
          <GameCardContainer>
            <GameCard key={id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
