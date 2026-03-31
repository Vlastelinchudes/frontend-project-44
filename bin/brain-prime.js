#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const isPrime = (num) => {
 
  if (num <= 1) return 'no';
 
  if (num <= 3) return 'yes';

   if (num % 2 === 0 || num % 3 === 0) return 'no';

   for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return 'no';
  }

  return 'yes';
}
const game = () => {
	for (let i = 0; i<3; i++) {
		let number = Math.floor(Math.random()*100)
		console.log(`Question: ${number}`)
		let answer = readlineSync.question('Your answer: ')
		if (answer === isPrime(number)) {
			console.log('Correct!')
		} else {
			console.log (`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(number)}'`)
			gameover(name)
			return 0
		}
	}
	congrats(name)
}
game()
