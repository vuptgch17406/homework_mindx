const Admin = require("./Admin");
const Guest = require("./Guest");
const Member = require("./Member");

const listUser = [...Admin, ...Member, ...Guest];
module.exports = listUser;
