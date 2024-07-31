// components/GenreList.tsx
"use client";
import useGenres from "../hooks/useGenres";
function GenreList() {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre, id) => (
        <li key={id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
