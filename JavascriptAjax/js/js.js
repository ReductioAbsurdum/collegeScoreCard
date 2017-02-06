var key = "";
var ajaxRequest = new XMLHttpRequest();

ajaxRequest.open('GET', 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=' + key + '&school.name=florida%20state%20university')
ajaxRequest.onreadystatechange = function(){
  if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
    console.log(JSON.parse(ajaxRequest.responseText));
    //console.log(ajaxRequest);
  }
};

ajaxRequest.send();
