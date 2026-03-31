#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  return !b ? a : gcd(b, a % b);
}

const game = () => {
	for(let i =0; i<3; i++){
		let s = Math.floor(Math.random() * 100)
		let d = Math.floor(Math.random() * 100)
		console.log(`Question: ${s} ${d}`)
		let answer = Number( readlineSync.question('Your answer: '))
		if (answer === gcd(s, d)) {console.log('Correct!')}
		else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(s, d)}'`)
			gameover()
			return 0
		}
	
	}


	congrats(name)
	
}
game()
