const app = document.getElementById('test')

//const logo = document.createElement('img')
//logo.src = 'logo.png'

const models_container = document.createElement('div')
models_container.setAttribute('class', 'container')

//app.appendChild(logo)
app.appendChild(models_container)

var request = new XMLHttpRequest()
request.open('GET', 'https://costume-rental.herokuapp.com/models', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(model => {
      const mod = document.createElement('div')
      mod.setAttribute('class', 'model')

      const name = document.createElement('name')
      name.textContent = model.name

      const size = document.createElement('size')
      size.textContent = model.size

      const type_ = document.createElement('type_')
      type_.textContent = model.type_

      const collection = document.createElement('collection')
      collection.textContent = model.collection

      const price = document.createElement('price')
      price.textContent = model.price

      models_container.appendChild(mod)
      mod.appendChild(name)
      mod.appendChild(size)
      mod.appendChild(type_)
      mod.appendChild(collection)
      mod.appendChild(price)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()