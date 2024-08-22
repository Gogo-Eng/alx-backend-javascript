function gogo() {
  setTimeout(() => {
    console.log('my name');
  }, 0);
}
function time() {
  console.log('time');
}
gogo();
time();
async function print() {
  console.log('a');
  console.log('b');
  console.log('c');

  await gogo();
  await time();

  console.log('d');
  console.log('e');
}

print();

console.log('ajfjjksas');
console.log('appppppppp');
