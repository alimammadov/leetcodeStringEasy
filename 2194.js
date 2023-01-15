const s = 'A1:F1';

var cellsInRange = function (s) {
  const kArr = [];
  const lArr = [];
  const size = s.length;
  const sc = s.charAt();
  const sr = s.charAt(1);
  const ec = s.charAt(size - 2);
  const er = s.charAt(size - 1);

  //Create Alphabet
  // const alpha = Array.from(Array(26)).map((e, i) =>i + 65);

  // console.log(alpha)
  // const alphabet = alpha.map((x) => String.fromCharCode(x));

  // console.log(String.fromCharCode(sc))

  console.log(String.fromCharCode(65));
};

console.log(cellsInRange(s));
