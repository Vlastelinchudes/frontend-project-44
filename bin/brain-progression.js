#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What number is missing in the progression?')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const isEqual = (a, b) => a === b;
const game = () => {
	for (let i = 0; i<3; i++) {
		let step = Math.floor(Math.random()*10)
		let prog = []
		let num = Math.floor(Math.random()*10)
		while (prog.length < 5) {
			prog.push(num)
			num += step
		}
		let missingIndex = Math.floor(Math.random()*prog.length)
		let missing = prog[missingIndex]
		prog[missingIndex] = '...'
		let questionStr = ''
		for (let i = 0; i < prog.length; i++) {
			questionStr += prog[i] + ' '
		}
		console.log (`Question: ${questionStr}`)
		let answer = Number(readlineSync.question('Your answer: '))
		if (isEqual(answer, missing)) {console.log('Correct!')}
		else {console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missing}'`)
		gameover(name)
		return 0
		}

	} 
	congrats(name)
}
game()
