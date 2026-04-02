import startGay, { random } from '../index.js'
const gcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)
  return !b ? a : gcd(b, a % b)
}
const desc = 'Find the greatest common divisor of given numbers.'
const gcdGame = () => {
  let s = random(100)
  let d = random(100)
  let question = `${s} ${d}`
  let correctAnswer = gcd(s, d)
  const out = [question, correctAnswer]
  return out
}
export default () => startGay(desc, gcdGame)
