var name = prompt('Hello there! What is your name?')

//switch statment for error correction


//question one and answer alerts
var questionOne = prompt('Did I grow up in Tacoma, WA?')
if (questionOne === 'yes') {
	alert(name + ' That is correct!');
}
else {
	alert('Nope ' + name + ', wrong!');
}

//question two and answer alerts
var questionTwo = prompt('Is my name Brian?')
if (questionTwo === 'no') {
	alert('Good job ' + name +'! My name is Ryan.');
}
else {
	alert('Sorry, '+ name + ' wrong answer...maybe next time!');
}

//question three and answer alerts
var questionThree = prompt('Is my birthday in June?')
if (questionThree === 'no') {
	alert('Correct! My birthday is in May. Good work ' + name);
}
else {
	alert('Nope, sorry ' + name + ' it is in May, better luck next time!');
}

//question four a number answer and alerts
var questionFour = prompt('How old am I?')
if (questionFour === '31') {
	alert('Good guess ' + name + '! You must know me or something!');
}
else {
	alert('Ok, that was a tough one... ' + name + ' you would have to know me to get that one right!');
}

//question five and alerts
var questionFive = prompt('What is...The Answer to the Ultimate Question of Life, the Universe, and Everything?');
if (questionFive === '42')  {
	alert('Good job! Had to give you an easy one after that last tough one though...');
}
else {
	alert("Ok...I don't know what to say " + name + " ...maybe we shouldn't be friends anymore");
}


//true false map...probably a better more elegant way to do this...
//zero correct
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'yes' && questionFour !== '31' && questionFive !== '42') {
	alert('Wow... Zero out of Five correct...try much harder next time...');
}

//20 percent correct answers
if (questionOne === 'yes' && questionTwo === 'yes' && questionThree === 'yes' && questionFour !== '31' && questionFive !== '42') {
	alert('... One out of Five correct...');
}
if (questionOne === 'no' && questionTwo === 'no' && questionThree === 'yes' && questionFour !== '31' && questionFive !== '42') {
	alert('... One out of Five correct...');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'no' && questionFour !== '31' && questionFive !== '42') {
	alert('... One out of Five correct...');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'yes' && questionFour === '31' && questionFive !== '42') {
	alert('... One out of Five correct...');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'yes' && questionFour !== '31' && questionFive === '42') {
	alert('... One out of Five correct...');
}

//40 percent correct answers
if (questionOne === 'yes' && questionTwo === 'no' && questionThree === 'yes' && questionFour !== '31' && questionFive !== '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'no' && questionThree === 'no' && questionFour !== '31' && questionFive !== '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'no' && questionFour === '31' && questionFive !== '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'yes' && questionFour === '31' && questionFive === '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'yes' && questionTwo === 'yes' && questionThree === 'yes' && questionFour !== '31' && questionFive === '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'yes' && questionTwo === 'yes' && questionThree === 'yes' && questionFour === '31' && questionFive !== '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'yes' && questionThree === 'no' && questionFour === '31' && questionFive === '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'no' && questionThree === 'yes' && questionFour !== '31' && questionFive === '42') {
	alert('Two out of Five correct...getting better!');
}
if (questionOne === 'no' && questionTwo === 'no' && questionThree === 'yes' && questionFour === '31' && questionFive !== '42') {
	alert('Two out of Five correct...getting better!');
}
//60 percent correct answers





//80 percent correct answers
if (questionOne === 'no' && questionTwo === 'no' && questionThree === 'no' && questionFour === '31' && questionFive === '42') {
	alert('Not too bad! 4 out of 5 correct! You almost got them all!');
}
if (questionOne === 'yes' && questionTwo === 'yes' && questionThree === 'no' && questionFour === '31' && questionFive === '42') {
	alert('Not too bad! 4 out of 5 correct! You almost got them all!');
}
if (questionOne === 'yes' && questionTwo === 'no' && questionThree === 'yes' && questionFour === '31' && questionFive === '42') {
	alert('Not too bad! 4 out of 5 correct! You almost got them all!');
}
if (questionOne === 'yes' && questionTwo === 'no' && questionThree === 'no' && questionFour !== '31' && questionFive === '42') {
	alert('Not too bad! 4 out of 5 correct! You almost got them all!');
}
if (questionOne === 'yes' && questionTwo === 'no' && questionThree === 'no' && questionFour === '31' && questionFive !== '42') {
	alert('Not too bad! 4 out of 5 correct! You almost got them all!');
}
//100 percent right answer
if (questionOne === 'yes' && questionTwo === 'no' && questionThree === 'no' && questionFour === '31' && questionFive === '42') {
	alert('Your good at this!  You got 5 out of the 5 answers correct!  Awesome!');
}