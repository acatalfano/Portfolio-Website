$(document).ready(function(){
  var testTxt =  '<div style="font-size:20px">' +
            '<span id="testAdamCatalfano"><span style="font-weight:bold">adam</span>catalfano</span>' +
            '<span id="testPortfolio">Portfolio</span>' +
            '<span id="testAboutMe">About&nbsp;Me</span>' +
            '<span id="testResume">R&eacute;sum&eacute;</span>' +
          '</div>';
  
  
  testTxt =  '<div id="testContainer">' +
          '<div id="content1a" style="font-size:15px">' +
            '<span>Axure</span><br>' +
            '<span>HTML 5</span><br>' +
            '<span>CSS 3</span><br>' +
            '<span>Javascript</span><br>' +
            '<span>Responsive Web<br>Design</span><br>' +
            '<span>Adobe<br>Illustrator</span><br>' +
            '<span>Eclipse IDE</span><br>' +
            '<span>MS Visual<br>Studio</span><br>' +
            '<span>MS Office</span><br>' +
            '<span>SVN</span>' +
          '</div>' +
          '<div id="content1b" style="font-size:15px">' +
            '<span>C++/C</span><br>' +
            '<span>Python</span><br>' +
            '<span>Linux</span><br>' +
            '<span>Windows</span><br>' +
            '<span>Mac OS X</span><br>' +
            '<span>g++</span><br>' +
            '<span>gdb</span><br>' +
            '<span>valgrind</span><br>' +
            '<span>gprof</span>' +
          '</div>' +
          '<div id="content2a" style="font-size:15px">' +
            '<span>Statistics</span><br>' +
            '<span>Probability<br>Theory</span><br>' +
            '<span>Cognitive<br>Psychology</span><br>' +
            '<span>Neuropsychology</span><br>' +
            '<span>Psycholinguistics</span><br>' +
            '<span>Artificial<br>Intelligence</span><br>' +
            '<span>Machine Learning</span>' +
          '</div>' +
          '<div id="content2b" style="font-size:15px">' +
            '<span>Formal<br>Writing</span><br>' +
            '<span>Formal<br>Speaking</span><br>' +
            '<span>Informal<br>Writing</span><br>' +
            '<span>Informal<br>Speaking</span>' +
          '</div>' +
          '<div id="heading1" style="font-size:18px">' +
            '<span>COMPUTER<br>SKILLS</span>' +
          '</div>' +
          '<div id="heading2" style="font-size:18px">' +
            '<span>SPECIALTY<br>SKILLS</span>' +
          '</div>' +
          '<div id="content3" style="font-size:15px">' +
            '<span>100% Attendance Award</span><br>' +
            '<span>Outstanding Performance Award</span><br>' +
            '<span>Breakthrough Award</span><br>' +
          '</div>' +
          '<div id="content4" style="font-size:15px">' +
            '<span>Crafted a 50,000-word rough draft<br>of a novel from scratch in 30 days</span>' +
            '<span>Continues to drive my side-passion of<br>creative writing and my creative mindset</span>' +
          '</div>' +
          '<div id="heading3" style="font-size:18px;font-weight:bold">' +
            '<span>Dale Carnegie Course</span>' +
          '</div>' +
          '<div id="heading4" style="font-size:18px;font-weight:bold">' +
            '<span>National Novel Writing Month (NaNoWriMo)</span>' +
          '</div>' +
        '</div>';
  
  testTxt =  '<div id="testContainer">' +
          '<div id="content1a" style="font-size:15px">' +
            '<span>HTML 5</span>' +
            '<span>CSS 3</span>' +
            '<span>Javascript</span>' +
            '<span>Responsive Web Design</span>' +
            '<span>Interactive Prototypes</span>' +
          '</div>' +
          '<div id="content1aPartials" font-size:15px">' +
            '<span>Responsive Web</span>' +
            '<span>Responsive</span>' +
            '<span>Web Design</span>' +
            '<span>Design</span>' +
            '<span>Interactive</span>' +
            '<span>Prototypes</span>' +
          '</div>' +
          '<div id="content1b" style="font-size:15px">' +
            '<span>Wireframes</span>' +
            '<span>C++/C</span>' +
            '<span>Python</span>' +
            '<span>Data Structures</span>' +
            '<span>Algorithms</span>' +
          '</div>' +
          '<div id="content1bPartials" font-size:15px">' +
            '<span>Structures</span>' +
          '</div>' +
          '<div id="content2">' +
            '<span>Axure</span>' +
            '<span>Adobe Illustrator</span>' +
            '<span>MS Office</span>' +
            '<span>Eclipse IDE</span>' +
            '<span>MS Visual Studio</span>' +
          '</div>' +
          '<div id="content2Partials" font-size:15px">' +
            '<span>Illustrator</span>' +
            '<span>MS Visual</span>' +
          '</div>' +
          '<div id="content3" style="font-size:15px">' +
            '<span>ANOVA (F-Distribution)</span>' +
            '<span>Chi-Square</span>' +
            '<span>Regression</span>' +
            '<span>z-test (Normal Distribution)</span>' +
            '<span>t-test (Student\'s Distribution)</span>' +
            '<span>Probability Theory</span>' +
          '</div>' +
          '<div id="content3Partials" style="font-size:15px">' +
            '<span>Probability</span>' +
            '<span>Distribution)</span>' +
          '</div>' +
          '<div id="content4" style="font-size:15px">' +
            '<span>Classical Conditioning</span>' +
            '<span>Operant Conditioning</span>' +
            '<span>Attention</span>' +
            '<span>Cognition</span>' +
            '<span>Psycholinguistics</span>' +
          '</div>' +
          '<div id="content4Partials" style="font-size:15px">' +
            '<span>Conditioning</span>' +
          '</div>' +
          '<div id="headings" style="font-size:24px">' +
            '<span>CODING AND DESIGN SKILLS:</span>' +
            '<span>CODING AND DESIGN SOFTWARE:</span>' +
            '<span>ANALYSIS SKILLS:</span>' +
            '<span>PSYCHOLOGY SKILLS:</span>' +
          '</div>' +
          '<div id="headingsPartials" style="font-size:24px">' +
            '<span>CODING AND DESIGN</span>' +
            '<span>ANALYSIS</span>' +
            '<span>PSYCHOLOGY</span>' +
          '</div>' +
        '</div>';
  
  $("body").append(testTxt);
  
  
  var alertTxt = "";
  var testChildren = $(document.getElementById("testContainer")).children();
  var len = testChildren.length;
  
  for( i = 0; i < len; i++ ) {
    alertTxt += $(testChildren[i]).attr("id") + ":\n";
    
    var grandChildren = $(testChildren[i]).children("span");
    var grandLen = grandChildren.length;
    
    for( j = 0; j < grandLen; j++ ) {
      alertTxt += $(grandChildren[j]).html() + ": " + $(grandChildren[j]).width() + "\n";
    }
    
    alertTxt += "\n";
  }
  
  alert(alertTxt);
  /*
  alert(  "AdamCatalfano: "  + $('#testAdamCatalfano').width() +
      "\nPortfolio: "    + $('#testPortfolio').width() +
      "\nAbout Me: "    + $('#testAboutMe').width() +
      "\nResume: "    + $('#testResume').width()
  
  );
  */
});