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
    date: "2024-05-18",
    type: "Expense",
    source: "Trip Expense",
    ref: "TRIP-990",
    amount: "-12,000",
    balance: "1,13,400"
  }
};

/* ROW CLICK */
document.addEventListener("click", function(e){
  const row = e.target.closest("tr");

  if (row) {
    const link = row.querySelector(".link");
    if (link) {
      selectTxn(link.dataset.id);
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

/* SEARCH */
function searchTxn(){
  const input = document.getElementById("searchInput").value.toUpperCase();
  const rows = document.querySelectorAll("#txnBody tr");

  rows.forEach(row => {
    const id = row.querySelector(".link").innerText;
    row.style.display = id.includes(input) ? "" : "none";
  });
}

/* DATE FILTER */
function filterByDate(type){
  const rows = document.querySelectorAll("#txnBody tr");
  const today = new Date();

  rows.forEach(row => {
    const rowDate = new Date(row.dataset.date);
    let show = true;

    if(type === "today"){
      show = rowDate.toDateString() === today.toDateString();
    }

    if(type === "week"){
      const diff = (today - rowDate) / (1000 * 60 * 60 * 24);
      show = diff <= 7;
    }

    if(type === "month"){
      show = rowDate.getMonth() === today.getMonth();
    }

    if(type === "all"){
      show = true;
    }

    row.style.display = show ? "" : "none";
  });
}

/* EXPORT CSV */
function exportCSV(){
  let csv = [];
  const rows = document.querySelectorAll("table tr");

  rows.forEach(row => {
    let cols = row.querySelectorAll("td, th");
    let data = [];

    cols.forEach(col => data.push(col.innerText));
    csv.push(data.join(","));
  });

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
}