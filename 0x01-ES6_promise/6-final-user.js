import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const arrray = [];

  try {
    const signup = await signUpUser(firstname, lastname);
    const objResolved = {
      status: 'fufilled',
      value: signup,
    };
    arrray.push(objResolved);
  } catch (error) {
    arrray.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(filename);
    const objectResolved = {
      status: 'fufilled',
      value: upload,
    };
    arrray.push(objectResolved);
  } catch (error) {
    arrray.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  return arrray;
}
