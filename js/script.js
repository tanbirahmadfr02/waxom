// =========poftfolio part start -===========
$('.venobox').venobox()
// =========poftfolio part end -===========
// ==========presentation part start =========
$('.venobox').venobox()
// ==========presentation part end =========
// ==========counter up part start =============
$('.counter').counterUp();
// ==========counter up part end =============
// ===========post part start ==========

$('.post_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-circle-arrow-left prevarrow"></i>',
    nextArrow:'<i class="fa-solid fa-circle-arrow-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// ===========post part end ==========
// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========
  // ========back to top part ======
  var back_to_top = document.querySelector(".back_to_top")
  window.addEventListener("scroll",function(){
    back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
  })
  // ========back to top part ======