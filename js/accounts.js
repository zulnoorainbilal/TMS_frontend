const transactions = {
  "TXN-8821": {
    date: "2024-05-20",
    type: "Payment",
    source: "Client",
    ref: "INV-5502",
    amount: "+45,000",
    balance: "1,25,400"
  },
  "TXN-8822": {
    date: "2024-05-20",
    type: "Expense",
    source: "Trip Expense",
    ref: "TRIP-990",
    amount: "-12,000",
    balance: "1,13,400"
  }
};

/* FULL ROW CLICKABLE (better UX) */
document.addEventListener("click", function(e){
  const row = e.target.closest("tr");

  if (row) {
    const link = row.querySelector(".link");
    if (link) {
      const id = link.dataset.id;
      selectTxn(id);
    }
  }
});

function selectTxn(id){
  const t = transactions[id];
  if(!t) return;

  document.getElementById("txnPanel").classList.remove("hidden");

  document.getElementById("txnTitle").innerText = id + " Details";
  document.getElementById("txnDate").innerText = t.date;
  document.getElementById("txnType").innerText = t.type;
  document.getElementById("txnSource").innerText = t.source;
  document.getElementById("txnRef").innerText = t.ref;
  document.getElementById("txnAmount").innerText = t.amount;
  document.getElementById("txnBalance").innerText = t.balance;
}

function closeTxn(){
  document.getElementById("txnPanel").classList.add("hidden");
}