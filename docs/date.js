document.querySelectorAll(".page-date").forEach(function (el) {
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var now = new Date();
  el.textContent = months[now.getMonth()] + " " + now.getFullYear();
});
