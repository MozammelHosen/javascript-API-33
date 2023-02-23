// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData2(data));
}
function loadData2(data) {
  console.log(data);
  const list = document.getElementById("list-container");
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.style.color = "red";
    li.innerText = `This is User : ${user.title}
    This is User Id : ${user.id}`
   list.appendChild(li)

  }
}
