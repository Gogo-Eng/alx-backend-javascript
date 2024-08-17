export default function handleResponseFromAPI(promise) {
  const allStat = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => allStat)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
