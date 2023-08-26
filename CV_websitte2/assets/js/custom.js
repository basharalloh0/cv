function startProgressBar(elemId, targetValue) {
    var elem = document.getElementById(elemId);
    var width = 0;
    var id = setInterval(frame, 10);
  
    function frame() {
      if (width >= targetValue) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
  

  window.onload = function() {
    startProgressBar("progressBar1", 100);
    startProgressBar("progressBar2", 70); 
    startProgressBar("progressBar3", 80); 
    startProgressBar("progressBar4", 85); 
    startProgressBar("progressBar5", 90);
  };

// lodear 1
let circularProgress1 = document.querySelector(".circular-progress1"),
  progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,
  progressEndValue1 = 100,
  speed1 = 15;

let progress1 = setInterval(() => {
  progressStartValue1++;

  progressValue1.textContent = `${progressStartValue1}%`;
  circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

// lodear 2
let circularProgress2 = document.querySelector(".circular-progress2"),
  progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
  progressEndValue2 = 80,
  speed2 = 12;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;
  circularProgress2.style.background = `conic-gradient(#ff5733 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

// lodear 3
let circularProgress3 = document.querySelector(".circular-progress3"),
  progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
  progressEndValue3 = 70,
  speed3 = 10;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;
  circularProgress3.style.background = `conic-gradient(#00cc99 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);
// tabs 
function openTab(tabName, tabButton) {
  var i;
  var tabContents = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
  }
  
  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  tabButton.classList.add("active");
}

//scroll-to-top-button
var firstTabButton = document.querySelector(".tab-button");
var firstTabContentId = firstTabButton.getAttribute("data-tab");
document.getElementById(firstTabContentId).style.display = "block";
firstTabButton.classList.add("active");


document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.querySelector(".scroll-to-top-button");
  
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("active");
    } else {
      scrollToTopButton.classList.remove("active");
    }
  });
  
});

//nav 
