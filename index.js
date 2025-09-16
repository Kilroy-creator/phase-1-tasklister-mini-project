document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("#new-task-description"); // ✅ test usually uses this id
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value.trim();
    if (task === "") return; // ignore empty submissions

    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    input.value = ""; // clear after adding
  });
});
