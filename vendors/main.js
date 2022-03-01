  $(document).ready(function(){
    $('.slider-area').bxSlider();
  });

  window.addEventListener("scroll",function(){
  
    var navbar = document.getElementById("navbar");
  
  if(window.pageYOffset >= 500 ){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  })

  //mobile menu 

  var myNav=document.getElementById("myNav")
  var openNav=document.getElementById("openNav")

  openNav.addEventListener("click" ,function(){
      myNav.style.width="30%";
  })

  function closeNav(){
    myNav.style.width="0%";
  }