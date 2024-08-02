import React from "react";
import bullsEye from "@/public/assets/bulls-eye.webp";
import meh from "@/public/assets/meh.webp";
import thumbsup from "@/public/assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/next-js";
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) {
    return null;
  }
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "thumbsup", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "35px" },
  };
  return <Image marginTop={1} {...emojiMap[rating]} />;
}

export default Emoji;
