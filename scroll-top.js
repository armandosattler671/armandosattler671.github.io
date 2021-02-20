
jQuery.fn.topLink = function(settings) {
  settings = jQuery.extend({
    min: 1,
    fadeSpeed: 200
  }, settings);
  return this.each(function() {
    var el = $(this);
    el.hide(); 
    $(window).scroll(function() {
      if($(window).scrollTop() >= settings.min)
      {
        el.fadeIn(settings.fadeSpeed);
      }
      else
      {
        el.fadeOut(settings.fadeSpeed);
      }
    });
  });
};

$(document).ready(function() {
  $('#top-link').topLink({
    min: 400,
    fadeSpeed: 500
  });
  $('#top-link').click(function(e) {
    e.preventDefault();
    $.scrollTo(0,600);
  });
});