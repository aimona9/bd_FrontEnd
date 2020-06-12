function postData(domQuery)
{
    var request = new XMLHttpRequest()
    request.open('POST', 'https://costume-rental.herokuapp.com/new_reservation', true)

    //Send the proper header information along with the request
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = null
    request.onreadystatechange = function() 
    { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            // Request finished. Do processing here.
            var out = {};
            s_data = $(dom_query).serializeArray();
            //transform into simple data/value object
            for(var i = 0; i<s_data.length; i++)
            {
                var record = s_data[i];
                out[record.name] = record.value;
            }
    
        data = JSON.stringify(out); 
        }
        else
        {
            alert("Server not responding. Please try again a little later!")
        }
    }

console.log(data);
request.send(data);
}