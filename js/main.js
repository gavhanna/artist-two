(function ($) {
  $('#panel').scotchPanel({
      containerSelector: 'body',
      direction: 'right', // Make it toggle in from the left
      duration: 300,
      transition: 'ease-in-out',
      clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
      distanceX: '60%', // Size of the toggle
      enableEscapeKey: true // Clicking Esc will close the panel
  });

  $(".content-box").hover(function(){
    $(this).find(".blurb").toggleClass("animate");
    $(this).find(".content-title").toggleClass("animated");
  });



})(jQuery);
