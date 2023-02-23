// const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// console.log(stuInfo.name);

// What is the full form of JSON ?

// javascript object notation

// const data = {
//   id: 1,
//   name: "Mozammel",
//   address: "Faridpur Sadar Faridpur",
// };
// const result = JSON.stringify(data);
// console.log(result);

const data = {
  "id": 1,
  "name": "Mozammel",
  "address": "Faridpur Sadar Faridpur",
};
const result = JSON.stringify(data)
console.log(result);
console.log(JSON.parse(result));