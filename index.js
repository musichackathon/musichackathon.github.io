$(function() {

  $.addTemplateFormatter({

  });

  //call to JSON file location
  (function() {
    const fileLocation = 'nextEvent.json'
    $.getJSON(fileLocation, function(data) {
console.log('DATA', data)

$('#nextEvent').loadTemplate($('#template'), data, {

      success: function() {console.log('yay')},
      complete: function(){ console.log('complete')},
      error: function() {console.log('error')}
    })
})
  })



});
