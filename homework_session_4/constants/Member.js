const Members = [
  {
    id: 1,
    name: "Hai Anh",
  },
  {
    id: 2,
    name: "Hanh",
  },
];
function addRole(arr, role) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].role = role;
  }
  return arr;
}
addRole(Members, "member");
module.exports = Members;
