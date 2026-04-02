import startGay, { random } from '../index.js'
const desc = 'What number is missing in the progression?'
const progGame = () => {
  let step = Math.floor(Math.random() * 10)
  let prog = []
  let num = Math.floor(Math.random() * 10)
  while (prog.length < 6) {
    prog.push(num)
    num += step
  }
  let missingIndex = random(prog.length)
  let correctAnswer = prog[missingIndex]
  prog[missingIndex] = '..'
  let question = ''
  for (let i = 0; i < prog.length; i++) {
    question += prog[i] + ' '
  }
  const out = [question, correctAnswer]
  return out
}
export default () => startGay(desc, progGame)
