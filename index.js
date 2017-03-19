$(function() {

  $.addTemplateFormatter({
    address: (value) => value.join("<br>"),
    schedule: (value) => {
      for (let time in value) {
        if (this.hasOwnProperty(time)) {
          return (value[time])
        }
      }
    }

  });

  //call to JSON file location

    const fileLocation = 'nextEvent.json'
  $.get(fileLocation, (response) => {
    data = response
        console.log('DATA', data)
      $('#nextEvent').loadTemplate($("#template"), data)
  }, "json")


   // $.getJSON(fileLocation, function(data) {



      // success: function() {console.log('yay')},
      // complete: function(){ console.log('complete')},
      // error: function() {console.log('error')}





});
