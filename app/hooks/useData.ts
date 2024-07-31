// hooks/useGenres.ts
"use client";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const fetchGames = async () => {
        setLoading(true);
        try {
          const res = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          console.log(res.data);

          setData(res.data.results); // Ensure this matches your API response
        } catch (err) {
          if (err instanceof CanceledError) return;
          setError((err as Error).message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchGames();
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
