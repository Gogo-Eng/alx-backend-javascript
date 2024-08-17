import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const lint = response[0];
      const crew = response[1];
      console.log(lint.body, crew.firstName, crew.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
