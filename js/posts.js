function loadData() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(dData) {
  //   console.log(dData);
  const container = document.getElementById("makeSection");
  for (const data of dData) {
    console.log(data);
    const makeDiv = document.createElement("div");
    makeDiv.classList.add("posts")
    makeDiv.innerHTML = `
    <h3>ID: ${data.id}</h3>
    <h2>Your Name : ${data.name}</h2>
    <h4>Your Email : ${data.email}</h4>
    <h5>postId: ${data.postId}</h5>
    `;
    container.appendChild(makeDiv);
  }
}

loadData();
