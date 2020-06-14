async function someRequest()
{
    alert("click function was called");
    var params = new FormData();
    params.append("pick_up_date", "2007-06-14T18:08:03.314Z");
    params.append("return_date", "2008-06-24T18:08:03.315Z");
    params.append("pick_up_location_id",1);
    params.append("costumes", [1]); 

    var dat = JSON.stringify(params);
    
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
}
  

//Send the proper header information along with the request
//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//request.onreadystatechange = function()
//request.onload = function()  
//{ // Call a function when the state changes.
//    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
  //  {
       
            
            // Request finished. Do processing here.
            //var out = {};
            //s_data = $(dom_query).serializeArray();
            //transform into simple data/value object
            //for(var i = 0; i<s_data.length; i++)
            //{
            //    var record = s_data[i];
            //    out[record.name] = record.value;
            //}    
            //data = JSON.stringify(out); 
    //}
   // else
   // {
    //    alert("Server not responding. Please try again a little later!")
  //  }
//}

//console.log(data);
//request.send(data);
