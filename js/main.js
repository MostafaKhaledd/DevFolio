$(".nav-link").click(function () {
  $(this).addClass("active")
  $(".nav-link").not(this).removeClass("active").removeClass("newClass")
})
$(document).ready(function () {
  $(".landing").fadeOut(1000)
})
$("#goTop").fadeOut()
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop()
  if (scrollTop > 0) {
   $(".navbar-toggler-icon").css("background-image",`url(../images/Untitled-1.png)`)
    $("#navebar").addClass("bg-white")
    $("#navebar").removeClass("py-2")
    $(".select").removeClass("a")
    $(".nav-item a").addClass("nav-link2")
    $(".nav-item a").removeClass("nav-link1")
    $(".active1").addClass("newClass")
    $("#goTop").fadeIn(500)
  }
  else {
    $(".navbar-toggler-icon").css("background-image",`url(../images/Untitled-2.png)`)
    $("#navebar").addClass("py-2")
    $(".select").addClass("a")
    $("#navebar").removeClass("bg-white")
    $(".nav-item a").removeClass("nav-link2")
    $(".nav-item a").addClass("nav-link1")
    $(".active1").removeClass("newClass")
    $("#goTop").fadeOut(500)
  }
  let about = $("#about").offset().top -70
  let home = $("#home").offset().top -70
  let SERVICES = $("#SERVICES").offset().top -70
  let work = $("#work").offset().top -70
  let BLOG = $("#BLOG").offset().top -70
  let CONTACT = $("#CONTACT").offset().top -70


  if(scrollTop >= home && scrollTop < about){
    $("#Home_a").addClass("active1")
    $(".nav-link").not("#Home_a").removeClass("active1").removeClass("newClass")
} 
  else if(scrollTop >= about && scrollTop < SERVICES){
    $("#ABOUT_a").addClass("active1")
    $(".nav-link").not("#ABOUT_a").removeClass("active1").removeClass("newClass")
} 
else if(scrollTop >= SERVICES  && scrollTop < work){
    $("#SERVICES_a").addClass("active1")
    $(".nav-link").not("#SERVICES_a").removeClass("active1").removeClass("newClass")
    count()
} 
else if(scrollTop >= work && scrollTop < BLOG){
    $("#WORK_a").addClass("active1")
    $(".nav-link").not("#WORK_a").removeClass("active1").removeClass("newClass")
} 
else if(scrollTop >= BLOG && scrollTop < CONTACT){
    $("#BLOG_a").addClass("active1")
    $(".nav-link").not("#BLOG_a").removeClass("active1").removeClass("newClass")
} 
else if(scrollTop >= CONTACT){
    $("#CONTACT_a").addClass("active1")
    $(".nav-link").not("#CONTACT_a").removeClass("active1").removeClass("newClass")
} 
})
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
function count(){
  let works = setInterval(function () {
    count1++
    if (count1 <= 450) {
      document.getElementById("WORKS").innerHTML = count1 + `</br><span class="fs-6">WORKS COMPLETED</span>`
    }
    else {
      clearInterval(works)
    }
  }, 500)
  let YEARS = setInterval(function () {
    count2++
    if (count2 <= 15) {
      document.getElementById("YEARS").innerHTML = count2 + `</br><span class="fs-6">YEARS OF EXPERIENCE</span>`
    }
    else {
      clearInterval(YEARS)
    }
  }, 500)
  let TOTAL = setInterval(function () {
    count3++
    if (count3 <= 550) {
      document.getElementById("TOTAL").innerHTML = count3 + `</br><span class="fs-6">TOTAL CLIENTS</span>`
    }
    else {
      clearInterval(TOTAL)
    }
  }, 500)
  let AWARD = setInterval(function () {
    count4++
    if (count4 <= 36) {
      document.getElementById("AWARD").innerHTML = count4 + `</br><span class="fs-6">AWARD WON</span>`
    }
    else {
      clearInterval(AWARD)
    }
  },500)
}