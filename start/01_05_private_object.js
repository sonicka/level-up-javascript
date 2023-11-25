const username = Symbol("username");
const password = Symbol("password")

// using symbols makes properties inaccessible by dot notation
// private variables

const user = {
  [username]: "sona",
  [password]: "1234",
  age: 29,
}

console.log(user.username);
console.log(user.password);
console.log(user.age);

/// 8 min