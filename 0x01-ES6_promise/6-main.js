import handleProfileSignup from './6-final-user';

handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then((hh) => {
  console.log(hh);
});

/*
console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
// output Promise { <pending> }
*/
