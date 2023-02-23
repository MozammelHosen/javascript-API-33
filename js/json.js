const data = {
    id:1,
    name:"Mozammel",
    address:{
        address1:"Faridpur Sadar",
        address2:"Faridpur Madaripur"
    },
    Job:"International Job"
}
// console.log(data);
// Object convert to json string
const startgifity = JSON.stringify(data);
console.log(startgifity);

//  json string convert to json object

const obj = JSON.parse(startgifity)
console.log(obj);