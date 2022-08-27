// TODO: start close massages user (jquery)
$(document).ready(function () {
  $(".container-massages").on("click", function () {
    $(this).fadeOut();
  });
});
// TODO:end close massages user(jquery)

//TODO start button Top To (jquery)
$(document).ready(function () {
  let topBtn = $('.top-btn');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      topBtn.fadeIn(400);
    } else {
      topBtn.fadeOut(400);
    }
  });
  topBtn.click(function () {

    $('html,body').animate({

      scrollTop: 0
    }, 1000);
  });
});
//TODO:end button Top To (jquery)


// TODO:start the script enabled And disable Password (javascript)

// TODO:select eye image (javascript)

let eyeImage = document.querySelector('.pass-visibility');


//TODO select input password
let passInput = document.querySelector('.pass-input');

passInput.addEventListener('keyup', function() {
    let passInputLength = passInput.value.length;
    if (passInputLength == 0) {
        eyeImage.style.display = 'none';
    } else {
        eyeImage.style.display = 'inline-block';
    }
});


eyeImage.addEventListener('click', function() {
    let passInputType = passInput.getAttribute('type');
    //ToDO:toggle between password / text input types 
    if (passInputType == 'password') {
        passInput.setAttribute('type', 'text');
        eyeImage.setAttribute('src', '../images/eys2.png');
    } else {
        passInput.setAttribute('type', 'password');
        eyeImage.setAttribute('src', '../images/eys.png');
    }
});

// TODO:end the script enabled And disable Password (javascript)
