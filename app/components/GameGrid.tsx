"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
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
        {games.map((game, id) => (
          <GameCard key={id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
