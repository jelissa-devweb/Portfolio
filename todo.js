function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Clic = marquer comme terminée (toggle)
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // évite de déclencher le clic du li
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // on vide le champ
}
