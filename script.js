function onScroll(event) {
  let offset = window.scrollY;

  if (offset + 60 > window.innerHeight) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#ffffff";
    $("body").get(0).style.setProperty("--link-color", "black");
    $("body").get(0).style.setProperty("--underline", "black");


  }
  else {
    if (offset + 60 > window.innerHeight / 2 && (['/contact', '/robot'].includes(window.location.pathname.split('.html')[0]))) {
      document.getElementsByTagName("nav")[0].style.backgroundColor = "#ffffff";
      $("body").get(0).style.setProperty("--link-color", "black");
      $("body").get(0).style.setProperty("--underline", "black");
    }

    else {
      document.getElementsByTagName("nav")[0].style.backgroundColor = "#00000000"
      $("body").get(0).style.setProperty("--link-color", "white");
      $("body").get(0).style.setProperty("--underline", "white");
    }
  }

  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


function checkSponsors() {
  var imgs = document.querySelectorAll('.img-container')
  var delay = 250;
  if (document.querySelectorAll('.img-container')[0].classList.contains('active')) {
    setTimeout(function () {
      imgs[1].classList.remove('hidden')
      setTimeout(function () {
        imgs[2].classList.remove('hidden')
        setTimeout(function () {
          imgs[3].classList.remove('hidden')
          setTimeout(function () {
            imgs[4].classList.remove('hidden')
            setTimeout(function () {
              imgs[5].classList.remove('hidden')
            }, delay);
          }, delay);
        }, delay);
      }, delay);
    }, delay);


  }
  else {
    imgs[1].classList.add('hidden')
    imgs[2].classList.add('hidden')
    imgs[3].classList.add('hidden')
    imgs[4].classList.add('hidden')
    imgs[5].classList.add('hidden')

  }
}
function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', onScroll);
  onScroll();
  logoResize();

  // var h50Pages = document.querySelectorAll('.h-50-page');
  // h50Pages.forEach(function (page) {
  //   page.addEventListener('click', function (e) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //     e.preventDefault();
  //     $('#introCarousel').css('height', '50vh');
  //     $('.carousel-item').css('height', '50vh');
  //     $('.carousel-inner').css('height', '50vh');
  //     var link = this.href
  //     setTimeout(function() {
  //       window.location.href = link;
  //     }, 1250);    });
  // });
});