function multiply(a,b) {
	return(a*b)
}

function multiply(a,b) {
	return a*b
}

function divide(a,b) {
	return a/b
}

function add(a,b) {
	return a+b
}

function substract(a,b) {
	return a-b
}

function square(a) {
	return a*a
}

function cube(a) {
	return a*a*a
}

function square_n_times(a,n) {
	return Math.pow(a,n)
}

console.log("I'm going use the calculator functions to multiply 6 and 6")
var x=multiply(6,6)
console.log(x)

console.log("I'm going use the calculator functions to cube 5")
var x=cube(5)
console.log(x)

console.log("I'm going use the calculator functions to square 2 10 times")
var x=square_n_times(2,10)
console.log(x)