export const generateRandomToken = () => {
  return Math.random().toString(16).substr(2);
}