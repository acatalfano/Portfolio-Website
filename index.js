$(document).ready(function(){
  var notebookImage = document.getElementById("notebookImage");
  
  
  $(document.getElementById("portfolioLink")).on({  mouseenter: function(){ showImage("portfolio"); },
                                                    mouseleave: function(){ showImage(); }
  });
  
  $(document.getElementById("aboutMeLink")).on({    mouseenter: function(){ showImage("aboutMe"); },
                                                    mouseleave: function(){ showImage(); }
  });
  
  $(document.getElementById("resumeLink")).on({     mouseenter: function(){ showImage("resume"); },
                                                    mouseleave: function(){ showImage(); }
  });
  
  // Custom portfolio anchor link for the index page
  // applied to the portfolio navbar item, portfolio modal menu item, and the bouncing arrow
  $('#portfolioLink').prop('href', '#wireframesBG');
  $("#portfolioModalLink").prop('href', '#wireframesBG').click(function(){ closeModalMenu(); });
  
  // this allows binding the click event to the modal background without
  // also binding it to the the elements that it contains
  $('[class*=Slides], [class*=ModalBtn]').click(function(event) {
    event.stopPropagation();
  });
  
  // bind the click event to the modal container (and effectively anywhere outside the modal content)
  $('[id$=Modal]').click(function(event) {
    closeModal();
  });
  
  // close modal on pressing ESC key
  $(document).keydown(function(event) {
    if(event.keyCode == 27 && $('.openModal').exists()) {
      // if ESC key and there's an open modal
      closeModal();
    }
    else if(event.keyCode == 37) {
      // if left arrow key
      if( openModal('wireframes') ) {
        transition('wireframes', -1);
      }
      else if( openModal('prototypes') ) {
        transition('prototypes', -1);
      }
      else if( openModal('finals') ) {
        transition('finals', -1);
      }
    }
    else if(event.keyCode == 39) {
      // if right arrow key
      if( openModal('wireframes') ) {
        transition('wireframes', 1);
      }
      else if( openModal('prototypes') ) {
        transition('prototypes', 1);
      }
      else if( openModal('finals') ) {
        transition('finals', 1);
      }
    }
  });
                                           
  
  $(window).resize(resizeFunction);
  $(window).load(resizeFunction);
  
  var imageIndex = 0;
  var intervalID = null;
  var intervalRunning = false;
  var notebookElementList = [
    "blank",
    "portfolio",
    "aboutMe",
    "resume"
  ];

  function showImage(prefix = "blank") {
    $(document.getElementById("blankNotebook")).removeClass("w3-show"); 
    $(document.getElementById("portfolioNotebook")).removeClass("w3-show");
    $(document.getElementById("aboutMeNotebook")).removeClass("w3-show");
    $(document.getElementById("resumeNotebook")).removeClass("w3-show");
    
    $(document.getElementById(prefix + "Notebook")).addClass("w3-show");
  
  } // showImage()
  
  
  // helper function to return true if the caller-selector exists and false otherwise
  $.fn.exists = function() {
    return this.length !== 0;
  }
  
  
  
  function rotateImages() {
    imageIndex += 1;
    if(imageIndex == notebookElementList.length) imageIndex = 0;
    showImage(notebookElementList[imageIndex]);
  
  } // rotateImages()
  
  
  
  function resizeFunction() {
    
    
    var navigation      = document.getElementById("navigation");
    var heading        = document.getElementById("pageHeading");
    var notebookContainer  = document.getElementById("notebookContainer");
    var notebookFrame    = $(".notebookFrame");
    var notebookImage    = $(".notebookImage");
    var arrowContainer    = document.getElementById("arrowContainer");
    
    $(notebookContainer).height( $(window).height() - $(navigation).outerHeight(true) - $(heading).outerHeight(true) );
    $(notebookFrame).height( $(window).height() - $(navigation).outerHeight(true) - $(heading).outerHeight(true) );
    
    
    var maxHeight = $(window).height() - $(navigation).outerHeight(true) - $(heading).outerHeight(true) - 32;
    
    if( viewport().width < 993) {
      var maxWidth = $(window).width() - 32;
    }
    else {
      var maxWidth = ( $(window).width() - 32 ) / 2;
    }
    
    $(notebookImage).width(maxWidth);
    $(notebookImage).height( $(notebookImage).width() * 661 / 537 );
    
    
    if( $(notebookImage).height() > maxHeight ) {
      $(notebookImage).height(maxHeight);
      $(notebookImage).width( $(notebookImage).height() * 537 / 661 );
    } //
    
    var targetHeight = $(notebookImage).height();
    
    var verticalPadding = ( $(notebookFrame).height() - $(notebookImage).height() ) / 2 - 16;
    
    if( viewport().width > 992 ) {
      $(arrowContainer).css(  "padding-top", ( targetHeight + verticalPadding - ($(arrowContainer).find("i").first()).height() ) + "px"  );
    }
    
    if( viewport().width > 600 ) {
      if( intervalRunning ) {
        clearInterval(intervalID);
        intervalRunning = false;
        showImage();
        
      } // if intervalRunning
    } // if viewport()
    else if(!intervalRunning){
      intervalID = setInterval(rotateImages, 1500);
      intervalRunning = true;
    
    } // else if
  
  } // resizeFunction()

});


var indices = {'wireframes':1, 'prototypes':1, 'finals':1};

function displayModal(key) {
  // TODO TODO TODO TODO: add animation
  $('#' + key + 'Modal').css('display', 'block').addClass("openModal");
  $('#' + key + 'BG').css('visibility', 'hidden');
  showSlide(key, indices[key]);

} // displayModal()



// TODO: reverse of the above function, also set background image to be last viewed image in the slideshow (and possibly all three)
//      zoom animation for the bg image being unhidden and fade for the other two if I decide to change those as well
function closeModal() {
  // TODO TODO TODO TODO: add animation
  var key = $('.openModal')[0].id.slice(0, -5);
  var bgURL = $($('.' + key + 'Slides')[indices[key]-1]).find('img').attr('src');
  $('#' + key + 'BG').css({  'visibility':'visible',
                'background-image': 'url(' + bgURL + ')'  });
  $('#' + key + 'Modal').css('display', 'none').removeClass("openModal");

} // closeModal()



// Move forward n slides (moves backwards if n is negative)
function transition(key, n) {
  showSlide(key, indices[key] += n);
}



// Display the current slide (called by transition() after changing the index value and by displayModal() for intialization)
function showSlide(key, n) {
  var idx;
  var slides = $('.' + key + 'Slides');
  
  if(n > slides.length)  {indices[key] = 1}
  if (n < 1)        {indices[key] = slides.length}
  
  for (idx = 0; idx < slides.length; idx++) {
    $(slides[idx]).css("display", "none");
  }
  
  $(slides[indices[key]-1]).css("display", "block");

} // showSlide()


function openModal(key) {
  return $(document.getElementById(key + 'Modal')).hasClass('openModal');
}