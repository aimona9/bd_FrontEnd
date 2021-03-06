const app = document.getElementById('test');
const models_container = document.createElement('div');
models_container.setAttribute('class', 'container');

//app.appendChild(logo)
app.appendChild(models_container);

var username = "test";
var password = "admin1";

var request = new XMLHttpRequest();      
var url = 'https://costume-rental.herokuapp.com/costumes';    
request.open('GET', url, true);
//request.withCredentials=true;

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(model => {
      const mod = document.createElement('div')
      mod.setAttribute('class', 'model')

      const name = document.createElement('h2')
      name.textContent = model.name

      const size = document.createElement('h4')
      size.textContent = model.size

      const type_ = document.createElement('h4')
      type_.textContent = model.type_

      const collection = document.createElement('h4')
      collection.textContent = model.collection

      const price = document.createElement('h4')
      price.textContent = model.price

      models_container.appendChild(mod)
      mod.appendChild(name)
      mod.appendChild(size)
      mod.appendChild(type_)
      mod.appendChild(collection)
      mod.appendChild(price)
    })
  } 
  else 
  {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}
request.send()