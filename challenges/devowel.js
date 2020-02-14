console.log('devowel script has loaded');

// write this function!
function devowel(input) {
  return input.replace(/[aeiouAEIOU]/g, ""); // First solution i found on google, btw thought that y is a vowel, lol
}

// remove all vowels, lower and upper case!
console.assert(devowel('alphAbet') === 'lphbt', 'first');
console.assert(devowel('If it must bE') === 'f t mst b', 'second');
console.assert(devowel('Over and out') === 'vr nd t', 'third');
console.assert(devowel('Up!') === 'p!', 'fourth');
console.assert(devowel('AaEeIiOoUuAaEeIiOoUu') === '', 'fifth');


function devowelHandler() {
  // prompt the user for a noun, verb and adjective
  const userText = prompt('enter some text');

  // perform core logic
  const result = devowel(userText);

  // alert result for the user
  alert(result);

  // log action for the developer
  console.log('\n--- devowel ---');
  console.log('userText:', '(' + typeof userText + '),', userText);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('devowel-button').addEventListener('click', devowelHandler);
