//Array Methods Code Example

let number = [1, 2, 3, 4, 5];

// Array length
console.log(number.length); // Output: 5

// Array indexing
console.log(number[2]); // Output: 3

// Array iteration using for loop
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// Array iteration using forEach method
number.forEach(function(num) {
  console.log(num);
});

// Array push method
number.push(6);
console.log(number); // Output: [1, 2, 3, 4, 5, 6]

// Array pop method
number.pop();
console.log(number); // Output: [1, 2, 3, 4, 5]

// Array splice method
number.splice(2, 1);
console.log(number); // Output: [1, 2, 4, 5]