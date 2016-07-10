(function($) {
  // $('#panel').scotchPanel({
  //   containerSelector: 'body',
  //   direction: 'right', // Make it toggle in from the left
  //   duration: 300,
  //   transition: 'ease-in-out',
  //   clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
  //   distanceX: '60%', // Size of the toggle
  //   enableEscapeKey: true // Clicking Esc will close the panel
  //});

  $(".content-box").hover(function() {
    $(this).find(".blurb").toggleClass("animate");
    $(this).find(".content-title").toggleClass("animated");
  });


  var scotchPanel = $('#panel').scotchPanel({
        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        distanceX: '60%',
        enableEscapeKey: true,
    });

    $('.toggle-panel').click(function() {
        scotchPanel.toggle();
        return false;
    });

    $('.overlay').click(function() {
      // CLOSE ONLY
      scotchPanel.close();
    });



})(jQuery);
