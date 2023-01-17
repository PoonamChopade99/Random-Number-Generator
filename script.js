// way 1: (length but easy to read)
function randomNumber() {
  let x = Math.random() * 1000 + 1;
  let integerNumber = Math.floor(x);
  document.getElementById("result").innerText = integerNumber;
}

// way 2: (short but complicated to read)
// function randomNumber() {
//   document.getElementById("result").innerText = Math.floor(
//     Math.random() * 1000 + 1
//   );
// }
