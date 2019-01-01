/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//TODO: attach to DOMContentLoaded event in body CSS transition of a sort
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  var txt = '<header id="navigation" class="w3-bar w3-brown sideNavTransition" style="font-size:20px;padding:16px;border-bottom: 3px solid orange">' + 
              
              '<div id="menu" class="w3-cell-row">' +
                '<div id="menuIcon" class="w3-btn">' +
                  '<a onclick="toggleSideNav()" href="#"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>' +
                '</div>' +
                '<img id="brandImage" src="images/AC_brand2.png" alt="AC Brand" width="125" class="w3-container w3-cell">' +
                '<div id="notBrandImage" class="w3-container w3-cell w3-cell-middle" style="padding:0">' +
                  '<div class="w3-display-container">' +
                    '<div id="brandName" class="w3-container w3-display-left">' +
                      '<span style="font-weight:bold">adam</span>catalfano' +
                    '</div>' +
                    '<div class="w3-display-right">' +
                      '<a id="portfolioLink" href="index.html" class="w3-button" style="width:114px">Portfolio</a>' +
                      '<a id="aboutMeLink" href="aboutMe.html" class="w3-button" style="width:127px">About&nbsp;Me</a>' +
                      '<a id="resumeLink" href="resume.html" class="w3-button" style="width:112px">R&eacute;sum&eacute;</a>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</header>';
  
  
  var sideNavTxt =  '<div id="sideNav" class="w3-sidebar w3-bar-block w3-card-2 myBlue">' +
                      '<header class="w3-container myYellow-2">' +
                        '<button id="closeButton" onclick="closeSideNav()" class="w3-xxlarge w3-button" style="float:right;display:none">&times;</button>' +
                        '<h5 class="w3-xxxlarge">MENU</h5>' +
                      '</header>' +
                      '<nav class="w3-black w3-xlarge">' +
                        '<a class="w3-button w3-block w3-brown" href="index.html">PORTFOLIO</a>' +
                        '<a class="w3-button w3-block w3-brown" href="aboutMe.html">ABOUT&nbsp;ME</a>' +
                        '<a class="w3-button w3-block w3-brown" href="resume.html">R&Eacute;SUM&Eacute;</a>' +
                      '</nav>' +
                    '</div>';
  
  
  $("body").prepend(sideNavTxt + txt);
  
  $("#navbar a").css("margin-top", "25px");
  
  
  $("body").css({  "height":"100%",
          "margin":"0",
          "background-image":"url('images/triangles_background_spaced_large.svg'), linear-gradient(#008080, #00ace6, #008080)",
          "background-attachment":"fixed"
        });
  
  var portfolioLink = document.getElementById("portfolioLink");
  var aboutMeLink   = document.getElementById("aboutMeLink");
  var resumeLink    = document.getElementById("resumeLink");
  var modalMenu    = document.getElementById("modalMenu");
  
  $(portfolioLink).on({ mouseenter: function(){ $(portfolioLink).html('<i class="fa fa-pencil-square fa-lg"></i>'); },
                        mouseleave: function(){ $(portfolioLink).html('Portfolio'); }
  });
  
  $(aboutMeLink).on({ mouseenter: function(){ $(aboutMeLink).html('<i class="fa fa-bar-chart fa-lg"></i>'); },
                      mouseleave: function(){ $(aboutMeLink).html('About Me'); }
  });
  
  $(resumeLink).on({    mouseenter: function(){ $(resumeLink).html('<i class="fa fa-file-text fa-lg"></i>'); },
                        mouseleave: function(){ $(resumeLink).html('R&eacute;sum&eacute;'); }
  });
  
  
  $(document.getElementById("main")).click(function(event) {
    if(  $( document.getElementById('sideNav') ).hasClass("sideNavOpen")  ) {
      closeSideNav();
    }
  });
  
  $(document.getElementById("notBrandImage")).click(function(event) {
    if(  $( document.getElementById('sideNav') ).hasClass("sideNavOpen")  ) {
      closeSideNav();
    }
  });
  
  $(document).keydown(function(event) {
    if( event.keyCode == 27 && $(document.getElementById("sideNav")).hasClass("sideNavOpen") ) {
      closeSideNav();
    }
  });
  
  $(scaleMenu);
  $(window).resize(scaleMenu);
});



function scaleMenu() {
  var notBrandImage = document.getElementById('notBrandImage');
  var remainderWidth = $(window).width() - 125;
  $(notBrandImage).width(remainderWidth);
}



function toggleSideNav() {
  if(  $( document.getElementById("sideNav") ).hasClass("sideNavOpen")  ) {
    closeSideNav();
  }
  else {
    openSideNav();
  }
}


function closeSideNav() {
  $(document.getElementById("sideNav")).removeClass("sideNavOpen")
                                       .width(0);
  $(document.getElementById("main")).css("margin-left", "0");
  $(".sideNavTransition").css("margin-left", "0");
  $(document.getElementById("closeButton")).css("display", "none");
}


function openSideNav() {
  setTimeout(function(){$(document.getElementById("closeButton")).css("display", "inline-block");}, 350);
  $(document.getElementById("sideNav")).addClass("sideNavOpen")
                                       .width(250);
  $(document.getElementById("main")).css("margin-left", "250px");
  $(".sideNavTransition").css("margin-left", "250px");
}






function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}