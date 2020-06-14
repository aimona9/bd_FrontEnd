async function someRequest()
{
    alert("click function was called");
    var datePickUp = document.getElementById(date_pickUp);

    var dat = JSON.stringify({"pick_up_date": "2007-06-14T18:08:03.314Z","return_date":"2008-06-24T18:08:03.315Z","pick_up_location_id":1
  , "costumes": [1,3,8]});
    
    //var Base64 = req
    //var Base64 = require('js-base64').Base64;
    var username = "test";
    var password = "admin1";
    //let base64 = require('base-64');
    var request = new XMLHttpRequest();      
    var url = 'https://costume-rental.herokuapp.com/new_reservation';    
    request.open('POST', url, false, username, password);
    request.withCredentials=true;
    //Send the proper header information along with the request
    //request.setRequestHeader('Authorization', 'Basic ' + Base64.encode(username + ":" + password));
    //request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() 
    {
      //Call a function when the state changes.
      console.log("Checking if state is ready");
      if(request.readyState == 4 && request.status == 200) 
      {
        console.log(dat);
        alert(request.responseText);
      }
      else 
      {
        alert('Error');
      }
    }
    request.send(dat);
    document.write(dat);
} 
