// components/GenreList.tsx
"use client";
import React from "react";
import useGenres from "../hooks/useGenres";
function GenreList() {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre, id) => (
        <li key={id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
