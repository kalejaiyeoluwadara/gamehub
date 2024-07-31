// components/GenreList.tsx
"use client";
import { HStack, ListItem, List, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
function GenreList() {
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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
