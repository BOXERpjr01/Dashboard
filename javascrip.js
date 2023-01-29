function mymenu(){
   document.getElementById('Navgate').style.left="0";
   document.getElementById('mobile-menu').style.display="none";
   document.getElementById('Close-menu').style.display="block";
}
function closemenu(){
   document.getElementById('Navgate').style.left="-125px";
   document.getElementById('Close-menu').style.display="none";
   document.getElementById('mobile-menu').style.display="block";
}
// it is for that which not show the event in the large screen
window.addEventListener('resize', function(event){
   if(window.innerWidth > 320){
      document.getElementById('mobile-menu').style.display="none";
      document.getElementById('Close-menu').style.display="none";
   }
});