function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

function loadLayout() {
  loadComponent("sidebar", "../partials/sidebar.html");
  loadComponent("navbar", "../partials/navbar.html");
  loadComponent("footer", "../partials/footer.html");
}