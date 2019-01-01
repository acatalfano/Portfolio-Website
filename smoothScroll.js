$(document).ready(function(){
  
  // attach a smooth-scrolling function to the onclick event
  // for all anchor links that don't link to nowhere (i.e. not "#" or "#0")
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ){
        // select element to scroll and proceed iff the scroll target exists
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        if(target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation: change focus
            var $target = $(target);
            $target.focus();
            if($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
        
    });
});