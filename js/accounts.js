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

// CLICK HANDLER
document.addEventListener("click", function(e){
  if(e.target.classList.contains("link")){
    const id = e.target.dataset.id;
    selectTxn(id);
  }
});

function selectTxn(id){
  const t = transactions[id];

  document.getElementById("txnPanel").classList.remove("hidden");
  document.querySelector(".accounts-layout").classList.add("active");

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
  document.querySelector(".accounts-layout").classList.remove("active");
}