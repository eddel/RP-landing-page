// ==============Side Nav===========

window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  var websiteContent = document.getElementById("websiteContent");

  preloader.style.display = "none"; // Hide the preloader
  websiteContent.style.display = "block"; // Show the website content
});

window.addEventListener('DOMContentLoaded', function() {
  var sidebar = document.querySelector('.sidebar');
  var windowWidth = window.innerWidth;

  function handleResize() {
    windowWidth = window.innerWidth;

    if (windowWidth > 774) {
      sidebar.classList.remove('close');
    } else {
      sidebar.classList.add('close');
    }
  }

  // Initial check before rendering the sidebar
  handleResize();

  // Check on window resize
  window.addEventListener('resize', handleResize);
});



const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// prfile change
function fasterPreview(e) {
    e.files && e.files[0] && $("#profileImage").attr("src", window.URL.createObjectURL(e.files[0]));
}
$("#change_img").click(function (e) {
    $("#imageUpload").click();
});
    $("#imageUpload").change(function () {
        fasterPreview(this);
    });

// ====================End SideNav===============
// Get the elements
const uploadButton = document.querySelector('.upload_button');
const submenu = document.querySelector('.sm_submenu');
const showBtn = document.getElementById('show_tobnav_box');
const topnavBox = document.querySelector('.topnav_box');

// Event listener for the upload button click
uploadButton.addEventListener('click', function() {
  // Toggle the display of the submenu
  submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
});

// Event listener for scroll events
window.addEventListener('scroll', function() {
  // Hide the submenu when scrolling
  submenu.style.display = 'none';
});

// Event listener for the show button
showBtn.addEventListener('click', function() {
  topnavBox.classList.toggle('active');
});

// Event listener for the document click
document.addEventListener('click', function(event) {
  const target = event.target;
  
  // Check if the click is outside the topnav box, show button, and submenu
  if (
    target !== showBtn &&
    !topnavBox.contains(target) &&
    !uploadButton.contains(target) &&
    !submenu.contains(target)
  ) {
    topnavBox.classList.remove('active');
    submenu.style.display = 'none';
  }
});


// Get all the .overview_cols elements
var overviewCols = document.querySelectorAll('.overview_cols');

// Event delegation on the document
document.addEventListener('click', function(event) {
  var clickedElement = event.target;

  // Check if the clicked element is an .overview_cols div or its child <p> tags
  if (clickedElement.classList.contains('overview_cols') || clickedElement.matches('.overview_cols p')) {
    // Remove the 'clicked_border' class from all .overview_cols divs
    overviewCols.forEach(function(overview) {
      overview.classList.remove('clicked_border');
    });
    // Add the 'clicked_border' class to the clicked element
    clickedElement.closest('.overview_cols').classList.add('clicked_border');
  } else {
    // Remove the 'clicked_border' class from all .overview_cols divs
    overviewCols.forEach(function(overview) {
      overview.classList.remove('clicked_border');
    });
  }

});

// Get the logo element
const logoforsm = document.querySelector('.logo');

// Function to change the logo src
function changeLogoSrc() {
  if (window.innerWidth < 774) {
    logoforsm.src = 'img/smlogo.png'; // Set the alternative logoforsm src
    logoforsm.style.width = '63px';
    logoforsm.style.paddingLeft = '15px';
  } else {
    logoforsm.src = 'img/loogo.png'; // Set the default logo src
  }
}

// Call the function on page load
changeLogoSrc();

// Call the function on window resize
window.addEventListener('resize', changeLogoSrc);





// Add user (profile)
function fasterPreview(e) {
    e.files && e.files[0] && $("#userImage").attr("src", window.URL.createObjectURL(e.files[0]));
}
$("#change_userimg").click(function (e) {
    $("#userimageUpload").click();
});
    $("#userimageUpload").change(function () {
        fasterPreview(this);
    });

