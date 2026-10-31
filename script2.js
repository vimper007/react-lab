const body = document.body;
const root = document.createElement("div");
root.id = "root";
body.appendChild(root);

const div = document.createElement("div");
div.textContent = "Hello World";
root.appendChild(div)