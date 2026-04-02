import startGay, { random } from '../index.js'
const desc = 'What is the result of the expression?'
// const operands = ["+", "-", "*"];
const calcGame = () => {
  const operation = random(3)
  const a = random(100)
  const b = random(100)
  let correctAnswer
  let question
  switch (operation) {
    case 0:
      correctAnswer = a + b
      question = `${a} + ${b}`
      break
    case 1:
      correctAnswer = a - b
      question = `${a} - ${b}`
      break
    case 2:
      correctAnswer = a * b
      question = `${a} * ${b}`
  }
  return [question, correctAnswer]
}
export default () => startGay(desc, calcGame)
