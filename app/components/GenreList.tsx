// components/GenreList.tsx
"use client";
import {
  HStack,
  ListItem,
  List,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, loading, error } = useGenres();
  if (error) return null;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre, id) => (
          <ListItem key={id} paddingY={"5px"}>
            <HStack>
              <img
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "3px",
                  objectFit: "cover",
                }}
                src={getCroppedImageUrl(genre.image_background)}
                alt=""
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
