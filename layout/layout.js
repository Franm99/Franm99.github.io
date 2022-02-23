/* Common header */
$.get("layout/header.html", function ( appHeader ) {
  document.getElementById("app-header").innerHTML = appHeader;
});

/* Common footer */
$.get("layout/footer.html", function ( appFooter ) {
  document.getElementById("app-footer").innerHTML = appFooter;
});


