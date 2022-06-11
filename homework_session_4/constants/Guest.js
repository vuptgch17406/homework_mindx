const Guests = [
  {
    id: 1,
    name: "Nghia",
  },
  {
    id: 2,
    name: "Toan",
  },
];

function addRole(arr, role) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].role = role;
  }
  return arr;
}

addRole(Guests, "guest");
module.exports = Guests;
