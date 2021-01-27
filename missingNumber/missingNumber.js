let array = []

for (var i = 0; i <= 100; i++) {
	array[i] = i
}

let index = Math.floor(Math.random() * array.length);
array[index] = undefined;

let missingNumber = findMissingNumber(array);

function findMissingNumber(array) {
	const n = array.length - 1
	let sum = 0

	const expectedSum = (n * (n + 1))/ 2

	for (var i = 0; i < array.length; i++) {
		if (typeof(array[i]) === 'number') sum += array[i]
	}	

	return expectedSum - sum       
}