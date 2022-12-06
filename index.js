  function hasTargetSum(array, target) {
    const seenNumbers = {};
    for (const number of array) {
      const complement = target - number;
      console.log(seenNumbers)
      if (seenNumbers[complement]) return true;
      seenNumbers[number] = true;
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
  O(1)
*/

/* 
  Add your pseudocode here
  -make an empty obj
  -iterate through array
  -assign the keys to the seen numbers, which are the values of the array
  -get differencer between target number and argument number and assign varible
  -compare key values and varible value.
  -if equal return true
*/

/*
  Add written explanation of your solution here
   takes an empty object and iterates through an array. as it iterates through we take the target parameter and the current number
  were passing through and subtract them. an easy way to understand the process is it takes the array and assigns the numbers to
  keys. then the complement (target - number being passed from array) check the keys, and if the value of complement and the keys are 
  equal, it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
