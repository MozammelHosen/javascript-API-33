function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDatas(data));
}

function displayDatas(displayDataShow) {
  const sectionContainer = document.getElementById("section-container");
  for (const displayData of displayDataShow) {
    // console.log(displayData);
    const div = document.createElement("div");
    div.classList.add("todo-container")
    div.innerHTML = `
        <h2>User ID : ${displayData.id}</h2>
        <h3>Title : ${displayData.title}</h3>
        <h4>Completed : ${displayData.completed}</h4>
        `;
    sectionContainer.appendChild(div);
  }
}

loadData();
