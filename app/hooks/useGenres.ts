// hooks/useGenres.ts
"use client";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get<FetchGenresResponse>("/genres", {
          signal: controller.signal,
        });
        console.log(res.data);

        setGenres(res.data.results); // Ensure this matches your API response
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as Error).message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
