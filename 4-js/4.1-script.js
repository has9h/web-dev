// alert('Warning');

// Event listener for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(eventParam){
  // Test
  // console.log('It works');
  // Preventing default behavior
  eventParam.preventDefault();

  // Get form values
  // var siteName = document.getElementById('siteName');
  // console.log(siteName);  // Will log the entire element itself: <input type ... >
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  // These will be saved as an array of objects
  // console.log(siteName);
  // console.log(siteUrl);

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  // Object that will be submitted to localstorage
  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  console.log(bookmark);

  // Local Storage Test:
  // Only stores string
  // Stringify the JSON into a string, save it, and retrieve it back by parsing into JSON
  // localStorage.setItem('test', 'Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  // Bookmark Validation:
  if(localStorage.getItem('bookmarks')===null){
    var bookmarks = [];           //Init array
    bookmarks.push(bookmark);     //Add to array
    // JSON array/object that needs to be stringified
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  else{
    // Fetch whatever is in bookmarks already, but turning the string back into a JSON object/array
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // console.log(bookmarks);
    // console.log(typeof bookmarks);
    // Add the submitted values to bookmarks:
    bookmarks.push(bookmark);     //push() is only available to array objects
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear Form
  document.getElementById('myForm').reset();

  // Refetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks:
function fetchBookmarks(){
  // Fetch bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // console.log(bookmarks);
  // Get output ID
  var bookmarksResults = document.getElementById('bookmarksResults');
  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">' +
                                  '<h3>' +
                                  name +
                                  ' <a class="btn btn-default" target="_blank" href="' + url + '"> Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger href="#"> Delete</a> ' +
                                  '</h3>' +
                                  '</div>';
  }
}

// Delete bookmark:
function deleteBookmark(url){
  // console.log(url);
  // First fetch, check if url matches, then reset localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop and check
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      // Remove from array object
      bookmarks.splice(i, 1);
    }
  }
  // Set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Refetch bookmarks
  fetchBookmarks();
}

// Form validation:
function validateForm(siteName, siteUrl){
  // Blank Submit Validation
  if(!siteName || !siteUrl){
    alert("Please fill in the form");
    return false;
  }

  // Use RegExp to validate URL
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  // console.log(regex);
  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
  return true;
}
