$(function(){
  var key = "ow4ey8A3VljTDJ9LSW8y4QAxG4V0FdP4J6TWiF6I";
  $.ajax({
    url: 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=' + key + '&school.name=florida%20state%20university',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){
    console.log(data);
  }).fail(function(err){
    console.log("didn't work, " + err);
  });
})
