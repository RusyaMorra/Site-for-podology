$(document).ready(function(){
   $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:3,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }); 


//masonry
$(document).ready(function(){

  $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 300,
    });
  
  
  });

  $(document).ready(function(){

    $('.item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay:300,
        mainClass: 'mfp-fade'
        // other options
      });
    

      
});









/*

var oldScrollY = 0;
const header = document.getElementById('header');
window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY < 0 ){
    header.classList.add('header-top-fixed');
  } else {
    header.classList.remove('header-top-fixed');
  }
  
  oldScrollY = scrolled;
});

*/



let lastScroll = 0;
const defaultOffset = 200;
const header = document.getElementById('header');
const scrollPosition=()=>window.pageYOffset || document.documentElement.scrollTop;
const containHide=()=>header.classList.contains('header-hidden');
window.addEventListener('scroll',()=>{
  
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
       header.classList.add('header-hidden');
       //console.log('down');
    }
    else if(scrollPosition() < lastScroll && containHide()){
       // console.log('up');
        header.classList.remove('header-hidden');
        
    }
lastScroll = scrollPosition();
})