const app = document.getElementById('post_test')

//var data = new FormData(this.response)


var out = {};
var s_data = $(app).serializeArray();

for(var i = 0; i<s_data.length; i++)
    {
        var record = s_data[i];
        out[record.name] = record.value;
    }
    return out;


var data = JSON.stringify(out);
var request = new XMLHttpRequest()
request.open('POST', 'https://costume-rental.herokuapp.com/new_reservation', true)

//Send the proper header information along with the request
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

request.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
    }
}
console.log(data);
request.send(data);
