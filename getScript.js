const app = document.getElementById('getData')

//const logo = document.createElement('img')
//logo.src = 'logo.png'

const container123 = document.createElement('div')
container.setAttribute('class', 'container')

//app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://costume-rental.herokuapp.com/models', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const costume = document.createElement('div')
      card.setAttribute('name', 'size, type, collection, price')

      const name = document.createElement('name')
      h1.textContent = costumes.name

      const size = document.createElement('si')
      p.textContent = `${costumes.size}...`

      const type = document.createElement('typ')
      p.textContent = `${costumes.type}...`

      const col = document.createElement('col')
      p.textContent = `${costumes.collection}...`

      const price = document.createElement('price')
      p.textContent = `${costumes.price}...`

      container.appendChild(costume)
      costume.appendChild(name)
      costume.appendChild(size)
      costume.appendChild(type)
      costume.appendChild(col)
      costume.appendChild(price)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()