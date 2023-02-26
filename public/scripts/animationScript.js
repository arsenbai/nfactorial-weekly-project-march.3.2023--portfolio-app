


window.onscroll = function() {
  let windowHeight = window.innerHeight;

  // animation for section - about
    let aboutDiv = document.getElementById("about");
    let aboutTop = aboutDiv.getBoundingClientRect().top;
    let aboutBottom = aboutDiv.getBoundingClientRect().bottom;
    
    if (aboutTop + 400 < windowHeight && aboutBottom + 300 > windowHeight) {
      aboutDiv.classList.add("show-about");
    } else {
      aboutDiv.classList.remove("show-about");
    }

    // animation for section - experience
    let experienceDiv = document.getElementById("experience");
    let experienceTop = experienceDiv.getBoundingClientRect().top;
    let experienceBottom = experienceDiv.getBoundingClientRect().bottom;

    if (experienceTop + 400 < windowHeight && experienceBottom + 300 > windowHeight) {
      experienceDiv.classList.add("show-experience");
    } else {
        experienceDiv.classList.remove("show-experience");
    }
    
    // animation for section - projects
    let projectsDiv = document.getElementById("projects");
    let projectsTop = projectsDiv.getBoundingClientRect().top;
    let projectsBottom = projectsDiv.getBoundingClientRect().bottom;

    if (projectsTop + 400 < windowHeight && projectsBottom + 300 > windowHeight) {
      projectsDiv.classList.add("show-projects");
    } else {
      projectsDiv.classList.remove("show-projects");
    }
  }


  



