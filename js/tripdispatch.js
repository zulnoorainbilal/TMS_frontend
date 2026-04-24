const trips = {
  "TRP-001": {
    driver: "Ali Khan",
    vehicle: "ABC-123",
    status: "In Transit",
    route: "Karachi → Lahore",
    freight: 3500,
    expenses: 500
  },
  "TRP-002": {
    driver: "Ahmed Raza",
    vehicle: "XYZ-456",
    status: "Pending",
    route: "Islamabad → Multan",
    freight: 2800,
    expenses: 300
  }
};

function selectTrip(id) {
  const trip = trips[id];
  if(!trip) return;

  document.getElementById("tripPanel").classList.remove("hidden");

  document.getElementById("tripTitle").innerText = id + " Details";
  document.getElementById("status").innerText = trip.status;
  document.getElementById("driver").innerText = trip.driver;
  document.getElementById("vehicle").innerText = trip.vehicle;
  document.getElementById("route").innerText = trip.route;
  document.getElementById("freight").innerText = trip.freight;
  document.getElementById("expenses").innerText = trip.expenses;
  document.getElementById("profit").innerText = trip.freight - trip.expenses;
}

function closePanel() {
  document.getElementById("tripPanel").classList.add("hidden");
}