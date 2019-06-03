const clear = require('clear-console')
const rl = require('readline')

const input = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

let total = 1
let expression = '1'
let correct = 0
let add = 0

ques()

function ques () {
  let persent = Math.floor(Math.random() * 100) + 1
  if (persent < 60) {
    add = Math.floor(Math.random() * 10) + 1
    correct = total + add
    expression += '+' + add.toString()
  } else if (persent < 95) {
    add = Math.floor(Math.random() * 10) + 1
    correct = total - add
    expression += '-' + add.toString()
  } else {
    correct = total * 2
    expression += '*2'
  }

  input.setPrompt(expression + '= ')
  input.prompt()
}

input.on('line', (res) => {
  if (res === correct.toString()) {
    console.log('\n\nCorrect!')
    total = eval(expression)
    setTimeout(() => {
      clear()
      ques()
    }, 1000)
  } else {
    console.log('\n\nNo! It is ' + correct + '! | Score: ' + total)
    input.close()
  }
})