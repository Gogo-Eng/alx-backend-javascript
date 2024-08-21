// eslint-disable-next-line
import signUpUser from "./4-user-promise";

signUpUser('Bob', 'Dylan').then((go) => {
  console.log(go);
});
