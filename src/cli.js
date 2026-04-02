import readlineSync from 'readline-sync'
export function greeting(name) {
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}
