function myF(id,iconid) {
  document.getElementById(id).classList.toggle("show");
  document.getElementById(iconid).classList.toggle("icnrot");
}



// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   // console.log( event )
//   if (!event.target.matches('.dropbtn' ) && !event.target.matches('.icn' )) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
   
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }