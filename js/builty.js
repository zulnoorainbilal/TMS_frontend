const builtiyData = {
  "LR-88291": {
    date: "24 May 2024",
    customer: "Global Exports",
    route: "Mumbai → Delhi",
    freight: "45000",
    advance: "15000",
    remaining: "30000",
    status: "Not Assigned"
  },
  "LR-88292": {
    date: "24 May 2024",
    customer: "Adani Logistics",
    route: "Ahmedabad → Chennai",
    freight: "62000",
    advance: "62000",
    remaining: "0",
    status: "In Transit"
  }
};

// CLICK HANDLER (IMPORTANT FIX)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    const id = e.target.dataset.id;
    selectBuilty(id);
  }
});

function selectBuilty(id) {
  const b = builtiyData[id];

  document.getElementById("builtyPanel").classList.remove("hidden");
  document.querySelector(".builty-layout").classList.add("active");

  document.getElementById("builtyTitle").innerText = id + " Details";
  document.getElementById("bDate").innerText = b.date;
  document.getElementById("bCustomer").innerText = b.customer;
  document.getElementById("bRoute").innerText = b.route;
  document.getElementById("bFreight").innerText = b.freight;
  document.getElementById("bAdvance").innerText = b.advance;
  document.getElementById("bRemaining").innerText = b.remaining;
  document.getElementById("bStatus").innerText = b.status;
}

function closeBuilty() {
  document.getElementById("builtyPanel").classList.add("hidden");
  document.querySelector(".builty-layout").classList.remove("active");
}