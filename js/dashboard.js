const builtiy = {
  "BL-8802": {
    customer: "Global Textiles",
    route: "Surat → Delhi",
    freight: "45,000",
    status: "Partial"
  },
  "BL-8801": {
    customer: "Reliance Retail",
    route: "Mumbai → Pune",
    freight: "12,500",
    status: "Paid"
  },
  "BL-8799": {
    customer: "Amazon Logistics",
    route: "Bangalore → Chennai",
    freight: "32,000",
    status: "Unpaid"
  }
};

function openDetail(id){
  const b = builtiy[id];
  if(!b) return;

  const panel = document.getElementById("detailPanel");

  panel.classList.remove("hidden");

  document.getElementById("detailTitle").innerText = id;
  document.getElementById("dCustomer").innerText = b.customer;
  document.getElementById("dRoute").innerText = b.route;
  document.getElementById("dFreight").innerText = b.freight;
  document.getElementById("dStatus").innerText = b.status;
}

function closeDetail(){
  document.getElementById("detailPanel").classList.add("hidden");
}