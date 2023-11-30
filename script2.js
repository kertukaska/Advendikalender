document.addEventListener("DOMContentLoaded", function() {
    /* JavaScripti algus */
    var kast1 = document.getElementById("kast1");
    kast1.onclick = function () {
      var pilt = document.getElementById("pilt");
      var kast1sisu = document.getElementById("kast1sisu");
      
      kast1sisu.classList.remove("kast1sisu");
      kast1sisu.classList.add("pilt");
    }
  
      var kast13 = document.getElementById("kast13");
      kast13.onclick = function () {
      var pilt13 = document.getElementById("pilt13");
      var kast13sisu = document.getElementById("kast13sisu");
      
      kast13sisu.classList.remove("kast13sisu");
      kast13sisu.classList.add("pilt13");
      
    };
    
  
  
    });
  
  
  