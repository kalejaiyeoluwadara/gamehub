import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(res.data.results); // Ensure this matches your API response
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as Error).message || "An error occurred");
      }
    };

    fetchGames();
    return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
