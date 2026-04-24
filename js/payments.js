const paymentsData = {
  "PAY-001": {
    date: "24 May 2024",
    customer: "Global Logistics",
    builty: "B-88291",
    type: "Advance",
    method: "Bank",
    amount: "45,000"
  },
  "PAY-002": {
    date: "24 May 2024",
    customer: "Swift Transporters",
    builty: "B-88285",
    type: "Full",
    method: "Cash",
    amount: "12,500"
  }
};

/* FULL ROW CLICKABLE */
document.addEventListener("click", function(e){
  const row = e.target.closest("tr");

  if (row) {
    const link = row.querySelector(".link");
    if (link) {
      const id = link.innerText.trim();
      selectPayment(id);
    }
  }
});

function selectPayment(id) {
  const p = paymentsData[id];
  if (!p) return;

  document.getElementById("paymentPanel").classList.remove("hidden");

  document.getElementById("payTitle").innerText = id + " Details";
  document.getElementById("payDate").innerText = p.date;
  document.getElementById("payCustomer").innerText = p.customer;
  document.getElementById("payBuilty").innerText = p.builty;
  document.getElementById("payType").innerText = p.type;
  document.getElementById("payMethod").innerText = p.method;
  document.getElementById("payAmount").innerText = p.amount;
}

function closePayment() {
  document.getElementById("paymentPanel").classList.add("hidden");
}