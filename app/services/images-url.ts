const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target);

  // Check if the target string exists in the URL
  if (index === -1) {
    // Return the original URL if target string is not found
    return url;
  }

  // Calculate the insertion index
  const insertionIndex = index + target.length;

  // Construct the new URL with the crop dimensions
  return (
    url.slice(0, insertionIndex) + "crop/600/400/" + url.slice(insertionIndex)
  );
};

export default getCroppedImageUrl;
