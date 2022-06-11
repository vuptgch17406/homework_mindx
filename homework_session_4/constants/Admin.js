const Admins = [
  {
    id: 1,
    name: "Hoai",
  },
  {
    id: 2,
    name: "Kiem",
  },
];

function addRole(arr, role) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].role = role;
  }
  return arr;
}
addRole(Admins, "admin");
module.exports = Admins;
