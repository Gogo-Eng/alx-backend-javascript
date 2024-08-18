import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const lint = response[0];
      const crew = response[1];
      console.log(lint.body, crew.firstName, crew.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
