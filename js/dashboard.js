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
  }
};

document.addEventListener("click", function(e){
  if(e.target.classList.contains("link")){
    const id = e.target.dataset.id;
    openDetail(id);
  }
});

function openDetail(id){
  const b = builtiy[id];

  document.getElementById("detailPanel").classList.remove("hidden");
  document.querySelector(".dashboard-layout").classList.add("active");

  document.getElementById("detailTitle").innerText = id;
  document.getElementById("dCustomer").innerText = b.customer;
  document.getElementById("dRoute").innerText = b.route;
  document.getElementById("dFreight").innerText = b.freight;
  document.getElementById("dStatus").innerText = b.status;
}

function closeDetail(){
  document.getElementById("detailPanel").classList.add("hidden");
  document.querySelector(".dashboard-layout").classList.remove("active");
}