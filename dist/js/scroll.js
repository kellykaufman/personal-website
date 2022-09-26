

let learnBtn = document.getElementById('learnMore');
let portfolioExperience = document.getElementById('portfolioExperience');

learnBtn.onclick = function() {
    portfolioExperience.scrollIntoView({behavior: "smooth"});
  };