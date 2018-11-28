// Create eventListener to catch button click
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
  // Create XHR object:
  console.log('Button clicked');
  var xhr = new XMLHttpRequest();
  // Function to make the request, the type of request, the file or URL to make the request to:
  // Use OPEN function: type, url/file, async(true or false): true being asynchronous
  console.log(xhr); //This object has the important property, status, and open
  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function(){
    if(this.status == 200){
      console.log(this.responseText); //Referencing the file
      document.getElementById('text').innerHTML = this.responseText;
    }
    else if(this.status == 404){
      document.getElementById('text').innerHTML = 'Not Found';
    }
  }
  // Sends request
  xhr.send();
}
