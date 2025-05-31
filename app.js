function addEmployee() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  if (!name || !role) return alert("Fill all fields");
  const entry = document.createElement("li");
  entry.innerText = `${name} - ${role}`;
  document.getElementById("employeeList").appendChild(entry);
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
}
