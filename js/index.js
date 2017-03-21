$(function() {

  //some formatting for the nextEvent json data
  $.addTemplateFormatter({
    address: (value) =>  value.join("<br>"),
    bulletList: (value) => {
      return Object.keys(value).map((key) => {
        return (`<li>${key}: ${value[key]}</li>`)
      }).join('')
    },
    listWithLinks: (value) => {
      return value.map((speakerArray) => {
        let formatted = ''
        for (let x = 0; x < speakerArray.length; x++) {
          if (typeof speakerArray[x] === 'object') {
            const key = Object.keys(speakerArray[x])[0]
            formatted += `<a href="${speakerArray[x][key]}">${key}</a><br>`
          } else {
            formatted += `${speakerArray[x]}<br>`
          }
        }
        return `<p>${formatted}</p>`
      }).join('')
    }
  });


  const fileLocation = '../nextEvent/nextEvent.json'
  //call to JSON file location
  $.get(fileLocation, (response) => {
    data = response
      //console.log('DATA', data)
      $('#nextEvent').loadTemplate($("#template"), data)
  }, "json")



});
