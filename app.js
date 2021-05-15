const input = document.getElementById('text')
const ul = document.getElementById('list')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  //   console.log(input.value)
  createLi(input.value)
  input.value = ''
})

function createLi(value) {
  const li = document.createElement('li')
  li.setAttribute('id', 'li-item')
  li.innerText = value

  li.style.cursor = 'pointer'

  ul.appendChild(li)
  let clickEvent = 0
  li.addEventListener('click', (e) => {
    if (clickEvent === 1) {
      e.target.remove()
    } else {
      clickEvent++
      e.target.style.textDecoration = 'line-through'
      e.target.style.color = 'grey'
    }
  })
}
