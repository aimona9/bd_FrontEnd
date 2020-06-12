async function someRequest()
{
    var params = new FormData();
    params.append('pick_up_date', '2020-06-18T16:46:57.389Z');
    params.append('return_date', '2020-06-20T16:46:57.389Z');
    params.append('pick_up_location_id', 0);
    params.append('costumes', [0,1]); 
    
    const response = await fetch('https://costume-rental.herokuapp.com/new_reservation',
    //const response = await fetch('https://costume-rental.herokuapp.com/test_new_resrvation', 
    {
        method: 'POST',
        mode:'cors',
        headers: 
        {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
        const data = await response.json()
        console.log(data)
        alert("Button was clicked and postScript.js was run")
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
