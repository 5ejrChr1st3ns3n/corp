document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});

// Declare a global variable to store user input
var userInput;

// Function to store and display user input
function storeAndDisplay() {
  // Get user input
  userInputTitle = document.getElementById('inputDataTitle').value;
  userInputContent = document.getElementById('inputDataContent').value;

  // Display the stored data
  displayStoredTitleData();
  displayStoredContentData();
}

// Function to display stored data
function displayStoredTitleData() {
  var titleOutputDiv = document.getElementById('titleOutput');
  
  if (userInputTitle) {
    titleOutputDiv.innerHTML = '<h2 class="title-output">' + userInputTitle + '</h2>';
  } else {
    titleOutputDiv.innerHTML = '<p></p>';
  }
}

function displayStoredContentData() {
  var contentOutputDiv = document.getElementById('contentOutput');

  if (userInputContent) {
    contentOutputDiv.innerHTML = '<p class="content-output>"' + userInputContent + '</p>';
  } else {
    contentOutputDiv.innerHTML = '<p></p>';
  }
}