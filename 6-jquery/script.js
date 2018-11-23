                                        // SELECTORS

// Hide all <h1>
// $('h1').hide();

// Targeted <h1>:
// $('h1#heading1').hide();

// Targeting classes:
// $('h1.heading2').hide();
//<h1> not required:
// $('.heading2').hide();

// Targeting span:
$('p span').css('color', 'red');

// Target <li>
$('#list li:first').css('color', 'red');
$('#list li:last').css('color', 'red');
$('#list li:even').css('background-color', 'orange');
$('#list li:odd').css('background-color', '#cccccc');
// Every 3rd item:
$('#list li:nth-child(3n)').css('list-style', 'none');

// Targeting buttons:
// $("input") selector will choose only elements of the type input
// $(":input") selector will catch all the inputs elements (such as textarea, select, input etc...)
// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

// Targeting href's
$('[href]').css('color', 'red');
// Targeting actual values of the attributes
$('a[href="https://www.yahoo.com"]').css('color','green');

// Hide everything
// $('*').hide();

                                            //EVENTS
$(document).ready(function(){
  // .click actually runs the 'on()' method: function(event, callback)
  $('#btn1').click(function(){
    // alert("Button 1 clicked");
    // $('.para3').hide();
    $('.para3').toggle();
  });

  // Alternative
  // $('#btn1').on('click', function(){
  //   alert('Button 1 clicked');
  // });
  //
  // $('#btn2').click(function(){
  //   $('.para3').show();
  // });

  // $('#btn2').dblclick(function(){
  //   $('.para3').toggle();
  // });

  $('#btn1').hover(function(){
    $('.para3').toggle();
  });
  // Alternative:
  // $('#btn1').on('hover', function(){
  //   $('.para3').toggle();
  // });
  // But this will not work, as 'hover' is not really an event, but two other events:
  // 'mouseenter' and 'mouseleave'
  // What hover does is: Combine the following two:
  // $('#btn1').on('mouseenter', function(){
  //   $('.para3').toggle();
  // });
  // $('#btn1').on('mouseleave', function(){
  //   $('.para3').toggle();
  // });

  // Mousemove
  // $('#btn1').on('mousemove', function(){
  //   $('.para3').toggle();
  // });

  $(document).on('mousemove', function(eventObject){
    // console.log('Coords: Y: '+eventObject.clientY+"X:"+eventObject.clientX);
    $('#coords').html('Coords: Y: '+eventObject.clientY+"X:"+eventObject.clientX);
  });

  // Mouseup, mousedown
  $('#btn1').on('mousedown', function(){
    $('.para3').toggle();
  });
  $('#btn1').on('mouseup', function(){
    $('.para3').toggle();
  });

  // Optional parameter for click event:
  $('#btn1').click(function(eventObject){
    console.log(eventObject); //Every event object comes with a lot of data inside it, which can be accessed
    console.log(eventObject.currentTarget.id);
    console.log(eventObject.currentTarget.innerHTML);
    console.log(eventObject.currentTarget.outerHTML);
    console.log(eventObject.currentTarget.className);
  });

                                          //Form Events

  // Focus event:
  $('input').focus(function(){
    // console.log('Focus');
    // $('input#name').css('background', '#ccc');  //Not optimal
    $(this).css('background', '#ccc');
  });
  // Use blur event to focus out:
  $('input').blur(function(){
    $(this).css('background', 'white');
  });

  // Keyup and select
  $('input').keyup(function(eventObject){
    console.log('keyup');
    // console.log(eventObject);
    console.log(eventObject.target.value);
  });

  $('#gender').change(function(eventObject){
    console.log('Changed');
    console.log(eventObject.target.value);
  });

  $('#form').submit(function(eventObject){
    eventObject.preventDefault();
    var name = $('#name').val();
    console.log(name);
    console.log('Submitted');
  });

                                          //DOM Manipulation
  // $('.para4').css('color', 'orange');
  // Multiple CSS properties: By wrapping it in an object
  $('.para4').css({color:'red', background:'#ccc'});
  $('.para5').addClass('myClass');        //Adds and changes styling by referring to a 'class'
  $('.para5').removeClass('myClass');
  $('#btn4').click(function(){
    $('.para5').toggleClass('myClass');
  });

  // Manipulating DOM
  $('#myDiv').text('Hello World');
  // HTML itself can be added:
  $('#myDiv').html('<h3>Hello World</h3>');
  console.log($('#myDiv').text());
  $('.unordered').append('<li>Append List Item</li>');
  $('.unordered').prepend('<li>Prepend List Item</li>');

  $('.para4').appendTo('.para5');
  $('.para4').prependTo('.para5');

  // // Putting tags before and after another
  // $('.unordered').before('<h4> Hello </h4');
  $('.unordered').after('<h4> Bye </h4');
  // Taking all the inner elements out
  // $('.unordered').empty();
  // Removing the slector entirely
  // $('.unordered').detach();

  // Working with attributes:
  $('a').attr('target','_blank');
  // Retrieving attributes
  console.log($('a').attr('href'));
  $('a').removeAttr('target');

  // Wrapping elements in other elements
  // Wrapping the SELECTOR within the specified tag:
  $('p').wrap('<h3>');
  // Wrapping ALL SELECTOS within the specified tag:
  $('p').wrapAll('<h6>');

  // Input to add an item to a list
  $('#newItem').keyup(function(eventObject){
    var keyCode = eventObject.which;
    if(keyCode == 13){
      eventObject.preventDefault();
      if($('#newItem').val()=='')
        return;
      $('.unordered').append('<li>' + eventObject.target.value + '</li>');
      $('#newItem').val('');    //Reset field
    }
  });

  // Arrays
  var myArr = ['Brad', 'Kelly', 'Nate', 'Jose'];
  $.each(myArr, function(i, val){
    // console.log(val);
    $('#users').append('<li>' + val + '</li>');
  });

  // Turning the list items into an array:
  var newArray = $('.unordered li').toArray();
  console.log(newArray);
  $.each(newArray, function(i, val){
    console.log(val.innerHTML);
  });
});
