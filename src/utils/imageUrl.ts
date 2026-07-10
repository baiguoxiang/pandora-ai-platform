export const imageUrl = (path: string) => {
  if (import.meta.env.BASE_URL) {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
  }
  return path;
};