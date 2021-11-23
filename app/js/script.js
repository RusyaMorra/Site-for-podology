
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





let brakepoint=900;
let screen2 = window.innerWidth;

if (screen2<900) {
  $(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    });

  });


}else{
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
 
 
}

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();

});





 
//form validation and ajax

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    
   async function formSend(e){
      e.preventDefault();
      let error = formValidate(form); 

      let formData = new FormData(form);
      
      if(error===3){
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });
        if(response.ok){
            let result = await response.json();
            alert(result.massage);
            formPreview.innerHTML='';
            form.reset(); 
            form.classList.remove('_sending');
        }else{
          alert('ошибка')
          form.classList.remove('_sending');
        }
      }else{
       // alert('Заполните обязательные поля');
      }
    }

    function formValidate(form){
     let error = 0;
     let formReq = document.querySelectorAll('._req');
     for(let index = 0; index < formReq.length; index++){
       const input = formReq[index];
       formRemoveError(input);
       
       if(input.classList.contains('_email')){
          if(emailTest(input)){
            formAddError(input);
            error++
            if(phoneTest(input)){
              formAddError(input);
              error++
              console.log(phoneTest(input));
            }
          }
        }else{
          if( input.value === ''){
            formAddError(input);
            error++
            
          }
      }
    }
    return error;
  }

    //добавляем стиль ошибки
    function formAddError(input){
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    //удаляем стиль ошибка
    function formRemoveError(input){
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    //проверяем email на соответсвтие
    function emailTest(input){
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    //проверяем phone на соответсвтие
    function phoneTest(input){
      return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }
});


/*else if(input.getAttribute('type')){

          }*/