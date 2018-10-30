/* Task 1 */
var heading = document.getElementById('heading');       //Always returns an array;
console.log(heading.innerText);
// heading.innerText = "Text changed";
heading.innerHTML = "<h3> Text changed </h3>";

/* Task 2 using plain JavaScript */
//Task 2a:
var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
});

//Task 2b:
function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = event.target.innerText.toLowerCase();

    //Another way of doing it:
    // if(event.target.innerText == "Red"){
    //     body.style.backgroundColor = 'red';
    // }
    // if(event.target.innerText == "Green"){
    //     body.style.backgroundColor = 'green';
    // }
}

//Task 2c:
function redirectToGoogle(event){
    window.location.assign("https://www.google.com");
}

/* Task 4 using jQuery */
//Task 4a:
$('#addText4').click(function(event){
    var paragraph = $('<p>').text('Hello World');
    $('#task4a').append(paragraph);
});

//Task 4b:
function changeBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('background-color', color);
}

//Task 4c:
$("#sum").click(function(event){
    var sum = Number($("#num1").val())
              + Number($("#num2").val());
              $('#result').text(sum);
});
