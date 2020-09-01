function parseInt(string) {
  if (string === "zero") {
    return 0
  }
  if (string === "one million") {
    return 1000000
  }

  const writtenToNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    fourty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  }

  // const parseSingleNum = (num) => {
  //   if (num.includes('-')) {
  //     const splitted = num.split('-');
  //     return writtenToNumbers[splitted[0]] + writtenToNumbers[splitted[1]];
  //   }
  //   return writtenToNumbers[num];
  // };

  //   return string
  //     .split(' ')
  //     .filter((elem) => elem !== 'and')
  //     .reduce((prev, curr, i) => {
  //       if (i === 1) {
  //         prev = parseSingleNum(prev); //convert prev to number in first loop iteration
  //       }

  //       if(curr === 'hundred') {
  //           return prev > 100 ? prev + 100 : prev*100;
  //       }

  //       if(curr === 'thousand') {
  //           return prev*1000;
  //       }

  //       return prev + parseSingleNum(curr);
  //     });
}

function solve(eq) {
  console.log(eq.split(/[0-9]*/));
  return eq.split(/[0-9]*/).reverse().join("")
}

solve("a+b-c/d*30")
solve("a*b/c+50")

console.log(solve("100*b/y"))
