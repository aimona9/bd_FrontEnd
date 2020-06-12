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

      const name = document.createElement('h1')
      h1.textContent = model.name

      const size = document.createElement('p')
      p.textContent = `${model.size}...`

      const type = document.createElement('p')
      p.textContent = `${model.type}...`

      const col = document.createElement('p')
      p.textContent = `${model.collection}...`

      const price = document.createElement('p')
      p.textContent = `${model.price}...`

      container.appendChild(model)
      models.appendChild(name)
      models.appendChild(size)
      models.appendChild(type)
      models.appendChild(col)
      models.appendChild(price)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()