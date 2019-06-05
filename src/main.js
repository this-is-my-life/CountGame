/**

*/

let total = 1
let expression = '1'
let correct = 0
let add = 0
let life = 3

ques()

setInterval(() => {
  document.getElementsByClassName('life')[0].innerHTML = 'Lifes left: ' + life
}, 1)

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName === 'Enter') {
    if (document.getElementById('input').value === correct.toString()) {
      total = eval(expression)
      document.getElementById('input').style.backgroundColor = '#9ae76d'
      document.getElementById('input').value = ''
      setTimeout(() => {
        document.getElementById('input').style.backgroundColor = '#ffffff'
      }, 1000)
      ques()
    } else {
      life--
      document.getElementById('input').style.backgroundColor = '#df6363'
      document.getElementById('input').value = ''
      setTimeout(() => {
        document.getElementById('input').style.backgroundColor = '#ffffff'
        if (life === 0) {
          alert('Game Over!\nYou\'re Score is ' + total + '!')
          document.location.href = document.location.href
        }
      }, 1000)
    }
  } else if (keyName === 'Control') {
    alert('Do Not Use Cheat!')
    document.getElementById('input').value = ''
  }
}, false)

function ques () {
  let previousExpression = expression
  let nextExpression = ''
  let persent = Math.floor(Math.random() * 100) + 1
  if (persent < 60) {
    add = Math.floor(Math.random() * 10) + 1
    correct = total + add
    nextExpression = '+' + add.toString()
    expression += '+' + add.toString()
  } else if (persent < 95) {
    add = Math.floor(Math.random() * 10) + 1
    correct = total - add
    nextExpression = '-' + add.toString()
    expression += '-' + add.toString()
  } else {
    correct = total * 2
    nextExpression = '*2'
    expression += '*2'
  }
  document.getElementsByClassName('previousExpression')[0].innerHTML = previousExpression
  document.getElementsByClassName('expression')[0].innerHTML = nextExpression
}
