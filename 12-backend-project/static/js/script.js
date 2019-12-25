// Making an AJAX request using jQuery
$(document).ready(function(){
  $('.delete-article').on('click', function(event){
    // To get the ID value of the article, attach a variable to the target event attribute
    $target = $(event.target);
    console.log($target.attr('data-id'));
    var id = $target.attr('data-id');

    $.ajax({
      type:'DELETE',
      url: '/articles/'+id,
      success: function(response){
        alert('Deleting Article');
        window.location.href='/';
      },
      error: function(error){
        console.log(error);
      }
    });
  });
});
