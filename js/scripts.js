$(document).ready(function(){
    $(".container-massages").on("click", function(){
      $(this).fadeOut();
    });
  });
  // !button Top To
  $(document).ready(function () {
    let topBtn = $('.top-btn');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100){
            topBtn.fadeIn(400);
        }else{
            topBtn.fadeOut(400);
        }
    });
    topBtn.click(function(){

        $('html,body').animate({
        
            scrollTop:0
        },1000);
    });
});