// components/GenreList.tsx
"use client";
import {
  HStack,
  ListItem,
  List,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data, loading, error } = useGenres();
  if (error) return null;
  if (loading) {
    return <Spinner />;
  }
  return (
    <List>
      {data.map((genre, id) => (
        <ListItem key={id} paddingY={"5px"}>
          <HStack>
            <img
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "3px",
              }}
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant={"link"}
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
