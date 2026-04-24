const customers = {
  "CUS-1024": {
    name: "Al-Farooq Logistics",
    phone: "+92 300 1234567",
    category: "Regular",
    builtiy: 142,
    balance: "45,000",
    status: "Active"
  },
  "CUS-1025": {
    name: "Zubair Ahmed",
    phone: "+92 321 9876543",
    category: "Walk-in",
    builtiy: 3,
    balance: "1,200",
    status: "Active"
  }
};

/* CLICK HANDLER */
document.addEventListener("click", function(e){
  const row = e.target.closest("tr");

  if (row) {
    const link = row.querySelector(".link");
    if (link) {
      const id = link.dataset.id;
      selectCustomer(id);
    }
  }
});

function selectCustomer(id){
  const c = customers[id];
  if(!c) return;

  document.getElementById("customerPanel").classList.remove("hidden");

  document.getElementById("cTitle").innerText = id + " Details";
  document.getElementById("cName").innerText = c.name;
  document.getElementById("cPhone").innerText = c.phone;
  document.getElementById("cCategory").innerText = c.category;
  document.getElementById("cBuilty").innerText = c.builtiy;
  document.getElementById("cBalance").innerText = c.balance;
  document.getElementById("cStatus").innerText = c.status;
}

function closeCustomer(){
  document.getElementById("customerPanel").classList.add("hidden");
}