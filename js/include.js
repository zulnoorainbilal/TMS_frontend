function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // 👇 IMPORTANT: run active logic AFTER sidebar loads
      if (id === "sidebar") {
        setActiveSidebar();
      }
    });
}

function loadLayout() {
  loadComponent("sidebar", "../partials/sidebar.html");
  loadComponent("navbar", "../partials/navbar.html");
  loadComponent("footer", "../partials/footer.html");
}


// ✅ ACTIVE SIDEBAR LOGIC
function setActiveSidebar() {
  const currentPath = window.location.pathname.split("/").pop(); // get file name only

  document.querySelectorAll(".side-bar-item a").forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
      link.parentElement.classList.add("active");
    }
  });
}


// Filter JS

/* ON PAGE LOAD */
document.addEventListener("DOMContentLoaded", function () {
  handleFilterChange(); // only UI control, no filtering
});

/* HANDLE SELECT CHANGE */
function handleFilterChange() {
  const value = document.getElementById("filterSelect").value;
  const dateBox = document.getElementById("dateRangeBox");

  if (value === "range") {
    dateBox.classList.remove("hidden");
  } else {
    dateBox.classList.add("hidden");
  }
}

/* APPLY FILTER (ONLY WHEN USER CLICKS BUTTON IF YOU WANT) */
function applyFilter(type) {
  const rows = document.querySelectorAll("tbody tr");
  const today = new Date();

  rows.forEach(row => {
    const rowDate = new Date(row.dataset.date);
    let show = true;

    if (type === "today") {
      show = rowDate.toDateString() === today.toDateString();
    }

    else if (type === "yesterday") {
      const y = new Date();
      y.setDate(today.getDate() - 1);
      show = rowDate.toDateString() === y.toDateString();
    }

    else if (type === "week") {
      const diff = (today - rowDate) / (1000 * 60 * 60 * 24);
      show = diff <= 7;
    }

    else if (type === "month") {
      show =
        rowDate.getMonth() === today.getMonth() &&
        rowDate.getFullYear() === today.getFullYear();
    }

    else if (type === "all") {
      show = true;
    }

    row.style.display = show ? "" : "none";
  });
}

/* DATE RANGE */
function applyDateRange() {
  const startVal = document.getElementById("startDate").value;
  const endVal = document.getElementById("endDate").value;

  if (!startVal || !endVal) return;

  const start = new Date(startVal);
  const end = new Date(endVal);

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const rowDate = new Date(row.dataset.date);

    row.style.display = (rowDate >= start && rowDate <= end) ? "" : "none";
  });
}

/* SEARCH */
function searchData() {
  const value = document.getElementById("globalSearch").value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(value) ? "" : "none";
  });
}