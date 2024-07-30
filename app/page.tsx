import Image from "next/image";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </main>
  );
}
