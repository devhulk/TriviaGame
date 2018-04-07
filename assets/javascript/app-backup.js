$(document).ready(function(){
  $('input[type="checkbox"]').on('change', function() {
      $(`input[name=${this.name}]`).not(this).prop('checked', false);
  });

 $('#trivia-form').submit(function(event){
   console.log('form has been submitted')
   $('.checkbox:checkbox:checked').each(function() {
     var val = (this.checked ? $(this).val() : "")
     console.log(val)
   })
   event.preventDefault()
 }) 

});
