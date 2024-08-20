import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      const lint = res[0];
      const crew = res[1];
      console.log(lint.body, crew.firstName, crew.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
