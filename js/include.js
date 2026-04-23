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