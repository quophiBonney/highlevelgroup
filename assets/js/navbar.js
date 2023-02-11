$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
  });

$(document).ready(function() {
  let slider = $("#slider");
  let images = slider.find("img");
  let index = 0;
  
  function changeImage() {
    $(images[index]).fadeOut(1000, function() {
      index = (index + 1) % images.length;
      $(images[index]).fadeIn(1000);
    });
  }
  
  setInterval(changeImage, 3000);
});
