$(document).ready(function(){
  $( "input[type='submit']" ).click(function( event ) {
    if($("input[type='radio']").is(':checked')) { 
      console.log($("input[type='radio']:checked").val()); 
    }
    event.preventDefault();
});

});
