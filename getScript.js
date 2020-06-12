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
    data.forEach(models => {
      const model = document.createElement('div')
      model.setAttribute('class', 'models')

      const name = document.createElement('name')
      name.textContent = models.name

      const size = document.createElement('size')
      size.textContent = models.size

      const typ = document.createElement('typ')
      typ.textContent = models.type

      const col = document.createElement('col')
      col.textContent = models.collection

      const price = document.createElement('price')
      price.textContent = models.price

      models_container.appendChild(model)
      model.appendChild(name)
      model.appendChild(size)
      model.appendChild(typ)
      model.appendChild(col)
      model.appendChild(price)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()