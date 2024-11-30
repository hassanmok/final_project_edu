

setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main").style.display = "block";
    
    },2700);

var typed = new Typed("#text_mok", {
    strings: ["Join us to<br>learn program like <span style='color: rgb(255, 255, 255);'>spider web.</span>"],
    typeSpeed: 50,
    showCursor: false
  });
  
  var typed2 = new Typed("#text_mok2", {
    strings: ["<b><span style='color: #0116FF;'>#include</span>&lt;<span style='color: #F31BAB;'>iostream</span>&gt;<br> \
               using namespace <span style='color: #0116FF;'>std;</span><br> \
               <span style='color: #0116FF;'>int</span> main() {<br> \
               // <span style='color: #00FFE1;'>Welcome message for<br>Spider Coding visitors</span><br> \
               cout << <span style='color: #EEFF00;'>\"Hi! Welcome to Spider Coding!<br>you can learn with us how to become<br>programmer\"</span> << endl;<br> \
               <span style='color: #0116FF;'>return</span> 0; }</b>"],
    typeSpeed: 25
  });

  function show_all_py(){
    document.getElementById("main_courses").style.display = "none";
    document.getElementById("main_courses_py").style.display = "block";
  }
  function show_quizzes(){
    document.getElementById("random").style.display = "none";
    document.getElementById("quizzes").style.display = "flex";

  }
  function show_random(){
    document.getElementById("quizzes").style.display = "none";
    document.getElementById("random").style.display = "flex";
  }
  function more_details_py(){
    document.getElementById("main_courses_py").style.display = "none";
    document.getElementById("python_cour_beg").style.display = "flex";
  }