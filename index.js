// const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// const size = arr.length;

// let count = 0;
// // const toFindDuplicates = arr => arr.filter((item, index) => ar.indexOf(item) !== index)
// // const duplicateElementa = tofindDuplicates(arr);
// // console.log(duplicateElements);
// const arry = [1, 2, 1, 3, 4, 3, 5];
// for (let i = 0; i < size; i++) {
//   for (let j = i + 1; j < size - 1; j++) {
//     if (arr[i] === arr[j]) {
//       count = count + 1;
//     }
//   }
// }
// console.log("Count is", count)

///////////////////////////////////////////////////////

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// const address = "1.1.1.1"

// const ip = address.split('.').join("[.]")
// console.log(ip)

///////////////////////////////////////////////////////

//771.Leetcode Jewels and stones

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// const jewels = 'aA';
// const stones = 'aAAbbbb';
// var numJewelsInStones = function (jewels, stones) {
//   const jewelsList = Array.from(jewels);
//   const stoneList = Array.from(stones);
//   let count = 0;
//   stoneList.forEach((s, index, arr) => {
//     if (jewelsList.includes(arr[index])) {
//       count++;
//     }
//   });
//   return count;
// };

// console.log(numJewelsInStones(jewels, stones));

///////////////////////////////////////////////////////
//Leetcode 2114
// const sentences = [
//   'alice and bob love leetcode',
//   'i think so too',
//   'this is great thanks very much',
// ];
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

// var mostWordsFound = function (sentences) {
//   const count = [];
//   sentences.forEach((element) => {
//     const x = element.split(' ');
//     count.push(x.length);
//   });
//   let total = Math.max(...count);
//   return total;
// };
// console.log(mostWordsFound(sentences));

///////////////////////////////////////////////////////
//LeetCode 1678

// Example 1:
// const command = 'G()(al)';
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// const command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// const command = '(al)G(al)()()G';
// Output: "alGalooG"

// var interpret = function (command) {
//   let x = command.replaceAll('()', 'o');
//   let y = x.split('(').join('');
//   let z = y.split(')').join('');
//  return z;
// };
// interpret(command);
// var interpret = function(command) {
//   return command.split("()").join("o").split("(al)").join("al");
// };

////////////////////////////////////////////
//LeetCode 1528

// const s = "codeleet",
// const indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// var restoreString = function(s, indices) {
//   const riqi = []
//     const newS = Array.from(s);
//         indices.forEach((e,index,arr)=>{
// riqi[arr[index]] = newS[index]

//         })
//         return riqi.toString().replaceAll(',', '')

// };

// console.log(restoreString(s,indices))

/////////////////////////////////////////////
//LeetCode 2194

// const s = 'K1:L2';
const s = 'A1:F1';
//Output: ["K1","K2","L1","L2"]

var cellsInRange = function (s) {
  const kArr = [];
  const lArr = [];
  const size = s.length;
  const sc = s.charAt();
  const sr = s.charAt(1);
  const ec = s.charAt(size - 2);
  const er = s.charAt(size - 1);

  //Create Alphabet
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);

  // console.log(alpha);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  // console.log(String.fromCharCode(sc));

  //   for (let i = sr; i <= er; i++) {
  //     kArr.push(sc + i);
  //     lArr.push(ec + i);

  //   }
  //  return [...kArr,lArr].flat();
};

// console.log(cellsInRange(s));
