export default function getFullResponseFromAPI(success) {
  const allStat = {
    status: 200,
    body: 'Success',
  };
  const info = 'The fake API is not working curently';
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(allStat);
    } else {
      reject(new Error(info));
    }
  });
}
