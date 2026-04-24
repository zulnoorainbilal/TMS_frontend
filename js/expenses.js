const expensesData = {
  "EXP-001": {
    date: "24 Oct 2023",
    category: "Vehicle",
    ref: "LP-9920",
    amount: "45,200",
    payment: "Credit",
    status: "Pending"
  },
  "EXP-002": {
    date: "24 Oct 2023",
    category: "Office",
    ref: "BILL-221",
    amount: "1,250",
    payment: "Cash",
    status: "Paid"
  }
};

function selectExpense(id) {
  const e = expensesData[id];
  if (!e) return;

  document.getElementById("expensePanel").classList.remove("hidden");

  document.getElementById("expTitle").innerText = id + " Details";
  document.getElementById("expDate").innerText = e.date;
  document.getElementById("expCategory").innerText = e.category;
  document.getElementById("expRef").innerText = e.ref;
  document.getElementById("expAmount").innerText = e.amount;
  document.getElementById("expPayment").innerText = e.payment;
  document.getElementById("expStatus").innerText = e.status;
}

function closeExpense() {
  document.getElementById("expensePanel").classList.add("hidden");
}