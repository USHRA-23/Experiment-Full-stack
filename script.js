let expenses = [];
let editIndex = null;
const expenseName = document.getElementById("expenseName");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const tableBody = document.querySelector("#expenseTable tbody");
const totalDisplay = document.getElementById("total");
function renderExpenses() {
  tableBody.innerHTML = ""; 
  expenses.forEach((exp, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${exp.name}</td>
        <td>${exp.amount}</td>
        <td>${exp.category}</td>
        <td>
          <button class="edit" onclick="editExpense(${index})">Edit</button>
          <button class="delete" onclick="deleteExpense(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
  calculateTotal();
}
function calculateTotal() {
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
  totalDisplay.textContent = total;
}
addBtn.addEventListener("click", () => {
  if (expenseName.value && amount.value) {
    expenses.push({
      name: expenseName.value,
      amount: amount.value,
      category: category.value
    });
    renderExpenses();
    expenseName.value = "";
    amount.value = "";
  } else {
    alert("Please enter valid name and amount!");
  }
});
updateBtn.addEventListener("click", () => {
  if (editIndex !== null) {
    expenses[editIndex] = {
      name: expenseName.value,
      amount: amount.value,
      category: category.value
    };
    renderExpenses();
    expenseName.value = "";
    amount.value = "";
    editIndex = null;
  } else {
    alert("Select an expense to update!");
  }
});
function editExpense(index) {
  editIndex = index;
  expenseName.value = expenses[index].name;
  amount.value = expenses[index].amount;
  category.value = expenses[index].category;
}
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}