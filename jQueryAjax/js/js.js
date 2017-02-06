$(function(){
  var key = "";
  $.ajax({
    url: 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=' + key + '&school.name=florida%20state%20university',
    method: 'GET',
    dataType: 'json'
  }).done(function(result){
    console.log(result.results);
    var data = result.results[0].school.name
    $('h1').text(data);
  }).fail(function(err){
    console.log(err);
    $('h1').text("ERROR: " + err.responseJSON.errors[0].message);
  });
})
