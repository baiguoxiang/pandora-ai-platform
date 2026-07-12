export const imageUrl = (path: string) => {
  const baseUrl = '/pandora-ai-platform/';
  return baseUrl + path.replace(/^\//, '');
};