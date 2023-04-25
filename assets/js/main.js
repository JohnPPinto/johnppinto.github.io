AOS.init();
// You can also pass an optional settings object
// below listed default settings

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Code for title - typewriter animation control
var titles = ["DATA ANALYST", "AI LEARNER", "AI PRACTITIONER", "AI DEVELOPER"];
var currentIndex = 0;
var h1 = document.getElementsByClassName("text-brand-2")[0];

function typewriter() {
  var currentTitle = titles[currentIndex];
  var currentTitleLength = currentTitle.length;
  var currentTitleIndex = 0;
  var interval = setInterval(function() {
    if (currentTitleIndex <= currentTitleLength) {
      h1.innerHTML = currentTitle.substring(0, currentTitleIndex);
      currentTitleIndex++;
    } else {
      clearInterval(interval);
      setTimeout(changeTitle, 1000);
    }
  }, 100);
}

function changeTitle() {
  currentIndex = (currentIndex + 1) % titles.length;
  typewriter();
}

typewriter();