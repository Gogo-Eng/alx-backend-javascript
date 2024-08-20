export default function signUpUser(firstName, lastName) {
  const feedback = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(feedback);
  });
}
