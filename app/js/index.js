(function($) {
  $(document).ready(function() {
    $(".button").on("click", function() {
      $(".finder form").fadeToggle();
    });

    $(".navbar-logo").on("click", function() {
      $(".block-menu").slideToggle();
    });
    function socialContent() {
      if (document.documentElement.clientWidth > 960) {
        $(".navbar-logo").on("click", function() {
          $(".social-content")
            .toggleClass("col-6")
            .toggleClass("col-12");
        });
      }
    }
    socialContent();
    $(window).resize(function() {
      socialContent();
    });
    $(".has-submenu > a").on("click", function() {
      event.preventDefault();
      $(this)
        .parent()
        .find("ul")
        .slideToggle();
    });
    $(".follow").on("click", function() {
      event.preventDefault();
      $(this).toggleClass("following");
      $(this).text(function() {
        if ($(this).text() == "Follow") {
          $(this).text("Following");
        } else {
          $(this).text("Follow");
        }
      });
    });
  });
})(jQuery);

