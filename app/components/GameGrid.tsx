"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchGamesResponse {
  count: number;
  results: Game[]; // Correcting `result` to `results` based on typical API responses
}

interface Game {
  id: number;
  name: string;
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games");
        setGames(res.data.results); // Ensure this matches your API response
      } catch (err) {
        setError((err as Error).message || "An error occurred");
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGrid;
