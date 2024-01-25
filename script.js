const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const unread = document.querySelector("#unread");
const read = document.querySelector("#read");

addBtn.addEventListener("click", () => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const moveBtn = document.createElement("button");
  const value = input.value;

  if (value === "") {
    alert("input tidak boleh kosong");
  } else {
    unread.appendChild(ul);
    ul.appendChild(li);
    span.textContent = value;
    moveBtn.textContent = "Sudah dibaca";
    moveBtn.style.backgroundColor = "yellow";
    li.appendChild(span);
    li.appendChild(moveBtn);
    input.value = "";
    input.focus();
  }

  moveBtn.addEventListener("click", () => {
    moveBtn.textContent = "Belum dibaca";
    moveBtn.style.backgroundColor = "green";
    read.appendChild(ul);

    moveBtn.addEventListener("click", () => {
      moveBtn.textContent = "Sudah dibaca";
      moveBtn.style.backgroundColor = "yellow";
      unread.appendChild(ul);
    });
  });
});
