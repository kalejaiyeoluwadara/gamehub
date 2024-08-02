import noImage from "@/public/assets/placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return noImage.src;
  }
  const target = "media/";
  const index = url.indexOf(target);

  // Check if the target string exists in the URL

  // Calculate the insertion index
  const insertionIndex = index + target.length;

  // Construct the new URL with the crop dimensions
  return (
    url.slice(0, insertionIndex) + "crop/600/400/" + url.slice(insertionIndex)
  );
};

export default getCroppedImageUrl;
