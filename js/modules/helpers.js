export const randomId = () => {
  let result = '';
  for (let i = 0; i < 3; i++) {
      result += Math.floor(Math.random() * 10);
  }
  return result;
};