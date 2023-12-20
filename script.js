const links = document.querySelectorAll(".company a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 80;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// function myFunction() {
//   alert("Page is loaded");
  
// }
// $(document).ready(function(){
//   alert("halaman siap di tampilkan");
// })