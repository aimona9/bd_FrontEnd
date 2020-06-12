async function someRequest()
{

    var data = new FormData();
    data.append('pick_up_date', '2020-06-18T16:46:57.389Z');
    data.append('return_date', '2020-06-20T16:46:57.389Z');
    data.append('pick_up_location_id', 0);
    data.append('costumes', [0,1]); 
  
    try
    {
        const response = await fetch('https://costume-rental.herokuapp.com/test_new_resrvation', 
        {
            method: 'POST',
            mode:'cors',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const data = await response.json()
        console.log(data)
    }
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
