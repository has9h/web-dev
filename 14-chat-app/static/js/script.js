$(function(){
  var socket = io.connect();
  var $messageForm = $('#messageForm');
  var $message = $('#message');
  var $chat = $('#chat');
  var $messageArea = $('#messageArea');
  var $userFormArea = $('#userFormArea');
  var $userForm = $('#userForm');
  var $users = $('#users');
  var $username = $('#username');

  $messageForm.submit(function(event){
    event.preventDefault();
    console.log('Submitted');
    socket.emit('send message', $message.val());
    $message.val('');
  });

  socket.on('new message', function(data){
    $chat.prepend('<div class="well"><strong>'+data.user+'</strong>: '+data.msg+'</div>');
  });

  $userForm.submit(function(event){
    event.preventDefault();
    console.log('Submitted');
    socket.emit('new user', $username.val(), function(data){
      if(data){
        $userFormArea.hide();
        $messageArea.show();
      }
    });
    $username.val('');
  });

  //Get users:
  socket.on('get users', function(data){
    var html = '';
    for(i = 0; i < data.length; i++){
      html += '<li class="list-group-item">'+data[i]+'</li>';
    }
    $users.html(html);
  });

  //Get sessions:
  socket.on('get sessions', function(data){
  })

  // Time functions
  document.getElementById('timer').innerHTML = 15+":"+00;
  $('#timerbtn').on('click', function(){
    $('#timerbtn').hide();
    $('#stopbtn').show();

    var currentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var minutes = timeArray[0];
    var seconds = checkSecond((timeArray[1] - 1));

    if(seconds==59){
      minutes = minutes - 1;
    }
    document.getElementById('timer').innerHTML = minutes+":"+s;
    setTimeout(startTimer, 1000);
  });

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }
});
